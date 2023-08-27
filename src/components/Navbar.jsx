import reactLogo from '../assets/react.svg'
import { FaBars } from 'react-icons/fa'
import { links } from '../data'
import { useRef, useState } from 'react'

export const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false)
    const linksContainerRef = useRef(null)
    const linksRef = useRef(null)

    const toggleLinks = () => {
        setShowLinks(!showLinks);
    }

    const linksStyles = {
        height: showLinks ? `${linksRef.current.getBoundingClientRect().height}px` : '0px'
    }

    return (
        <header className="header">
            <div className='container'>
                <nav className="header__nav">
                    <div className='nav-header'>
                        <a href="https://react.dev" target="_blank" rel='noreferrer'>
                            <img src={reactLogo} className="logo react" alt="React logo" />
                        </a>
                        <button className='nav-toggle' onClick={toggleLinks}><FaBars /></button>
                    </div>
                    <div className='nav__container' ref={linksContainerRef} style={linksStyles}>
                        <ul className="nav__links" ref={linksRef} >
                            {links.map((link) => {
                                const { id, url, text } = link;
                                return (
                                    <li key={id}>
                                        <a href={url}>{text}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}
