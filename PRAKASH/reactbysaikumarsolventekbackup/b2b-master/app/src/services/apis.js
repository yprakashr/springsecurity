import { API_URL } from "../constant";

const apiCall = async (url = '', method = 'GET', token = '', data = {}) => {
  try {
    const options = {
      method: method,
      headers: {
        'Content-Type': 'application/json'
      }
    };
    if (token) {
      options.headers['Authorization'] = token
    }
    if (method !== 'GET' && method !== 'HEAD') {
      options.body = JSON.stringify(data);
    }
    const response = await fetch(`${API_URL + url}`, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

const FileUpload = (
  uri,
  inpObj,
  token
) => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", token);
  let axiosInput = {
    method: "POST",
    modes: "cors",
    body: inpObj,
    headers: myHeaders,
  };
  return new Promise((resolve, reject) => {
    fetch(`${API_URL + uri}`, axiosInput)
      .then((res) => res.json())
      .then((res) => resolve(res))
      .catch((res) => reject(res));
  });
};

export {
  apiCall,
  FileUpload
}

