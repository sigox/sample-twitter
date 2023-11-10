import './SignUp.scss';
import Swal from 'sweetalert2';
import { useState } from 'react'; //記得加useEffect
import { ReactComponent as LogoIcon } from 'assets/images/ac-logo.svg';

// API
import { register } from 'api/auth';
import { useNavigate } from 'react-router-dom';

// 信箱格式規範
// const emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;

export const TopIcon = ({ title }) => {
  return (
    <>
      <div className="iconBox">
        <LogoIcon className="icon" />
      </div>
      <h2 className="iconTitle">{title}</h2>
    </>
  );
};

export const AuthInput = ({
  id,
  name,
  type,
  value,
  label,
  placeholder,
  onChange,
  maxLength,
}) => {
  const minLength = 4;

  return (
    <div className="formContainer">
      <div className="group">
        <label htmlFor={id}>
          {label}
          <span className="mustInput">*</span>
        </label>
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(event) => onChange?.(event.target.value)}
          maxLength={maxLength}
        />
        <div className="alerGroup">
          {value ? (
            (value.length < minLength || value.length >= maxLength) && (
              <div className="alertBox">
                <span className="alert">
                  請符合{minLength}~{maxLength}字
                </span>
              </div>
            )
          ) : (
            <div></div>
          )}
          <div className="numAlertBox">
            <span className="lengthNum">{value ? value.length : '0'}</span>/
            <span className="fityNum">{maxLength}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const OrangeBtn = ({ way, onClick }) => {
  return (
    <button className="orange" onClick={onClick}>
      {way}
    </button>
  );
};

export const SignUp = () => {

  // 各input的儲存狀態變數
  const [account, setAccount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const navigate = useNavigate

  // 表單送出函式，當驗證全通過時才會送出
  const onFormSubmit = async (e) => {
    e.preventDefault();

    // 輸入值皆為零
    if (
      account.trim().length === 0 ||
      name.trim().length === 0 ||
      email.trim().length === 0 ||
      password.trim().length === 0
    ) {
      Swal.fire({
        icon: 'error',
        title: '註冊失敗',
        text: '輸入框不為零。',
      });

      return;
    }

    // 『密碼』與『密碼再確認』不相同
    if (password !== checkPassword) {
      Swal.fire({
        icon: 'error',
        title: '註冊失敗',
        text: '輸入兩組密碼不相符，請再重新確認。',
      });

      return;
    }

    try {
      const response = await register({
        account,
        name,
        email,
        password,
        checkPassword,
      });

      // 檢查是否註冊成功
      // console.log('註冊成功');
      // console.log(response);

      if (response.data.status === 'success') {
        Swal.fire({
          position: 'top',
          title: '註冊成功！即可登入',
          timer: 1000,
          icon: 'success',
          showConfirmButton: false,
        });
        
        navigate('/login')
        return
      }

    } catch (error) {

      // 檢查是否註冊失敗
      // console.log('註冊失敗');

      // account重複註冊
      if (error.response.data.data['Error Message'] === 'account used') {
        Swal.fire({
          icon: 'error',
          title: '註冊失敗',
          text: '『帳號』已重複註冊',
        });
        return;
      }

      // email重複註冊
      if (error.response.data.data['Error Message'] === 'email used') {
        Swal.fire({
          icon: 'error',
          title: '註冊失敗',
          text: '『email』已重複註冊',
        });
        return;
      }

      // 檢查是否抓到錯誤的回傳值
      // console.log(error.response.data.data['Error Message'])
    }

  };

  return (
    <div className="SignUpcontainer">
      <TopIcon title="建立你的帳號" />

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
            setAccount(accountInputValue);
          }}
          maxLength="20"
        />
        <AuthInput
          type="text"
          id="name"
          name="name"
          label="名稱"
          value={name}
          placeholder="請輸入使用者名稱"
          onChange={(nameInputValue) => {
            setName(nameInputValue);
          }}
          maxLength="20"
        />
        <AuthInput
          type="text"
          id="email"
          name="email"
          label="Email"
          value={email}
          placeholder="請輸入Email"
          onChange={(emailInputValue) => {
            setEmail(emailInputValue);
          }}
          maxLength="50"
        />
        <AuthInput
          type="password"
          id="password"
          name="password"
          label="密碼"
          value={password}
          placeholder="請設定密碼"
          onChange={(passwordInputValue) => setPassword(passwordInputValue)}
          maxLength="20"
        />
        <AuthInput
          type="password"
          id="password-2"
          name="password-2"
          label="密碼確認"
          value={checkPassword}
          placeholder="請再次輸入密碼"
          onChange={(passwordAgnInputValue) =>
            setCheckPassword(passwordAgnInputValue)
          }
          maxLength="20"
        />
      </form>

      <div className="btnGroup">
        <OrangeBtn way="註冊" onClick={onFormSubmit} />
        <div className="aLink">
          <a href="/login" className="cancel-link">
            取消
          </a>
        </div>
      </div>
    </div>
  );
};
