import React, { useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaUserCircle, FaSearch } from 'react-icons/fa'
import { CgMenuGridO } from "react-icons/cg"

import './Header.scss'

const headerNav = [
    {
        display: 'Home',
        path: '/'
    },
    {
        display: 'Movies',
        path: '/movie'
    },
    {
        display: 'TV Shows',
        path: '/tv'
    }
]

const Header = () => {

    const { pathname } = useLocation()
    const headerRef = useRef(null)

    const active = headerNav.findIndex(e => e.path === pathname)

    useEffect(() => {
        const shrinkHeader = () => {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                headerRef.current.classList.add('shrink');
            } else {
                headerRef.current.classList.remove('shrink');
            }
        }
        window.addEventListener('scroll', shrinkHeader);
        return () => {
            window.removeEventListener('scroll', shrinkHeader);
        };
    }, []);

    return (
        <div ref={headerRef} className='header'>
            <div className='header__wrap container'>
                <div className='logo'>
                    <Link to="/">MOVEA</Link>
                </div>
                <ul className='header__nav'>
                    {
                        headerNav.map((e, i) => (
                            <li key={i} className={
                                `${i === active ? 'active' : ''}`}>
                                <Link to={e.path}>
                                    {e.display}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <div className='header__nav header__menu'>
                    <FaSearch />
                    <FaUserCircle />
                    <CgMenuGridO />
                </div>
            </div>

        </div>
    )
}

export default Header
