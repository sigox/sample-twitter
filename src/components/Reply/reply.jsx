import { ReplyModal } from "../Modal/ReplyModal/ReplyModal"
import './reply.scss'
export default function Reply(){
  return(
    <div>
      <div className='user-post'>
        <div className='photo'></div>
        <div className='post-content'>
          <p>Apple @apple</p>              
          <p>Hi, my name is Apple!</p>
          <p>上午10:04 · 2002年06月10日</p>          
        </div>          
      </div>
      <div className='stat stat-icon'>
        <div className='stat-item'>13 個回覆</div>
        <div className='stat-item'>76 個喜歡</div> 
      </div>
      <div className='stat stat-icon'>
        <div className='stat-item'>
          <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#replyModal">
            <i className="fa-regular fa-comment fa-lg"></i>
          </button>
        </div>            
        <div className='stat-item'><i className="fa-regular fa-heart fa-lg"></i></div> 
        <ReplyModal/>            
      </div> 
      <div className='user-post comment' key='1'>
        <div className='photo'></div>
        <div className='post-content'>
          <p>SuperBall @ball · 3小時前</p>
          <p>回覆 @apple</p> 
          <p>Hi, my name is SuperBall!</p>
        </div>          
      </div>
    </div>    
  )
}