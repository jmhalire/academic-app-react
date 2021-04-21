// CONFIGS
export const url = 'http://localhost:8080';

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