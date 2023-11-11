import { login, adminLogin } from "api/auth";
import { createContext, useState } from "react";
import * as jwt from 'jsonwebtoken';

const deafaultAuthContext = {
  // 判斷使用者是否有登入
  isAuthenticated: false,
  currentMenber: null,    // 當前使用者相關資料，預設為 null，成功登入後就會有使用者資料
  register: null,
  login: null,
  logout: null,
}

export const AuthContext = createContext(deafaultAuthContext)

export const AuthProvider = ({ children }) =>{
  // 前台驗證
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // 後台驗證
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  const [payload, setPayload] = useState(null)

  // 儲存userInfo物件，裡面包含 account、name、id 等資訊
  // const [userInfo, setUserInfo] = useState({})

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isAdminAuthenticated,
        payload,
        setIsAuthenticated,
        setIsAdminAuthenticated,
        currentUser,
        // userInfo,
        login: async (data) => {
          const response = await login({
            account: data.account,
            password: data.password,
          })
          // 若成功可以把payload的資料讓所有頁面看到
          if (response) {  //response.data
            if(response.data.status === "success") {
              const authToken = response.data.data.token
              
              //印出authToken
              // console.log(authToken)
              // 解析資料
              const tempPayload = jwt.decode(authToken)
              if (tempPayload) {
                setPayload(tempPayload)
                setIsAuthenticated(true)
                setCurrentUser({
                  id: tempPayload.id
                })
                // 儲存token
                localStorage.setItem("authToken", authToken)

                // 儲存使用者資料
                localStorage.setItem("userInfo", JSON.stringify(response.data.data.user))
              }
              // 若抓到的response不合條件，回傳response讓LoginPage去做錯誤顯示
            } else {
              setPayload(null)
              setIsAuthenticated(false)
            }

            return response
          }
        },

        adminLogin: async (data) => {
          const response = await adminLogin({
            account: data.account,
            password: data.password,
          })
          // 若成功可以把payload的資料讓所有頁面看到
          if (response) {  //response.data
            if (response.data.status === "success") {
              const authToken = response.data.data.token

              //印出authToken
              // console.log(authToken)
              // 解析資料
              const tempPayload = jwt.decode(authToken)
              if (tempPayload) {
                setPayload(tempPayload)
                setIsAuthenticated(true)
                setCurrentUser({
                  id: tempPayload.id
                })
                // 儲存token
                localStorage.setItem("authToken", authToken)

                // 儲存使用者資料
                localStorage.setItem("userInfo", JSON.stringify(response.data.data.user))
              }
              // 若抓到的response不合條件，回傳response讓LoginPage去做錯誤顯示
            } else {
              setPayload(null)
              setIsAuthenticated(false)
            }

            return response
          }
        }



      }}
    >
      {children}
    </AuthContext.Provider>
  )

}