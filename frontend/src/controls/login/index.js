import axios from "../axios";

export async function login(data) {
    try {
        const response = await axios.post("/auth/jwt/create", data);
        localStorage.setItem("access", response.data.access);
        localStorage.setItem("refresh", response.data.refresh);
        return true;
    } catch (error) {
        return error;
    }
}

export async function verifyToken() {
    try {
        const response = await axios.post("/auth/jwt/verify", {
            token: localStorage.getItem("access")
        });
        return response.data.code === "token_not_valid" ? false : true;
    } catch (error) {
        return false;
    }
}

export async function refreshToken() {
    try {
        const response = await axios.post("/auth/jwt/refresh", {
            refresh: localStorage.getItem("refresh")
        });
        localStorage.setItem("access", response.data.access);
        return true;
    } catch (error) {
        return false;
    }
}

export async function isLogged() {
    const token = localStorage.getItem('access');
    if (!token) {
        return false;
    }

    const isTokenValid = await verifyToken(token);
    if (!isTokenValid) {
        const newToken = await refreshToken();
        if (!newToken) {
            return false;
        }
    }
    return true;
}

export function logout() {
    localStorage.clear();
}