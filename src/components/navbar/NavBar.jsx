import React, {useEffect, useState} from 'react';
import './NavBar.scss'
import {Link,useLocation} from "react-router-dom";
const NavBar = () => {


    const [active, setActive] = useState(false)
    const [open,setOpen]=useState(false)
    const {pathname}=useLocation()

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }
    useEffect(() => {
        window.addEventListener("scroll", isActive);

        return () => {
            window.removeEventListener("scroll", isActive)
        }
    }, [])
    const currentUser = {
        id: 1,
        userName: 'goitom',
        isSeller: true
    }
    return (
        <div className={active || pathname !=="/" ? "navbar active" : "navbar"}>
            <div className="container">
                <div className='logo'>
                    <Link to='/'  className='link'>
                    <span className='text'>fiverr</span>
                    </Link>

                    <span className='dot'>.</span>
                </div>
                <div className='links'>
                    <span>Fiver Business</span>
                    <span>Explore</span>
                    <span>English</span>
                    <span>Join</span>
                    {!currentUser?.isSeller && <span>Become a Seller</span>}

                    {!currentUser && <button>join</button>}
                    {currentUser && (
                        <div className='user' onClick={()=>setOpen(!open)}>
                            <img src="https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg" alt=""/>
                            <span>{currentUser?.userName}</span>
                            {open &&<div className='options'>
                                {currentUser?.isSeller && (
                                    <>
                                        <Link to='/mygigs' className='link'>Gigs</Link>
                                        <Link to='/add' className='link'>add New Gig</Link>
                                    </>
                                )}
                                <Link to='/orders' className='link'>Orders</Link>
                                <Link to='/messages' className='link'>Messages</Link>
                                <Link to='/' className='link'>LogOut</Link>
                            </div>}

                        </div>)}
                </div>
            </div>
            {
                (active || pathname!=='/') && (
                    <>
                        <hr/>
                        <div className='menu'>
                            <Link to='/' className="link menulink">
                                Graphics design
                            </Link>
                            <Link to='/' className="link">
                                Video Animation
                            </Link>
                            <Link to='/' className="link">
                                Writing and translation
                            </Link>
                            <Link to='/' className="link">
                                Ai service
                            </Link>
                            <Link to='/' className="link">
                                Digital marketing
                            </Link>
                            <Link to='/' className="link">
                                Music And Audio
                            </Link>
                            <Link to='/' className="link">
                                Programing and tech
                            </Link>
                            <Link to='/' className="link">
                                Business
                            </Link>
                            <Link to='/' className="link">
                                Life Style
                            </Link>
                        </div>
                    </>
                )}

        </div>

    );
};

export default NavBar;
