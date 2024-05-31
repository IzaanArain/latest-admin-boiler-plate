import { localStorageConstant } from "./app-constants"

export const GetTokenFromLocalStorage = () => {
    const token = JSON.parse(localStorage.getItem(localStorageConstant.tokenKey))
    return token
}

export const GetUserFromLocalStorage = () => {
    const user = JSON.parse(localStorage.getItem(localStorageConstant.userKey))
    return user
}

export const SetTokenLocalStorage = (token) => {
    localStorage.setItem(localStorageConstant.tokenKey, JSON.stringify(token))
}

export const SetUserLocalStorage = (user) => {
    localStorage.setItem(localStorageConstant.userKey, JSON.stringify(user))
}

export const EmptyLocalStorage = () => {
    localStorage.removeItem(localStorageConstant.tokenKey)
    localStorage.removeItem(localStorageConstant.userKey)
}

export const getFilteredData = (data, searchText) => {
    return !searchText ? data : data?.filter(item =>
        Object?.values(item)?.some(value => value?.toString()?.toLowerCase().includes(searchText?.toLowerCase()))
    )
}