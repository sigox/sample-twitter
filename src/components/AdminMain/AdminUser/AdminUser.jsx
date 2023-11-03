import './AdminUser.scss'
import { ReactComponent as FollowIcon } from 'assets/icons/write.svg'
import { ReactComponent as LikeIcon } from 'assets/icons/like_hollow.svg'
import { TweetTitle } from '../AdminTweet/AdminTweet'
// import { useState, useEffect } from 'react'
// import { getAllUsersAdmin } from 'api/tweets'


// import avatarDefulat from 'assets/images/default.png'
import avatarDefulat from 'assets/images/default_avatar.svg'
import bannerDefault from 'assets/images/flowers.png'

// CardItem 子元件
export const CardItem = (   //記得加{}
  // avatar,
  // name,
  // img,
  // account,
  // tweetCount,
  // likesCount,
  // followingsCount,
  // followersCount,
) => {


  return (
    <div className='card'>
      <div className="backGroundImg">
        {/* <img src={img ? img : bannerDefault} alt="loading" /> */}
        <img src={bannerDefault} alt="loading" />

      </div>
      <div className="avatarSection">
        <div className="avatarBox">
          {/* <img className='avatar' src={avatar ? avatar : avatarDefulat} alt="使用者大頭貼" /> */}
          <img className='avatar' src={avatarDefulat} alt="使用者大頭貼" />
        </div>
        <div className="avatarName">
          {/*記得加 {name} */}
          <div className='name'>John Doe</div>
          {/* 記得加 {account} */}
          <div className='hashName'>@apple</div>
        </div>
      </div>
      <div className="iconSection">
        <div className="iconGroup">
          <div className="iconBox">
            <FollowIcon className='icon' />
          </div>
          <span className="iconNum">
            {/* {tweetCount} */}
            1.5k
          </span>
        </div>
        <div className="iconGroup">
          <div className="iconBox">
            <LikeIcon className='icon' />
          </div>
          <span className="iconNum">
            {/* {likesCount} */}
            20k
          </span>
        </div>
      </div>
      <div className="followSection">
        <div className="followGroup">
          {/* {followingsCount} */}
          <span className="followNum">34個</span>
          <span className="folloerNum">跟隨中</span>
        </div>
        <div className="followGroup">
          {/* {followersCount} */}
          <span className="followNum">59位</span>
          <span className="folloerNum">跟隨者</span>
        </div>
      </div>
    </div>
  )
}

// CardList 父元件
export const CardList = () => {

  // const [users, setUsers] = useState([])

  // 透過API獲取使用者資料
  // useEffect(() => {
  //   const getAllUsersAdminAsync = async () => {

  //     try {
  //       const datas = await getAllUsersAdmin()
  //       setUsers(datas.map((data) => ({ ...data })))
  //       // console.log('setUser後的值', datas)

  //     } catch (error) {
  //       console.error(error)
  //     }
  //   }
  //   getAllUsersAdminAsync()
  // }, [])



  return (
    <div className="cardListWrapper">
      <TweetTitle title="使用者列表" />
      <div className="cardListContent">
        <div className="cardListContainer">
          {/* {users.map((user) => (
            <CardItem
              key={user.id}
              avatar={user.avatar}
              name={user.name}
              img={user.banner}
              account={user.account}
              tweetCount={user.Tweets}
              likesCount={user.LikeTweets}
              followingsCount={user.Followings}
              followersCount={user.Followers}
            />
          ))} */}
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </div>
      </div>
    </div>
  )
}