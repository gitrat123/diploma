import {$authHost, $host} from "./index";
import {jwtDecode} from "jwt-decode";

export const addToBasket = async (GroupId) => {
    const {data} = await $authHost.post('api/basket', GroupId)
    return data
}

export const getBasket = async () => {
    const {data} = await $authHost.get('api/basket')
    return data
}