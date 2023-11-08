import './MainPage.scss';
import './SettingPage.scss';
import Setting from '../../components/Setting/Setting.jsx'
import SideBar from '../../components/SideBar/SideBar.jsx'

const SettingPage = () => {
  return (
    <div className='main'>
      <SideBar />
      <div className="setting">
        <h1 className='main-title'>帳號設定</h1>  
        <Setting />
      </div>
    </div>
  );
};

export default SettingPage;