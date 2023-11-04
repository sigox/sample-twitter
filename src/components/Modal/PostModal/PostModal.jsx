import './PostModal.scss'

import { useState } from 'react'

// import icon
import { ReactComponent as CloseIcon } from 'assets/icons/close.svg'

//import img
import avatarDefulat from 'assets/images/default_avatar.svg'

export const PostModal = () => {
  const [inputValue, setInputValue] = useState("")

  return (
    <div className='modalWapper'>
      <div className="postModalContianer">
        <div className="modalTop">
          <div className="modalClose">
            <CloseIcon className='modalCloseIcon' />
          </div>
          <img className="modalAvatarImg" src={avatarDefulat} alt="使者大頭貼" />
          <textarea
            id='tweet-textarea'
            className='tweetInput'
            type='text'
            rows={13} 
            cols={50}
            value={inputValue || ''}
            placeholder='有什麼新鮮事?'
            maxLength={140}
            onChange={(e) => setInputValue(e.target.value)}
          >
          </textarea>
        </div>
        <div className="modalBottom">
           
          {/* 跳出『內容不能空白』 */}
          {inputValue.length === 0 &&
            <div className="alertWord">
              內容不可空白
            </div>
          }


           {/* 跳出『字數超過140』 */}
          { inputValue.length >= 140 && 
             <div className="alertWord">
              字數不可超過 140 字
            </div>
          }
          <button className='modalButton' >推文</button>
        </div>
      </div>
    </div>
  )
}