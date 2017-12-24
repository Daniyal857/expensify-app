import React from 'react'
import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>Expensify</h1>
            <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
            <NavLink to="/create" activeClassName="is-active">Crerate Expense</NavLink>
            <NavLink to="/edit" activeClassName="is-active">Go Edit</NavLink>
        </header>
    )
}
export default Header;