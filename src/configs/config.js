// CONFIGS
//export const API = 'http://[::1]:8080';
//export const API = 'http://192.168.43.7:8080';
export const API = 'https://api-academic-nestjs.herokuapp.com';


export const headersLogin = () => {
    return new Headers({
        "Content-Type": "application/json",
        "Accept": "application/json"
    })
}

export const headers = () => {
    const {token} = JSON.parse(sessionStorage.getItem("user"));
    return new Headers({
        "Content-Type": "application/json",
        "Accept": "application/json",
        "authorization": `Bearer ${token}`
    })
}