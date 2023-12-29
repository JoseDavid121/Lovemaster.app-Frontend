import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { useEffect, useState } from "react"
import axios from "axios"
import Cookies from "js-cookie"

function Footer() {

    const {isAuthenticated} = useAuth()
    const [hasSubscription, setHasSubscription] = useState(false);
  
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
    
  

    return(

        <div>

            <footer id="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row text-center content">
                            <div className="col-lg-3 col-md-6 footer-info text-center">

                                <h4 className="contact-us">contact us: info@lovemaster.app</h4>
                                        

                                    </div>



                                    {isAuthenticated ? (
                                        <>

                                            {hasSubscription ? (

                                                <>

                                                    <div className="col-lg-3 col-md-6 footer-links">
                                                        <h4>Links utils</h4>
                                                        <ul>
                                                            <li className="p-3"><Link to="/members">Page of the members</Link></li>
                                                            <li><Link to="/">Home</Link></li>
                                                        </ul>
                                                    </div>

                                                </>

                                            ):(


                                                <>

                                                    <div className="col-lg-3 col-md-6 footer-links">
                                                        <h4>Links utils</h4>
                                                        <ul>
                                                            <li><Link to="/">Home</Link></li>
                                                        </ul>
                                                    </div>

                                                </>

                                            )}
                                        
                                        </>
                                    ): (

                                        <>
                                        
                                        <div className="col-lg-3 col-md-6 footer-links">
                                            <h4>Links utils</h4>
                                            <ul>
                                                <li className="p-3"><Link to="/login">Login</Link></li>
                                                <li><Link to="/register">Register</Link></li>
                                            </ul>
                                        </div>
                                        
                                        </>

                                    )}

                                    <div className="col-lg-3 col-md-6 footer-contact">
                                        <h4>Connect with us!!</h4>
                                        <div className="social-links p-3">
                                            <a href="" class="facebook"><i class="bi bi-facebook"></i></a>
                                            <a href="https://www.instagram.com/lovemaster.app/?igshid=OGQ5ZDc2ODk2ZA%3D%3D" class="instagram"><i class="bi bi-instagram"></i></a>
                                        </div>
                                    </div>

                                <div className="col-lg-3 col-md-6 footer-newsletter">
                                    <h4>Copyright</h4>
                                    <p className="p-3">Copyright © 2023 Love Master - All Rights Reserved.
                                    </p>
                                </div>
                            </div>

                            <div className="footer-center">
                                <h4 className="text-center mt-12">General Description</h4>
                                    <p className="text-center mt-3">

                                    LoveMaster is here to help you Master love and relationships though: 
                                    <br /><br />
                                    Personal Development: We offer a holistic approach to personal growth, addressing both emotional and practical aspects to ensure integral development in the way you relate to others.
                                    <br /><br />
                                    Self-Esteem Enhancement: We implement proven techniques to strengthen self-esteem and personal confidence. Our platform acts as an ally in the journey towards authenticity and self-acceptance.
                                    <br /><br />
                                    Positive Attraction: We provide effective strategies to attract and connect with like-minded people, fostering meaningful relationships from the start.
                                    <br /><br />
                                    Relationship Development: From identifying toxic relationships to cultivating lasting connections, we offer tools and guidance for developing strong, positive relationships in all aspects of life.
                                    <br /><br />
                                    Retaining Positive Relationships: Through proven methods, we teach our users how to maintain and nurture the right relationships, creating a solid foundation for mutual growth and continued prosperity.                                                       Method:
                                    LoveMaster.app Incorporates emotional intelligence and positive psychology through short and easy guides that guarantee you a quick and effective learning. Ensuring that each user acquires and develops valuable and sustainable skills.Expected Outcomes:
                                    <br /><br />
                                    By joining LoveMaster.app, users can anticipate an improvement in their ability to relate effectively, their self-esteem, and the acquisition of knowledge to understand and cultivate healthy relationships.
                                    <br /><br />
                                    Join us on this journey of self-discovery and personal growth. Together, we will transform the way you relate, building authentic and lasting connections in all areas of your life. LoveMaster.app.                                             Expected Outcomes:
                                    <br /><br />
                                    By joining LoveMaster.app, users can anticipate an improvement in their ability to relate effectively, their self-esteem, and the acquisition of knowledge to understand and cultivate healthy relationships.
                                    <br /><br />
                                    Join us on this journey of self-discovery and personal growth. Together, we will transform the way you relate, building authentic and lasting connections in all areas of your life. LoveMaster.app 

                                    </p>
                                </div>
                            </div>
                    </div>
                </footer>

            <Link to="/" className="back-to-top d-flex align-items-center justify-content-center">
                <i className="bi bi-arrow-up-short"></i>
            </Link>


        </div>
    )
}

export default Footer