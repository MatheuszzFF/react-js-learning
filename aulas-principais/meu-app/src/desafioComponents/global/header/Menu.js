import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
    const menu = [
        {name: "Home", url: "/"},
        {name: "Produtos", url: "/produtos"},
    ]
  return (
    <nav>
        <ul>
            {menu.map(({name, url}) => {
                return (
                    <li key={name}>
                        <NavLink activeStyle={{color: 'green'}}to={url} end>{name}</NavLink>
                    </li>
                )
            })}
        </ul>
    </nav>
  )
}

export default Menu