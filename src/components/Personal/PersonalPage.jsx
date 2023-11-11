import './PersonalPage.scss';
import {PersonalData} from '../../context/postcontext.jsx'
import { EditModal } from 'components/Modal/EditModal/EditModal';

export default function PersonalPage(){
  const postdata = PersonalData.map ( Data => {
    return (
      <div className='user-post' key={Data.Id} >
        <div className='photo'></div>
        <div className='post-content'>
          <p>{Data.Name} @{Data.UserName} · 3小時前</p>              
          <p>{Data.Post}</p>
          <div className='stat'>
            <div className='stat-item'><i className="fa-regular fa-comment fa-lg"></i>{Data.Like}</div>
            <div className='stat-item'><i className="fa-regular fa-heart fa-lg"></i>{Data.Comment}</div> 
          </div> 
        </div>          
      </div>
    )
  })
  return(
    <div>
      <div className='personal-top'>
        <div className="backpicture"></div>
        <div className="photo large-photo"></div>
        <button type="button" data-bs-toggle="modal" data-bs-target="#edit" data-bs-whatever="Guillaume Vincent">編輯個人資料</button>

        <EditModal />

        <div className='name'>
          <p>John Doe</p>
          <p>@johndoe</p>
        </div>
        <p className='introduction'>Hi! I'm John Doe!</p>
        <div className='stat'>
          <div className='stat-item'>34個追蹤中</div>
          <div className='stat-item'>59位追隨者</div> 
        </div>
      </div>
      <div>
        <ul className="nav nav-underline" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">推文</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">推文與回覆</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">喜歡的內容</button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
            {postdata}
          </div>
          <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
            {postdata}
            {postdata}
          </div>
          <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex="0">
            {postdata}
            {postdata}
            {postdata}
          </div>
        </div>
      </div>
    </div>    
  )
}