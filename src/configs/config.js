// CONFIGS
export const url = 'http://localhost:3000';

export const headersLogin = () => {
    return new Headers({
        "Content-Type": "application/json",
        "Accept": "application/json"
    })
}

export const headers = () => {
    let user = JSON.parse(sessionStorage.getItem("user"));
    return new Headers({
        "Content-Type": "application/json",
        "Accept": "application/json",
        "authorization": `Bearer ${user.token}`
    })
}