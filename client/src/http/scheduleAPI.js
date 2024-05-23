import {$authHost, $host} from "./index";
import {jwtDecode} from "jwt-decode";

export const createSchedule = async (schedule) => {
    const {data} = await $authHost.post('api/schedule', schedule) 
    return data
}

export const fetchSchedules = async () => {
    const {data} = await $authHost.get('api/schedule') 
    return data
}