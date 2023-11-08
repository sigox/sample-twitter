import axios from 'axios';
import { Login } from "components/Login/Login";
import './LoginPage.scss'
// import { useEffect } from "react";
// import { useNavigate } from "react-router";

export const LoginPage = () => {
  // const navigate = useNavigate()
  // const authToken = localStorage.getItem("authToken")

  // useEffect(() => {
  //   if(authToken) {
  //     navigate('/main')
  //   }
  // }, [])

  axios.get('https://infinite-sea-95685-55a9356d71e6.herokuapp.com/api/admin/tweets')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });


  return (
    <div className="loginWapper">
      <Login />
    </div>
  )
};