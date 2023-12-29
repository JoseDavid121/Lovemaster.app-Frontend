import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "../components/footer";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie"

function MainContent() {

    AOS.init();
    const openPopup = () => {
        const popup = document.getElementById('popup');
        popup.style.display = 'block';
    };
  
    const openPopup1 = () => {
        const popup = document.getElementById('popup1');
        popup.style.display = 'block';
    };
    const openPopup2 = () => {
        const popup = document.getElementById('popup2');
        popup.style.display = 'block';
    };
    const openPopup3 = () => {
        const popup = document.getElementById('popup3');
        popup.style.display = 'block';
    };
    const openPopup4 = () => {
        const popup = document.getElementById('popup4');
        popup.style.display = 'block';
    };
    const openPopup5 = () => {
        const popup = document.getElementById('popup5');
        popup.style.display = 'block';
    };
    const openPopup6 = () => {
        const popup = document.getElementById('popup6');
        popup.style.display = 'block';
    };
    const openPopup7 = () => {
        const popup = document.getElementById('popup7');
        popup.style.display = 'block';
    };
    const openPopup8 = () => {
        const popup = document.getElementById('popup8');
        popup.style.display = 'block';
    };
    const openPopup9 = () => {
        const popup = document.getElementById('popup9');
        popup.style.display = 'block';
    };
    const openPopup10 = () => {
        const popup = document.getElementById('popup10');
        popup.style.display = 'block';
    };
    const openPopup11 = () => {
        const popup = document.getElementById('popup11');
        popup.style.display = 'block';
    };
    const openPopup12 = () => {
        const popup = document.getElementById('popup12');
        popup.style.display = 'block';
    };
    const openPopup13 = () => {
        const popup = document.getElementById('popup13');
        popup.style.display = 'block';
    };
    const openPopup14 = () => {
        const popup = document.getElementById('popup14');
        popup.style.display = 'block';
    };

    const openPopup15 = () => {
        const popup = document.getElementById('popup15');
        popup.style.display = 'block';
    };

    const openPopup16 = () => {
        const popup = document.getElementById('popup16');
        popup.style.display = 'block';
    };

    const openPopup17 = () => {
        const popup = document.getElementById('popup17');
        popup.style.display = 'block';
    };
    
  const closePopup = () => {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
  };

  const closePopup1 = () => {
    const popup = document.getElementById('popup1');
    popup.style.display = 'none';
  };

  const closePopup2 = () => {
    const popup = document.getElementById('popup2');
    popup.style.display = 'none';
  };

  const closePopup3 = () => {
    const popup = document.getElementById('popup3');
    popup.style.display = 'none';
  };

  const closePopup4 = () => {
    const popup = document.getElementById('popup4');
    popup.style.display = 'none';
  };

  const closePopup5 = () => {
    const popup = document.getElementById('popup5');
    popup.style.display = 'none';
  };

  const closePopup6 = () => {
    const popup = document.getElementById('popup6');
    popup.style.display = 'none';
  };

  const closePopup7 = () => {
    const popup = document.getElementById('popup7');
    popup.style.display = 'none';
  };

  const closePopup8 = () => {
    const popup = document.getElementById('popup8');
    popup.style.display = 'none';
  };

  const closePopup9 = () => {
    const popup = document.getElementById('popup9');
    popup.style.display = 'none';
  };

  const closePopup10 = () => {
    const popup = document.getElementById('popup10');
    popup.style.display = 'none';
  };

  const closePopup11 = () => {
    const popup = document.getElementById('popup11');
    popup.style.display = 'none';
  };

  const closePopup12 = () => {
    const popup = document.getElementById('popup12');
    popup.style.display = 'none';
  };

  const closePopup13 = () => {
    const popup = document.getElementById('popup13');
    popup.style.display = 'none';
  };

  const closePopup14 = () => {
    const popup = document.getElementById('popup14');
    popup.style.display = 'none';
  };

  const closePopup15 = () => {
    const popup = document.getElementById('popup15');
    popup.style.display = 'none';
  };

  const closePopup16 = () => {
    const popup = document.getElementById('popup16');
    popup.style.display = 'none';
  };

  const closePopup17 = () => {
    const popup = document.getElementById('popup17');
    popup.style.display = 'none';
  };

    return(
        <main id="main">
            <section className="banner">
                <div class="banner-container">
                    <div className="container">
                        <div className="banner-container">
                            <h1>Learner's HUB</h1>
                            <br/>
                            <h2 className="mt-5">Attract</h2>
                            <p>
                                you're in a ride to become your best confident version and attract the right people into your life.
                            </p>
                        </div>
                    </div>
                </div>

                                <div class="container">
                                    <ol>
                                    <li><Link to="/">Home</Link></li>
                                    </ol>
                                </div>

                                

            </section>

                            


                            <section className="work-process">
                            

                                <div className="container text-center">
                                    <div className="row content mt-5">
                                        <div className="col-md-4 contenedores mb-4" data-aos="fade-right">
                                            <button onClick={openPopup}>
                                                <div className="bg-anaranjado" >
                                                    <h2 className='Texto text-center'>Attracting Positive People Into Your Life</h2>
                                                </div>
                                            </button>


                                            {/*Attracting Positive People Into Your Life*/}
                                        </div>
                                        <div className="col-md-4 contenedores mb-4" data-aos="fade-left">
                                            <button onClick={openPopup1}>
                                                <div className="bg-anaranjado-1">
                                                    <h2 className='Texto text-center'>Are You Being Love Bombed</h2>
                                                </div>
                                            </button>

                                            {/*Are You Being Love Bombed*/}
                                        </div>
                                        <div className="col-md-4 contenedores mb-4" data-aos="fade-right">
                                            <button onClick={openPopup2}>
                                                <div className="bg-anaranjado-2">
                                                    <h2 className='Texto text-center'>Be Nice 8 Strategies to Pump Up Your Kindness Factor</h2>
                                                </div>
                                            </button>

                                            {/*Be Nice 8 Strategies to Pump Up Your Kindness Factor*/}
                                        </div>
                                    </div>

                                </div>

                                <div class="banner-container">
                                    <div class="container">
                                        <div class="banner-container">
                                            <h1 className="text-center mt-4 text-white ">Tap the image to open the content and become a love master!</h1>
                                        </div>
                                    </div>
                                </div>

                                <div className="container text-center">
                                    <div className="row content mt-5">
                                        <div className="col-md-4 contenedores mb-4" data-aos="fade-right">
                                            <button onClick={openPopup15}>
                                                <div className="bg-anaranjado" >
                                                    <h2 className='Texto text-center'>Self-Acceptance: What It Is and How To Get It</h2>
                                                </div>
                                            </button>


                                            {/*Attracting Positive People Into Your Life*/}
                                        </div>
                                        <div className="col-md-4 contenedores mb-4" data-aos="fade-left">
                                            <button onClick={openPopup16}>
                                                <div className="bg-anaranjado-1">
                                                    <h2 className='Texto text-center'>Get Out of Your Own Way Putting an End to Self Sabotaging Behavior</h2>
                                                </div>
                                            </button>

                                            {/*Are You Being Love Bombed*/}
                                        </div>
                                        <div className="col-md-4 contenedores mb-4" data-aos="fade-right">
                                            <button onClick={openPopup17}>
                                                <div className="bg-anaranjado-2">
                                                    <h2 className='Texto text-center'>Top 10 Self Confidence Building Tips</h2>
                                                </div>
                                            </button>

                                            {/*Be Nice 8 Strategies to Pump Up Your Kindness Factor*/}
                                        </div>
                                    </div>

                                </div>
                                
                                <div className="container text-center">

                                    <div class="row content mt-5">
                                        <div class="col-md-4 contenedores mb-4" data-aos="fade-left">
                                            <button onClick={openPopup3}>
                                                <div className="bg-anaranjado-3"> 
                                                    <h2 className='Texto text-center'>Dating Advice Updates for the Modern World</h2>
                                                </div>
                                            </button>

                                            {/*Dating Advice Updates for the Modern World */}
                                        </div>
                                        <div class="col-md-4 contenedores mb-4" data-aos="fade-right">
                                            <button onClick={openPopup4}>
                                                <div className="bg-anaranjado-4">
                                                    <h2 className='Texto text-center'>   Find a Compatible Partner</h2>
                                                </div>
                                            </button>
                                            {/*Find a Compatible Partner*/}
                                        </div>
                                        <div class="col-md-4 contenedores mb-4" data-aos="fade-left">
                                            <button onClick={openPopup5}>
                                                <div className="bg-anaranjado-5">
                                                    <h2 className='Texto text-center'>How Do You Know That Youve Met The One</h2>
                                                </div>
                                            </button>

                                            {/*How Do You Know That Youve Met The One*/}
                                        </div>
                                    </div>

                                </div>

                                <div class="banner-container">
                                    <div class="container">
                                        <div class="banner-container">
                                            <h1 className="text-center mt-4 text-white">Evaluate if this is what your looking for.</h1>
                                        </div>
                                    </div>
                                </div>

                                <div className="container text-center">

                                    <div class="row content mt-5">
                                        <div class="col-md-4 contenedores mb-4" data-aos="fade-right">
                                            <button onClick={openPopup6}>
                                                <div className="bg-anaranjado-6">
                                                    <h2 className='Texto text-center'>How-To-Attract-True-Love</h2>
                                                </div>
                                            </button>

                                            {/*How-To-Attract-True-Love*/}
                                        </div>
                                        <div class="col-md-4 contenedores mb-4" data-aos="fade-left">
                                            <button onClick={openPopup7}>
                                                <div className="bg-anaranjado-7">
                                                    <h2 className='Texto text-center'>How to Feel More Attractive on a First Date</h2>
                                                </div>
                                            </button>

                                            {/*How to Feel More Attractive on a First Date*/}

                                        </div>
                                        <div class="col-md-4 contenedores mb-4" data-aos="fade-right">
                                            <button onClick={openPopup8}>
                                                <div className="bg-anaranjado-8">
                                                    <h2 className='Texto text-center'>How to Feel More Comfortable on a First Date</h2>
                                                </div>
                                            </button>

                                            {/*How Do You Know That You’ve Met “The One”?*/}
                                        </div>
                                    </div>

                                </div>

                                <div className="container text-center">

                                    <div class="row content mt-5">
                                        <div class="col-md-4 contenedores mb-4" data-aos="fade-left">
                                            <button onClick={openPopup9}>
                                                <div className="bg-anaranjado-9" >
                                                    <h2 className='Texto text-center'>How to Live the Law of Attraction</h2>
                                                </div>
                                            </button>

                                            {/*How to Live the Law of Attraction*/}
                                        </div>
                                        <div class="col-md-4 contenedores mb-4" data-aos="fade-right">
                                            <button onClick={openPopup10}>
                                                <div className="bg-anaranjado-10">
                                                    <h2 className='Texto text-center'>I am a magnet for meaningful relationships</h2>
                                                </div>
                                            </button>
                                            {/*I am a magnet for meaningful relationships*/}
                                        </div>
                                        <div class="col-md-4 contenedores mb-4" data-aos="fade-left">
                                            <button onClick={openPopup11}>
                                                <div className="bg-anaranjado-11" >
                                                    <h2 className='Texto text-center'>Negotiating to Get What You Want</h2>
                                                </div>
                                            </button>
                                            {/*Negotiating to Get What You Want*/}
                                        </div>
                                    </div>
                                </div>


                                <div className="container text-center">

                                    <div class="row content mt-5 ">
                                        <div class="col-md-4 contenedores mb-4" data-aos="fade-right">
                                            <button onClick={openPopup12}>
                                                <div className="bg-anaranjado-12">
                
                                                    <h2 className='Texto text-center'>The Secret to Building up Your Dating Confidence</h2>

                                                </div>
                                            </button>

                                            {/*The Secret to Building up Your Dating Confidence*/}
                                        </div>

                                        <div class="col-md-4 contenedores mb-4" data-aos="fade-left">
                                            <button onClick={openPopup13}>
                                                <div className="bg-anaranjado-13"> 
                                                    
                                                    <h2 className='Texto text-center'>25-Ways-to-Attract-Your-Soulmate</h2>

                                                </div>
                                                
                                            </button>

                                            {/*25-Ways-to-Attract-Your-Soulmate*/}
                                        </div>

                                        <div class="col-md-4 contenedores mb-4" data-aos="fade-right">
                                            <button onClick={openPopup14}>
                                                <div className="bg-anaranjado-14"> 
                                                
                                                    <h2 className='Texto text-center '>What You Need to Know about Emotional Affairs</h2>
                                                
                                                </div>
                                                
                                            </button>

                                            {/*What You Need to Know about Emotional Affairs */}
                                        </div>

                                        <div id="popup" className="popup">
                                            <div className="popup-content">
                                                <div className="popup-scrollable-content">
                                                    <h3 className='title'>ATTRACTING POSITIVE PEOPLE INTO YOUR LIFE</h3>
                                                    <h1 className='text-dark mb-32'>Love Master.</h1>
                                                    <h2 className="text-red-600 title">ATTRACTING POSITIVE PEOPLE INTO YOUR LIFE</h2>
                                                    <p className='text-left ml-52 mr-52 text-dark'>

                                                        According to the law of attraction, we’re always transmitting positive or negative energy. Others 
                                                        pick up on this and respond likewise. 

                                                        <br />
                                                        <br />
                                                        
                                                        When you attract like-minded positive people, together you can focus on obtaining your desires. 
                                                        Positive people will encourage and support you. On the other hand, negative people will tell you 
                                                        that you can’t achieve your goals, and that they’re too hard or unreachable. 
                                                        
                                                        <br />
                                                        <br />

                                                        If you’re continually bombarded with negative phrases in your thinking, such as “I just can’t 
                                                        make ends meet,” “There’s never enough,” or “I just can’t seem to get ahead,” then you’re 
                                                        attracting more negativity into your life.  

                                                        <br />
                                                        <br />
                                                        
                                                        <p className='ml-14'>
                                                            ∙ The universe will always respond to your song, so make your song harmonious with 
                                                            your desires, not your frustrations! 
                                                        </p>
                                                        
                                                        <br />
                                                        <br />

                                                        If you find yourself focusing on your small paycheck, physical ailments or unfulfilling 
                                                        relationships, it’s time to make a change. Maybe your parents were role models of criticism 
                                                        instead of encouragement, or maybe you’ve always surrounded yourself with negative friends. 
                                                        
                                                        <br />
                                                        <br />

                                                        Whatever the reason, it’s time to break this cycle of negativity. Consider raising your standard 
                                                        of expectation. Find people to associate with who emit positive energy. 
                                                        
                                                        <br />
                                                        <br />

                                                        When seeking other positive people, think of people you admire and identify their traits you 
                                                        especially enjoy. You’ll be generally attracted to people who have a similar sense of humor or 
                                                        who hold the same set of values. 
                                                        
                                                        <br />
                                                        <br />

                                                        Here are some ways to attract positive people and create more positive energy in your life: 
                                                        
                                                        <br />
                                                        <br />

                                                        <p className='ml-12'>
                                                            1. Look for positive qualities in other people. It’s far easier to see someone’s faults before 
                                                            seeing their goodness. Challenge yourself to look only for a person’s good qualities. 
                                                            
                                                            <br />
                                                            <br />

                                                            2. Be aware of your own finest qualities and project these qualities to the world. This 
                                                            contributes to your self-awareness and increases your self-esteem. 
                                                            
                                                            <br />
                                                            <br />

                                                            3. Exercise compassion toward everyone, including yourself. Negative energy obsesses 
                                                            about unattainable goals. However, positive energy allows us to realize when we’re doing the 
                                                            best we can. 

                                                            <br />
                                                            <br />

                                                            Value others’ opinions. Positive energy is open-minded. Listen to all points of view and do 
                                                            your best to understand them, regardless of how different from your own they are. 
                                                            
                                                            <br />
                                                            <br />

                                                            Trying to change someone’s mind is usually futile, so, even if you’re right, save your energy, 
                                                            understand their opinion, and move on. 
                                                            
                                                            <br />
                                                            <br />

                                                            5. Refrain from judging. Give others the benefit of the doubt. Negative energy is critical in 
                                                            judging others and loves finding fault. Judging produces negative energy and attracts more of 
                                                            the same back to you. 
                                                            
                                                            <br />
                                                            <br />
                                                            
                                                            6. Be honest. Express your true self in thoughts, words, and actions. 
                                                            
                                                            <br />
                                                            <br />

                                                            7. Don’t be afraid to admit to having occasional negative thoughts and emotions. We’re all 
                                                            human, and negative thoughts are a part of human nature. The key is not to dwell on them. 
                                                            
                                                            <br />
                                                            <br />

                                                            8. Celebrate the success and happiness of others. Negative energy is jealous, but positive 
                                                            people are thrilled when others succeed. Use someone else’s success as a motivator to make 
                                                            you a better person. 
                                                            
                                                            <br />
                                                            <br />

                                                            9. Balance fulfillment and serving others. If you spend your life trying to please others, you 
                                                            may find yourself ignoring your own needs. Positive energy is balanced. 
                                                            
                                                            <br />
                                                            <br />

                                                            10.  Persevere in spite of fear or defeat. We all experience defeat and disappointment! Rather 
                                                            than bemoaning a setback, use it as a chance to learn something new and prepare for your 
                                                            next challenge. 

                                                            <br />
                                                            <br />

                                                            11.  Follow your dreams and desires. Embrace your joy every step of the way as you achieve 
                                                            your goals. 
                                                            
                                                            <br />
                                                            <br />
                                                        </p>

                                                        
                                                        People with positive energy approach the world with an open heart and a sense of humor. They 
                                                        refuse to be colored by cynicism and bitterness. They strive to see the best in the world around 
                                                        them, revel in the success of others, and diligently pursue their own goals. 

                                                        <br />
                                                        <br />

                                                        Becoming a positive person today will help you attract more positive people into your life 
                                                        tomorrow. The more positive people that surround you, the more you’ll feel joy, contentment, 
                                                        and fulfillment in your own life! 
                                                    </p>  

                                                    <button type="button" class="close" aria-label="Close" onClick={closePopup}>
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>

                                                </div>
                                            </div>
                                        </div>

                                        
                                        <div id="popup1" className="popup">
                                            <div className="popup-content">
                                                <div className="popup-scrollable-content">
                                                    <h3 className='title'>Are You Being Love-Bombed?</h3>
                                                    <h1 className='text-dark mb-32'>Love Master.</h1>
                                                    <h2 className="text-red-600 title">Are You Being Love-Bombed?  <br /> 3 Warning Signs and What You Can Do About It</h2>
                                                    <p className='text-left ml-52 mr-52 text-dark'>

                                                        Are you in a new relationship and feel it's too good to be true? Then, you may be the 
                                                        victim of love-bombing. Love-bombing is a form of manipulation often used by 
                                                        narcissists, sociopaths, and other types of toxic people in relationships. 
                                                        
                                                        <br />
                                                        <br />

                                                        It's a way of overwhelming you with affection, attention, and flattery, so you'll be more 
                                                        likely to let your guard down and give them what they want. Love-bombing is a type of 
                                                        emotional manipulation characterized by excessive displays of affection, flattery, and 
                                                        other attention. 

                                                        <br />
                                                        <br />
                                                        
                                                        The term was first coined in the 1970s by members of the Unification Church, who used 
                                                        it to describe their recruitment tactics. More recently, people use love-bombing in 
                                                        romantic relationships and platonic friendships to manipulate and control. 

                                                        <br />
                                                        <br />
                                                        
                                                        While love-bombing can occur in any relationship, we see it in romantic relationships, 
                                                        where one partner lavishes the other with gifts, attention, and compliments to gain 
                                                        control. 

                                                        <br />
                                                        <br />
                                                        
                                                        If you are being love-bombed, you may feel flattered at first, but eventually, you 
                                                        may start to feel suffocated and controlled. 

                                                        <br />
                                                        <br />
                                                        
                                                        Here are three warning signs to watch out for: 

                                                        <br />
                                                        <br />
                                                        
                                                        <p className='ml-14'>
                                                            1. Your partner is always available. A healthy relationship involves two people 
                                                            who have independent lives and can spend time apart. If your partner is always 
                                                            available and seems unable or unwilling to do anything without you, it may 
                                                            be a sign that they are trying to control you. 

                                                            <br />
                                                            <br />

                                                            <p className='ml-14'>
                                                                ● How to combat this warning sign: If you're concerned that your partner 
                                                                is always available, try to take time for yourself and do things without 
                                                                them. 

                                                                <br />
                                                                <br />

                                                                ● Go out with friends, pursue a hobby, or spend time alone. If your partner is 
                                                                genuinely interested in you, they will understand your need for space and 
                                                                will not try to control your time.
                                                            </p>

                                                            <br />

                                                            2. Your partner is always trying to please you. In a healthy relationship, both 
                                                            partners feel free to express their needs and wants. The relationship involves 
                                                            give-and-take, and both partners feel like they are being heard and respected. 
                                                            
                                                            <br />
                                                            <br />

                                                            <p className='ml-14'>
                                                                ● If your partner is always trying to please you and never seems to have any 
                                                                requirements, it may be a sign that they are trying to control you. 

                                                                <br />
                                                                <br />

                                                                ● How to combat this warning sign: Try to take some time to focus on 
                                                                their needs. Ask them what they want and listen to their answer. Show 
                                                                them that you care about their wants and needs and are willing to 
                                                                compromise. 
                                                            </p>

                                                            <br />
                                                            <br />
                                                            
                                                            3. Your partner is always trying to make you happy. While it's essential to make 
                                                            your partner feel loved and appreciated, a healthy relationship also usually 
                                                            involves some degree of conflict. 

                                                            <p className='ml-14'>
                                                                <br />
                                                                <br />
                                                                
                                                                ● If your partner is always trying to make you happy and never seems to get 
                                                                upset, it may be a sign that they are trying to control your emotions. 

                                                                <br />
                                                                <br />

                                                                ● How to combat this warning sign: Try to express your needs and wants 
                                                                openly and honestly. Tell them when you're upset or frustrated and listen 
                                                                to their perspective. Show them that you're willing to compromise and 
                                                                work through conflict. 

                                                                <br />
                                                                <br />
                                                                
                                                                ● If your partner is genuinely interested in you, they will understand 
                                                                your need for space and will not try to control you.
                                                            </p>

                                                        </p>
                                                        
                                                        <br />
                                                        <h4 className="mb-4"> Protect Yourself  </h4>
 
                                                        If you are being love-bombed, it is essential to take action to protect yourself. 

                                                        <br />
                                                        <br />

                                                        <h4>Here are some things you can do: </h4>

                                                        <br />
                                                        
                                                        <p className='ml-14'>

                                                            1. Set boundaries with your partner. Communicate your needs and wants clearly 
                                                            to your partner. If they are not respecting your limits, it may be time to end the 
                                                            relationship. 

                                                            <br />
                                                            <br />
                                                            
                                                            2. Seek support from friends and family. They can help you to feel better and 
                                                            make a plan to protect yourself. 

                                                            <br />
                                                            <br />
                                                            
                                                            3. Seek professional help. Therapy can improve your mental health, boost self-
                                                            awareness, and reduce stress. If you are in a relationship that you suspect is 
                                                            unhealthy, take action to protect yourself. A therapist can help you understand 
                                                            what is happening and how to protect yourself best. 
                                                            
                                                        </p>

                                                        <br />
                                                        <br />
                                                        
                                                        <h4>Love-bombing is a type of emotional manipulation that involves exaggerated 
                                                        displays of affection, flattery, and other forms of attention.  </h4>
                                                        
                                                        <br />
                                                        
                                                        If your partner appears to be constantly available or is always trying to please you and 
                                                        never seems to have any needs, these actions could be signs that they are attempting 
                                                        to control you. 

                                                        <br />
                                                        <br />
                                                        
                                                        In this case, openly and honestly express your needs and desires. Demonstrate your 
                                                        willingness to compromise and work through conflict. 

                                                        <br />
                                                        <br />
                                                        
                                                        If you are being love-bombed, you must take immediate action to protect yourself. Seek 
                                                        professional assistance if you feel unsafe or unsure of what to do. 
                                                    </p>  

                                                    <button type="button" class="close" aria-label="Close" onClick={closePopup1}>
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>

                                                </div>
                                            </div>
                                        </div>

                                                                                
                                        <div id="popup2" className="popup">
                                            <div className="popup-content">
                                                <div className="popup-scrollable-content">
                                                    <h3 className='title'>Be Nice 8 Strategies to Pump Up Your Kindness Factor</h3>
                                                    <h1 className='text-dark mb-32'>Love Master.</h1>
                                                    <h2 className="text-red-600 title">Be Nice: 8 Strategies to Pump up Your Kindness Factor</h2>
                                                    <p className='text-left ml-52 mr-52 text-dark'>

                                                        Because we all have so many things to accomplish in an average day, it’s sometimes necessary 
                                                        to remind ourselves to take the time to be kind to others. Your kindness will often be paid back 
                                                        with more kindness that makes your life easier, so being nice to others has double benefits! 

                                                        <br />
                                                        <br />
                                                        
                                                        Consider these ways to increase your kindness factor: 

                                                        <br />
                                                        <br />

                                                        <p className='ml-14'>

                                                            1. Listen better. Sure, you have your own business on your mind. Maybe you’re mentally 
                                                            rehearsing your list of things to do or wondering how on earth you’ll complete a project at 
                                                            work by next week. However, learning to focus on whoever is speaking shows politeness and 
                                                            that you’re interested in what they’re saying.  

                                                            <br />
                                                            <br />
                                                            
                                                            2. Slow down. The pace you’re keeping can cause you to overlook the feelings of others. 
                                                            Pushing your way through or rushing by others appears rude and unkind.  

                                                            <br />
                                                            <br />
                                                            
                                                            3. Acknowledge others who are nearby. It doesn’t take long to make eye contact, smile, and 
                                                            say, “Hi.” In fact, you can do all 3 of those things while you’re walking by. Giving simple 
                                                            acknowledgements of the presence of others is the kind, human thing to do.  

                                                            <br />
                                                            <br />
                                                            
                                                            4. Take an extra moment to help another person. If you notice a person is struggling to carry 
                                                            their bags at the grocery, say, “Let me get you a cart” and then do it. You never know when, 
                                                            sometime in the near future, you might benefit from the kindness of a stranger yourself. 

                                                            <br />
                                                            <br />
                                                            
                                                            5. Vow to yourself to be kind to others. Each morning when you arise, remind yourself of 
                                                            your personal edict to treat others nicely. When you keep the topic of kindness in the 
                                                            forefront of your mind by promising yourself to be nicer to others, you’re more likely to 
                                                            practice it regularly. 

                                                            <br />
                                                            <br />
                                                            
                                                            6. Once a month, take goodies to work to share. Your coworkers will feel the kindness from 
                                                            your very soul whenever you present them with a snack from time to time.  

                                                            <br />
                                                            <br />

                                                            <p className='ml-14'>

                                                                ● Whether you love to bake cookies, have an apple or peach tree in your back yard where 
                                                                you can pluck some fresh fruit, or grow your own tomatoes in the summer, sharing 
                                                                something to eat with others is a kind thing to do. It says, “I care about you.” 

                                                            </p>
                                                        
                                                            <br />
                                                            
                                                            7. Ponder kindness. When you occasionally reflect on what kindness means to you, you’ll be 
                                                            better able to practice the virtue in your daily life. Consider how closely patience and 
                                                            kindness are related: in order to be kind, you’ve likely got to be patient with others, no matter 
                                                            what else is going on in your own life.

                                                            <br />
                                                            <br />

                                                            8. Establish a “kindness” role model. Who do you know who’s exceptionally kind to others? 
                                                            Is there a very nice person you’d like to emulate?

                                                            <br />
                                                            <br />

                                                            <p className='ml-14'>

                                                                ● If you select someone to be your kindness role model, you’ll pick up some ideas on how 
                                                                to be a kind person, simply by watching him or her. You don’t have to share that you’ve 
                                                                got a kindness role model if you don’t want to.  
                                                                
                                                            </p>  

                                                            <br />

                                                        </p>

                                                        Being kind to others is an easy virtue to practice. It doesn’t take a lot of work or effort. However, 
                                                        if you decide to apply the suggestions above, you’ll see yourself as one of the kindest people 
                                                        you’ve ever known. When you keep kindness in your heart, you attract it back like a shining 
                                                        beacon in the dark. 

                                                    </p>  

                                                    <button type="button" class="close" aria-label="Close" onClick={closePopup2}>
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>

                                                </div>
                                            </div>
                                        </div>

                                                                                
                                        <div id="popup3" className="popup">
                                            <div className="popup-content">
                                                <div className="popup-scrollable-content">
                                                    <h3 className='title'>DATING ADVICE FOR THE MODERN WORLD</h3>
                                                    <h1 className='text-dark mb-32'>Love Master.</h1>
                                                    <h2 className="text-red-600 title">DATING ADVICE FOR THE MODERN WORLD</h2>
                                                    <p className='text-left ml-52 mr-52 text-dark'>

                                                        If you’ve been out of the dating world for a while and now you’re stepping back in, you might be 
                                                        surprised at what you find. Many things have changed! The same tips you grew up with may not 
                                                        always apply today. Technology, cultural norms, and other transformations have created a whole 
                                                        different universe.  

                                                        <br />
                                                        <br />
                                                        
                                                        Consider these strategies for successfully navigating the dating world in today’s society: 

                                                        <br />
                                                        <br />

                                                        <p className='ml-14'>

                                                            1. Returning phone calls immediately. One of the older dating rules that no longer applies is 
                                                            making a new romantic partner wait to hear back from you. The rule used to be to 
                                                            deliberately wait 48 hours or longer to get back to the person who called you.  

                                                            <br />
                                                            <br />
                                                            
                                                            <p className='ml-14'>

                                                                ● This is an old-fashioned rule that has changed in the modern world.  

                                                                <br />
                                                                <br />

                                                                ● You don’t have to wait for 48 hours or 72 hours before you let the other person know 
                                                                you’re interested or not interested. This type of advice doesn’t apply because the modern 
                                                                world makes it easier to track a person and see why they aren’t responding.  

                                                                <br />
                                                                <br />

                                                                ● If you’re ignoring a phone call but have time to post on Facebook, then it’s easy to 
                                                                destroy a potential relationship. The other person can see your posts on social media and 
                                                                be hurt. They may feel you’re playing games and trying to manipulate the 
                                                                communication.  

                                                            </p>

                                                            <br />
                                                            
                                                            2. Dating during the week. In the old days, dating usually occurred on the weekends. By 
                                                            forcing the couple to date on the weekends, the parents could control the situation easier and 
                                                            chaperone them.  

                                                            <br />
                                                            <br />

                                                            <p className='ml-14'>

                                                                ● Nowadays, you can feel free to pick a schedule that fits both of your needs and date on 
                                                                the weekdays. You don’t have to stick to old-fashioned ideas about weekends.  

                                                            </p>

                                                            <br />
                                                            
                                                            3. Social media. Today’s dating world is shaped by social media and online dating websites. 
                                                            This has created new opportunities and challenges for the dating community. It’s important 
                                                            not to ignore the role of social media while you date. 

                                                            <br />
                                                            <br />

                                                            <p className='ml-14'>

                                                                ● Social media can reveal information about your partner and their friends. You may see 
                                                                photos and posts about their family.  

                                                                <br />
                                                                <br />
                                                                
                                                                ● Social media can also help you keep in touch when you’re away from each other. 

                                                                ● Social media can help you connect with new people too. However, this creates both 
                                                                opportunities and temptations. Always be aware of scam artists and other fraud online. 
                                                                These thieves even show up in your social media accounts.  

                                                                <br />
                                                                <br />

                                                            </p>

                                                            4. Dressing up for dates. Today’s society is more casual at work, at home, and on dates. You 
                                                            don’t have to wear a suit or fancy dress to every date. Although you can dress up for certain 
                                                            events such as nice dinners or operas, you’re not obligated to wear your nicest clothes at all 
                                                            times.  

                                                            <br />
                                                            <br />

                                                            <p className='ml-14'>

                                                                ● Showing your casual side is normal and can help you connect with the other person. 

                                                            </p>

                                                            <br />  

                                                            
                                                            5. Expecting gifts. Previous generations expected that the man would bring small gifts such as 
                                                            flowers, perfume, or chocolates on the first date. Today’s modern world doesn’t put these 
                                                            old-fashioned expectations on couples. This is one change that reduces the stress on a 
                                                            beginning relationship. 

                                                            <br />
                                                            <br />


                                                            <p className='ml-14'>
                                                                
                                                                ● You’re not obligated to buy gifts for a person that you just started dating. Gift giving can 
                                                                be reserved for holidays, birthdays, and other special occasions.  

                                                                <br />

                                                            </p>

                                                            <br />

                                                            
                                                            The dating world is constantly changing. If you’re trying to find your soul mate, keeping up-to-
                                                            date on new trends can benefit you. 

                                                        </p>
                                                    </p>  

                                                    <button type="button" class="close" aria-label="Close" onClick={closePopup3}>
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>

                                                </div>
                                            </div>
                                        </div>

                                                                                
                                        <div id="popup4" className="popup">
                                            <div className="popup-content">
                                                <div className="popup-scrollable-content">
                                                    <h3 className='title'>12 ACTIONS THAT HELP YOU TO FIND APARTNER</h3>
                                                    <h1 className='text-dark mb-32'>Love Master.</h1>
                                                    <h2 className="text-red-600 title">12 ACTIONS THAT HELP YOU TO FIND A <br />PARTNER </h2>
                                                    <p className='text-left ml-52 mr-52 text-dark'>
                                                        
                                                        <br />
                                                        Long lasting relationships depend on compatibility, but the concept can be elusive. 
                                                        Magazine quizzes and dating sites promise to help you find your soulmate, but 
                                                        relationships are more complicated in the real world. 

                                                        <br />
                                                        <br />
                                                        
                                                        Your date’s profile may be a 100% match, but you struggle to make dinner 
                                                        conversation. You may meet someone you’re wild about, but they’re missing most of the 
                                                        qualities on your wish list. 
                                                        
                                                        <br />
                                                        <br />

                                                        The truth is that it takes effort and flexibility to nurture a relationship. Still, you’re 
                                                        more likely to succeed if you’re fundamentally compatible. Use this list to make your 
                                                        romantic life more harmonious. 

                                                        <br />
                                                        <br />
                                                        
                                                        <h4>Compatible Values</h4> 

                                                        <br />
                                                        
                                                        Values are a top priority because they shape your identity and guide your actions. 
                                                        You’re more likely to grow in the same direction if you share similar beliefs. 

                                                        <br />
                                                        <br />

                                                        <h4>Try these techniques for compatible values: </h4>

                                                        <br />

                                                        <p className='ml-14'>

                                                            1. Make a list. How much do you know about your own values? Spend time 
                                                            thinking about what matters to you and how you define a meaningful life. Your 
                                                            core values might include respect, kindness, integrity, and achievement. 

                                                            <br />
                                                            <br />
                                                            
                                                            2. Express your needs. Sometimes we try to conceal what we need in order to 
                                                            seem more agreeable in the early days of dating. Be fair to others and yourself 
                                                            by being honest from the start. 

                                                            <br />
                                                            <br />

                                                            3. Practice your faith. Interreligious marriages can work out. However, it’s 
                                                            important for you and your partner to be able to respect each other’s 
                                                            commitments and feel authentic following your own path. 

                                                            <br />
                                                            <br />
                                                            
                                                            4. Support each other. Your values will evolve and run into challenges. Working 
                                                            as a team and empathizing with each other can keep you united. 

                                                        </p>
                                                        
                                                        <br />
                                                        <br />
                                                        
                                                        <h4>Compatible Lifestyles </h4>

                                     
                                                        <br />
                                                        
                                                        On a practical level, you’ll probably have fewer conflicts if you can accommodate each 
                                                        other’s daily routines without major compromises. That can make the remaining give 
                                                        and take easier. 

                                                        <br />
                                                        <br />
                                                        
                                                        <h4>Consider these ideas: </h4> 
                                      
                                                        <br />

                                                        <p className='ml-14'>

                                                            1. Define your relationship. Are you hoping to get married or would you be happy 
                                                            living together long term? Do you envision an equal partnership or another 
                                                            arrangement? Ensure that your relationship goals are aligned. 

                                                            <br />
                                                            <br />
                                                            
                                                            2. Discuss family planning. It will be difficult to stay together if there are major 
                                                            differences in your views about parenting. It also helps to have a cordial 
                                                            relationship with your future in-laws. 

                                                            <br />
                                                            <br />
                                                            
                                                            3. Manage your money. The way you handle your finances will have a major 
                                                            impact on your future. Before making a commitment, share your financial history 
                                                            and your philosophy about spending, saving, and earning. 

                                                            <br />
                                                            <br />
                                                            
                                                            4. Channel your ambitions. Having a similar work ethic is an area that’s often 
                                                            overlooked. Otherwise, you might argue about who is lazy and who spends too 
                                                            much time at the office. 

                                                            <br />
                                                            <br />
                                                            
                                                            5. Keep house. Chores are often an issue for anyone living under the same roof. 
                                                            Can you share responsibility and find a respectful middle ground if your cleaning 
                                                            standards are worlds apart? 

                                                        </p>

                                                        <br />
                                                        <br />
                                                        
                                                        <h4>Compatible Interests</h4>

                                                        <br />
                                                        
                                                        Are different tastes in music really a deal breaker? You might want a partner who loves 
                                                        opera, or you may be able to work around that. Decide which lifestyle aspects are the 
                                                        most important to you. 

                                                        <br />
                                                        <br />

                                                        <h4>Keep these ideas in mind: </h4>

                                                        <br />
                                                        

                                                        <p className='ml-14'>

                                                            1. Spend time together. Ask yourself what you’re trying to accomplish. Enjoying 
                                                            the same activities can reinforce your friendship and create shared memories. 
                                                            However, you can enjoy each other’s company even when you’re working on 
                                                            different projects. 

                                                            <br />
                                                            <br />
                                                            
                                                            2. Share goals. Achievements like raising money for charity or learning new dance 
                                                            steps can draw you closer together too. Find something you both can enjoy. 
                                                            
                                                            <br />
                                                            <br />

                                                            3. Call your friends. You’ll be happier and stronger as a couple if you maintain 
                                                            your connection with other family and friends. It can be exhausting to rely on 
                                                            your spouse for all your needs. Share your opera subscription with another 
                                                            aficionado. 

                                                            <br />
                                                            <br />

                                                        </p>
                                                        
                                                        Remember that you deserve love and happiness. There are many singles who could 
                                                        be compatible partners for you if you clarify your expectations and keep an open mind. 

                                                    </p>  

                                                    <button type="button" class="close" aria-label="Close" onClick={closePopup4}>
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>

                                                </div>
                                            </div>
                                        </div>                             
                                        
                                        <div id="popup5" className="popup">

                                            {/* Al contenedor le agregamos su contenido a base de otro div y le ponemos la clase popup content*/}

                                            <div className="popup-content">

                                                {/* Metemos a todo el contenido en la clase popup-scrollable para que se pueda hacer un scroll y navegar por 
                                                la pagina emergente de forma vertical */}

                                                <div className="popup-scrollable-content">

                                                    {/* Le asignamos la clase titulo al h3 y ponemos la informacion del pdf, dejando como encabezado el h3 y el h1 
                                                    (va variando segun el pdf) */}

                                                    <h3 className='title'>How Do You Know That You’ve Met “The One”?</h3>
                                                    <h1 className='text-dark mb-32'>Love Master.</h1>

                                                    {/* Le ponemos otra vez el titulo esta vez resaltado en rojo ya que asi esta
                                                    en el pdf */}

                                                    <h2 className="text-red-600 title">How Do You Know That You’ve Met “The One”?</h2>

                                                    {/* agregamos un parrafo con clases de bootstrap y el contenido del pdf */}

                                                    <p className='text-left ml-52 mb-10 mr-52 text-dark'>

                                                        We’re all pretty certain when we’ve met someone who isn't “the one”. But, what if you 
                                                        think that maybe you’ve met the One you’ve been looking for all these years? There’s 
                                                        no way to be 100% certain, but there are several clues you can look for. 

                                                        <br />
                                                        <br />
                                                        
                                                        We’ve all thought that we’ve met the partner of our dreams, only to realize later that we 
                                                        were 100% wrong. This article can help you separate the One from “not the one”. 

                                                        <br />
                                                        <br />
                                                        
                                                        <h4>Keep these great relationship clues in mind: </h4>

                                                        <br />

                                                        {/* Agregamos otro parrafo dentro del parrafo para que tenga un margin a la izquierda de 14px y
                                                        se haga el efecto de un espaciado interno ya que asi esta puesto en el pdf */}

                                                        <p className='ml-14'>

                                                            1. You’re able to settle conflict efficiently and effectively. All relationships have 
                                                            conflict. Many people erroneously believe that good relationships are completely 
                                                            free of conflict, but that simply isn’t true. When you have two or more people 
                                                            together, there will eventually be conflict. 

                                                            <br />
                                                            <br />

                                                            {/* Agregamos otro parrafo dentro del parrafo para que tenga un margin a la izquierda de 14px y
                                                            se haga el efecto de un espaciado interno ya que asi esta puesto en el pdf */}

                                                            <p className='ml-14'>

                                                                ● The ability to find an acceptable solution to your conflicts with relative 
                                                                ease and speed is a great sign that you may have met your ideal partner. 

                                                                <br />
                                                                <br />

                                                            </p>
                                                            
                                                            2. You feel comfortable being yourself. It’s natural to present your best possible 
                                                            self when you start dating someone. However, the truth always comes out 
                                                            eventually. 

                                                            <br />
                                                            <br />

                                                            {/* Se repite todo el codigo */}
                                                            
                                                            <p className='ml-14'>

                                                                ● Do you feel completely comfortable being yourself with your partner? If 
                                                                you have to keep pretending to be something you’re not, this partner 
                                                                probably isn’t the One. 

                                                                <br />
                                                                <br />
                                                            </p>
                                                            
                                                            3. You have the same lifestyle goals as your partner. Your personalities might 
                                                            mesh perfectly, but if you want different things, you’re not with your ideal person. 

                                                            <br />
                                                            <br />
                                                            
                                                            <p className='ml-14'>

                                                                ● The big things like having kids, where you want to live, and long-
                                                                term goals need to be very similar. Otherwise, the compromises that 
                                                                need to be made will likely be too significant for both of you to be happy.

                                                                <br />
                                                                <br />

                                                            </p>
 
                                                            
                                                            4. Your values are similar. People with vastly different values cannot get along 
                                                            over the long haul. People with different values make different decisions, 
                                                            take different actions, and want different things.

                                                            <br />
                                                            <br />

                                                            5. It’s easy for you to make each other happy. Is it easy for you to make your 
                                                            partner happy? Or do you have to jump through a bunch of uncomfortable hoops 
                                                            each day to keep the peace? 

                                                            <br />
                                                            <br />
                                                            
                                                            <p className='ml-14'>

                                                                ● That’s not to say that your mere presence has to send your partner over 
                                                                the moon. It simply means that you and some attention and consideration 
                                                                keep your partner pretty happy. 

                                                            </p>

                                                            <br />
                                                            <br />
                                                            
                                                            6. The simple things are enjoyable together. Can you walk together at the local 
                                                            park together and have a good time? Or do you have to be on a tropical cruise? 
                                                            Can you order pizza, watch a movie, and enjoy yourselves? Or do you have to 
                                                            eat at an expensive restaurant and go to a show to call it a good night? 

                                                            <br />
                                                            <br />
                                                            
                                                            7. Your partner sees you the way you want to be seen. We all want to be viewed 
                                                            in a certain light. Does your partner see you that way? We generally don’t like 
                                                            people that view us in a way we find unflattering. 

                                                            <br />
                                                            <br />
                                                            
                                                            8. You’re both comfortable spending time apart. If you have to keep each other 
                                                            within 50 feet at all times, your relationship likely isn’t a healthy one. 

                                                            <br />
                                                            <br />

                                                            <p className='ml-14'>
                                                                ● It’s important for both of you to be able to do separate activities, 
                                                                either alone or with friends or family, without creating any drama. 
                                                            </p>

                                                            <br />
                                                            <br />
                                                            
                                                            9. You both feel respected, appreciated, and loved. This is a big one. Having 
                                                            your partner in your life should feel good. If you feel respected, appreciated, and 
                                                            loved, you probably feel pretty good and pretty good together! 

                                                            <br />
                                                            <br />

                                                        </p>

                                                         
                                                        The possibility that you’ve met your ideal partner is an exciting one. It’s not always 
                                                        easy to determine the long-term compatibility of a partner, but great relationships 
                                                        have many things in common. If your relationship is easy, enjoyable, and you share a 
                                                        common vision for the future, you’re on the right track. 
                                                        
                                                    </p>  

                                                    {/* finalmente ponemos un button con clases de bootstrap para que se vea el icono
                                                    de x como si fuese un cierre de pagina*/}

                                                    <button type="button" class="close" aria-label="Close" onClick={closePopup5}>
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>

                                                </div>
                                            </div>
                                        </div>

                                                                                
                                        <div id="popup6" className="popupD">
                                            <div className="popup-content">
                                                <div className="popup-scrollable-content">
                                                    <h1 className='text-dark mt-96'>Love Master.</h1>
                                                    <h2 className="text-red-600 title mb-96">HOW   TO   ATTRACT   TRUE   LOVE  </h2>
                                                    
                                                    <hr className='lds'/>

                                                    <p className='text-center ml-52 mr-52 text-dark texto '>

                                                        <h5 className='mt-20 mb-32'>HOW TO ATTRACT TRUE LOVE </h5> 
                                                        
                                                        
                                                        For every beauty there is an eye somewhere to see it. 
                                                        <br />
                                                        <br />
                                                        For every truth there is an ear somewhere to hear it. 
                                                        <br />
                                                        <br />
                                                        For every love there is a heart somewhere to receive it. 
                                                        <br />
                                                        <br />
                                                        <h4>~Ivan Panin</h4>
                                                    
                                                    </p>  

                                                    <p className="mt-96 mb-20">2</p>

                                                    <hr className='lds'/>


                                                    <h3 className='text-dark mt-20'>HOW TO ATTRACT TRUE LOVE </h3>
                                                    <h1 className='text-dark mb-40'>Love Master.</h1>

                                                    <h2 className="text-red-600 title mb-40">Love</h2>

                                                    <h2 className='text-dark texto mb-40 mr-56 ml-56 text-left'>

                                                        LOVE – that elusive emotion that captures our hearts, minds, and imagination! We all want it, but 
                                                        the big question that plagues many of us is, “How <br /><br />do I get it?” 

                                                        <br /><br />
                                                        <br /><br />
                                                        
                                                        This guide answers that all-important question and will set you on the road to welcoming love into 
                                                        your life, whether you want it for the first time, <br /><br />had it and lost it, or just want to feel more of it in 
                                                        your current relationship.
                                                    </h2>

                                                    <h3 className='text-dark'>
                                                        Love doesn’t make the world go ‘round. Love is what makes the ride worthwhile. 
                                                        <br />
                                                        <h2 className='text-dark texto mb-40'>~Franklin P. Jones</h2>
                                                    </h3>

                                                    <p className="mt-96 mb-20">3</p>

                                                    <hr className='lds'/>

                                                    <h3 className='text-dark mt-20 mb-40'>HOW TO ATTRACT TRUE LOVE</h3>
                                                    <h2 className="text-red-600 title mb-40">PREPARE TO ATTRACT <br />TRUE LOVE INTO YOUR LIFE </h2> 

                                                    <p className='text-dark text-left ml-56 mr-56 mb-96'>

                                                        Being mentally prepared to allow love into your life can be the catalyst that sets everything in 
                                                        motion for you. 
                                                        <br />
                                                        <br />
                                                        Being mentally prepared to allow love into your life can be the catalyst that sets everything in 
                                                        motion for you. 
                                                        
                                                        <br />
                                                        <br />

                                                        If you’re single and used to living alone, you may be pretty set in your ways. You may have a 
                                                        “single” mindset and, regardless of how much you desire love, you can’t picture disrupting your life 
                                                        to let someone else in. Sharing your life with another would entail major changes to your lifestyle. 
                                                        
                                                        <br />
                                                        <br />

                                                        Let’s face it; the single lifestyle is pretty ego-centric. You go where you want, when you want, and 
                                                        with whom you want. Letting someone else in would change some of that. But does love really 
                                                        cramp your style? Or does it give you wings? Only you can decide. 
                                                        
                                                        <br />
                                                        <br />

                                                        <p className='ml-14'>

                                                            • If you truly feel that it cramps your style, or have other doubts about love, then your mind 
                                                            may be subconsciously stopping you from acquiring a lasting relationship. 
                                                            
                                                            <br />
                                                            <br />
                                                            
                                                            • If you truly believe that love gives you wings, then your subconscious will undoubtedly 
                                                            orchestrate letting love into your life. 

                                                        </p>

                                                    </p>

                                                    <p className='mb-20'>4</p>

                                                    <hr className='lds'/>

                                                    <h3 className='text-dark mt-20'>HOW TO ATTRACT TRUE LOVE</h3>
                                                    <h1 className='text-dark mb-40'>Love Master.</h1>

                                                    <p className='text-left ml-56 mr-56 text-dark'>

                                                        Spending time in prayer or self-reflection can help you clarify whether you really do want love in 
                                                        your life. Open up to more people so you can get used to sharing your thoughts, ideas, and opinions 
                                                        with others. 

                                                        <br />
                                                        <br />
                                                        
                                                        There are also physical actions you can take to help you prepare yourself mentally for 
                                                        sharing your life with another: 

                                                        <br />
                                                        <br />
                                                        
                                                        1. Make room in your house. Is there room in your house for another person? You may 
                                                        want to do some cleaning so that another person and their stuff would fit in your house. 
                                                        2. Make room in your bed. Instead of sleeping right smack in the middle and taking up 
                                                        the entire bed, move over to one side a bit. 

                                                        <br />
                                                        <br />

                                                        3. Make room in your garage. If you have a double car garage, but only one car fits in, do 
                                                        some cleaning here, also, to make room for someone else’s car. 

                                                        <br />
                                                        <br />
                                                        
                                                        All these things can help your mind get ready for love and in fact – expect it! Instead of pushing 
                                                        love away, you’ll be ready to welcome it into your heart and mind. 

                                                        <br />
                                                        <br />
                                                        
                                                        <p className='text-center mt-40'>

                                                            People are lonely because they build walls instead of bridges. 
                                                            <br />
                                                            <h4>~Joseph F. Newton </h4>

                                                        </p>
 
                                                    </p>

                                                    <p className='mt-56 mb-20'>5</p>

                                                    <hr className='lds'/>

                                                    <h3 className='text-dark mt-20'>HOW TO ATTRACT TRUE LOVE</h3>
                                                    <h2 className="text-yellow-500 mb-20 titleL ml-56 mr-56 mt-56">Believe in Yourself</h2>
                                                    
                                                    <h4 className='text-dark text-left ml-56 mr-56'>

                                                        Finding love is really a quest within yourself more than a quest outside of you. You deserve love! 
                                                        Know that you deserve to be happy. When you believe in yourself, you open the doors to love. If you 
                                                        feel that you’re undeserving of love, then you push it further and further away from you. 

                                                        <br />
                                                        <br />
                                                        
                                                        Invariably, others will follow your lead in how you treat yourself and treat you the same way. If you 
                                                        treat yourself with love, others will instinctively love you. If you treat yourself with respect, you can 
                                                        command the respect of others. Never accept disrespect or mistreatment - from yourself or others! 
                                                        
                                                        <br />
                                                        <br />

                                                        Lastly, be yourself. Being yourself is being true to yourself. When you act like you’re someone 
                                                        you’re not, others will, sooner or later, see through the façade. The dishonesty that started out to 
                                                        make you look good will make you look undesirable instead! 

                                                        <br />
                                                        <br />
                                                        
                                                        In your quest for love, your belief in yourself will draw others to you. You can see this in action all 
                                                        around you. Those who exude self-confidence always attract more attention from the opposite sex. 
                                                        Recognize your strengths and abilities and be proud of who you are! 
                                                        
                                                        <br />
                                                        <br />

                                                        <p className='texto text-center mt-40'>

                                                            You, yourself, as much as anybody in the entire universe,
                                                            <br />  
                                                            <br />
                                                            deserve your love and affection. 
                                                            <br />
                                                            <br />


                                                        </p>

                                                        <p className='text-center'>
                                                            ~Buddha
                                                        </p>

                                                    </h4>

                                                    <p className='mb-20 mt-40'>6</p>

                                                    <hr className='lds'/>

                                                    <h3 className='text-dark mt-20'>HOW TO ATTRACT TRUE LOVE</h3>
                                                    <h1 className='text-dark mb-40'>Love Master.</h1>
                                                    <h2 className="text-yellow-500 mb-20 titleL ml-56 mr-56 mt-56">Put the Past in the Past</h2>
                                                   
                                                    
                                                    <p className='text-dark text-left ml-56 mr-56'>

                                                        It’s important to let go of past loves and forgive those who have hurt you. Even though you think 
                                                        you may be punishing the one who hurt you, the only one you’re really hurting is yourself. 

                                                        <br />
                                                        <br />
                                                        
                                                        It’s very difficult to welcome new love into your life when you’re holding onto such negative 
                                                        emotions about prior experiences with love.  

                                                        <br />
                                                        <br />
                                                        
                                                        How can you let go of such powerful negative emotions? 

                                                        <br />
                                                        <br />
                                                        
                                                        <h4 className="mono"> Try these techniques: </h4>

                                                        <br />

                                                        <p className='ml-14'>

                                                                                                                
                                                            1. Use affirmations. When you feel a negative emotion about the past, replace it with a 
                                                            statement that evokes a positive emotion instead. It’s like recording over a tape or CD. 

                                                            <br />
                                                            <br />
                                                            
                                                            • For example, if you feel unattractive because your old partner said you were ugly, an 
                                                            affirmation can accentuate something positive about your looks, such as: “I am a valuable and 
                                                            cherished person.” 


                                                        </p>

                                                    </p>

                                                    <p className='mb-20 mt-40'>7</p>

                                                    <hr className='lds'/>

                                                    <h3 className='text-dark mt-20'>HOW TO ATTRACT TRUE LOVE</h3>

                                                    <p className='text-left ml-56 mr-56 mt-20 text-dark'>

                                                        <p className='ml-14'>

                                                            • Repeat positive statements when you first wake up, throughout the day, and right before 
                                                            you go to sleep. The repetition helps create and strengthen new neural pathways in your mind while 
                                                            the old, negative pathways fall into disarray. 
                                                            
                                                            <br />
                                                            <br />

                                                            • Let one of your positive affirmations be that you forgive the one who hurt you. Perhaps, in 
                                                            reflection, you can realize how you learned something very valuable from that experience and 
                                                            you’re better off today because of what you learned. 

                                                            <br />
                                                            <br />

                                                            • Use positive events as they happen to affirm and strengthen your new, positive beliefs. 

                                                            <br />
                                                            <br />
                                                            
                                                            2. Write in a journal. Writing your thoughts in a journal can help you reflect on your 
                                                            thoughts and release negative emotions. One good thing about this method is that you can write 
                                                            anything you want and no one will see it except you. 

                                                            <br />
                                                            <br />
                                                            
                                                            3. Visualize. You can visualize your negative emotions as pieces of paper that you let go into 
                                                            the wind and watch them disappear, never to return. 

                                                            <br />
                                                            <br />

                                                        </p>

                                                        Once you’ve released the past and put it where it belongs (in the past), you’re free to focus on your 
                                                        present to bring new love into your life. 

                                                        <br />
                                                        <br />

                                                        <p className='text-center mt-20'>
                                                                                                                    
                                                            To forgive is to set a prisoner free and discover that the prisoner was you. 
                                                            <br />
                                                            ~Lewis B. Smedes 

                                                        </p>


                                                        <br />
                                                        <br />
                                                        
                                                        
                                                        <h2 className="text-yellow-500 mb-20 titleL mt-32">Get Clear – What Do You Want?</h2>

                                                    </p>

                                                    <p className='mb-20 mt-40'>8</p>

                                                    <hr className='lds'/>
                                                    
                                                    <h3 className='text-dark mt-20'>HOW TO ATTRACT TRUE LOVE</h3>
                                                    <h1 className='text-dark mb-40'>Love Master.</h1>

                                                    <h4 className='text-left ml-56 mr-56 text-dark'>

                                                        What do you want in a mate? Do you want someone who’s tall? Dark hair or light? Is a sense of 
                                                        humor important to you? What about kids? When? Are you looking for someone who shares the 
                                                        same faith? Write down a list of everything you want – the more detailed the better. 

                                                        <br />
                                                        <br />
                                                        
                                                        Once you have your list, make this person real to you. 
                                                        
                                                        <br />
                                                        <br />
                                                        
                                                        Some of the ways you can make them real include: 
                                                        
                                                        <br />
                                                        <br />
                                                        
                                                        <p className='ml-14'>

                                                            • Journaling 
                                                            <br />
                                                            • Daydreaming 
                                                            <br />
                                                            • Praying or Meditating 

                                                        </p>

                                                        <br />
                                                        <br />
                                                        
                                                        Focus on what you do want, rather than what you don’t want. Imagine it vividly as if you already 
                                                        have this love. Feel the joy and other positive emotions you get when you’re with this person. Use 
                                                        all your senses and envision your times together – walking along the beach, cuddled up by the 
                                                        fireplace, going to one of your favorite places with them, and more. 
                                                        
                                                        <br />
                                                        <br />
                                                        
                                                        Imagining every last detail and actually feeling the emotions are an important part of your vision! 
                                                        
                                                        <br />
                                                        <br />
                                                        
                                                        Once you’ve gained clarity, let it go. Think of this person as someone you’d love to be with, but 
                                                        avoid obsessing over it and feeling desperate to get it, as desperation will only attract more
                                                        
                                                        <br />
                                                        <br />

                                                    </h4>
        
                                                    <p className='mb-20 mt-40'>9</p>

                                                    <hr className='lds'/>

                                                    <h3 className='text-dark mb-20 mt-20'>HOW TO ATTRACT TRUE LOVE</h3>

                                                    <h4 className='text-dark ml-56 mr-56 text-left'>

                                                        feelings of desperation back to you with events that lead to further desperation. Positive emotions, 
                                                        like how much fun this person is, are the type of emotions you want to feel. 

                                                        <br />
                                                        <br />
                                                        
                                                        Jack Canfield of the Chicken Soup for the Soul series of books, attracted the woman of his dreams 
                                                        by putting in his order to the universe! So can you! Just get clear on what you want, put in your 
                                                        order, and let it go. This, along with taking inspired action, will set things in motion for you to 
                                                        welcome the love of your life. 

                                                        <br />
                                                        <br />
                                                        
                                                        <p className='text-center texto'>

                                                            If you don’t know where you are going, you will probably end up somewhere else. 
                                                            <br />
                                                            <br />

                                                            <h4>

                                                                ~Lawrence J. Peter 

                                                            </h4>
     
                                                        </p>

                                                        <br />
                                                        <br />

                                                    </h4>

                                                    
                                                    
                                                    <h2 className="text-red-600 title mb-20"> GIVE LOVE TO RECEIVE IT</h2> 
                                                    
                                                    <h4 className='text-dark text-left ml-56 mr-56'>

                                                        People most often gravitate toward others who are much like themselves. If you’re looking for love, 
                                                        you want to be a loving person yourself in order for other loving people to enjoy being around you.

                                                        <br />
                                                        <br /> 
                                                        
                                                        Consider being the “personification of love:” 

                                                        <br />
                                                        <br /> 

                                                        <p className='ml-14'>
                                                            
                                                            • Love others unconditionally.
                                                            <br /> 
                                                            <br />
                                                            • Be open to others. 
                                                            <br />
                                                            <br />
                                                            • Be giving. 

                                                        </p>

                                                    </h4>

                                                    <p className='mb-20 mt-40'>10</p>

                                                    <hr className='lds'/>

                                                    <h3 className='text-dark mt-20'>HOW TO ATTRACT TRUE LOVE</h3>
                                                    <h1 className='text-dark mb-40'>Love Master.</h1>
                                                    
                                                    <h4 className='text-dark text-left ml-56 mr-56'>

                                                        • Focus on what others want, rather than what you want. 
                                                        <br />
                                                        <br />
                                                        • Have a positive outlook on life. 

                                                        <br />
                                                        <br />
                                                        
                                                        In giving more love, you’ll attract more love back to you and find the love you’re looking for. 
                                                        
                                                        <p className='text-center texto mt-20'>

                                                            If you judge people, you have no time to love them. 
                                                            <br />
                                                            <br />
                                                            <h4>

                                                                ~Mother Teresa 

                                                            </h4>
                                                        </p>
                                                    </h4>

                                                    
                                                    <h2 className="text-red-600 title mb-20">TAKE ACTION</h2> 
                                                    
                                                    <h4 className='text-left text-dark ml-56 mr-56'>

                                                        Regardless of the amount of preparation you go through in getting ready to welcome your true love, 
                                                        it still comes down to action to put your dreams into motion. You most likely won’t meet the love of 
                                                        your life if you just sit at home. Yes, love can come knocking on your door, but in most cases you 
                                                        must go out to meet it! 

                                                        <br />
                                                        <br />
                                                    
                                                        However, you may find love in the most unexpected places. Take, for instance, the grocery store. 
                                                        You may be a frequent visitor to this store and never saw anyone whom you were interested in. But 
                                                        once you’ve opened yourself to receiving love, things can suddenly take a turn for the better. You 
                                                        might just run into your love-to-be on aisle 5!
                                                    
                                                    </h4>
                                                    
                                                    <p className='mb-20 mt-40'>11</p>

                                                    <hr className='lds'/>

                                                    <h3 className='text-dark mb-20 mt-20'>HOW TO ATTRACT TRUE LOVE</h3>

                                                    <p className='text-left ml-56 mr-56 text-dark'>

                                                        So talk to those around you in your daily routines. The person standing in line in front of you at the 
                                                        bank might be the one you’ve been looking for. The person you meet in the park as you’re jogging 
                                                        could be the love of your life. You just never know, but once you’re open to receiving, you’re inviting 
                                                        love in, so let it come in! 
                                                        
                                                        <h1 className='mt-10 mb-10'>Where Should You Go to Find the Love You Seek? </h1>
                                                        
                                                        Go where your interests and hobbies take you. If you like rock music, go to a concert. If you like 
                                                        books, join a book club where members compare notes. If you want a person with strong 
                                                        convictions in their faith, go to church. Shared interests are great ice-breakers and can help your 
                                                        love endure. 

                                                        <br />
                                                        <br />
                                                        
                                                        Remember to let go, relax, and avoid obsessing about finding love. Often love comes to you when 
                                                        you least expect it.  

                                                        <br />
                                                        <br />
                                                        
                                                        A note of caution about online dating: Meeting someone interesting online is common these 
                                                        days, but the internet must be handled with extreme care. Before you agree to meet your virtual 
                                                        friend offline in the real world, do your research. 

                                                        
                                                        <br />
                                                        <br /> 
                                                        
                                                        Are they willing to give you their address and phone number? Do they have friends? Always 
                                                        remember to check their friends online and the comments they leave for them. You’ll learn a lot 
                                                        about your friend this way.  

                                                    </p>

                                                    <p className='mb-20 mt-40'>12</p>

                                                    <hr className='lds'/>

                                                    <h3 className='text-dark mt-20'>HOW TO ATTRACT TRUE LOVE</h3>
                                                    <h1 className='text-dark mb-40'>Love Master.</h1> 
                                                    
                                                    <p className='text-dark'>
                                                        
                                                        Don’t cry for a man who’s left you, the next one may fall for your smile. 
                                                        <br />
                                                        <br />
                                                        <h4>

                                                            ~Mae West 

                                                        </h4>
                                                        
                                                            
                                                    </p>
                                                    
                                                    
                                                    <h2 className="text-red-600 title mt-40 mb-20">CREATING A ROMANTIC<br />ENVIRONMENT WITH FENG SHUI  </h2> 
                                                    
                                                    <h4 className='ml-56 mr-56 text-left text-dark'>

                                                        Use a compass to determine the southwestern section of your home, which is the area for 
                                                        manifesting love in your life. 

                                                        <br />
                                                        <br />
                                                        
                                                        Which part of your home falls in the southwestern sector? Ideally, it should be the bedroom. But 
                                                        don’t worry: even if it isn’t the bedroom, you can still use Feng Shui to help you attract love. 
                                                        Decorate your home with these Feng Shui strategies to help bring love into your life. 
                                                        
                                                        <br />
                                                        <br />

                                                        <h2 className="text-yellow-500 mb-10 mt-10 titleL">Bedroom</h2> 

                                                        <br />
                                                        <br />
                                                        
                                                        Here are some Feng Shui techniques to turn your bedroom into a love magnet: 

                                                        <br />
                                                        <br />
                                                        
                                                        <p className='ml-14'>

                                                            • The headboard of the bed (preferably a double bed) should face the east or south wall of 
                                                            the room. 

                                                        </p>
                                                    </h4>

                                                    
                                                    <p className='mb-20 mt-40'>13</p>

                                                    <hr className='lds'/>

                                                    <h3 className='text-dark mb-20 mt-20'>HOW TO ATTRACT TRUE LOVE</h3>
 
                                                    <h4 className='text-left text-dark ml-56 mr-56'>

                                                        <p className='ml-14'>

                                                            • Keep some rose quartz in the southwestern corner. The crystals can be heart-shaped, or 
                                                            spherical. 
                                                            <br />
                                                            <br />
                                                            • Have everything in pairs in the room: two chairs for instance, or a pair of foot mats beside 
                                                            the bed, two bedside lamps. 
                                                            <br />
                                                            <br />
                                                            • There should be no mirrors in front of the bed. 
                                                            
                                                        </p>

                                                        <br />
                                                        <br />
                                                        
                                                        <h2 className="text-yellow-500 mt-10 titleL">kitchen</h2> 
                                                        
                                                        <br />
                                                        <br />

                                                        If your kitchen is in the southwestern corner, you have a challenge before you. The kitchen is ruled 
                                                        by the element of fire, while the element of the southwest is earth. Fire destroys the earth. Not to 
                                                        worry, Feng Shui still has the solution: 

                                                        <br />
                                                            <br />
                                                        
                                                        <p className='ml-14'>

                                                            • Place some ceramic (earth) objects here. They can be a pair of male and female ducks, a 
                                                            rooster and a hen, or other such “couples.” 
                                                            <br />
                                                            <br />
                                                            • Keep a pink or red teapot in the kitchen. 
                                                            <br />
                                                            <br />
                                                            • Enhance the energy of earth in the kitchen with utensils made of stone or clay, a marble 
                                                            cutting board, or a quartz mortar and pestle. 
                                                            <br />
                                                            <br /> 
                                                            • Keep potted plants, especially those with pink flowers, in ceramic or clay pots.
                                                            <br />
                                                            <br /> 
                                                            • Paint the kitchen walls in shades
                                                            
                                                        </p>

                                                    </h4>

                                                                                          
                                                    <p className='mb-20 mt-40'>14</p>

                                                    <hr className='lds'/>

                                                    <h3 className='text-dark mt-20'>HOW TO ATTRACT TRUE LOVE</h3>
                                                    <h1 className='text-dark mb-40'>Love Master.</h1>
                                                    
                                                    <h4 className='text-dark text-left ml-56 mr-56'>

                                                        <p className='ml-14'>

                                                            • Keep some crystal ware in the kitchen. Crystals dissipate negative energy. 

                                                        </p>

                                                        <br />
                                                        <br />
                                                        
                                                        <h2 className="text-yellow-500 mt-10 titleL">Bathroom</h2> 
                                                        
                                                        <br />
                                                        <br />

                                                        Water, the element of the bathroom, and earth, the element of the southwest, don’t make good 
                                                        bedfellows. If your bathroom is in the southwestern section of the house, use the following Feng 
                                                        Shui tips to neutralize this placement of the bathroom: 

                                                        <br />
                                                        <br />

                                                        <p className='ml-14'>

                                                            • Ensure the color scheme is pink and white with gold accents. 
                                                            
                                                            <br />
                                                            <br />
                                                            
                                                            • Mirrors in front of the toilet are a bad idea, but you can place mirrors in front of water 
                                                            faucets. The spraying water from faucets creates good chi (energy). By the way, keep the toilet lid 
                                                            down at all times. 
                                                            
                                                            <br />
                                                            <br />

                                                            • The bath mat can be heart-shaped or have floral motifs. 
                                                            • To discourage negative chi, you can tie red ribbons on any pipes under the toilet and sink. 
                                                            • Place a pair of rubber ducks on the rim of the bathtub.
                                                            
                                                            <br />
                                                            <br /> 
                                                            
                                                        </p>
                                                        
                                                        <h2 className="text-yellow-500 mt-10 titleL">Living Room</h2> 
                                                        
                                                        <br />
                                                        <br />

                                                        The busy aura of a living room isn’t conducive to romance. Besides, many living rooms have a fire 
                                                        element represented by a fireplace, gas stove, or television set.

                                                    </h4>

                                                    <p className='mb-20 mt-40'>15</p>

                                                    <hr className='lds'/>

                                                    <h3 className='text-dark mt-20 mb-20'>HOW TO ATTRACT TRUE LOVE</h3>
                                                    
                                                    <h4 className='text-left text-dark ml-56 mr-56'>

                                                        Follow these Feng Shui tips to create a balance: 

                                                        <br />
                                                        <br />

                                                        <p className='ml-14'>

                                                            • Avoid displaying abstract art in the living room. Instead, have paintings of couples and 
                                                            romance.
                                                            
                                                            <br />
                                                            <br />

                                                            • The color scheme of the living room should be red, rose, and gold. Repeat these colors in 
                                                            the lampshades or bulbs. 
                                                            
                                                            <br />
                                                            <br />

                                                            • Create a centerpiece of fresh flowers for the coffee table. 
                                                            
                                                            <br />
                                                            <br />

                                                            • Tall and ponderous column shapes in this area block good chi. 
                                                            
                                                            <br />
                                                            <br />

                                                            • The furniture should be made from wicker or stone – no glass. Short and squat shapes are 
                                                            best. 
                                                            
                                                            <br />
                                                            <br />

                                                            • Add a feminine touch to the room with pink lace and ribbons.
                                                            
                                                            <br />
                                                            <br />

                                                            • Keep love chi bubbling with a stone fountain (preferably rose quartz) with river pebbles.
                                                            
                                                            <br />
                                                            <br /> 

                                                        </p>
                                                        
                                                        <h2 className="text-yellow-500 mt-40 titleL">Home Office or Study</h2> 

                                                        <br />
                                                        
                                                        The study in the southwestern section of your home is not advisable as business and pleasure don’t 
                                                        mix. The southeast is the ideal area for this room. However, Feng Shui has a way around this too! 
                                                        
                                                        <br />
                                                        <br />
                                                        
                                                        <p className='ml-14'>

                                                            • The study or work desk should be made from wood of a light color. It should not be huge 
                                                            and heavy, or have any metal or glass. 
                                                            
                                                            <br />
                                                            <br />

                                                            • The furniture should have rounded edges, not destructive sharp corners. 

                                                        </p>

                                                    </h4>

                                                    <p className='mb-20 mt-40'>16</p>

                                                    <hr className='lds'/>

                                                    <h3 className='text-dark mt-20'>HOW TO ATTRACT TRUE LOVE</h3>
                                                    <h1 className='text-dark mb-40'>Love Master.</h1>
                                                    
                                                    <h4 className='text-left ml-56 mr-56 text-dark mb-96'>

                                                        <p className='ml-14 mb-20'>

                                                            • A little stone fountain or statue of Kwannon, the Chinese Goddess of Compassion, will help. 
                                                            <br />
                                                            <br />
                                                            • Keep some potted and hanging plants in this room to represent the earth element. 
                                                            <br />
                                                            <br />
                                                            • You can keep pink topaz or rose quartz crystal here. 
                                                            <br />
                                                            <br />
                                                            • The phone can be pink or red. 
                                                            <br />
                                                            <br />
                                                            • Hollow copper wind chimes can deflect negative chi. 

                                                        </p>


                                                        <br />
                                                        <br />
                                                        
                                                        With a little bit of preparation and opportunity, you can welcome love into your life with confidence 
                                                        and joy in your newfound relationship. Before you know it, you and your new love can be flying 
                                                        together on the wings of love and living happily ever after. 

                                                        <br />
                                                        <br />
                                                        
                                                        <p className='texto text-center mt-40'>

                                                            Though no one can go back and make a brand new start, 
                                                            <br />
                                                            <br /> 
                                                            anyone can start from now and make a brand new ending. 
                                                            <br />
                                                            <br />
                                                            <h4>

                                                                ~Author Unknown

                                                            </h4>
                                                      
                                                        </p>
                                                    </h4>
                                                    
                                                    <p className='mb-20'>17</p>
                                                   
                                                    <button type="button" class="close" aria-label="Close" onClick={closePopup6}>
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>

                                                </div>
                                            </div>
                                        </div>

                                                                                
                                        <div id="popup7" className="popup">
                                            <div className="popup-content">
                                                <div className="popup-scrollable-content">
                                                    <h3 className='title'>How to Feel More Attractive on a First Date</h3>
                                                    <h1 className='text-dark mb-32'>Love Master.</h1>
                                                    <h2 className="text-red-900 title">How to Feel More Attractive on a First Date</h2>
                                                    <p className='text-left ml-52 mr-52 text-dark mb-20'>

                                                        First dates are filled with anticipation and anxiety. When you're going out on a first date, you 
                                                        want to make a good first impression. To ensure you put your best foot forward with confidence, 
                                                        try these suggestions to feel more attractive inside and out. 

                                                        <br />
                                                        <br />
                                                        
                                                        <h4>Feel Beautiful on Your First Date: </h4>

                                                        <br />
                                                        
                                                        <p className='ml-14'>
                                                            
                                                            <ul>
                                                                <li><strong>1. Shower yourself with compliments.</strong> Lift your spirits by giving yourself a pep talk. Focus on 
                                                                your best qualities from your sparkling eyes to your infectious laugh. Tap into the power of 
                                                                positive thinking and affirm all that's good. </li>

                                                                <br />
                                                                
                                                                <li><strong>2. Stock up on small talk.</strong> You'll feel more confident if the conversation flows smoothly on 
                                                                your date. Supply yourself with interesting topics from the daily news. Think about the books 
                                                                and movies you've recently enjoyed or a funny story about something your dog did. Make 
                                                                sure your list is varied or else you may spend all evening droning on about the same thing. </li>
                                                             
                                                                <br />

                                                                <li><strong>3. Exercise. Moderate exercise releases those feel-good endorphins.</strong> It's a healthy way to reduce 
                                                                daily stress and boost your energy levels in case you want to dance all night. Visit the gym 
                                                                before work or go for a walk at lunch. </li>

                                                                <br />
                                                                
                                                                <li><strong>4. Practice relaxation techniques.</strong> If you're feeling nervous, spend a few minutes on a 
                                                                relaxation method that works for you. You could engage in breathing meditation or listen to 
                                                                soothing music. </li>

                                                                <br />
                                                                
                                                                <li><strong>5. Focus on others.</strong> One of the most effective ways to feel better about yourself is to think 
                                                                about others. Concentrate on the person you're dating. Help them to feel comfortable and 
                                                                accepted. </li>

                                                                <br />
                                                                
                                                                <li><strong>6. Smell good.</strong> Pick a fragrance that suits your personality, whether it's romantic and floral or 
                                                                intense and spicy. Layer different products with the same scent to get a longer lasting effect.</li>
                                                                
                                                                <br />
                                                            </ul>
                                                        </p>

                                                        <h4>Look Good on Your First Date:</h4> 

                                                        <p className='ml-14'>
                                                            <br />
                                                            <ul>
                                                                <li><strong>1. Wear a flattering outfit.</strong> Wear something that you know looks good on you. Fitted pants 
                                                                and a classic sweater will look appropriate for most activities. Ensure your shoes look tidy 
                                                                even if you're wearing sneakers.</li>
                                                        
                                                                <br />
                                                                
                                                                <li><strong>7. Add interest with accessories.</strong> Liven up a simple outfit with well-chosen accessories. A 
                                                                colorful scarf can enhance your complexion. Show off your artistic side by mixing a few 
                                                                necklaces in different shapes and lengths.</li>
                                                                
                                                                <br />
                                                                
                                                                <li><strong>8. Make the most of your hair.</strong> Hair is one of the first things that people notice about your 
                                                                appearance. If you've got great hair, flaunt it. In any case, pick a style that will hold up no  matter what the weather does. </li>

                                                                <li><strong>9. Select the right eyeglass frames for your face.</strong> Glasses are another attention grabber. If you 
                                                                wear glasses, invest in attractive frames that complement the shape of your face.</li>
                                                                
                                                                <li><strong>10.  Maintain good posture.</strong> Good posture can make you look thinner, younger, and healthier. It 
                                                                also helps you breathe correctly so you'll have more energy. Hold your abdomen and 
                                                                buttocks firm. Keep your shoulders lowered and relaxed. Distribute your weight evenly over </li>
                                                                both feet. 
                                                                
                                                                <li><strong>11.  Go for a makeover.</strong> It's always a good idea to update your makeup and hair occasionally. If 
                                                                you've been considering updating your look, visit a salon in advance of your big date. The 
                                                                makeup counters at department stores can also be a great place to get expert advice and free 
                                                                samples of new cosmetics.</li>
                                                                
                                                                <li><strong>12.  Get a good night's sleep.</strong> Adequate sleep is essential to keep your skin looking its best. Plan 
                                                                on an early night the day before your date so you get your beauty rest.</li>
                                                            </ul>
                                                        </p>

                                                                                      <br />

                                                        Every date is an opportunity to grow and learn. If you feel attractive, your inner beauty will 
                                                        shine through. With a few easy steps, you can make a good first impression and feel relaxed 
                                                        while you and your companion get to know each other. 
                                                    </p>  

                                                    <button type="button" class="close" aria-label="Close" onClick={closePopup7}>
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>


                                                </div>
                                            </div>
                                        </div>
                                                                                
                                        <div id="popup8" className="popup">
                                            <div className="popup-content">
                                                <div className="popup-scrollable-content">
                                                    <h3 className='title'>How to Feel More Comfortable on a First Date</h3>
                                                    <h1 className='text-dark mb-32'>Love Master.</h1>
                                                    <h2 className="text-red-600 title">How to Feel More Comfortable on a First Date</h2>
                                                    <p className='text-left ml-52 mr-52 text-dark'>

                                                        With the right attitude, you can enjoy yourself in any situation, especially a first date! After all, 
                                                        dating is meant to be fun and exciting! 

                                                        <br />
                                                        <br />
                                                        
                                                        These are some practical steps to take before, during, and after your date to increase your 
                                                        comfort level. 
                                                        
                                                        <br />
                                                        <br />

                                                        <h4>
                                                            Steps to take before your first date: 
                                                        </h4>
                                             
                                                        <br />
                                                        
                                                        <p className='ml-14'>

                                                            <ul>

                                                                <li><strong>1. Keep yourself healthy.</strong> Everything is less stressful if you take good care of your health. You 
                                                                know the drill: Ensure that you regularly get adequate sleep and rest, eat a healthy diet, and 
                                                                make exercise part of your daily routine. </li>
                                                                
                                                                <br />
                                                            
                                                                <li><strong>2. Let go of unrealistic expectations.</strong> Not every encounter has to be a love connection. 
                                                                Celebrate your willingness to take risks and enjoy getting to know someone new. You may 
                                                                make a new friend or just practice your dating skills. </li>
                                                                
                                                                <br />
                                                            
                                                                <li><strong>3. Plan some low-key activities.</strong> No matter where you live, there are lots of options for a first 
                                                                date that will encourage you to have a good time. </li>
                                                                
                                                                <br />
                                                            
                                                                <p className='ml-14'>

                                                                    ● Make it a daytime date. For a first meeting, you may want to get together for lunch or a 
                                                                    cup of coffee. This way, you can keep it brief. You can always make plans for your 
                                                                    second date if you discover that you want to spend more time together. 
                                                                    
                                                                    <br />
                                                                
                                                                    ● Share in a fun activity. Rent a paddleboat or go rock climbing. Visit a museum or stroll 
                                                                    through a public garden. 

                                                                </p>
                                                                
                                                                <br />
                                                            
                                                                <li><strong>4. Wear something comfortable.</strong> You'll feel more relaxed if you wear an outfit that you know 
                                                                is flattering. Knits or stylish jeans can make you feel comfortable and look polished. </li>
                                                                
                                                                <br />
                                                            </ul>
                                                        </p>

                                                        <h4>Steps to take during your first date: </h4>
                                                                
                                                        <p className='ml-14'>
                                                            <ul>
                                                                <br />
                                                                <br />
                                                            
                                                                <li><strong>1. Prepare some small talk.</strong> Ensure that the conversation will flow smoothly by preparing 
                                                                some topics in advance. Check the news for interesting stories or relate an interesting 
                                                                experience from your own life. Sharing an activity on a date provides a natural topic of 
                                                                conversation. </li>
                                                                
                                                                <br />
                                                            
                                                                <li><strong>2. Focus on the other person.</strong> Switching your attention to another person is always a great way 
                                                                to make you feel more positive. Ask open-ended questions that make it easy for your date to 
                                                                talk about their background and aspirations. </li>
                    
                                                                <br />
                                                            
                                                                <li><strong>3. Offer to share expenses.</strong> It's always courteous to offer to share expenses. If the other 
                                                                person asked you out and now wants to pay for everything, accept graciously. You can always return the favor by treating them the next time you go out or by getting them a small 
                                                                gift.</li>
                                                                
                                                                <br />
                                                                
                                                                <li><strong>4. Plan your departure.</strong> It's natural to feel awkward about how to say goodbye. If you don't 
                                                                want to kiss or hug, put out your hand to shake. Decide if you want to get together again so 
                                                                you'll be ready to encourage or deflect making future plans. </li>
                                                                
                                                                <br />
                                                                <br />
                                                            </ul>
                                                        </p>

                                                        <h4>Steps to take after your first date: </h4>
                                                        
                                                        <br />
                                                        <br />

                                                        <p className='ml-14'>
                                                        
                                                            <ul>

                                                                <li><strong>1. Treat yourself to something enjoyable.</strong> Give yourself something to look forward to after 
                                                                your date. </li>

                                                                <br />
                                                                
                                                                <p className='ml-14'>

                                                                    ● If you love to talk things over, plan to review the experience with a friend. A quick chat 
                                                                    can help you clarify your impressions and get another perspective on how things went.  
                                                                    
                                                                    <br />
                                                                    <br />

                                                                    <li>● Reward yourself with something you love. It can be as simple as a bubble bath or 
                                                                    watching a favorite movie. <strong>Dating can be challenging so keep your spirits up by giving 
                                                                    yourself the encouragement you deserve.</strong></li>
                                                                    
                                                                </p>

                                                                <br />
                                                                
                                                                <li><strong>2. Avoid over-analyzing the date.</strong> Stay positive by avoiding any tendency to exaggerate the 
                                                                importance of trivial details. Be sensitive to the other person's wishes, but express your 
                                                                interest in continuing to see each other if that is what you want.</li>

                                                                <br />
                                                            </ul>
                                                        </p>
                                                                                                                        
                                                        A first date doesn't have to cause anxiety if you take a proactive approach to making things 
                                                                comfortable for yourself and others. Let go of your worries and enjoy yourself! 
                                                    
                                                    </p>  
                                                    
                                                    <button type="button" class="close" aria-label="Close" onClick={closePopup8}>
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>


                                                </div>
                                            </div>
                                        </div>

                                                                                
                                        <div id="popup9" className="popup">
                                            <div className="popup-content">
                                                <div className="popup-scrollable-content">
                                                    <h3 className='title'>How to Live the Law of Attraction </h3>
                                                    <h1 className='text-dark mb-32'>Love Master.</h1>
                                                    <h2 className="text-red-600 title">How to Live the Law of Attraction </h2>
                                                    <p className='text-left ml-52 mr-52 text-dark mb-20'>
                                                     
                                                    The Law of Attraction has intrigue more people than ever. So what is the Law of Attraction and 
                                                    how can it benefit you?  

                                                    <br />
                                                    <br /> 
                                                    
                                                    It's actually a quite simple concept. If you focus on the positive, you'll attract the positive. If you 
                                                    focus on the negative, you'll attract the negative. 
                                                    
                                                    <br />
                                                    <br /> 
                                                    
                                                    Because of its simplicity, some people think this is utterly ridiculous, yet the Law of Attraction 
                                                    has been proven by countless people around the world throughout the ages. If you have an open 
                                                    mind and are willing to give it a try, you can live the life of your dreams. 
                                                    
                                                    <br />
                                                    <br /> 
                                                    
                                                    <h4>Here are some simple tips and suggestions you can use to live the Law of Attraction: </h4>
                                                    
                                                    <br /> 
                                                        
                                                        <p className='ml-14'>

                                                            <ul>

                                                                <li><strong>1. Rid yourself of negative thoughts and feelings.</strong> Negativity will ultimately drive away the 
                                                                positive things you deserve, so you must learn how to erase your mind of anything negative. 
                                                                Quite honestly, this will require some practice, but it's worth it! </li>
                                                                
                                                                <br /> 

                                                                <p className='ml-14'>

                                                                    ● For example, if you find yourself standing in a long line and complaining about it, stop 
                                                                    complaining and be thankful that you're well enough to stand in that line. 
                                                                    
                                                                    <br />
                                                                    <br /> 
                                                                    
                                                                    ● If you're five dollars short to purchase something and wishing you weren't so poor, turn 
                                                                    that around to be thankful you have any money at all.  
                                                                    
                                                                    <br />
                                                                    <br /> 
                                                                    
                                                                    <li>● After you consciously do this enough times, it will become second nature.<strong>The more you 
                                                                    focus on positive things, the more positive things you'll receive and vice versa. </strong> </li>
                                                                
                                                                    <br /> 

                                                                </p>
                                                                
                                                                <li><strong>2. Surround yourself with those who think the same.</strong> Plain and simple, this means to hang 
                                                                out with positive people. If you spend enough time surrounded by negative people, you'll 
                                                                begin to complain, whine, and sulk over meaningless things, too.</li>
                                                                
                                                                <br /> 
                                                                
                                                                <p className='ml-14'>

                                                                    ● Is there someone in your life that you admire because of his or her optimistic outlook? 
                                                                    Then that person is someone you'll want to spend quality time with.  
                                                                    
                                                                    <br />
                                                                    <br /> 
                                                                    
                                                                    ● Engulf yourself in their happiness and positive karma, and you'll soon be upbeat and 
                                                                    positive, too!  

                                                                </p>
                                                                
                                                                <br />
                                                                <br /> 
                                                                
                                                                <li><strong>3. Visualize what the future holds for you.</strong> We all hold hopes and dreams for our future. 
                                                                Whether we want a better job, a bigger house, a new car, or more money, we all wish and 
                                                                daydream for something.</li>
                                                                
                                                                <br /> 

                                                                <p className='ml-14'>
                                                                    
                                                                    ● Next time you daydream about that new house, actually visualize yourself in the house. 
                                                                    Imagine exactly what the house looks like, your family watching television in the living 
                                                                    room, and you making their favorite dish in the kitchen.  

                                                                    <br />
                                                                    <br />

                                                                    <li><strong>● Visualization sends a positive signal out to the universe.</strong> If you practice it consistently, 
                                                                    you'll be rewarded with what you desire. </li>
                                                                </p>

                                                                <br />

                                                                    <li><strong>4. Learn to give thanks.</strong> Whether or not you realize it, you have much to be thankful for. It's 
                                                                    extremely important that you take some quiet time to give thanks for all that has been given 
                                                                    to you.</li>
                                                                    
                                                                    <br />
                                                                    
                                                                    <li>● Truly search your soul and list everything you're grateful for. Don't do this haphazardly! 
                                                                    Practice this each and every day, usually upon rising in the morning. As you keep doing 
                                                                    this, <strong>you'll discover that you're receiving more and more to be thankful for.</strong></li>
                                                                    
                                                                    <br />

                                                            </ul>
                                                            

                                                        </p>

                                                                                                                        
                                                        The principles surrounding the Law of Attraction are quite straightforward. To live the Law of 
                                                                Attraction, you just need an open mind, a willing spirit and a bit of diligence. With these, you'll 
                                                                soon be praising the success of the Law of Attraction principles yourself. 

                                                    </p>  
                                                    
                                                    <button type="button" class="close" aria-label="Close" onClick={closePopup9}>
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>


                                                </div>
                                            </div>
                                        </div>

                                                                                
                                        <div id="popup10" className="popup">
                                            <div className="popup-content">
                                                <div className="popup-scrollable-content">
                                                    <h3 className='title'>I am a magnet for meaningful relationships.</h3>
                                                    <h1 className='text-dark mb-32'>Love Master.</h1>
                                                    <h2 className="text-red-600 title">I am a magnet for meaningful relationships.</h2>
                                                    <p className='text-left ml-52 mr-52 text-dark mb-20'>
                                                        
                                                        People are attracted to me because I am a strong and independent individual 
                                                        with a healthy self-esteem. When I am comfortable with the person I am, I allow 
                                                        others to feel at ease around me. 

                                                        <br />
                                                        <br />
                                                        
                                                        <ul>

                                                            I have realistic expectations of my friends and myself. I accept others just 
                                                            the way they are, without judgment. In order to have meaningful friendships, I 
                                                            must first be a good friend myself. Then, in return, others respect me and accept 
                                                            me for who I am.  
                                                            
                                                            <br />
                                                            <br />
                                                            
                                                            My positive attitude makes me a pleasure to be around. I guard my speech to 
                                                            ensure that it is free from judgment and negativity, and full of laughter. 
                                                            Time spent with me is refreshing and peaceful. 

                                                            <br />
                                                            <br />
                                                            
                                                            My friends talk to me about things of substance because they know I am 
                                                            trustworthy. I treat my relationships like a flower, nurturing them and giving them 
                                                            time to blossom. 
                                                            
                                                            <br />
                                                            <br />

                                                            I cultivate my friendships by seeking out my friends through phone calls and 
                                                            invitations to connect. Spending quality time together draws us closer and 
                                                            reaffirms our bonds. 
                                                            
                                                            <br />
                                                            <br />

                                                            I deserve to have meaningful relationships and enjoy the company of others. My 
                                                            friends and I need each other to share gifts and talents that are unique to each 
                                                            one of us. Meaningful relationships are a balance of give and take.  
                                                            
                                                            <br />
                                                            <br />

                                                            Today, I chose to strengthen my relationships by wrapping myself in positivity 
                                                            and practicing acceptance. I am confident in the person I am and I attract others 
                                                            by expressing my true heart.  
                                                            
                                                            <br />
                                                            <br />

                                                            Self-Reflection Questions: 

                                                            <br />
                                                            <br />
                                                            
                                                            1. Do I have realistic expectations of others and myself? 
                                                            <br />
                                                            <br />
                                                            2. What can I do to seek out new friends or reconnect with old pals? 
                                                            <br />
                                                            <br />
                                                            3. Who is one of my most meaningful friends? 

                                                        </ul>
                                                    </p>  
                                                    
                                                    <button type="button" class="close" aria-label="Close" onClick={closePopup10}>
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>


                                                </div>
                                            </div>
                                        </div>

                                                                                
                                        <div id="popup11" className="popupD">
                                            <div className="popup-content">
                                                <div className="popup-scrollable-content">
                                                    <h3 className=''>Negotiating to Get What You Want</h3>
                                                    <h1 className='text-dark mb-20'>Love Master.</h1>
                                                    <h2 className="text-red-600 title mb-20">Relationship Matters <br /> Negotiating to Get What You Want</h2>
                                                    <p className='text-left ml-52 mr-52 mb-10 text-dark'>

                                                    <li><span className="red-q">Q</span>: I have a hard time negotiating with my boyfriend. I usually give up and let him make the 
                                                    final decision. I’m worried that our relationship is one-sided, and he doesn’t respect my opinions 
                                                    because I’m too scared to keep arguing. I don’t want to be a pushover, but I also don’t want to 
                                                    lose my boyfriend.</li>
                                                
                                                    <br />

                                                    We’re trying to plan a vacation together, but I keep letting Jimmy make all the decisions 
                                                    according to what he wants. If I suggest an idea and he doesn’t like it, I just let him pick 
                                                    something else.  
                                                    
                                                    <br />
                                                    <br />

                                                    <h4>How can I learn to negotiate and get something I want for a change? </h4>

                                                    <br />
                                                    
                                                    <li><span className='blue-q'>A:</span> Relationships that are one-sided can create issues with power. If Jimmy is making all of the 
                                                    decisions, then it makes sense that you will feel helpless and weak in the relationship.</li>

                                                    <br />
                                                    
                                                    It’s clear that you want to negotiate with your boyfriend and have a greater influence on the 
                                                    decisions. However, you’re allowing fear and insecurity to control your emotions. They’re 
                                                    preventing you from sharing your ideas and desires.  
                                                    
                                                    <br />
                                                    <br />

                                                    You should feel comfortable expressing yourself. Start with small steps to voice your opinion 
                                                    and gradually build up to bigger issues.  

                                                    <br />
                                                    <br />
                                                    
                                                    <h4>It’s also important to approach a negotiation without immediately considering it a battle.  </h4>

                                                    <br />
                                                    
                                                    For example, if you’re trying to pick a location for your vacation, then you can start the 
                                                    conversation by listing your ideas. If Jimmy doesn’t immediately agree with your choice for the 
                                                    location, this is where you would start negotiating. Not arguing, but just having a discussion. 

                                                    <br />
                                                    <br />
                                                    
                                                    First, tell Jimmy why you want to visit a particular location. List the major attractions, popular 
                                                    restaurants, and other positive aspects that make the destination appealing to you. Then, listen to 
                                                    Jimmy and pay attention to his ideas. Respond to his ideas, without arguing, and say some of 
                                                    your own. Continue the discussion like this, with both of you openly sharing your opinions.  

                                                    <br />
                                                    <br />
                                                    
                                                    <h4>Work together until you reach a compromise that leaves both of you happy.</h4> 

                                                    <br />
                                                    
                                                    Negotiations take time and effort, so don’t give up after sharing your ideas the first time. You 
                                                    can learn to work with Jimmy to find solutions.  

                                                    <p className="mt-40 text-center">1</p>
                                                    <hr className='lds mt-20 mb-10'/>

                                                    <br />
                                                    <br />
                                                    
                                                    <li><span className='red-q'>Q:</span> I understand how to start the conversation and negotiation process. However, I’m scared 
                                                    Jimmy will think I don’t care about his opinion. If I don’t agree with his ideas, then he might 
                                                    think I don’t love him anymore.</li>

                                                    <br />
                                                    
                                                    <li>I don’t want to lose Him. <strong>How can I make sure the negotiation process doesn’t hurt our 
                                                    relationship?</strong></li>

                                                    <br />
                                                    
                                                    A: Strong relationships can withstand the occasional argument or negotiation process. Your 
                                                    boyfriend shouldn’t question your love because you have a different opinion. Couples aren’t 
                                                    meant to be identical twins. You can use your differences to complement each other, learn from 
                                                    each other, and bring out your strengths. 

                                                    <br />
                                                    <br />
                                                    
                                                    <h4>One way to nurture your relationship while negotiating is to use loving or neutral words and 
                                                    voice tones. Ensure that you avoid saying anything that could hurt your partner.</h4> 

                                                    <br />
                                                    
                                                    You won’t hear angry words or insults in the most effective negotiations. It’s important to focus 
                                                    on the topic and avoid bringing up past arguments or issues. If you want the negotiation process 
                                                    to work, then it’s important to remain calm. 

                                                    <br />
                                                    <br />
                                                    
                                                    <li><span className='red-q'>Q:</span>  I’m still worried about talking to him. How do I stay strong and keep expressing my 
                                                    opinion? I don’t want to be a doormat that is afraid to say anything.</li>  
                                                    
                                                    <br />

                                                    <h4>How can I stop myself from backing down if Jimmy disagrees with me?</h4>

                                                    <br />
                                                    
                                                    We’re having a lot of issues picking out a hotel for our vacation. I want to stay at a smaller, 
                                                    boutique hotel with a spa, and Jimmy wants to stay at a larger hotel that is part of a chain.  

                                                    <br />
                                                    <br />
                                                    
                                                    How can I make the negotiation process work for both of us?  

                                                    <br />
                                                    <br />
                                                    
                                                    <li><span className='blue-q'>A:</span>  If you’re worried about backing down too quickly, then you may want to come up with a 
                                                    couple of tricks to remind you to keep talking. You may want to write a note or short message 
                                                    and keep it in front of you. This message can encourage you to keep the conversation going until 
                                                    you’re both happy with the decision.</li>

                                                    <br />
                                                    
                                                    <h4>The negotiation process takes times and effort from both sides. </h4>

                                                    <br /> 
                                                    
                                                    If you focus on one topic at a time, you may be able to reach a final decision easier. For example, 
                                                    you can have separate conversations about the location and the hotel.  

                                                    <br />
                                                    <br />
                                                    
                                                    To make the negotiation process work for both of you, you and Jimmy can each start your part of 
                                                    the conversation by listing your ideas and listening to each other. After hearing all of the 
                                                    suggestions, you can both start to recommend alternatives. 

                                                    <p className="mt-40 text-center">2</p>
                                                    <hr className='lds mt-20 mb-10'/>

                                                    <br />
                                                    <br />
             
                                                    For example, your desire to stay at a smaller hotel conflicts with Jimmy’s desire to stay at a 
                                                    larger hotel. However, this doesn’t mean you can’t find a way to make both of you happy on this 
                                                    vacation. You may want to consider finding an alternative hotel that fits both of your wishes. 
                                                    You may be able to find a medium-sized hotel that has a spa and is part of a large chain.  

                                                    <br />
                                                    <br />
                                                    
                                                    <li><strong>You may have to research alternatives that can fit both of your needs.</strong> It’s normal to briefly 
                                                    take a break from the negotiation process to find these alternatives. </li>

                                                    <br />
                                                    
                                                    You may also want to make a list of core wants and compare it to the list from Jimmy.  

                                                    <br />
                                                    <br />
                                                    
                                                    This will allow you to get to the heart of the issues and eliminate pointless arguments about other 
                                                    matters. Once you have the lists ready and analyzed, you can work on finding a hotel that fits 
                                                    both lists.  
                                                    
                                                    <br />
                                                    <br />

                                                    <li><strong>The goal of the negotiation process is to find a solution that leaves both of you happy and 
                                                    satisfied. This may mean that your original ideas for the vacation get changed.</strong> However, you 
                                                    may be able to find alternatives that surprise both of you in a positive way.</li>

                                                    <br />
                                                    
                                                    <li><span className='red-q'>Q:</span>Hecan be very stubborn sometimes. If he gets an idea, it’s hard to change his mind. I’m 
                                                    worried he won’t listen to any alternatives I suggest for the hotel.</li>

                                                    <br />
                                                    
                                                    If he doesn’t like the way the conversation is going, he gets angry and shuts down or storms out 
                                                    of the room. If I try to keep talking, he won’t listen to me, and he sometimes takes the car and 
                                                    drives off.  

                                                    <br />
                                                    <br />
                                                    
                                                    <h4>What can I do make him listen and see that the alternatives can work for us?</h4>

                                                    <br />
                                                    
                                                    <li><span className='blue-q'>A:</span> If he storms out or drives off, then it may be a good idea to let him cool off before trying to 
                                                    bring up the subject again.</li>

                                                    <br /> 
                                                    
                                                    <h4>However, you don’t want to use his behavior as an excuse to give up on the negotiation 
                                                    process.</h4>  

                                                    <br />
                                                    
                                                    His tactics are immature and created to make you drop the topic or give up. You must remain 
                                                    strong and continue to express your opinions. You can’t allow your boyfriend to eliminate your 
                                                    voice in the relationship. 
                                                    
                                                    <br />
                                                    <br /> 
                                                    
                                                    Once he returns home, you can bring up the subject again later when you’re both composed and 
                                                    able to discuss the issues calmly.  

                                                    <br />
                                                    <br />
                                                    
                                                    <h4>Remain calm and focused on the topic.</h4>

                                                    <p className="mt-40 text-center">3</p>
                                                    <hr className='lds mt-10 mb-10'/>


                                                    <br />
                                                    
                                                    Based on your previous comments, it appears that Jimmy has become used to the idea of you 
                                                    giving up on the negotiation process. However, you can change this and make your opinion an 
                                                    important consideration.  
                                                    
                                                    <br />
                                                    <br />

                                                    <li><strong>It may take several conversations before you’re both happy.</strong> Nevertheless, it’s important to 
                                                    keep discussing the issues.</li>

                                                    <br />
                                                    
                                                    <li><span className='red-q'>Q:</span> What do I do if he refuses to see things from my point of view? What if multiple 
                                                    conversations aren’t enough to leave both of us happy with the final decision? I’m worried that 
                                                    talking about the topic over and over again won’t be enough to make him listen to me.</li>  

                                                    <br />
                                                    
                                                    <h4>How do I handle a negotiation that fails? </h4> 

                                                    <br />
                                                    
                                                    <li><span className='blue-q'>A:</span> Although it may be tempting to believe that all negotiations can leave both parties satisfied, 
                                                    the reality is different. The negotiation process is a challenging part of relationships.</li> 

                                                    <br />
                                                    
                                                    <li><strong>If a negotiation fails and you’re both unhappy, then you have several options.</strong> You can keep 
                                                    discussing the topic, hoping to reach a compromise. You can also pick one of the ideas and agree 
                                                    to use it as the final decision. Sometimes you may be able to find solutions that satisfy only one 
                                                    party.</li>

                                                    <br />
                                                    
                                                    If you see that multiple attempts to negotiate topics aren’t working, then that could be a sign that 
                                                    there are deeper challenges in your relationship with Jimmy. For example, it can indicate that 
                                                    your opinion isn’t being respected, and you’re not being viewed as an equal in the relationship. 
                                                    
                                                    <br />
                                                    <br /> 
                                                    
                                                    If Jimmy refuses to listen to you, and your attempts to negotiate on multiple occasions fail, then 
                                                    you may want to consider therapy to bring you closer together in your relationship. You may 
                                                    benefit from couples therapy or individual therapy.  

                                                    <br />
                                                    <br />
                                                    
                                                    Sometimes, though, it just takes time and perseverance to learn to work together. 
                                                    
                                                    <br />
                                                    <br />

                                                    Good luck to you both in this new journey together!

                                                    
                                                    <p className="mt-56 text-center">4</p>

                                                    </p>  

                                                    <button type="button" class="close" aria-label="Close" onClick={closePopup11}>
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>


                                                </div>
                                            </div>
                                        </div>

                                                                                
                                        <div id="popup12" className="popupD">
                                            <div className="popup-content">
                                                <div className="popup-scrollable-content">
                                                    <h3 className=''>The Secret to Building up Your Dating Confidence</h3>
                                                    <h1 className='text-dark mb-32'>Love Master.</h1>
                                                    <h2 className="text-red-600 ml-56 mr-56">The Secret to Building up Your Dating Confidence</h2>
                                                    <p className='text-left ml-52 mr-52 text-dark mb-56'>

                                                    Maybe you’re confident in most situations, but dating makes you nervous. Some jitters are 
                                                    natural when you’re wondering if someone will like you, and hoping to develop a meaningful 
                                                    relationship. On the other hand, you may need to become more assured if you want a happy love 
                                                    life. 

                                                    <br />
                                                    <br />
                                                    
                                                    <li><strong>Confidence is actually more important than good looks when it comes to attracting potential 
                                                    romantic partners, according to some studies.</strong> Singles that smile and make eye contact are 
                                                    approached more often.</li>
                                                    
                                                    <br />
                                                    
                                                    Now that you don’t have to worry about looking like a supermodel, you can focus on building up 
                                                    your dating confidence. Try these ideas for managing doubts and appearing sure of yourself. 
                                                    
                                                    <br />
                                                    <br />
                                                    
                                                    <h4>How to Manage Your Doubts about Dating</h4>
                                                    
                                                    <br />

                                                    <p className='ml-14'>

                                                        <li><strong>1. Let go of expectations.</strong> Do you spend a first date dreaming about finding your soul mate or 
                                                        dismissing anyone who doesn’t completely match your detailed checklist? Real relationships 
                                                        require patience and flexibility.</li>
                                                        
                                                        <br />
                                                        
                                                        <li><strong>2. Accept your fears.</strong> Trying to resist or deny your doubts wastes energy and makes your 
                                                        anxiety stronger. Instead, lovingly acknowledge your feelings and remember that you can 
                                                        still choose how you want to act.</li>
                                                        
                                                        <br />
                                                        
                                                        <li><strong>3. Focus on others.</strong> Keep in mind that your date is probably nervous too. If you work at 
                                                        putting them at ease, you’ll probably loosen up too.</li>
                                                        
                                                        <br />

                                                        <li><strong>4. Think positive.</strong> Look at what you have to gain. Even if you’re not romantically compatible, 
                                                        you might share a laugh and some interesting stories.</li>
                                                        
                                                        <br />
                                                        
                                                        <li><strong>5. Stay busy.</strong> Do you analyze your date afterwards, looking for an excuse to reject others or 
                                                        discover your own missteps? Shift your attention to something more constructive like reading 
                                                        a book or baking bread.</li>
                                                        
                                                        <br />
                                                        
                                                        <li><strong>6. Love yourself.</strong> Celebrate your strengths and know that you are worthy just as you are. When 
                                                        you feel special, you’ll have more to contribute to any relationship.</li>

                                                        <br /> 

                                                    </p>

                                                    <h4>How to Appear Confident While Dating </h4>
 
                                                    <br />

                                                    <p className='ml-14'>

                                                        <li><strong>1. Smile.</strong> However you feel inside, a smile will make you more approachable and lower your 
                                                        stress. Plus, smiling makes you look more attractive.</li>
                                                        
                                                        <br />
                                                        
                                                        <li><strong>2. Dress up.</strong> Wear something you know is flattering. It will help you take your mind off your 
                                                        appearance.</li>
                                                        
                                                        <br />
                                                        
                                                        <li><strong>3. Adjust your posture.</strong> Your body language talks before you can even open your mouth. 
                                                        Check that your back is straight and your shoulders are down. You’ll look slimmer and more 
                                                        energetic.</li>
                                                        
                                                        <br />
                                                        
                                                        <li><strong>4. Make eye contact.</strong> Let your date see you’re interested in them by meeting their gaze. Your 
                                                        eyes can express your warmth and sincerity.</li>
                                                        
                                                        <br />
                                                        
                                                        <li><strong>5. Shake hands.</strong> Touch is powerful. Reach out and shake hands. If you’re hitting it off, a light 
                                                        touch on the arm can be very encouraging.</li>
                                                        
                                                        <br />
                                                        
                                                        <li><strong>6. Prepare your remarks.</strong> Be ready to keep the conversation flowing. Rehearse a few 
                                                        intriguing questions you want to ask. Research a topic or two like a recent news story or 
                                                        some background information on a memorable film you just saw.</li>
                                                        
                                                        <br />
                                                        
                                                        <li><strong>7. Choose the activity.</strong> While taking your date’s interests into consideration, see if you can 
                                                        suggest a venue where you’ll feel at home. If you’re lucky, they’ll want to browse around a 
                                                        farmer’s market or rent a kayak too.</li>
                                                        
                                                        <br />
                                                        
                                                        <li><strong>8. Keep practicing.</strong> The more you date, the more confident you’ll be in your ability to meet 
                                                        other singles, make a positive impression, and explore opportunities to develop a loving and 
                                                        caring relationship. You’ll also be clarifying your short list for what you really need in a 
                                                        romantic partner.</li>

                                                    </p>
                                                    
                                                    <br />
                                                    
                                                    Be friendly, take risks, and learn from each dating experience. When you relax and radiate 
                                                    confidence, you and your date can both have fun while you look for the love that you deserve.

                                                    </p>  

                                                    <button type="button" class="close" aria-label="Close" onClick={closePopup12}>
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>


                                                </div>
                                            </div>
                                        </div>

                                                                                
                                        <div id="popup13" className="popupD2">
                                            <div className="popupD2-content">
                                                <div className="popup-scrollable-content">

                                                    <h1 className='number'>
                                                        
                                                        25 
                                                    
                                                    </h1> 

                                                    <h1 className='ways-to'>
                                                        WAYS TO
                                                    </h1>
                                                    
                                                    <h1 className='titulo-white'>ATTRACT</h1> 
                                                    
                                                    <h1 className='your'> YOUR </h1>
                                                    <h1 className='soulmate'>SOULMATE</h1>
       
                                                    <hr className='lds text-dark'/>

                                                    <h1 className='text-left text-light ml-96 mr-96 mt-56 mb-56'>

                                                        Most people believe there’s someone special for 
                                                        <br />
                                                        each of us. But how do you find that soulmate? 
                                                        <br />
                                                        <br />
                                                        Well, there are some things you can do to speed 
                                                        <br />
                                                        up the process and help Cupid’s work along. 
                                                        <br />
                                                        <br />
                                                        Consider these ideas...

                                                    </h1>
                                                          
                                                    <hr className='lds text-dark'/>

                                                    <h1 className='text-left text-light ml-96 mr-96 mt-56 mb-56'>
                                                        
                                                        <h1 className='title'>1. OPEN YOUR HEART.</h1>
                                                        Begin the search for your soulmate by 
                                                        <br />
                                                        opening your heart and allowing people 
                                                        <br />
                                                        in. This may be a big step for you, but 
                                                        <br />
                                                        your soulmate isn’t going to force their 
                                                        <br />
                                                        way into your heart. Open the door now
                                                        <br /> 
                                                        so you’ll be ready.


                                                    </h1>

                                                    <hr className='lds text-dark'/>

                                                    <h1 className='text-left text-light ml-96 mr-96 mt-56 mb-56'>

                                                        <h1 className='title'>2. Be observant.</h1>
                                                        People get so caught up in the business 
                                                        <br />
                                                        of their day-to-day lives that they’re too 
                                                        <br />
                                                        busy to notice who’s around them. 
                                                        <br />
                                                        When you become more aware of your 
                                                        <br />
                                                        surroundings, you’ll be more likely to 
                                                        <br />
                                                        meet new people.


                                                    </h1>

                                                    
                                                    <hr className='lds text-dark'/>

                                                    <h1 className='text-left text-light ml-96 mr-96 mt-56 mb-56'>

                                                        <h1 className='title'>3. Have an open mind.</h1>
                                                        Forget about placing people into certain 
                                                        <br />
                                                        categories and certainly forget about having 
                                                        <br />
                                                        a “type.” When you consider that anyone 
                                                        <br />
                                                        might be your type, your chances of finding 
                                                        <br />
                                                        your soulmate have opened up 
                                                        <br />
                                                        tremendously.

                                                    </h1>

                                                    
                                                    <hr className='lds text-dark'/>

                                                    <h1 className='text-left text-light ml-96 mr-96 mt-56 mb-56'>

                                                        <h1 className='title'>4. Be nice to everyone you <br />meet.</h1>
                                                        This seems so simple, yet in today’s world, 
                                                        <br />
                                                        being kind to strangers is, well, strange! 
                                                        <br />
                                                        Offer others a smile or hold the door for 
                                                        <br />
                                                        someone. Being nice will attract others to 
                                                        <br />
                                                        you, especially that very special soulmate.

                                                    </h1>

                                                    
                                                    <hr className='lds text-dark'/>

                                                    <h1 className='text-left text-light ml-96 mr-96 mt-56 mb-56'>

                                                        <h1 className='title'>5. Be patient.</h1>
                                                        Even though you might be able to 
                                                        <br />
                                                        speed up the process, it won’t happen 
                                                        <br />
                                                        in an instant. Don’t assume everyone 
                                                        <br />
                                                        you meet is the soulmate you’re 
                                                        <br />
                                                        searching for. Trust that you’ll find them 
                                                        <br />
                                                        when the time is right, then you will.


                                                    </h1>

                                                    
                                                    <hr className='lds text-dark'/>

                                                    <h1 className='text-left text-light ml-96 mr-96 mt-56 mb-56'>

                                                        <h1 className='title'>6. Listen to Your heart.</h1>
                                                        Your heart will steer you in the right 
                                                        <br />
                                                        direction. Just listen. If you’re seeing 
                                                        <br />
                                                        someone but don’t feel the life-long pull 
                                                        <br />
                                                        that you should, gently break off the 
                                                        <br />
                                                        relationship. On the other hand, if you feel
                                                        <br />
                                                        someone might be your soulmate, ask him 
                                                        <br />
                                                        or her out, even if you’re not used to being 
                                                        <br />
                                                        so forward.

                                                    </h1>

                                                    
                                                    <hr className='lds text-dark'/>

                                                    <h1 className='text-left text-light ml-96 mr-96 mt-56 mb-56'>

                                                        <h1 className='title'>7. Be yourself.</h1>
                                                        When people are looking for love, 
                                                        <br />
                                                        they’ll often wear more revealing 
                                                        <br />
                                                        clothes or do other things they 
                                                        <br />
                                                        wouldn’t usually do. Although this may 
                                                        <br />
                                                        attract some people, 
                                                        <br />
                                                        ask yourself if that’s the kind of person 
                                                        <br />
                                                        you want to attract in the first place. 
                                                        <br />
                                                        Your best bet? Just be you.


                                                    </h1>

                                                    
                                                    <hr className='lds text-dark'/>

                                                    <h1 className='text-left text-light ml-96 mr-96 mt-56 mb-56'>

                                                        <h1 className='title'>8. Improve yourself.</h1>
                                                        When you focus on developing your 
                                                        <br />
                                                        own skills, talents, and confidence, 
                                                        <br />
                                                        you’ll actually be drawing your soulmate 
                                                        <br />
                                                        to you. And when they find you, you’ll 
                                                        <br />
                                                        be at your best. Besides, your soulmate 
                                                        <br />
                                                        just might be teaching the class you 
                                                        <br />
                                                        signed up for.


                                                    </h1>

                                                    
                                                    <hr className='lds text-dark'/>

                                                    <h1 className='text-left text-light ml-96 mr-96 mt-56 mb-56'>

                                                        <h1 className='title'>9. Leave some TIME <br /> in your schedule.</h1>
                                                        Overcrowding your schedule will leave you 
                                                        <br />
                                                        too busy to find true love. And if your life is 
                                                        <br />
                                                        already jam-packed, how is anyone 
                                                        <br />
                                                        supposed to see that you have time for 
                                                        <br />
                                                        them?


                                                    </h1>

                                                    
                                                    <hr className='lds text-dark'/>

                                                    <h1 className='text-left text-light ml-96 mr-96 mt-56 mb-56'>

                                                        <h1 className='title'>10. Get out more.</h1>
                                                        You’re never going to find your 
                                                        <br />
                                                        soulmate sitting alone on your couch 
                                                        <br />
                                                        watching TV and eating bonbons. Get 
                                                        <br />
                                                        out into the world and give your 
                                                        <br />
                                                        soulmate a chance to find you!


                                                    </h1>

                                                    
                                                    <hr className='lds text-dark'/>

                                                    <h1 className='text-left text-light ml-96 mr-96 mt-56 mb-56'>

                                                        <h1 className='title'>11. Have faith.</h1>
                                                        Believe that you are worthy of love and 
                                                        <br />
                                                        that you will find your soulmate. After 
                                                        <br />
                                                        all, 
                                                        <br />
                                                        a strength of purpose can make dreams 
                                                        <br />
                                                        come to life.


                                                    </h1>

                                                    
                                                    <hr className='lds text-dark'/>

                                                    <h1 className='text-left text-light ml-96 mr-96 mt-56 mb-56'>

                                                        <h1 className='title'>12. Visualize it.</h1>
                                                        Visualize the life you will have with your 
                                                        <br />
                                                        soulmate once you’ve found him or her. 
                                                        <br />
                                                        Imagine what your home will look like 
                                                        <br />
                                                        and where you’ll go on vacation. 
                                                        <br />
                                                        Visualizing it will make it seem more real 
                                                        <br />
                                                        and will increase the probability of it 
                                                        <br />
                                                        happening.


                                                    </h1>

                                                    
                                                    <hr className='lds text-dark'/>

                                                    <h1 className='text-left text-light ml-96 mr-96 mt-56 mb-56'>

                                                        <h1 className='title'>13. Think positivelY.</h1>
                                                        No one really likes to hang around a 
                                                        <br />
                                                        “Debbie Downer.” Instead, carry a 
                                                        <br />
                                                        positive attitude with you and you’re 
                                                        <br />
                                                        sure to attract other positive, like-
                                                        <br />
                                                        minded people.

                                                    </h1>

                                                    
                                                    <hr className='lds text-dark'/>

                                                    <h1 className='text-left text-light ml-96 mr-96 mt-56 mb-56'>

                                                        <h1 className='title'>14. SMILE.</h1>
                                                        Something as simple as a genuine smile 
                                                        <br />
                                                        will let people know that you’re happy, 
                                                        <br />
                                                        confident, and ready for love.

                                                    </h1>

                                                    
                                                    <hr className='lds text-dark'/>

                                                    <h1 className='text-left text-light ml-96 mr-96 mt-56 mb-56'>

                                                        <h1 className='title'>15. Be realistic.</h1>
                                                        Stop imagining that your prince or 
                                                        <br />
                                                        princess is going to swoop down and 
                                                        <br />
                                                        sweep you off your feet. Focus on 
                                                        <br />
                                                        realistic possibilities rather than 
                                                        <br />
                                                        fantasies.

                                                    </h1>

                                                    
                                                    <hr className='lds text-dark'/>

                                                    <h1 className='text-left text-light ml-96 mr-96 mt-56 mb-56'>

                                                        <h1 className='title'>16. Listen To Your <br /> intuition.</h1>
                                                        When you meet someone, your inner voice 
                                                        <br />
                                                        may tell you whether or not this could be 
                                                        <br />
                                                        “the one.” Don’t ignore that voice either 
                                                        <br />
                                                        way.

                                                    </h1>

                                                    
                                                    <hr className='lds text-dark'/>

                                                    <h1 className='text-left text-light ml-96 mr-96 mt-56 mb-56'>

                                                        <h1 className='title'>17. Be approachable.</h1>
                                                        Work on becoming more 
                                                        <br />
                                                        approachable. Greet people kindly, be 
                                                        <br />
                                                        generous, and 
                                                        <br />
                                                        put yourself on the same level as 
                                                        <br />
                                                        others. 
                                                        <br />
                                                        If people feel like they can’t approach 
                                                        <br />
                                                        you, they won’t.

                                                    </h1>

                                                    
                                                    <hr className='lds text-dark'/>

                                                    <h1 className='text-left text-light ml-96 mr-96 mt-56 mb-56'>

                                                        <h1 className='title'>18. Be aware of your <br /> body language.</h1>
                                                        There are countless ways to 
                                                        <br />
                                                        communicate through your body. Ensure 
                                                        <br />
                                                        you’re using positive body language, not 
                                                        <br />
                                                        the type that puts people off.


                                                    </h1>

                                                    
                                                    <hr className='lds text-dark'/>

                                                    <h1 className='text-left text-light ml-96 mr-96 mt-56 mb-56'>

                                                        <h1 className='title'>19. Wear peach, pink or <br />red.</h1>
                                                        These colors show that you’re open to 
                                                        <br />
                                                        love. Women might feel more 
                                                        <br />
                                                        comfortable in peaches and pinks than 
                                                        <br />
                                                        men, but men can wear reds.

                                                    </h1>

                                                    
                                                    <hr className='lds text-dark'/>

                                                    <h1 className='text-left text-light ml-96 mr-96 mt-56 mb-56'>

                                                        <h1 className='title'>20. Become the <br /> center of attention.</h1>
                                                        Build up the courage to put yourself at 
                                                        <br />
                                                        center stage sometimes. Not only will 
                                                        <br />
                                                        this get you noticed, but it’ll also show 
                                                        <br />
                                                        that you’re confident and fun.

                                                    </h1>

                                                    
                                                    <hr className='lds text-dark'/>

                                                    <h1 className='text-left text-light ml-96 mr-96 mt-56 mb-56'>

                                                        <h1 className='title'>21. Never act <br />desperatE.</h1>
                                                        Desperation is a turn off for most 
                                                        <br />
                                                        people. Even if you feel desperate, don’t 
                                                        <br />
                                                        let it show. Let your friends and family 
                                                        <br />
                                                        know you’re looking for that special 
                                                        <br />
                                                        someone, but do it subtly and with 
                                                        <br />
                                                        finesse.
                                                    </h1>

                                                    
                                                    <hr className='lds text-dark'/>

                                                    <h1 className='text-left text-light ml-96 mr-96 mt-56 mb-56'>

                                                        <h1 className='title'>22. Learn to like yourself.</h1>
                                                        Obviously, you want to find someone 
                                                        <br />
                                                        who’ll love you for who you are. But that 
                                                        <br />
                                                        means you need to love yourself, too! If 
                                                        <br />
                                                        you can’t stand being around yourself, 
                                                        <br />
                                                        why would anyone else be interested 
                                                        <br />
                                                        either?

                                                    </h1>

                                                    
                                                    <hr className='lds text-dark'/>

                                                    <h1 className='text-left text-light ml-96 mr-96 mt-56 mb-56'>

                                                        <h1 className='title'>23. Don’t bend on <br /> what’s really important <br /> to you.</h1>
                                                        You shouldn’t compromise on what’s 
                                                        <br />
                                                        most important to you. Specifically, your 
                                                        <br />
                                                        core beliefs, values, and morals. This is 
                                                        <br />
                                                        why it’s so important to know and love 
                                                        <br />
                                                        yourself first!


                                                    </h1>

                                                    
                                                    <hr className='lds text-dark'/>

                                                    <h1 className='text-left text-light ml-96 mr-96 mt-56 mb-56'>

                                                        <h1 className='title'>24. Stop looking.</h1>
                                                        Sometimes we get so wrapped up in trying to 
                                                        <br />
                                                        find a lasting relationship that it becomes the 
                                                        <br />
                                                        focus of our lives. If you’ve been looking for a 
                                                        <br />
                                                        while and still haven’t found someone, take it 
                                                        <br />
                                                        easy for a while. You just might be pleasantly 
                                                        <br />
                                                        surprised when you let fate take over!

                                                    </h1>

                                                    <hr className='lds text-dark'/>

                                                    <h1 className='text-left text-light ml-96 mr-96 mt-56 mb-56'>

                                                        <h1 className='title'>25. Keep your Spirits <br /> Up.</h1>
                                                        Be encouraged and know that your 
                                                        <br />
                                                        soulmate is out there. You’ll find them, 
                                                        <br />
                                                        even if it takes longer than you’d like.
                                                    </h1>

                                                    <hr className='lds text-dark'/>

                                                    <h1 className='text-left finish text-light ml-96 mr-96 mt-56 mb-56'>
                                                    
                                                        You can find a loving, lasting relationship simply by 
                                                        <br />
                                                        being open to love, loving life, and following these 
                                                        <br />
                                                        simple strategies. 
                                                        <br />
                                                        Remember that your soulmate is out there and they’re 
                                                        <br />
                                                        just as eager to meet you as you are to meet them!

                                                    </h1>

                                                    <button type="button" class="close" aria-label="Close" onClick={closePopup13}>
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>

                                                </div>
                                            </div>
                                        </div>
                                                                                                                        
                                        <div id="popup14" className="popup">
                                            <div className="popup-content">
                                                <div className="popup-scrollable-content">
                                                    <h3 className='title'>What You Need to Know about Emotional Affairs</h3>
                                                    <h1 className='text-dark mb-32'>Love Master.</h1>
                                                    <h2 className="text-red-700 title">What You Need to Know about Emotional Affairs</h2>
                                                    <p className='text-left ml-52 mr-52 text-dark mb-20'>

                                                        Are you really having an affair if there’s no physical contact? Most adults think that just 
                                                        talking could sometimes be a form of infidelity. 

                                                        <br />
                                                        <br />
                                                        
                                                        In fact, 60% of Americans said they would consider their partner unfaithful if they 
                                                        became emotionally involved with someone else, according to a survey by the research 
                                                        firm YouGov. 
                                                        
                                                        <br />
                                                        <br />
                                                        
                                                        <li><strong>Before you do something that you may regret with an old flame or an attractive 
                                                        coworker, consider the impact on your primary relationship.</strong> Take a look at these 
                                                        suggestions for how to prevent or recover from an emotional affair.</li>
                                                        
                                                        <br />
                                                        
                                                        <h4>Preventing an Emotional Affair: </h4>
                                                        
                                                        <br />

                                                        <p className="ml-14">

                                                            <li><strong>1. Recognize the signs.</strong> Emotional affairs are less obvious than renting a hotel 
                                                            room, but there are clues. Do you keep your relationship a secret and share 
                                                            things with your new friend that would be more appropriate to discuss with your 
                                                            partner? Do you feel guilty about what you’re doing? </li>
                                                            
                                                            <br />
                                                            
                                                            <li><strong>2. Confess your feelings.</strong> Depending on the circumstances, it may help to tell your 
                                                            partner what’s happening. That could mean specific details or a more general 
                                                            request for both of you to work harder at making your relationship a higher 
                                                            priority.</li>
                                                            
                                                            <br />
                                                            
                                                            <li><strong>3. Guide the conversation.</strong> Meanwhile, there are several things you can do to 
                                                            reduce temptation. Emotional affairs often begin with talking about personal 
                                                            information. You may need to change the subject to something more 
                                                            businesslike or boring. </li>
                                                            
                                                            <br />
                                                            
                                                            <li><strong>4. Socialize in groups.</strong> Workplace affairs are enticing because you spend so much 
                                                            time together. If you feel vulnerable, try going to lunch with the whole department 
                                                            instead of sharing sushi in a private booth.</li>
                                                            
                                                            <br />
                                                            
                                                            <li><strong>5. Limit alcohol.</strong> Similarly, Margaritas don’t improve your judgment. Stick to 
                                                            sparkling water when you’re trying to exercise restraint.</li>

                                                            <br />

                                                            <li><strong>6. Adjust your expectations.</strong> Fundamentally, an emotional affair is usually an 
                                                            indication that you need to pay more attention to your significant other. 
                                                            While long-term relationships naturally evolve beyond the honeymoon stage, you 
                                                            can work at keep your connection fun and rewarding.</li>
                                                            
                                                        </p>
                                                    
                                                        <br />
                                                        
                                                        <h4>Recovering from an Emotional Affair: </h4>
                                                        
                                                        <br />
                                                        
                                                        <p className="ml-14">

                                                            <li><strong>1. Accept responsibility.</strong> Hold yourself accountable for your actions. Your partner 
                                                            may feel just as betrayed as if you had a physical affair.</li>
                                                            
                                                            <br />
                                                            
                                                            <li><strong>2. Make a decision.</strong> Juggling multiple relationships rarely turns out well. Figure out 
                                                            what is the healthiest choice for you. You may decide to continue your primary 
                                                            relationship or move on with or without a new partner. In any case, 
                                                            communicating honestly and responsibly will help.</li>
                                                            
                                                            <br />
                                                            
                                                            <li><strong>3. Cut off contact.</strong> If you’re going to end your emotional affair, you may need to 
                                                            eliminate all contact, at least temporarily. If you’re coworkers, that may mean 
                                                            limiting your interactions to essential business only.</li> 
                                                            
                                                            <br />
                                                            
                                                            <li><strong>4. Go offline. </strong> What if you’ve been having an Internet affair? Technology could be 
                                                            part of the solution if closing your accounts and installing monitoring software 
                                                            helps you and partner to work through your issues. </li>
                                                            
                                                            <br />
                                                            
                                                            <li><strong>5. Tell your partner.</strong> If things became serious, it’s an individual choice whether to 
                                                            let your partner know or keep your actions to yourself. Living with a secret can 
                                                            be a burden but unloading could hurt your partner more. You’ll need to 
                                                            decide what’s most beneficial for the both of you. </li>
                                                            
                                                            <br />
                                                            
                                                            <li><strong>6. Cultivate your relationship.</strong> Strengthening your relationship will be the 
                                                            most important step in healing and preventing future straying. Create daily 
                                                            routines that bring you closer together and schedule consistent time to spend as 
                                                            a couple. Read self-help books and practice your communication skills.</li>
                                                            
                                                            <br />
                                                            
                                                            <li><strong>7. See a counselor.</strong> If you need more help, talk with a therapist who specializes in 
                                                            relationships. Make a list of multiple candidates if necessary, to find someone 
                                                            you’ll both feel comfortable with.</li> 

                                                        </p>
                                                        
                                                        <br />
                                                        
                                                        <li><strong>It’s easier to protect your relationship from an emotional affair than to repair it 
                                                        afterwards.</strong> However, if you and your partner are committed to each other, you may 
                                                        emerge from the experience with a stronger relationship and a happy future.</li>

                                                    </p>  

                                                    <button type="button" class="close" aria-label="Close" onClick={closePopup14}>
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>


                                                </div>
                                            </div>
                                        </div>


                                        <div id="popup15" className="popup">
                                            <div className="popup-content">
                                                <div className="popup-scrollable-content">
                                                    <h3 className='title'>Self-Acceptance: What It Is and How To Get It</h3>
                                                    <h1 className='text-dark mb-32'>Love Master.</h1>
                                                    <h2 className="text-red-700 title">Self-Acceptance: <br />What It Is and How To Get It</h2>
                                                    <p className='text-left ml-52 mr-52 text-dark mb-20'>

                                                    Accepting yourself is the first step to building self-esteem. It’s not possible to feel positive about yourself if you can’t even accept yourself. Self-acceptance is the level of happiness and satisfaction you have with yourself.


                                                    <br/>
                                                    <br/>

                                                    Many mental health professionals believe that self-acceptance is necessary before change can occur. If you’re feeling stuck, a lack of self-acceptance may be the first challenge to overcome. Accepting your flaws allows you to change them.


                                                    <br/>
                                                    <br/>
                                                        <h4>Learn to accept yourself and enjoy the person you are: </h4>
                                                        
                                                        <br />

                                                        <p className="ml-14">

                                                            <li><strong>1. Let go of your parents’ behavior.</strong> Some parents are better than others. Overly critical parents don’t have bad children, they’re just lousy parents. There’s little to be gained by giving your parents a hard time for their inadequacies. The solution is to forgive them and release yourself from the past.</li>
                                                            
                                                            <br />
                                                                                                                    
                                                            <p className='ml-14'>
                                                                <li>Avoid judging yourself based on the parenting you received. <strong>It’s a reflection of them, not you.</strong></li>
                                                            </p>

                                                            <br />
                                                            
                                                            <li><strong>2. Volunteer.</strong> There’s no easier way to convince yourself that you’re worthy of self-acceptance than to volunteer your time with someone that needs you. Prove to yourself how great a person you are. There are countless opportunities to volunteer in your community.</li>
                                                            
                                                            <br />
                                                            
                                                            <li><strong>3. Be proud of your strengths.</strong> It’s hard to accept yourself if you’re constantly reminding yourself of your weaknesses. Make a long list that you can return to in the future. List every positive thing you can about yourself. Even the smallest positive attribute is worthy of mention. </li>
                                                            
                                                            <br />

                                                            <ul className="ml-14">

                                                                <li>“I am a good person.”</li>
                                                                <li>“I can play the banjo.”</li>
                                                                <li>“I am loyal to my friends.”</li>


                                                            </ul>

                                                            <br />
                                                            
                                                            <li><strong>4. Forgive yourself.</strong> If you’re harping on your past transgressions, self-acceptance will be in short-supply. Chalk your bad choices up to experience and move on.</li>
                                                            
                                                            <br />
                                                            
                                                            <li><strong>5. Let go of goals that will never be reached</strong> If you’re 57 years old, your childhood dream of becoming an astronaut is over. It is. It’s difficult to accept yourself when the life you’re living is very different from your original plans. There’s a time to let it all go. Let the present moment be that time. Make new plans that are plausible and that excite you.</li>

                                                            <br />

                                                            <li><strong>6. Eliminate negative self-talk.</strong> You can’t accept yourself if you’re constantly insulting yourself. Give yourself a fighting chance to reach a state of self-acceptance. Speak to yourself the way you would a good friend. Be a friend to yourself.</li>

                                                            <br />

                                                            <li><strong>7. Be authentic.</strong> When you put on a persona for the world, you’re not giving others the opportunity to accept you as you are. How will you be able to accept yourself? When you’re authentic, the love you receive feels infinitely more meaningful. Living honestly is scary, but surprisingly easy. People admire and respect those with the strength to be authentic.</li>

                                                            <br />

                                                            <li><strong>8. Recognize your worth to the world.</strong> Fortunately, this isn’t something that must be earned. You’re born with it. How much could you contribute if you applied yourself? The world needs you. What could say more of your inherent value than the fact that the world needs you? </li>

                                                            <br />

                                                            <li><strong>9. Forgive others.</strong> Fortunately, this isn’t something that must be earned. You’re born with it. How much could you contribute if you applied yourself? The world needs you. What could say more of your inherent value than the fact that the world needs you? </li>



                                                        </p>
                                                        
                                                        <br />
                                                        
                                                        <li>Self-acceptance is fancy word for tolerating yourself. No one is perfect. You accept your friends and family even though they’re all flawed in a unique way. Give yourself the same latitude. <strong>Focus on your positive traits and forgive yourself for your flaws and mistakes.</strong> Accept yourself as you are.</li>

                                                    </p>  

                                                    <button type="button" class="close" aria-label="Close" onClick={closePopup15}>
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>


                                                </div>
                                            </div>
                                        </div>

                                        <div id="popup16" className="popup">
                                            <div className="popup-content">
                                                <div className="popup-scrollable-content">
                                                    <h3 className='title'>Get Out of Your Own Way: Putting an End to Self-Sabotaging Behavior</h3>
                                                    <h1 className='text-dark mb-32'>Love Master.</h1>
                                                    <h2 className="text-red-700 title">Get Out of Your Own Way: Putting an End to <br/> Self-Sabotaging Behavior</h2>
                                                    <p className='text-left ml-52 mr-52 text-dark mb-20'>

                                                    Self-sabotage could be defined as deciding you want something and then making sure it doesn’t happen. Have you ever found yourself close to achieving a goal, only to throw it all away at the last moment? Did you look back later and kick yourself for being so foolish? Most of us have.

                                                    <br/>
                                                    <br />
                                                    
                                                    Why did you do this? There are several possible explanations, ranging from a need to control the situation to feeling unworthy. But regardless of the cause, the solutions are similar.
                                                    
                                                    <br/>
                                                    <br/>
                                                        <h4>Eliminate self-sabotage from your life using these tips:</h4>
                                                        
                                                        <br />

                                                        <p className="ml-14">

                                                            <li><strong>1. Observe yourself.</strong> Look back at the times you’ve sabotaged yourself or come up short. You probably try to justify the sabotaging behavior in your mind. But, ignore the reasons and just observe the behavior. What conclusion would a casual observer draw from your behavior?</li>
                                                            
                                                            <br />
                                                                                                                    
                                                            <p className='ml-14'>
                                                                <li><strong>Learn to notice the signs of self-sabotage.</strong> How and when do you do it? Be objective and recognize your patterns.</li>
                                                            </p>

                                                            <br />
                                                            
                                                            <li><strong>2. Remember that success isn’t perfect.</strong> Sometimes we quit because things aren’t turning out the way we imagined. Setting more reasonable expectations can help ensure that you’re seeing things through to the end. Nothing in life is ever perfect.</li>
                                                            
                                                            <br />
                                                            
                                                            <p className='ml-14'>
                                                            
                                                            For instance, maybe you’re in a great relationship, but you imagined there wouldn’t be any disagreements. That isn’t a practical expectation. Another common issue: Making a lot of money is helpful, but it won’t solve all of your challenges.

                                                            </p>

                                                            <br />

                                                            <li><strong>3. Consider the other people in your life. Self-sabotaging behavior is selfish. You’re hurting yourself and others.</strong> </li>
                                                            
                                                            <br />

                                                            <ul className="ml-14">

                                                                Before you throw in the towel, consider how it will affect those around you. That might provide enough motivation to continue pressing forward.

                                                            </ul>

                                                            <br />
                                                            
                                                            <li><strong>4. Be willing to be adventurous.</strong> Those who self-sabotage tend to stay in their own little worlds. Seeing a project through to completion means adjusting your outlook. Whether it’s a different job, a new relationship, or something else, your life will be changed to a certain degree. Be brave enough to take that adventure.</li>
                                                            
                                                            <br />

                                                            <p className="ml-14">

                                                                <strong>If you tend to start new projects, but then stop yourself before ever completing them, nothing will ever change and you’ve just wasted time.</strong>

                                                            </p>

                                                            <br />
                                                            
                                                            <li><strong>5. Start small.</strong> Give yourself the gift of having a few small successes. Then take the time to notice that these successes aren’t perfect, but they still made your life better.</li>

                                                            <br />

                                                                <p className="ml-14">

                                                                    Enjoy the victory and imagine how great it would be to accomplish greater successes.

                                                                </p>

                                                            <br />

                                                            <li><strong>6. Take some time before making major decisions.</strong> Before making a big decision, give yourself some time to think about it. Decisions can be impulsive. A few days can give you the perspective you require to make a wise decision.</li>

                                                        </p>
                                                        
                                                        <br />
                                                        
                                                        Self-sabotage can be frustrating. In the moment, it might seem like you’re making a good choice, but eventually the truth becomes more apparent. It’s easy to beat yourself up over your self-sabotaging behavior, but that can make it even harder for you to succeed the next time.

                                                        <br />
                                                        <br />

                                                        Be good to yourself and avoid “shooting yourself in the foot” with self-sabotage. You can and will be successful!

                                                    </p>  

                                                    <button type="button" class="close" aria-label="Close" onClick={closePopup16}>
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>


                                                </div>
                                            </div>
                                        </div>

                                        <div id="popup17" className="popup">
                                            <div className="popup-content">
                                                <div className="popup-scrollable-content">
                                                    <h3 className='title'>Top 10 Self-Confidence Building Tips</h3>
                                                    <h1 className='text-dark mb-32'>Love Master.</h1>
                                                    <h2 className="text-red-700 title">Top 10 Self-Confidence Building Tips</h2>
                                                    <p className='text-left ml-52 mr-52 text-dark mb-20'>

                                                    A lack of confidence can affect every area of your life, from your job performance to your personal relationships. In reality, how you perceive yourself has a powerful impact on how others treat you. 

                                                    <br/>
                                                    <br />
                                                    
                                                    Some factors in bolstering self-confidence may be beyond your control, but there are some very tangible things that you can do as well. Using these tips will help you reach your full potential as a successful and confident person.
                                                    
                                                    <br/>
                                                    <br/>
                                                        <h4>Eliminate self-sabotage from your life using these tips:</h4>
                                                        
                                                        <br />

                                                        <p className="ml-14">

                                                            <li><strong>1. Dress confidently.</strong> Dress like the person you want to be and you’ll feel yourself become that person. When you look good, you’ll feel good. Now, this doesn’t mean that you have to go out and spend a fortune on clothes. It’s better to buy a few really nice pieces than a bunch of cheap ones. </li>
                                                            
                                                            <br />
                                                            
                                                            <li><strong>2. Walk faster.</strong> People who walk confidently keep a brisk pace because they have things to do and places to be. Simply quickening your step will help you feel more confident.</li>

                                                            <br />

                                                            <li><strong>3. Keep good posture.</strong> People can tell a lot about you by the way you carry yourself. If you have slumped shoulders and cannot look people in the eye, you’ll leave a negative impression on them. Keep your head up, make eye contact with others, and stand up straight and tall. You have nothing to hide.</li>
                                                            
                                                            <br />
                                                            
                                                            <li><strong>4. Be grateful.</strong> Gratitude creates a state of peace in the body. A peaceful mind radiates confidence. Make a list of the things you appreciate about yourself and be grateful for your past successes. Tell those you love how much you appreciate them being in your life.</li>
                                                            
                                                            <br />
                                                            
                                                            <li><strong>5. Compliment others.</strong>In addition to showing appreciation for what you have, it’s also important to show others your appreciation. If you think negatively about yourself, then you’ll have a tendency to criticize others. Break this habit by praising others on a daily basis. Seeing the best in others will bring out the best in you.</li>

                                                            <br />

                                                            <li><strong>6. Give back.</strong> Contributing to the success of others will not only help you feel better about yourself, but karma will reward you in the end. What goes around comes around, right? Volunteer your time to help those in need or make a monetary contribution to your favorite local charity.</li>

                                                            <br />

                                                            <li><strong>7. Don’t be afraid to speak up.</strong> Many people keep quiet for fear of saying something silly. Taking an active role in discussions will distinguish you as a leader amongst your peers. They will quickly recognize that you have confidence and plenty to offer. </li>
                                                            
                                                            <br />

                                                            <li><strong>8. Exercise regularly.</strong> If you work hard to create a better physical image, you’ll not only be healthier, but you’ll also have more energy. Both of these things will contribute to your self-confidence, as will the compliments you’ll receive. </li>

                                                            <br />

                                                            <li><strong>9. Sit in the front row.</strong> Most of us have a tendency to try to blend into the back of the room somewhere. We don’t like being noticed. Confident people sit up front where they can take part in discussions without fear.</li>

                                                            <br />

                                                            <li><strong>10. Take a chance and try something new.</strong> Learning a new hobby or activity will broaden your horizons and help you feel “alive.” Anytime you spend stretching your mind improves your overall self-confidence.</li>


                                                        </p>

                                                        <br></br>

                                                        <h4>
                                                            Life’s Lessons
                                                        </h4>

                                                        
                                                        <br />
                                                        
                                                        The more self-confidence you build in yourself, the more likely you’ll be to succeed. No matter what task you choose to conquer, you’ll do so with enthusiasm. Any setbacks you encounter won’t bother you because you’ll have the confidence necessary to continue.

                                                        <br />
                                                        <br />

                                                        Those who are insecure often find life to be a struggle, but with self-confidence, you can find it to be a joy. Why suffer when you can soar!

                                                    </p>  

                                                    <button type="button" class="close" aria-label="Close" onClick={closePopup17}>
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>


                                                </div>
                                            </div>
                                        </div>

                                    </div>                     
                                </div>
                            
                            </section>
                            
        </main>
    )

}

function Members() {

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
              const { hasSubscription } = response.data;
              setHasSubscription(hasSubscription);
            } catch (error) {
              console.error(error);
            }
          } catch (error) {
            console.error(error);
          }
        }
      
        checkSubscription();
      }, []);

    return (
        <div className="bodyMembers">

            {hasSubscription ? (
                <>
                    <div className='app'>
                        <MainContent/>
                        <Footer/>
                    </div>
                
                </>
            ):( 

                <>

                    <h1 className='text-center'>
                        You don't have authorization
                    </h1>

                </>

            )}
        </div>
    )
}

export default Members