import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import PayPalButton from "./Paypal"
import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../components/footer";
import Lovemaster from '../img/lovemasterapp.webp'
import Cookies from "js-cookie";

function HomePage() {
  const [hasSubscription, setHasSubscription] = useState(false);
  const { isAuthenticated } = useAuth()

  useEffect(() => {
    async function checkSubscription() {
      try {
        const token = Cookies.get('token');

        if (!token) {
          console.log("No hay token disponible.");
          return;
        }

        const api = axios.create({
          baseURL: 'https://apilovemaster.com/api',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        try {
          const response = await api.get('/check-subscription');
          console.log(response.data);
          const { hasSubscription } = response.data;
          setHasSubscription(hasSubscription);
        } catch (error) {
          console.error("Error al verificar la suscripción:", error);
        }
      } catch (error) {
        console.error("Error al configurar el API:", error);
      }
    }

    checkSubscription();
  }, []);

    return (
        <div>
            <section id="background">
                <div className="background-container" >
                    <h1 className="scale-up-bottom mr-60">EXPERIENCE THE GREATNESS OF <br/>   HAVING EVERYONE FALL IN LOVE <br />WITH YOU.</h1>

                    <p className="text-light title scale-up-bottom">Master attraction and dating.</p>
                    
                    {isAuthenticated ? (<>
                        <p className="btn-get-starteds"></p>
                    </>):(<>
                        <Link to="/register" className="btn-get-started font-mono scale-up-bottom">LEARN TO ATTRACT</Link>
                    </>)}


                </div>
            </section>

            <main id="main">
                
                <section id="cta" class="cta">
                    <div class="container">
                            <div class="text-center">
                                <div class="title text-light">
                                    <h2> The Why? and how? </h2>
                                </div>
                            
                                <div class="row">
                                    <div class="icon-box1">
                                    <h3 class="title">HAVE YOU EVER <br />WONDERED WHY...</h3>
                                    <p class="description"><br />-He didn't come to you.
                                        <br />-He didn't take ur <br />number?
                                        <br />-He didn't call?
                                        <br />-What makes other girls <br />more like-able when you're <br />prettier?.</p>
                                    </div>

                                    <div class="icon-box2">
                                    <h3 class="title">WOULD YOU LIKE TO <br />HAVE HIM...</h3>
                                    <p class="description"><br />-Make the first approach..
                                        <br />-Wanting to talk to you <br />more.
                                        <br />-Asking for your number.
                                        <br />-Calling you the next day.
                                        <br />-Ask you on a date right <br />after meeting you.
                                    </p>
                                    </div>

                                    <div class="icon-box3">
                                    <h3 class="title">LEARN TO:</h3>
                                    <p class="description"><br />-Boost your confidence.
                                        <br />-Attract every guy you like..
                                        <br />-Identify Red flags.
                                        <br />-Keep the right one.
                                        <br />-Get him to fall in love <br />w/you.
                                        <br />-Build a healthy <br />relationship.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                        
                <section id="services" class="services ">
                    <div className="container">

                        <img className="mt-40 ml-28 imagen" src={Lovemaster} alt="Img" />
                        
                        <hr className="mt-10"/>
                        
                        <div className="title mt-28">
                            <h2>learn with easy guides</h2>
                        </div>  

                        {isAuthenticated ? (

                            <>
                            
                                <div className="row">
                                    <div className="icon-box-container">
                                        <Link to="/" className="icon-box">
                                            <h4 className="title">BECOME YOUR BEST VERSION</h4>
                                            <p className="description">Skyrocket your self esteem <br /> to attract the best</p>
                                        </Link>

                                        <Link to="/" className="icon-box">
                                            <h4 className="title">What Makes A <br /> Woman <br />Desirable?</h4>
                                            <p className="description   ">Be irresistible and <br /> understand men <br /> psychology</p>
                                        </Link>

                                        <Link to="/" className="icon-box">
                                            <h4 className="title">Attract the <br />right one</h4>
                                            <p className="description">Read and attract someone <br /> who's your perfect fit.</p>
                                        </Link>

                                        <div className="black-bg"></div>

                                    </div>
                                </div>
                            </>
                            

                        ):(
                            <>

                                <div className="row">
                                    <div className="icon-box-container">
                                        <Link to="/register" className="icon-box">
                                            <h4 className="title">BECOME YOUR BEST VERSION</h4>
                                            <p className="description">Skyrocket your self esteem <br /> to attract the best</p>
                                        </Link>

                                        <Link to="/register" className="icon-box">
                                            <h4 className="title">What Makes A <br /> Woman <br />Desirable?</h4>
                                            <p className="description   ">Be irresistible and <br /> understand men <br /> psychology</p>
                                        </Link>

                                        <Link to="/register" className="icon-box">
                                            <h4 className="title">Attract the <br />right one</h4>
                                            <p className="description">Read and attract someone <br /> who's your perfect fit.</p>
                                        </Link>

                                        <div className="black-bg"></div>

                                    </div>
                                </div>

                            </>

                        )}
                        
                    </div>

                </section>

                <section className="get-now">

                    {hasSubscription ? (

                        <>
                        
                            <h1 className="mt-24 title">CONTACT US: INFO@LOVEMASTER.APP</h1>
                        
                        </>

                    ):(

                        <>

                        <h1 className="title">
                            GET ACCESS TODAY
                        </h1>

                        <p className="p-get">
                            Get access to educational content that will help you master love.
                        </p>
                        
                        {isAuthenticated ? (

                            <>
                                <PayPalButton/>
                            </>

                            ):(

                            <>
                                
                                <Link className="btn " to={"/register"}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="#0070BA"
                                            class="bi bi-paypal"
                                            viewBox="0 0 16 16"
                                            style={{ verticalAlign: 'middle' }}
                                        >
                                        <path d="M14.06 3.713c.12-1.071-.093-1.832-.702-2.526C12.628.356 11.312 0 9.626 0H4.734a.7.7 0 0 0-.691.59L2.005 13.509a.42.42 0 0 0 .415.486h2.756l-.202 1.28a.628.628 0 0 0 .62.726H8.14c.429 0 .793-.31.862-.731l.025-.13.48-3.043.03-.164.001-.007a.351.351 0 0 1 .348-.297h.38c1.266 0 2.425-.256 3.345-.910.379-.27.712-.603.993-1.005a4.942 4.942 0 0 0 .880-2.195c.242-1.246.13-2.356-.57-3.154a2.687 2.687 0 0 0-.76-.59l-.094-.061ZM6.543 8.820a.695.695 0 0 1 .321-.079H8.3c2.820 0 5.027-1.144 5.672-4.456l.003-.016c.217.124.4.27.548.438.546.623.679 1.535.450 2.71-.272 1.397-.866 2.307-1.663 2.874-.802.57-1.842.815-3.043.815h-.38a.873.873 0 0 0-.863.734l-.030.164-.480 3.043-.024.13-.001.004a.352.352 0 0 1-.348.296H5.595a.106.106 0 0 1-.105-.123l.208-1.320.845-5.214Z"/></svg>
                                        <p className="ml-2 texto">$25.00</p>
                                        
                                </Link>

                            </>

                            )}
                        
                        </>

                    )}


                    
                    

                </section>

            </main>

            <Footer/>


        </div>
    )
}

export default HomePage