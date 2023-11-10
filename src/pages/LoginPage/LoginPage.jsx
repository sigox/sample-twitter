import './LoginPage.scss'
import { useNavigate } from "react-router";
import { AuthContext } from 'contexts/AuthContext.jsx'


//login元件的
import Swal from 'sweetalert2'
import { useState, useContext, useEffect } from 'react'  
import { Link } from 'react-router-dom'
import { AuthInput } from 'components/SignUp/SignUp'
import { TopIcon } from 'components/SignUp/SignUp'
import { OrangeBtn } from 'components/SignUp/SignUp'


export const LoginPage = () => {
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')


  const { login, setIsAuthenticated } = useContext(AuthContext) 
  const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault();
  }


  const handleClick = async () => {
    // 檢查格式是否符合需求
    if (account.trim().length === 0 || password.trim().length === 0) return


    try {
      const response = await login({ account, password })
      
      if (response.data.status === "success") {
        // 登入成功訊息
          Swal.fire({
            position: 'top',
            title: '登入成功！',
            timer: 1000,
            icon: 'success',
            showConfirmButton: false,
          });
          setIsAuthenticated(true)
          navigate('/main')
      }

    } catch (error) {
      setIsAuthenticated(false)

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
      navigate("/login")
    }
  }, [navigate, role])

  return (
    <div className="loginWapper">
      {/* <Login /> */}
      <div className='loginContainer'>
        <TopIcon title="登入 Alphitter" />

        {/* 記得有資料後，使用.map重複渲染 */}
        <form onSubmit={handleSubmit}>
          <AuthInput
            id="account"
            name="account"
            type="text"
            label="帳號"
            value={account}
            placeholder="請輸入帳號"
            onChange={(accountInputValue) => setAccount(accountInputValue)}
            maxLength="20"
          />
          <AuthInput
            id="password"
            name="account"
            type="password"
            label="密碼"
            value={password}
            placeholder="請輸入密碼"
            onChange={(passwordInputValue) => setPassword(passwordInputValue)}
            maxLength="50"
          />
        </form>
        <div className='btnGroup'>
          <OrangeBtn
            way="登入"
            onClick={handleClick}
          />
          <div className='aLink'>
            <Link to="/signup" className='signup-link'>
              註冊
            </Link>
            <span className='point'>&bull;</span>
            <Link to="/admin-login" className='admin-signup-link'>
              後台登入
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

