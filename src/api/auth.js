import axios from 'axios'

const authURL = "https://floating-headland-46661-cb3c9931b9c7.herokuapp.com"

// 前台登入
//post: /api/signin
export const login = async ({ account, password }) => {
  try {
    const response = await axios.post(`${authURL}/api/signin`, {
      account, 
      password,
    })

    // console.log(response.data.data)
    return response
  } catch (error) {
    console.error('[Login Failed]:', error)
    throw error
  }
}


// 後台登入
//post: /api/signin
export const adminLogin = async ({ account, password }) => {
  try {
    const response = await axios.post(`${authURL}/api/signin`, {
      account,
      password,
    })

    // console.log(response.data.data)
    return response
  } catch (error) {
    console.error('[adminLogin Failed]:', error)
    throw error
  }
}

// 註冊
//post: api/users
export const register = async ({ account, name, email, password, checkPassword } ) => {

  try {
    const response = await axios.post(`${authURL}/api/users`, {
      account,
      name,
      email,
      password,
      checkPassword,
    })

    console.log(response)
    return response
  } catch (error) {
    console.error('[Register Failed]: ', error);
    throw error
  }
}