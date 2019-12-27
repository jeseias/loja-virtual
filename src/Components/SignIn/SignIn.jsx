import React, { Component } from 'react'

import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomButton/CustumButton'

import { auth, signInWithGoogle } from '../../firebase/firebase.util'

import './styles.scss'

export default class SignIn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async e => {
    e.preventDefault()
    const { email, password } =  this.state

    try {
      await auth.createUserWithEmailAndPassword(email, password)
      this.setState({
        email: '',
        password: ''
      })
    } catch (error) {
      console.log(error)
    }

  }

  handleChange = e => {
    const { value, name } = e.target

    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            type="email" 
            id="email" 
            name="email" 
            handleChange={this.handleChange}
            value={this.state.email} 
            label='email'
            required
          /> 
          <FormInput 
            type="password" 
            id="password" 
            name="password" 
            handleChange={this.handleChange}
            value={this.state.password} 
            label='password'
            required
          /> 
          <div className="buttons"> 
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>  
              Sign in with google
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}
