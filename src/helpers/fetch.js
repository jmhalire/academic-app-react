import { headers, headersLogin, API } from "../configs/config"

const fetchAuth = async (path, body) => {
    const res = await fetch(`${API}${path}`, {
        method: "POST",
        headers: headersLogin(),
        body: JSON.stringify(body)
    })
    return await res.json()
}

const fetchGet = async (path) => {
    const res = await fetch(`${API}${path}`, {
        method: "GET",
        headers: headers()
    })
    return await res.json()

}
const fetchPost = async (path, body) => {
    const res = await fetch(`${API}${path}`, {
        method: "POST",
        headers: headers(),
        body: JSON.stringify(body)
    })
    return await res.json()
}


export {
    fetchAuth,
    fetchGet,
    fetchPost
}