import React,{useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {login} from '../features/userSlice';
import { Formik } from 'formik';
import './Login.css';

const Login=()=>{
	const dispatch=useDispatch();
	return(
	<Formik 
		initialValues={
			{name:'',email:'',password:''}
		}
		validate={values=>{
			const errors={};
 		
 		if (!values.name) {
 			errors.name="Enter your Name";
 		}
 		
 		
 		
 		
 		if (!values.email) {
 			errors.email="Enter your Email";
 		}
 		else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
 			errors.email="Invalid email Id"
 		}

 		if (!values.password) {
 			errors.password="Enter your Password";
 		}
 		else if(values.password.length <5){
 			errors.password="Password must be more than 5 charecters";
 		}
 		
 	
 		
 			return errors;
		}}
		onSubmit={(values,{setSubmitting})=>{
		setTimeout(()=>{
			dispatch(login({
			name:values.name,
			email:values.email,
			password:values.password,
			loggedIn:true,
		}))
		},400)
		}}
		>
		{({
			values,
			errors,
			touched,
			handleChange,
			handleBlur,
			handleSubmit,
			isSubmitting
		})=>(
		
		<div className='login'>
			<form className='login_form'onSubmit={handleSubmit}>
			<h1>Login</h1>
			<input type='name' placeholder='Name' onChange={handleChange} id="name" value={values.name} onBlur={handleBlur}/>
			<span style={{color:'red'}}>
				{errors.name && touched.name && errors.name}</span>
				
			
			<input type='email' placeholder='Email'onChange={handleChange} id="email" value={values.email} onBlur={handleBlur}/>
			<span style={{color:'red'}}>
				{errors.email && touched.email && errors.email}</span>
				
			<input type='password' placeholder='Password'onChange={handleChange} id="password" value={values.password} onBlur={handleBlur}/>
			<span style={{color:'red'}}>
				{errors.password && touched.password && errors.password}</span>
				
			<button type='submit' className='submit_btn'>Submit</button>
				
			</form>
		</div>
		)}</Formik>
		

		
)}
export default Login;