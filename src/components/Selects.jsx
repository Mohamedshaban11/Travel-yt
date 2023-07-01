import React from 'react';
import KeyWest from '../assets/keywest.jpg';
import Borabora from '../assets/borabora.jpg';
import Borabora2 from '../assets/borabora2.jpg';
import Maldives from '../assets/maldives.jpg';
import Maldives2 from '../assets/maldives2.jpg';
import Maldives3 from '../assets/maldives3.jpg';
import SelectsCards from './SelectsCards';

const Selects = () => {
  return (
    <div className='  max-w-[1240px] mx-auto py-16 px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        <SelectsCards bg={Borabora} text='Bora Bora'/>
        <SelectsCards bg={Borabora2} text='Maldives'/>
        <SelectsCards bg={Maldives} text='Antigua'/>
        <SelectsCards bg={Maldives2} text='Cozumel'/>
        <SelectsCards bg={Maldives3} text='Jamaica'/>
        <SelectsCards bg={KeyWest} text='Key West'/>
      
    </div>
  )
}

export default Selects