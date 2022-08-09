import axios from 'axios';
import { API_URL, KEY_LOCAL_STORAGE_ACCESS_TOKEN } from '../constant';
import { AxiosCommonResponse, CreateUserDto, User } from '../interfaces';

export async function register(createUserDto: CreateUserDto) {
  const response = await axios.post<AxiosCommonResponse>(
    `${API_URL}/users/register`,
    createUserDto
  );
  return response;
}

export async function login<Type extends 'email' | 'phone' = 'email'>(
  payload: Pick<User, Type> & { password: string }
) {
  const response = axios.post<AxiosCommonResponse & { accessToken: string }>(
    `${API_URL}/auth/login`,
    payload
  );
  return response;
}

export async function getProfile() {
  const accessToken = localStorage.getItem(KEY_LOCAL_STORAGE_ACCESS_TOKEN);
  const headers = {
    Authorization: 'Bearer ' + accessToken,
  };

  const response = await axios.get<AxiosCommonResponse & { data: User }>(
    `${API_URL}/users/profile`,
    {
      headers,
    }
  );
  return response;
}
