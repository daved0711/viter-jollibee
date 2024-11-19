import { imgPath } from '@/components/helpers/functions-general'
import React from 'react'

const SideNav = () => {

  const menus =[
    
    {
      img : 'nav-value-meal.webp',
      title: 'Value meal',
    },
    
    {
      img : 'nav-chickenjoy.webp',
      title: 'Chickenjoy',
    },
    {
      img : 'nav-burger.webp',
      title: 'Burger',
    },
    {
      img : 'nav-burger-steak.webp',
      title: 'BurgerSteak',
    },
    {
      img : 'nav-desserts.webp',
      title: 'Dessert',
    },
    {
      img : 'nav-palabok.webp',
      title: 'Palabok',
    },
   
    {
      img : 'nav-sides.webp',
      title: 'Sides',
    },
    {
      img : 'nav-spaghetti.webp',
      title: 'Spaghetti',
    },
   
  ]
  return (
    <>
    <h5 className='mb-0 text-center pt-2 text-sm'>Menu</h5>
    <ul>
      {menus.map((item, key)=>(
        <li className='mb-3'>
        <button>
          <img src={`${imgPath}/${item.img}`}/>
          <small className='text-xs'>{item.title}</small>
        </button>
      </li>))}
      

    </ul>
    </>
  )
}

export default SideNav
