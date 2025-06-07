import {Dispatch} from "redux";
import {AUTHORIZATION_PREFIX} from "../Constants";
import {TOKEN} from "../../config/Config";
import {BASE_API_URL} from "../../config/Config";

export const FETCH_ONLINE_STATUS_SUCCESS = "FETCH_ONLINE_STATUS_SUCCESS";

export const fetchOnlineStatus = () => async (dispatch: Dispatch): Promise<void> => {
    const token = localStorage.getItem(TOKEN);
    if (!token) return;

    try {
        const res: Response = await fetch(`${BASE_API_URL}/api/users/online-status`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `${AUTHORIZATION_PREFIX}${token}`
            }
        });

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const resData = await res.json();
        dispatch({
            type: FETCH_ONLINE_STATUS_SUCCESS,
            payload: resData
        });
    } catch (error: any) {
        console.error('Fetching online status failed: ', error);
    }
};
