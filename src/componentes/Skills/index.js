import React,{useEffect} from 'react'
import Carde from '../Card'
import Aos from 'aos';
import "aos/dist/aos.css";

export default function Skills() {
  useEffect(()=>{
    Aos.init({duration: 2000});
  },[]);

  return (
    <div>
      <Carde/>
    </div>
  )
}
