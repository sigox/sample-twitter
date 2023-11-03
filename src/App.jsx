import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from 'pages/LoginPage/LoginPage.jsx';
import { SignUpPage } from 'pages/SignUpPage/SignUpPage';
import { AdminLoginPage } from 'pages/AdminLoginPage/AdminLoginPage';
import { AdminMainPage } from 'pages/AdminMainPage/AdminMainPage';
import { AdminUserPage } from 'pages/AdminUserPage/AdminUserPage';


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
          {/* <Route path="main" element={<HomePage />} /> */}
          {/* <Route path="*" element={<LoginPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;