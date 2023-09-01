import { useEffect, useRef, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { links } from '../../data'
import reactLogo from '../../assets/react.svg'

import './Navbar.css'


export const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)
  const [currentUrl, setCurrentUrl] = useState('')


  const toggleLinks = () => {
    setShowLinks(!showLinks);
  }

  const linksStyles = {
    height: showLinks ? `${linksRef.current.getBoundingClientRect().height}px` : '0px'
  }

  const checkHash = (hash) => {
    setCurrentUrl(() => window.location.href);
    let hashUrl = currentUrl ? hash.match(/#[^\s]+/g).join('') : '';
    console.log(hashUrl);
    switch (hashUrl) {
      case '#Reviews':
        scrollToElement('Reviews');
        console.log('1');
        break;
      case '#Accordion':
        scrollToElement('Accordion');
        console.log(2);
        break;
      case '#Menu':
        scrollToElement('Menu');
        console.log(3);
        break
    }
  }

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  useEffect(() => {
    checkHash(currentUrl);
  }, [currentUrl]);

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
