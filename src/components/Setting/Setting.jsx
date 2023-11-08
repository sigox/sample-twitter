import './Setting.scss'
import { useState } from 'react'  //記得加useEffect
import { ReactComponent as LogoIcon } from 'assets/images/ac-logo.svg'
import { useNavigate } from 'react-router'

// API
// import { signup } from 'api/auth'

// 信箱格式規範
// const emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;

export const TopIcon = ({ title }) => {
  return (
    <>
      <div className="iconBox">
        <LogoIcon className='icon' />
      </div>
      <h2 className='iconTitle'>{title}</h2>
    </>
  )
}

export const AuthInput = (
  { id,
    name,
    type,
    value,
    label,
    placeholder,
    onChange,
    valuelength,
    textlength,
  }) => {
  return (
    <div className='formContainer'>
      <div className='group'>
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(event) => onChange?.(event.target.value)}
          valuelength={valuelength}
          textLength={textlength}
        />
        <div className="alerGroup">
          {value.length > textlength && <div className="alertBox">
            <span className='alert'>字數超過上限!</span>
          </div>
          }
          <div className="numAlertBox">
            <span className='lengthNum'>{valuelength}</span>
            /
            <span className='fityNum'>{textlength}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export const OrangeBtn = ({ way, onClick }) => {
  return (
    <button
      className='orange'
      onClick={onClick}
    >
      {way}
    </button>
  )
}

export const Setting = () => {
  const navigate = useNavigate()

  // 各input的儲存狀態變數
  const [account, setAccount] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordCheck, setPasswordCheck] = useState('')

  const onFormSubmit = async (e) => {
    e.preventDefault()
    navigate('/login')
  }


  return (
    <div className="Settingcontainer">

      {/* 記得有資料後，使用.map重複渲染 */}
      <form>
        <AuthInput
          type="text"
          id="account"
          name="account"
          label="帳號"
          value={account}
          placeholder="請輸入帳號"
          onChange={(accountInputValue) => {
            // checkAccount(accountInputValue)
            setAccount(accountInputValue)
          }}
          valuelength={account.length}
          textlength="20"
        />
        <AuthInput
          type="text"
          id="name"
          name="name"
          label="名稱"
          value={name}
          placeholder="請輸入使用者名稱"
          onChange={(nameInputValue) => {
            // checkName(nameInputValue)
            setName(nameInputValue)
          }}
          valuelength={name.length}
          textlength="50"
        />
        <AuthInput
          type="text"
          id="email"
          name="email"
          label="Email"
          value={email}
          placeholder="請輸入Email"
          onChange={(emailInputValue) => {
            // checkEmail(emailInputValue)
            setEmail(emailInputValue)
          }}
          valuelength={email.length}
          textlength="50"
        />
        <AuthInput
          type="password"
          id="password"
          name="password"
          label="密碼"
          value={password}
          placeholder="請設定密碼"
          onChange={(passwordInputValue) => setPassword(passwordInputValue)}
          valuelength={password.length}
          textlength="50"

        />
        <AuthInput
          type="password"
          id="password-2"
          name="password-2"
          label="密碼確認"
          value={passwordCheck}
          placeholder="請再次輸入密碼"
          onChange={(passwordAgnInputValue) => setPasswordCheck(passwordAgnInputValue)}
          valuelength={passwordCheck.length}
          textlength="50"
        />
      </form>

      <div className='btnGroup'>
        <OrangeBtn
          way="儲存"
          onClick={onFormSubmit}
        />
      </div>
    </div>
  )
}

export default Setting;