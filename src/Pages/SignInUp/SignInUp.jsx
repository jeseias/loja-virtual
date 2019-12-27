import React from 'react'

import SignIn from '../../Components/SignIn/SignIn'
import SignUp from '../../Components/SignUp/SignUp'

import './styles.scss'

const SignInUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
)

export default SignInUpPage