import React, { useState } from 'react'
import InputComponent from '../components/InputComponent'
import { Navigate } from 'react-router-dom';

const Signup = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    
    const [goToChat , setGoToChat]=useState(false)
    if(goToChat) {
      return <Navigate to="/Chats" />
    }

    const handleInputChange = (field) => (e) => {
        setFormData(prev => ({
            ...prev,
            [field]: e.target.value
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent form from refreshing page
        setIsLoading(true);
      try {
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData) // the input that the user entered
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Success:', result);
                // Redirect or show success message
            } else {
                console.error('Error:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    };
   /*
    const handleClick =()=> {
    setGoToChat( true);
    };
    */
  return (
    <div className=' bg-[#bcb8b1]'>
        <form className='flex flex-col justify-center items-center min-h-screen' onSubmit={handleSubmit}>
            <InputComponent LabelString= "Username " value={formData.username} onChange={handleInputChange('username')} />
            <InputComponent LabelString= "Email " type="email" value={formData.email} onChange={handleInputChange('email')} />
            <InputComponent LabelString= "Password " type="password" value={formData.password} onChange={handleInputChange('password')} />
            <button type="submit"
                    disabled={isLoading}
                    className='text-2xl bg-[#463f3a] m-2 hover:text-[#e0afa0] font-display italic
        rounded-md border-2 p-3 border-[#bcb8b1] text-[#f4f3ee]'>{isLoading ? 'Signing up...' : 'Sign up'}</button>
        </form>
    </div>
  )
}

export default Signup