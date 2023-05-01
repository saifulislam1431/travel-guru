import React from 'react';
import bg from "../../assets/images/img/Rectangle 1.png"
import slideImg1 from "../../assets/images/img/Sajek.png";
import slideImg2 from "../../assets/images/img/Sreemongol.png";
import slideImg3 from "../../assets/images/img/sundorbon.png";
import { Link } from 'react-router-dom';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css";

const Home = () => {
    const [sliderRef] = useKeenSlider({
        loop:true,
        mode: false,
        slides:{
            perView: 3,
            spacing:15,
        },
    })
    return (

        <section className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80")` }}>

            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content flex flex-col lg:flex-row gap-10">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold text-white">Find your next stay</h1>
                    <p className="my-8 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <Link to="/login">
                        <button className="myBtn">Get Started</button>
                    </Link>
                </div>
                <div className="mt-5">
                    <div ref={sliderRef} className='keen-slider'>
                    <Link className="keen-slider__slide number-slide1 hover:border-2 hover:border-secondary rounded-xl" to="/coxsbazar">
                        <img src={slideImg1} alt="" className='w-full '/>
                        <div className='rounded-md absolute  top-0 left-0 w-full h-full flex items-end' style={{ background: 'linear-gradient(0.12deg, #000000 0.1%, rgba(0, 0, 0, 0) 69.96%)' }}>
                            <h5 className='mb-5 ml-2 text-white text-xl md:text-2xl' style={{ fontFamily: ['Bebas Neue', 'cursive'] }}>Cox'Bazar</h5>
                        </div>
                    </Link>

                    <Link className="keen-slider__slide number-slide1 hover:border-2 hover:border-secondary rounded-xl" to="/sreemangol">
                        <img src={slideImg2} alt="" className='w-full '/>
                        <div className='rounded-md absolute  top-0 left-0 w-full h-full flex items-end' style={{ background: 'linear-gradient(0.12deg, #000000 0.1%, rgba(0, 0, 0, 0) 69.96%)' }}>
                            <h5 className='mb-5 ml-2 text-white text-xl md:text-2xl' style={{ fontFamily: ['Bebas Neue', 'cursive'] }}>Sreemangol</h5>
                        </div>
                    </Link>

                    <Link className="keen-slider__slide number-slide1 hover:border-2 hover:border-secondary rounded-xl" to="/sundorban">
                        <img src={slideImg3} alt="" className='w-full'/>
                        <div className='rounded-md absolute  top-0 left-0 w-full h-full flex items-end' style={{ background: 'linear-gradient(0.12deg, #000000 0.1%, rgba(0, 0, 0, 0) 69.96%)' }}>
                            <h5 className='mb-5 ml-2 text-white text-xl md:text-2xl' style={{ fontFamily: ['Bebas Neue', 'cursive'] }}>Sundorban</h5>
                        </div>
                    </Link>
                    </div>
                </div>
            </div>

        </section>

    );
};

export default Home;