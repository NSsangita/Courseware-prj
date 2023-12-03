import React, { useEffect } from 'react';
import { Container,Button} from 'reactstrap';
import bg from "../images/bg.webp";
import Heading from './Heading';
import { Link} from 'react-router-dom';
import "./Home.css";
import Head from './Head';



const Home = () => {

  useEffect(()=>{
    document.title = "Home || Learncode With SSS-M";
  },[]);

  return (
    <>
    <Head/>
    <section className='hero'>
     <div className='container'>
        <div className='row'>
       <b><Heading subtitle='WELCOME TO ACADEMIC' title='Best Online Education Expertise' /></b> 
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          <div className='button'>
          <Link to="/">
            <button className='primary-btn'>
              GET STARTED NOW <i class="fa-solid fa-arrow-right"></i>
            </button>
            </Link>
          <Link to="/loginform">
            <button>
              VIEW COURSE <i class="fa-solid fa-arrow-right"></i>
            </button>
            </Link>
          </div>
        </div>
       <b> <p className='font-bold text-sm tracking-wide text-gray-800 mt-2'>@centurionuniversity.com.nic bbsr campus</p></b>

      </div>
    </section>
    
    <div className='margin'></div>
  </>
)
}


export default Home;
