import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from 'pages/HomePage/HomePage';
import { LoginPage } from 'pages/LoginPage/LoginPage.jsx';
import { SignUpPage } from 'pages/SignUpPage/SignUpPage';
import { AdminLoginPage } from 'pages/AdminLoginPage/AdminLoginPage';
import { AdminMainPage } from 'pages/AdminMainPage/AdminMainPage';
import { AdminUserPage } from 'pages/AdminUserPage/AdminUserPage';
import MainPage from 'pages/MainPage/MainPage';
import PersonalMainPage from 'pages/MainPage/PersonalMainPage';
import SettingPage from 'pages/MainPage/SettingPage';


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route path="admin-login" element={<AdminLoginPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="admin_main" element={<AdminMainPage />} />
          <Route path="admin_users" element={<AdminUserPage />} />
          <Route path="main" element={<MainPage />} />
          <Route path="users" element={<PersonalMainPage />} />
          <Route path="setting" element={<SettingPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;