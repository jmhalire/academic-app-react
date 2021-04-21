import { typesLogin } from "../types/typesLogin";


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
