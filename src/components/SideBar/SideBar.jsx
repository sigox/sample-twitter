// import scss
import './SideBar.scss'

// import dependencies
import { useNavigate, useLocation, } from 'react-router-dom' //記得加 Navigate, useLocation,
import { useEffect } from 'react'  //記得加 useContext,

// 暫時加的 
import { useState } from 'react'

//import context
// import { PageContext } from 'context/PageContext'

// import icons
import { ReactComponent as LogoIcon } from 'assets/icons/logo.svg'
import { ReactComponent as HomeIcon } from 'assets/icons/home.svg'
import { ReactComponent as HomeHollowIcon } from 'assets/icons/home_hollow.svg'
import { ReactComponent as UserIcon } from 'assets/icons/user.svg'
import { ReactComponent as UserHollowIcon } from 'assets/icons/user_hollow.svg'
import { ReactComponent as LogoutIcon } from 'assets/icons/logout.svg'



export const SideBar = () => {
  const navigate = useNavigate()
  const path = useLocation().pathname
  // const { adminPage, setAdminPage } = useContext(PageContext)

  // 暫時加的
  const [adminPage, setAdminPage] = useState()

  useEffect(() => {
    if (path === '/main') {
      setAdminPage('tweet')
    } else if (path === '/users') {
      setAdminPage('users')
    }else{
      setAdminPage('setting')
    }
  }, [path])

  //回到推文清單 
  const handleTweet = () => {
    navigate('/main')
    setAdminPage('tweet')
  }

  // 回到使用者列表
  const handleUser = () => {
    navigate('/users')
    setAdminPage('users')
  }

    // 回到設定清單
  const handleSetting = () => {
    navigate('/setting')
    setAdminPage('setting')
  }

  // 後台登出
  // const handleAdminLogout = () => {
  //   // localStorage.removeItem('authToken');
  //   // localStorage.removeItem('userInfo')
  //   navigate('/admin-login')
  // }

  return (
    <div className='SideBarWrapper'>
      <div className="adminSiderBarContainer">

        {/* top */}
        <div className="topSection">

          <div className="logoIconBox">
            <LogoIcon />
          </div>
          <div className="lists">
            <div
              className="list"
              onClick={handleTweet}
            >
              <div className="iconsBox">
                {adminPage === 'tweet' ? <HomeIcon className='activeIcon' /> : <HomeHollowIcon />}
              </div>
              <div className={adminPage === 'tweet' ? 'activePage' : 'pageTitle'}>
                首頁
              </div>

            </div>
            <div
              className="list"
              onClick={handleUser}
            >
              <div className="iconsBox">
                {adminPage === 'users' ? <UserIcon className='activeIcon' /> : <UserHollowIcon />}
              </div>
              <div className={adminPage === 'users' ? 'activePage' : 'pageTitle'}>
                個人資料
              </div>
            </div>
            <div
              className="list"
              onClick={handleSetting}
            >
              <div className="iconsBox">
                {adminPage === 'setting' ? <UserIcon className='activeIcon' /> : <UserHollowIcon />}
              </div>
              <div className={adminPage === 'setting' ? 'activePage' : 'pageTitle'}>
                設定
              </div>
            </div>
            
          </div>
          <button>推文</button>
        </div>

        {/* bottom */}
        <div
          className="bottomSection"
        // onClick={handleAdminLogout}
        >
          <div className="iconBox">
            <LogoutIcon className='icon' />
          </div>
          <div className="title">
            登出
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar;