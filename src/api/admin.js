import axios from 'axios';
const baseURL =
  'https://floating-headland-46661-cb3c9931b9c7.herokuapp.com/api';

// 新增一個 instance
const axiosInstance = axios.create({
  baseURL: baseURL,
});

// 在axiosInstance 使用 interceptors 方法
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error(error);
  },
);


// admin取得所有使用者
export const getAllUserAdmin = async () => {
  try {
    const res = await axiosInstance.get(`${baseURL}/admin/users`)

     console.log('getAllUsersAdmin回傳值', res)

     return res

  } catch(error) {
    console.log("[Get Admin all users Failed]", error)

      throw error
  }
}


//admin瀏覽所有的tweets
export const getAllTweetsAdmin = async () => {
  try {
    const res = await axiosInstance.get(`${baseURL}/admin/tweets`)

    console.log('getAllTweetsAdmin: ' ,res)

    return res
  } catch (error) {
    console.error("[Get Admin all tweets Failed]: ", error)

    throw error
  }
}
