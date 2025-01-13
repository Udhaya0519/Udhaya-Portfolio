import { IoClose } from "react-icons/io5";
import NavMobileLink from "./NavMobileLink";
import { useEffect, useState } from "react";




function NavMobile({ menuBarAction }) {

    const [ navMobileTransform, setNavMobileTransform ] = useState("translateX(-100%)")


    
    function closeNavbarMobile(){
    
        setNavMobileTransform("translateX(-100%)")
          
    }

    useEffect( () => {
        
        if(menuBarAction === "open"){
            setNavMobileTransform("translateX(0%)") 
        }
        
    },[menuBarAction])


    return ( 
        <div className="nav-mobile" style={ { transform: navMobileTransform, transition: "transform 0.3s ease-in-out"}}>
            <div className="close-icon-wrapper">
            <IoClose
                onClick={ closeNavbarMobile }
                className="close-icon"
                size={25}
            />
            </div>
            <NavMobileLink onLinkClick={ closeNavbarMobile }/>
        </div>
     );
}

export default NavMobile;