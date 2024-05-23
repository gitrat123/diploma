import {$authHost, $host} from "./index"
import {jwtDecode} from "jwt-decode"

export const createType = async (type) => {
    const {data} = await $authHost.post('api/groupType', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/groupType')
    return data
}

export const createAddress = async (address) => {
    const {data} = await $authHost.post('api/groupAddress', address)
    return data
}

export const fetchAddresses = async () => {
    const {data} = await $host.get('api/groupAddress')
    return data
}

export const createGroup = async (group) => {
    const {data} = await $authHost.post('api/group', group) 
    return data
}

export const fetchGroups = async (GroupTypeId, GroupAddressId, page, limit = 5) => {
    const {data} = await $host.get('api/group',{params: {
        GroupTypeId, GroupAddressId, page, limit
    }})
    return data
}

export const fetchOneGroup = async (id) => {
    const {data} = await $host.get('api/group/' + id)
    return data
}
