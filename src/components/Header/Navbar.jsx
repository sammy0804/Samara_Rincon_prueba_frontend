import React, { useState } from 'react';
import {menuItems} from "../../data/MenuItems";
import MenuItems from "./MenuItems";

const Navbar = () =>{
    const [isOpen, setIsOpen] = useState(false);

    return(
        <nav className='navbar'>
            <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                {/* Icon for the hamburger menu */}
                <div></div>
                <div></div>
                <div></div>
            </div>
            <ul className={`menus ${isOpen ? "show" : ""}`}>
                {
                    menuItems.map((menu, index)=>{
                        const depthlevel = 0;
                        return <MenuItems items={menu} key={index} depthlevel={depthlevel} />
                    })
                }
            </ul>
        </nav>
    )
}

export default Navbar;