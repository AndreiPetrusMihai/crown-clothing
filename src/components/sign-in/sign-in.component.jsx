import React from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component.jsx';
import CustomButton from '../custom-button/custom-button.component.jsx';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

class SignIn extends React.Component{

	constructor(props){
		super(props);

		this.state = {
			email: '',
			password: ''
		}
	}

	handleSubmit = async event =>{
		event.preventDefault();
		const {email,password} = this.state;

		try{
			await auth.signInWithEmailAndPassword(email,password);
		}catch(error){
			console.log(error);
		}

		this.setState({email: '', password: ''});
	}

	handleChange = event =>{
		const {value,name} = event.target;

		this.setState({ [name] : value });
	}

	render(){
		return(

			<div className='sign-in'>
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>
				<form onSubmit={this.handleSubmit}>
				
					<FormInput name='email' type='email' value={this.state.email}
					label='Email'
					handleChange={this.handleChange} required/>
					<FormInput name='password' type='password'
					label='Password' 
					value={this.state.password} required
					handleChange={this.handleChange}/>
					<div className='buttons'>
						<CustomButton type='submit'> SignIn </CustomButton>
						<CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>
						{' '}
						Sign in with Google{' '}
						</CustomButton>
					</div>
					
				</form>
			</div>
		)
	}
}

export default SignIn;