import {$authHost, $host} from "./index";
import {jwtDecode} from "jwt-decode";

export const fetchUserChildren = async (UserId, config = {}) => {
    const response = await $host.get(`api/child/${UserId}`, config);
    return response.data;
  }
  
  export const addChildToUser = async (UserId, child) => {
    const {data} = await $authHost.post(`api/child/${UserId}`, child);
    return data;
  }
  