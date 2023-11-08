import './MainPage.scss';
import SideBar from '../../components/SideBar/SideBar.jsx'
import PostItem from '../../components/PostItem/PostItem.jsx'
import Reply from '../../components/Reply/reply'
import User from '../../components/User.jsx'

const HomePage = () => {
  return (
    <div className='main'>
      <SideBar />
      <div className="post">
        <h1 className='main-title'>首頁</h1>     
        <PostItem />
      </div>
      <div className="left-column">
        <h1 className='main-title'>Popular</h1>
        <User />
      </div>
    </div>
  );
};

export default HomePage;