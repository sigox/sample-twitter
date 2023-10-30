import '../Homepage.scss';
import { ACLogoIcon } from 'assets/images';
const HomePage = () => {
  return (
    <div className='main'>
      <div className="right-column">
        <ACLogoIcon />
        <ul>
          <li>首頁</li>
          <li>個人資料</li>
          <li>設定</li>
        </ul>
        <button>推文</button>
      </div>
      <div className="post">
        <p>首頁</p>
        <div className='new-post'>
          <div className='photo'></div>
          <input placeholder="有什麼新鮮事？"></input>
          <button>推文</button>
        </div>
      </div>
      <div className="left-column">
        <p>Popular</p>
      </div>
    </div>
  );
};

export default HomePage;
