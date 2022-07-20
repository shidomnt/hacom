import axios from 'axios';

const apiUrl = 'http://localhost:4000';

async function getProduct(category, id) {
  try {
    const response = await axios.get(apiUrl + `/${category}/${id}`);
    return response;
  } catch (e) {
    console.log('Loi khi goi API');
  }
}

async function getCategories() {
  try {
    const response = await axios.get(apiUrl + `/categories`);
    return response;
  } catch (e) {
    console.log('Loi khi goi API')
  }
}

async function getProductByCategory(category, query = "") {
  try {
    const response = await axios.get(apiUrl + `/${category}` + query)
    return response;
  } catch (e) {
    console.log('Loi khi goi API')
  }
}

export default function useApi() {
  return {
    getProduct,
    getCategories,
    getProductByCategory
  }
}
