import {
  AuthContainer,
  AuthInputContainer,
  AuthButton,
  AuthLinkText,
} from 'components/common/auth.styled';
import { ACLogoIcon } from 'assets/images';
import { AuthInput } from 'components';

const LoginPage = () => {
  return (
    <AuthContainer>
      <div>
        <ACLogoIcon />
      </div>
      <h1>登入 Alphitter</h1>

      <AuthInputContainer>
        <AuthInput text="帳號"/>
      </AuthInputContainer>

      <AuthInputContainer>
        <AuthInput text="密碼"/>
      </AuthInputContainer>
      <AuthButton>登入</AuthButton>
      <AuthLinkText>註冊 Alphitter</AuthLinkText>·
      <AuthLinkText>後台登入</AuthLinkText>
    </AuthContainer>
  );
};

export default LoginPage;
