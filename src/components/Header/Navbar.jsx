import {menuItems} from "../../data/MenuItems";
import MenuItems from "./MenuItems";

const Navbar = () =>{
    return(
        <nav>
            <ul className="menus">
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