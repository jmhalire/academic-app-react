import { typesLogin, typesSidenav } from "../types/types";


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

export const sidenavReducer = (state = {}, action) => {
    switch (action.type) {
        case typesSidenav.show:
            return true;
        case typesSidenav.hidden:
            return false
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
