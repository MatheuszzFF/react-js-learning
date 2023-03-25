import React from 'react'

const Menu = () => {
    const menu = [
        {name: "Home", url: "/"},
        {name: "Produtos", url: "/produtos"},
        {name: "Modal", url: "/modal"}
    ]
  return (
    <ul>
        {menu.map(({name, url}) => {
            return (
                <li key={name}>
                    <a href={url}>{name}</a>
                </li>
            )
        })}
    </ul>
  )
}

export default Menu