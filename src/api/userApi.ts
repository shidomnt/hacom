import axios from 'axios';
import { API_URL, getProtectedApiRouteOptions } from '../constant';
import { AxiosCommonResponse, CreateUserDto, User } from '../interfaces';

const url = `${API_URL}/users`;

export async function register(createUserDto: CreateUserDto) {
  const response = await axios.post<AxiosCommonResponse>(
    url + '/register',
    createUserDto
  );
  return response;
}

export async function login<Type extends 'email' | 'phone' = 'email'>(
  payload: Pick<User, Type> & { password: string }
) {
  const response = await axios.post<AxiosCommonResponse & { accessToken: string }>(
    `${API_URL}/auth/login`,
    payload
  );
  return response;
}

export async function getProfile() {
  const options = getProtectedApiRouteOptions();

  const response = await axios.get<AxiosCommonResponse & { data: User }>(
    url + '/profile',
    options
  );
  return response;
}
