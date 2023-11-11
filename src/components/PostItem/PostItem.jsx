import './PostItem.scss'
import { PersonalData} from '../../context/postcontext.jsx'
import { PostModal } from 'components/Modal/PostModal/PostModal.jsx'

export default function PostItem(){
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
      <div className='new-post'>
        <div className='new-post-content'>
          <div className='photo'></div>
          <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#postModal">有什麼新鮮事？</button>
          <PostModal />                          
        </div>            
        <button>推文</button>
      </div> 
      {postdata}
    </div>    
  )
}