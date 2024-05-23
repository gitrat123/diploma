import {$authHost, $host} from "./index";
import {jwtDecode} from "jwt-decode";

export const registration = async (formData) => {
    const {data} = await $host.post('api/user/registration', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token);
  }

export const login = async (email, password) => {
  const {data} = await $host.post('api/user/login', {email, password});
  localStorage.setItem('token', data.token);
  return jwtDecode(data.token);
}

export const check = async () => {
  const {data} = await $authHost.get('api/user/auth');
  localStorage.setItem('token', data.token);
  return jwtDecode(data.token);
}

