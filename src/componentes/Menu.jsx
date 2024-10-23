import React from 'react'

const Menu = ({className,menuName}) => {
  return (
    <ul className={`text-2xl font-pop font-semibold ${className}`}>
        <li>{menuName}</li>
    </ul>
  )
}

export default Menu
