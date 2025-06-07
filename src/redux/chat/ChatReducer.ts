import * as actionTypes from './ChatActionType';
import {ChatReducerState} from "./ChatModel";
import {Action} from "../CommonModel";

const initialState: ChatReducerState = {
    chats: [],
    createdGroup: null,
    createdChat: null,
    deletedChat: null,
    editedGroup: null,
    markedAsReadChat: null,
};

const chatReducer = (state: ChatReducerState = initialState, action: Action): ChatReducerState => {
    switch (action.type) {
        case actionTypes.CREATE_CHAT:
            return {
                ...state,
                createdChat: {...action.payload},
                chats: [...state.chats, {...action.payload}]  // Thêm chat mới vào mảng
            };
        case actionTypes.CREATE_GROUP:
            return {
                ...state,
                createdGroup: {...action.payload},
                chats: [...state.chats, {...action.payload}]  // Thêm group mới vào mảng
            };
        case actionTypes.GET_ALL_CHATS:
            return {
                ...state,
                chats: action.payload.map((chat: any) => ({...chat}))  // Tạo bản copy mới cho mỗi chat
            };
        case actionTypes.DELETE_CHAT:
            return {
                ...state,
                deletedChat: {...action.payload},
                chats: state.chats.filter(chat => chat.id !== action.payload.id)  // Xóa chat khỏi mảng
            };
        case actionTypes.ADD_MEMBER_TO_GROUP:
        case actionTypes.REMOVE_MEMBER_FROM_GROUP:
            return {
                ...state,
                editedGroup: {...action.payload},
                chats: state.chats.map(chat => 
                    chat.id === action.payload.id ? {...action.payload} : chat
                )
            };
        case actionTypes.MARK_CHAT_AS_READ:
            return {
                ...state,
                markedAsReadChat: {...action.payload},
                chats: state.chats.map(chat => 
                    chat.id === action.payload.id ? {...action.payload} : chat
                )
            };
        default:
            return state;
    }
};

export default chatReducer;