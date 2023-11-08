import './EditModal.scss'
import { useState } from 'react'

// import icon
import { ReactComponent as CloseIcon } from 'assets/icons/close.svg'
import { ReactComponent as AddImg } from 'assets/icons/add_photo.svg'

//import img
import bannerDefulat from 'assets/images/default_banner.svg'
import avatarDefulat from 'assets/images/default_avatar.svg'

// impot 元件
import { AuthInput } from 'components/SignUp/SignUp'

export const EditModal = () => {
  // 設定接受使用者輸入值的狀態變數
  const [editFormValue, setEditFormValue] = useState({
    name: '',
    intro: '',
  })

  // 按下儲存按鈕之函式 
  const handleSumit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="modal fade" id="edit" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <div className="topLeft">
              <div className="modalClose">
                <CloseIcon className='modalCloseIcon' data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <span className='editData'>
                編輯個人資料
              </span>
            </div>
            <div className="topRight">
              <button className='modalStore' type='submit'>
                儲存
              </button>
            </div>
          </div>
          <div className="modal-body">
            <div className='modalWapper'>
              <div className='editModalContianer'>
                {/* 將使用者所提供的資料之input，使用form包覆 */}
                <form onSubmit={handleSumit}>
                  <div className="middleSection">
                    <div className="banner-part">
                      <img className='imgBanner' src={bannerDefulat} alt="" />
                      <input 
                        type="file" 
                        className='inputBanner'
                      />
                      <div className="editIcons">
                        <AddImg className='addBanner' />
                        <CloseIcon className='closeBanner' />
                      </div>
                    </div>
                    <div className='user-img-part'>
                      <img className="editModalAvatarImg" src={avatarDefulat} alt="使者大頭貼" />
                      <div className="avatarCover">
                        <input                               
                          type="file"
                          className='inputAvatar'
                        />
                        <AddImg className='addAvatar' />
                      </div>
                    </div>
                  </div>
                  <div className="bottomSection">
                    <AuthInput 
                      id="name"
                      name="name"
                      type="text"
                      label="名稱"
                      placeholder="請輸入名稱"
                      maxLength="50"
                      value={editFormValue.name}
                      onChange={(event) => {
                        setEditFormValue((prevFormData) => ({
                            ...prevFormData,
                            // 要使用event，接收到使用者輸入的值
                            name: event,
                          }))
                        }
                      }
                    />
                    <div className="introTeaxtarea">
                      <label className='introLabel'>
                        自我介紹
                      </label>
                      <textarea 
                        name="intro" 
                        id="intro" 
                        cols="30" 
                        rows="5"
                        maxLength="160"
                        placeholder="請輸入自我介紹"
                        onChange={(event) => {
                          setEditFormValue((prevFormData) => ({
                            ...prevFormData,
                            intro: event.target.value,
                          }))
                        }}
                      >
                      </textarea>                      
                      <div className="alertBox">
                        {editFormValue ? editFormValue.intro.length >= 160 && <div className='introAlert'>字數超過上限!</div> : <div className='introAlertblank'>blank</div> 
                        }
                        <div className="words">
                          {editFormValue.intro.length}/160
                        </div>
                      </div>
                    </div>                    
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}