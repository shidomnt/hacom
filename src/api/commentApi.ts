import axios from 'axios';
import { API_URL, getProtectedApiRouteOptions } from '../constant';
import {
  AxiosCommonResponse,
  Comment,
  CreateCommentDto,
  Product,
} from '../interfaces';

const url = API_URL + '/comments';

export const createComment = async (comment: CreateCommentDto) => {
  try {
    const options = getProtectedApiRouteOptions();
    const response = await axios.post<
      AxiosCommonResponse & {
        data: Comment;
      }
    >(url, comment, options);
    if (!response.data.success) {
      throw new Error('Loi khi tao comment');
    }
    return response;
  } catch (e) {
    if (e instanceof Error) {
      console.log(e.message);
    }
  }
};

export const getComments = async (productId: Product['_id']) => {
  try {
    const response = await axios.get<
      AxiosCommonResponse & {
        data: Comment[];
      }
    >(url + `/${productId}`);
    if (!response.data.success) {
      throw new Error('Loi khi tao comment');
    }
    return response;
  } catch (e) {
    if (e instanceof Error) {
      console.log(e.message);
    }
  }
};
