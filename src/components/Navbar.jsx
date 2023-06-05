import React from 'react';
import Input from './Input';

const Navbar = () => {
    return (
        <header id='navbar'>
            <div>
                <ul>
                    <li><a href="/">Gaming à tort</a></li>
                    <li><a href="/profil">Profil</a></li>
                </ul>
                <form action="">
                    <div>
                        <Input type={"search"} placeholder={"Rechercher..."} name={"search"} />
                    </div>
                </form>
            </div>
        </header>
    );
};

export default Navbar;
