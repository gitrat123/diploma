import {$authHost, $host} from "./index";
import {jwtDecode} from "jwt-decode";

export const createTeacher = async (teacher) => {
    const {data} = await $authHost.post('api/teacher', teacher) 
    return data
}

export const fetchTeachers = async () => {
    const {data} = await $authHost.get('api/teacher') 
    return data
}