import {MessageReducerState} from "./MessageModel";
import {Action} from "../CommonModel";
import * as actionTypes from './MessageActionType';

const initialState: MessageReducerState = {
    messages: [],
    newMessage: null,
};

const messageReducer = (state: MessageReducerState = initialState, action: Action): MessageReducerState => {
    switch (action.type) {
        case actionTypes.CREATE_NEW_MESSAGE:
            return {
                ...state,
                newMessage: {...action.payload},
                messages: [...state.messages, {...action.payload}]  // Thêm message mới vào mảng messages
            };
        case actionTypes.GET_ALL_MESSAGES:
            return {
                ...state,
                messages: action.payload.map((message: any) => ({...message}))  // Tạo bản copy mới cho mỗi message
            };
        default:
            return state;
    }
};

export default messageReducer;