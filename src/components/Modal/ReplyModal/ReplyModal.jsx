import './ReplyModal.scss'

import { useState } from 'react'

// import icon
import { ReactComponent as CloseIcon } from 'assets/icons/close.svg'

//import img
import avatarDefulat from 'assets/images/default_avatar.svg'

export const ReplyModal = () => {

  const [inputValue, setInputValue] = useState("")
  return (
    <div className="modal fade" id="replyModal" tabIndex="-1" aria-labelledby="replyModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <CloseIcon className='modalCloseIcon' data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body">
            <div className='modalWapper'>
              <div className="replyModalContianer">
                <div className="modalTop">
                  {/* tweetItem */}
                  <div className="tweetItem">
                    <div className="avatarBox">
                      {/* src +　{avatar} */}
                      <img className="avatarImg" src={avatarDefulat} alt="使用者大頭貼" />
                    </div>
                    <div className="tweetText">
                      <div className="topText">
                        <div className="infoText">
                          {/*加 {name} */}
                          <div className="name">Apple</div>
                          {/* 加 {account}·{time} */}
                          <span className="smallText">@apple</span>
                          <span className="smallText" >‧</span>
                          <span className="time">3小時</span>
                        </div>
                      </div>
                      <div className="tweetContent">
                        {/* {content} */}
                        Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.
                      </div>
                      <div className='bottmText'>
                        <span className='reply'>回覆給</span>
                        <span className='tweetUser'>@apple</span>
                      </div>
                    </div>
                  </div>
                  {/* textarea */}
                  <img className="modalAvatarImg" src={avatarDefulat} alt="使者大頭貼" />
                  <textarea
                    id='tweet-textarea'
                    className='tweetInput'
                    type='text'
                    rows={13}
                    cols={50}
                    value={inputValue || ''}
                    placeholder='推你的回覆'
                    maxLength={140}
                    onChange={(e) => setInputValue(e.target.value)}
                  >
                  </textarea>
                </div>
              </div>
            </div>            
          </div>
          <div className="modal-footer">
            {/* 跳出『內容不能空白』 */}
            {inputValue.length === 0 &&
              <div className="alertWord">
                內容不可空白
              </div>
            }
            {/* 跳出『字數超過140』 */}
            {inputValue.length >= 140 &&
              <div className="alertWord">
                字數不可超過 140 字
              </div>
            }
            <button className='modalButton'>
              回覆
            </button>
          </div>
        </div>
      </div>
    </div>      
  )
}