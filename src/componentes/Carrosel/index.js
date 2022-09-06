import React,{useEffect} from 'react'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Autoplay } from 'swiper';
import '../../App.css';
import Aos from 'aos';
import "aos/dist/aos.css";

SwiperCore.use([Autoplay]);

export default function Carrosel(){
    useEffect(()=>{
        Aos.init({duration: 2000});
      },[]);

    library.add(fab);

    const SwiperSlider = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '20vh',
    }

    return(
        <div data-aos="fade-left">

        <Swiper allowTouchMove slidesPerView={5} slidesPerGroup={5} loop={true} autoplay={{
            "delay": 2000,
        }}>
            <SwiperSlide style={SwiperSlider}>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center" }}>
                    <FontAwesomeIcon className='iconeAnimado' icon={["fab", "js-square"]} color='#F0DB4F' size='3x' />
                    <span style={{color: '#F0DB4F'}}>JS</span>
                </div>
            </SwiperSlide>
            <SwiperSlide style={SwiperSlider}>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center" }} >
                    <FontAwesomeIcon className='iconeAnimado' icon={["fab", "github"]} size={'3x'}/>
                    <span style={{color: '#353839'}}>GitHub</span>
                </div>
            </SwiperSlide>
            <SwiperSlide style={SwiperSlider}>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center" }}>
                    <svg  height={50} width={50} viewBox="0 0 128 128">
                        <path fill="#007acc" d="M2 63.91v62.5h125v-125H2zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1A23 23 0 0180 109.19c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73l4.6-2.64 3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H57.16v46.23H45.65V69.26H29.38v-5a49.19 49.19 0 01.14-5.16c.06-.08 10-.12 22-.1h21.81z"></path>
                    </svg>
                    <span style={{color: '#007acc'}}>TS</span>
                </div>
            </SwiperSlide>
            <SwiperSlide style={SwiperSlider}>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center" }}>
                    <FontAwesomeIcon className='iconeAnimado' icon={["fab", "react"]} color='#01C1E2' size='3x'/>
                    <span style={{color: '#01C1E2'}}>ReactJS</span>
                </div>
            </SwiperSlide>

            
            <SwiperSlide style={SwiperSlider}>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center" }}>
                    <FontAwesomeIcon className='iconeAnimado' icon={["fab", "figma"]} color='#FF7262' size='3x'/>
                    <span style={{color: '#FF7262'}}>Figma</span>
                </div>
            </SwiperSlide>
            <SwiperSlide style={SwiperSlider}>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center" }}>
                    <FontAwesomeIcon className='iconeAnimado' icon={["fab", "css3"]} color='#1572B6' size='3x'/>
                    <span style={{color: '#1572B6'}}>CSS</span>
                </div>
            </SwiperSlide>
            <SwiperSlide style={SwiperSlider}>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center" }}>
                    <FontAwesomeIcon className='iconeAnimado' icon={["fab", "react"]} color='#01C1E2' size='3x'/>
                    <span style={{color: '#01C1E2'}}>ReactNative</span>
                </div>
            </SwiperSlide>
            <SwiperSlide style={SwiperSlider}>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center" }}>
                    <FontAwesomeIcon className='iconeAnimado' icon={["fab", "html5"]} color='#FC490B' size='3x'/>
                    <span style={{color: '#FC490B'}}>HTML</span>
                </div>
            </SwiperSlide>
            <SwiperSlide style={SwiperSlider}>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center" }}>
                    <svg height={50} width={50} viewBox="0 0 128 128">
                        <path d="M116.5 32.3c-.6-1.1-1.4-2.1-2.3-2.6L66.1 1.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7L11.4 29.7c-1.7 1-3.4 3.5-3.4 5.4v55.7c0 1.1.7 2.3 1.4 3.4l.1.1c.5.8 1.3 1.5 2 1.9l48.3 27.9c.8.5 2 .7 3.2.7 1.2 0 2.3-.3 3.1-.7l47.5-27.9c1.7-1 2.4-3.5 2.4-5.4V35.1c0-.8.4-1.8 0-2.6l.5-.2zm-4.2 2.1c0 .3-.3.5-.3.7v55.7c0 .8-.2 1.7-.4 2L64 120.6c-.1.1-.5.2-1.1.2-.6 0-1-.1-1.1-.2L13.6 92.8s-.1-.1-.2-.1l-.6-.6c-.4-.7.2-1.1-.8-1.2V35.2c1-.5.9-1.7 1.4-1.9L61.7 5.4c.1 0 .6-.2 1.2-.2s1 .1 1.1.2l48 27.7.4.9c.1.1-.1.3-.1.4zM63 38.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6C80.1 82.5 72.1 87.5 63 87.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5z" fill="#03599C"></path>
                    </svg>
                    <span style={{color: '#03599C'}}>C</span>
                </div>
            </SwiperSlide>
            <SwiperSlide style={SwiperSlider}>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center" }}>
                    <img alt="styled-components" src="https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png" height="50px" width="50px" />
                    <span style={{color: '#BA55D3'}}>Styled</span>
                </div>
            </SwiperSlide>

            <SwiperSlide style={SwiperSlider}>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center" }}>
                    <svg height={50} width={50} viewBox="0 0 128 128">
                        <path fill="#f58220" d="M27.35 80.52l10.68-68.44c.37-2.33 3.5-2.89 4.6-.8l11.48 21.48-26.76 47.76zm75.94 16.63L93.1 34.11c-.31-1.96-2.76-2.76-4.17-1.35L24.71 97.15l35.54 19.95a7.447 7.447 0 007.18 0l35.86-19.95zm-28.85-55L66.21 26.5c-.92-1.78-3.44-1.78-4.36 0L25.7 90.95l48.74-48.8z"></path>
                    </svg>
                    <span style={{color: '#f58220'}}>FireBase</span>
                </div>
            </SwiperSlide>
            <SwiperSlide style={SwiperSlider}>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center" }}>
                    <svg height={50} width={50} viewBox="0 0 128 128">
                        <path fill="#F34F29" d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.574 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 013.167-2.11V47.333a9.581 9.581 0 01-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333 3.264 58.123a8.133 8.133 0 000 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 00-.001-11.501z"></path>
                    </svg>
                    <span style={{color: '#F34F29'}}>Git</span>
                </div>
            </SwiperSlide>
            
           
            <SwiperSlide style={SwiperSlider}>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center" }}>
                    <svg height={50} width={50} viewBox="0 0 128 128">
                        <linearGradient id="python-original-a" gradientUnits="userSpaceOnUse" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stopColor="#5A9FD4"></stop><stop offset="1" stopColor="#306998"></stop></linearGradient><linearGradient id="python-original-b" gradientUnits="userSpaceOnUse" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stopColor="#FFD43B"></stop><stop offset="1" stopColor="#FFE873"></stop></linearGradient><path fill="url(#python-original-a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" transform="translate(0 10.26)"></path><path fill="url(#python-original-b)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z" transform="translate(0 10.26)"></path><radialGradient id="python-original-c" cx="1825.678" cy="444.45" r="26.743" gradientTransform="matrix(0 -.24 -1.055 0 532.979 557.576)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#B8B8B8" stopOpacity=".498"></stop><stop offset="1" stopColor="#7F7F7F" stopOpacity="0"></stop></radialGradient><path opacity=".444" fill="url(#python-original-c)" d="M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416 0-3.544 14.815-6.417 33.092-6.417 18.275 0 33.091 2.872 33.091 6.417z"></path>
                    </svg>
                    <span style={{color: '#FFD43B'}}>Python</span>
                </div>
            </SwiperSlide>
            <SwiperSlide style={SwiperSlider}>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center" }}>
                    <svg height={50} width={50} viewBox="0 0 128 128">
                        <path d="M3.656 45.043s-3.027-2.191.61-5.113l8.468-7.594s2.426-2.559 4.989-.328l78.175 59.328v28.45s-.039 4.468-5.757 3.976zm0 0" fill="#2489ca"></path><path d="M23.809 63.379L3.656 81.742s-2.07 1.543 0 4.305l9.356 8.527s2.222 2.395 5.508-.328l21.359-16.238zm0 0" fill="#1070b3"></path><path d="M59.184 63.531l36.953-28.285-.239-28.297S94.32.773 89.055 3.99L39.879 48.851zm0 0" fill="#0877b9"></path><path d="M90.14 123.797c2.145 2.203 4.747 1.48 4.747 1.48l28.797-14.222c3.687-2.52 3.171-5.645 3.171-5.645V20.465c0-3.735-3.812-5.024-3.812-5.024L98.082 3.38c-5.453-3.379-9.027.61-9.027.61s4.593-3.317 6.843 2.96v112.317c0 .773-.164 1.53-.492 2.214-.656 1.332-2.086 2.57-5.504 2.051zm0 0" fill="#3c99d4"></path>
                    </svg>
                    <span style={{color: '#5A9FD4'}}>VsCode</span>
                </div>
            </SwiperSlide>
        </Swiper>
        </div>
    )
}



