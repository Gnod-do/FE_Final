import {FETCH_ONLINE_STATUS_SUCCESS} from "./UserStatusAction";

const initialState = {
    onlineStatus: [] // danh sách userId và is_online
};

const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case FETCH_ONLINE_STATUS_SUCCESS:
            return {...state, onlineStatus: action.payload};
        default:
            return state;
    }
};

export default userReducer