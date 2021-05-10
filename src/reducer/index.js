import { typesLogin } from "../types/types";


export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case typesLogin.login:
            return {
                ...action.payload,
                logged: true
            }
        case typesLogin.logout:
            return {
                ...action.payload,
                logged: false
            }
        default:
            return state;
    }
}

export const chatNotifyReducer = (state = [], action) => {
    switch (action.type) {
        case 'add':
            return [action.payload, ...state]
        case 'remove':
            let lenght = state.length - 1;
            return state.filter((item, index) => index < lenght)
        default:
            return state;
    }
}


export const listMessagesReducer = (state = [], action) => {
    switch (action.type) {
        case 'add':
            return [...state, ...action.payload]
        default:
            return state;
    }
}

export const listUserRoomReducer = (state = [], action) => {
    switch (action.type) {
        case 'add':
            const exist = state.filter((item) => item.codeUser === action.payload.codeUser)
            if (exist.length === 0) {
                return [...state, action.payload]
            } else {
                return state;
            }

        case 'remove':
            return state.filter((item, index) => item.codeUser !== action.payload.codeUser)
        default:
            return state;
    }
}
