import './AdminTweet.scss'
// import { useState, useEffect } from 'react'
// import { getAllTweetsAdmin, deleteTweetAdmin } from 'api/tweets'
import { ReactComponent as CloseIcon } from 'assets/icons/close.svg'
import { ReactComponent as DefultAvatar } from 'assets/images/default_avatar.svg'


export const TweetTitle = ({ title }) => {
  return <h2 className='TweetTitle'>{title}</h2>
}

// TweetItem 子元件
export const AdminTweetItem = (   //需加 { }
  // avatar,
  // tweet,
  // name,
  // account,
  // time,
  // content,
  // onClick,
) => {

  // const authToken = localStorage.getItem("authToken")


  return (
    <div className="AdminTweetItem">
      <div className="avatarBox">
        {/* src +　{avatar} */}
        {/* <img className="avatarImg" src="" alt="loading" /> */}
        <DefultAvatar className="avatarImg" />
      </div>
      <div className="tweetText">
        <div className="topText">
          <div className="infoText">
            {/*加 {name} */}
            <div className="name">Apple</div>
            {/* 加 {account}·{time} */}
            <span className="smallText">@apple</span>
          </div>
          <div className='closeBox'>
            <CloseIcon
              className='close'
            // onClick={() => onClick?.({ authToken: authToken, id: tweet.id })}
            />
          </div>
        </div>
        <div className="tweetContent">
          {/* {content} */}
          Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.
        </div>
      </div>
    </div>
  )
}

// TweetList 父元件
export const AdminTweetList = () => {
  // const [tweets, setTweets] = useState([])

  // 刪除特定推文函式
  // const hacndleDelete = async ({ authToken, id }) => {
  //   try {
  //     const res = await deleteTweetAdmin(authToken, id)
  //     setTweets((prevTweets) => prevTweets.filter((tweet) => tweet.id !== id))

  //     console.log("deleteTweetAdmin", res)

  //   } catch (error) {
  //     console.error(error)
  //   }
  // }



  // useEffect(() => {

  //   // 透過 API 撈初始資料：管理員可見的全部推文
  //   const getAllTweetsAdminAsync = async () => {
  //     try {
  //       const datas = await getAllTweetsAdmin()
  //       setTweets(datas.map((data) => ({ ...data })))
  //       // console.log('setTweets後的值', datas)

  //     } catch (error) {
  //       console.error(error)
  //     }
  //   }
  //   getAllTweetsAdminAsync()
  // }, [])

  return (
    <div className='TweetListWrapper'>
      <TweetTitle title="推文清單" />
      <div className='TweetListContent'>
        {/* {tweets.map((tweet) => (
          <AdminTweetItem
            key={tweet.id}
            avatar={tweet.userAvatar}
            tweet={tweet}
            name={tweet.userName}
            account={tweet.userAccount}
            time={tweet.createdAt}
            content={tweet.description}
            onClick={({ authToken, id }) => hacndleDelete({ authToken, id })}
          />
        ))} */}
        <AdminTweetItem />
        <AdminTweetItem />
        <AdminTweetItem />
        <AdminTweetItem />
        <AdminTweetItem />
        <AdminTweetItem />
        <AdminTweetItem />
        <AdminTweetItem />
        <AdminTweetItem />
        <AdminTweetItem />
        <AdminTweetItem />
        <AdminTweetItem />
        <AdminTweetItem />
        <AdminTweetItem />
      </div>
    </div>
  )
}