import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'
import {MdAccountCircle} from 'react-icons/md';

import { Cart } from './';
import { useStateContext} from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Shop Z</Link>
      </p>
      
      <div class=" flex-grow lg:flex lg:items-center lg:w-auto ">
      <div class=" flex items-center justify-center flex-col md:flex-row ext-sm lg:flex-grow" >
      <a href={"/tshirts"} class="block mt-4 lg:inline-block lg:mt-0 text-black font-bold   hover:text-white mr-16 text-2xl">
        Tshirts
      </a>
      <a href={"/mugs"} class="block mt-4 lg:inline-block lg:mt-0 text-black font-bold  hover:text-white mr-16 text-2xl">
        Mugs</a>
      <a href={"/hoodie"} class="block mt-4 lg:inline-block lg:mt-0 text-black font-bold hover:text-white text-2xl">
        Hoddie
      </a>
    </div>
    </div>
      <div>
        <MdAccountCircle/>
      </div>
      <button type="button" className="cart-icon flex" onClick={() => setShowCart(true)}>
        <AiOutlineShopping className='text-lg md:text-2xl w-8/6 '/>
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar