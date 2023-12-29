import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext'
import { useNavigate, Link } from 'react-router-dom'


function RegisterPage() {
    const { 
        register, 
        handleSubmit, 
        formState: { errors },
    } = useForm()
    const { signup, isAuthenticated, errors: registerErrors } = useAuth()
    const navigate = useNavigate()

    const [displayErrors, setDisplayErrors] = useState([]);

    useEffect(() => {
        if (isAuthenticated) navigate("/")
    }, [isAuthenticated, navigate])

    useEffect(() => {
        if (registerErrors.data && registerErrors.data.length > 0) {
            setDisplayErrors(registerErrors.data);

            const timer = setTimeout(() => {
                setDisplayErrors([]);
            }, 5000);
            
            return () => clearTimeout(timer);
        }
    }, [registerErrors.data]);

    const onSubmit = handleSubmit(async (values) => {
        signup(values);
    })

    return (
        <div>
            <div>
                <div class="containe">
                    <div class="box1">
                        
                        <section class="section">
                            <h3>Welcome back to <Link className="orgafarm" to="/">Lovemaster</Link></h3>
                            
                                <div class="login">
                                    <h2>Register</h2>
                                    
                                    <form className="form" onSubmit={onSubmit}>
                                        <input type="email" {...register('email', { required: true })}
                                            className='email'
                                            id='email'
                                            placeholder='Email'
                                        />
                                        {errors.email && (<p className='text-white'> Email is requerid </p>)}                                  
                                        <input type="password" {...register('password', { required: true })}
                                            className='password'
                                            id='password'
                                            placeholder='Password'
                                        />
                                        {errors.password && (<p className='text-white'> Password is requerid </p>)}
                                        
                                        
                                        <input type="username" {...register('username', { required: true })}
                                            className='email'
                                            placeholder='Username'
                                        />
                                        {errors.username && (<p className='text-white'> Username is requerid </p>)}
                                              
                                        <button className='login-btn' type="submit">
                                            Register
                                        </button>

                                        {
                                            displayErrors.map((error, i) => (
                                                <div className='p-2 text-white' key={i}>
                                                    {error}
                                                </div>
                                            ))
                                        }

                                        <p className='account'>
                                            Already have an account? <Link to='/login'>Login</Link>
                                        </p>
                                    </form>

                                    
                                </div>
                        </section>

                        <footer class="foote">
                            <p class="copyright">Copyright &copy; 2023 <Link to="/">Lovemaster</Link> All rights reserved</p>
                        </footer>
                    </div>

                    <div class="box2">
                        <div class="sentence">
                            {/*<a href="https://www.freepik.es/foto-gratis/pareja-playa-atardecer_997112.htm#query=parejas%20en%20el%20amanecer&position=31&from_view=search&track=ais">Imagen de kjpargeter</a> en Freepik*/}
                            <h4 className='text-light'>become a love master</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default RegisterPage