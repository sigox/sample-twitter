import {UserData} from '../context/postcontext.jsx'
export default function User(){
  const UserDataItem = UserData.map ( Data => {
    return (
      <div className='user' key={Data.Id}>          
        <div className='photo'></div>
        <div className='name'>
          <p>{Data.Name}</p>
          <p>@{Data.UserName}</p>
        </div>
        <button>正在追隨</button>
      </div>
    )
  })
  return(
    <div>
      {UserDataItem}
    </div>
  )
}