import React from 'react'
import { FaDumbbell } from "react-icons/fa";
import { TbGymnastics } from "react-icons/tb";
import './HomePage.css';
import { GiGymBag } from "react-icons/gi";

 const HomePage = () => {
  return (
   <>
   <div className='body'>
    <header>
        <div className='nav'>
         <nav className='Nav_bar'>
          <a href="#tumble"><FaDumbbell/></a>
          <a href="#gym"><TbGymnastics/></a>
          <a href="#home"><GiGymBag/></a>
          <a href="#abs">ABS</a>
         </nav>
        </div>
    </header>
    <main>

    </main>
    <footer>
        <h2>copy rights</h2>
    </footer>
   </div>
   </>
  )
}
export default HomePage