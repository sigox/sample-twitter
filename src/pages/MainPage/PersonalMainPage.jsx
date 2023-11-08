import './MainPage.scss';
import SideBar from '../../components/SideBar/SideBar.jsx'
import PersonalPage from 'components/Personal/PersonalPage';
import User from '../../components/User.jsx'

const HomePage = () => {
  return (
    <div className='main'>
      <SideBar />
      <div className="post">
        <h1 className='main-title'>John Doe</h1> 
        <PersonalPage />
      </div>
      <div className="left-column">
        <h1 className='main-title'>Popular</h1>
        <User />
      </div>
    </div>
  );
};

export default HomePage;