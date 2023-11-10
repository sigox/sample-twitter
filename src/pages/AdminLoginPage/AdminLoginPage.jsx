import './AdminLoginPage.scss'

import Swal from 'sweetalert2'
import { useState, useContext, useEffect } from 'react'
import { useNavigate } from "react-router";
import { Link } from 'react-router-dom'
import { AuthInput } from 'components/SignUp/SignUp'
import { TopIcon } from 'components/SignUp/SignUp'
import { OrangeBtn } from 'components/SignUp/SignUp'
import { AuthContext } from 'contexts/AuthContext.jsx'


export const AdminLoginPage = () => {
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const { adminLogin, setIsAdminAuthenticated } = useContext(AuthContext)

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const handleClick = async () => {
    // 檢查格式是否符合需求
    if (account.trim().length === 0 || password.trim().length === 0) return


    try {
      const response = await adminLogin({ account, password })

      if (response.data.status === "success") {
        // 登入成功訊息
        Swal.fire({
          position: 'top',
          title: '登入成功！',
          timer: 1000,
          icon: 'success',
          showConfirmButton: false,
        });
        setIsAdminAuthenticated(true)
        navigate('/admin_main')
      }

    } catch (error) {
      setIsAdminAuthenticated(false)

      // 登入失敗訊息
      Swal.fire({
        position: 'top',
        title: '登入失敗！',
        timer: 1000,
        icon: 'error',
        showConfirmButton: false,
      });
      return
    }
  }


  let userInfo = {}
  let role = ""
  if (localStorage.getItem("userInfo")) {
    userInfo = JSON.parse(localStorage.getItem("userInfo"))
    role = userInfo.role
  }

  useEffect(() => {
    if (role === "user") {
      navigate("/main")
    } else if (role === "admin") {
      navigate("/admin_main")
    } else {
      navigate("/admin-login")
    }
  }, [navigate, role])


  return (
    <div className="AdminLoginWapper">
      {/* <AdminLogin /> */}
      <div className='adminLoginContainer'>
        <TopIcon title="後台登入" />

        {/* 記得有資料後，使用.map重複渲染 */}
        <form onSubmit={handleSubmit}>
          <AuthInput
            id="account"
            type="text"
            label="帳號"
            value={account}
            placeholder="請輸入帳號"
            onChange={(accountInputValue) => setAccount(accountInputValue)}
            maxLength="20"
          />
          <AuthInput
            id="password"
            name="password"
            type="password"
            label="密碼"
            value={password}
            placeholder="請輸入密碼"
            onChange={(passwordInputValue) => setPassword(passwordInputValue)}
            maxLength="20"
          />
        </form>
        <div className='btnGroup'>
          <OrangeBtn
            way="登入"
            onClick={handleClick}
          />
          <div className='aLink'>
            <Link to="/login">
              前台登入
            </Link>

          </div>
        </div>
      </div>

    </div>
  )
};