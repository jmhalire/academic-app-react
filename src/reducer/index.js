import { typesLogin, typesSidenav } from "../types/types";


export const authReducer = (state = {}, action ) => {
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

export const sidenavReducer = (state = {}, action ) => {
    switch (action.type) {
        case typesSidenav.show:
            return true;
        case typesSidenav.hidden:
            return false
        default:
            return state;
    }
}
