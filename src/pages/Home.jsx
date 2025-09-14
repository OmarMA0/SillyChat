import React, { useState } from 'react'
import InputComponent from '../components/InputComponent';
import { Link , useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  const [formData , setFormData] = useState({
    email : '',
    password :'',
})
const [isLoading , setIsLoading] = useState(false)
const [error, setError] = useState('');
const handleInput=(field)=>(e)=>{
  setFormData(prev=>({
    ...prev,
    [field] : e.target.value
  }))
}
const handleSubmit = async (e)=> {
  e.preventDefault(); // Prevent form from refreshing page
    setIsLoading(true);
    
    try {
        const response = await fetch('/api/login', { // Changed from '/api/signup' to '/api/login'
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData) // Should contain email/username and password
        });
        
        if (response.ok) {
            const result = await response.json();
            console.log('Login Success:', result);
            
            // Store authentication token (if your API returns one)
            localStorage.setItem('authToken', result.token);
            // Or sessionStorage.setItem('authToken', result.token);
            
            // Redirect to dashboard/home page after successful login
            navigate('/dashboard'); // or wherever you want to redirect
            
        } else {
            const errorData = await response.json();
            console.error('Login Error:', errorData.message);
            // Show error message to user
            setError(errorData.message || 'Login failed');
        }
    } catch (error) {
        console.error('Network Error:', error);
        setError('Network error. Please try again.');
    } finally {
        setIsLoading(false);
    }
};
  return (
    <div className=' bg-[#bcb8b1]'>
        <h1 className='text-7xl bg-[#463f3a] m-2 inline-flex justify start font-display italic
        rounded-md border-2 p-3 border-[#bcb8b1] text-[#f4f3ee]'>Silly Chat</h1>
        <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center min-h-screen'>
          <InputComponent value = {formData.email} type='email' LabelString= "Email " onChange={handleInput('email')} />
          <InputComponent  value = {formData.password} type='password' LabelString= "password" onChange={handleInput('password')} />
          <button className='text-2xl bg-[#463f3a] m-2 hover:text-[#e0afa0] font-display italic
        rounded-md border-2 p-3 border-[#bcb8b1] text-[#f4f3ee]'>Sign in</button>
        <p className="text-center mt-4">Don't have an account yet?{' '}
            <Link to="/register" className="text-[#f4f3ee] hover:text-[#e0afa0] underline">
                 Sign up here
             </Link>
</p>
        </form></div>

  )}
export default Home