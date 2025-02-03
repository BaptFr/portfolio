import styles from './Header.module.scss';
import LogoSite from '/assets/images/logosite-header.webp';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Header () {
    const [showImage, setShowImage] = useState(false);

    useEffect(() => {
        setTimeout(() => {
          setShowImage(true);
        }, 10000);
      }, []);

    return (
        <header className={` ${styles.headerContainer} relative d-flex all-center p-15 `}>
            <div className='overlay'>
            </div>
            <img className={` ${styles.siteLogo} ${styles.blinkAnimation} z-index1`} src={ LogoSite } alt='logo'></img>
            <nav className='z-index2'>
                <ul className='d-flex all-center gap-15 mr-10'>
                    <NavLink to='presentation' end
                            className={ ({ isActive })  => isActive ? styles.activeLink :''}
                            >
                            <li  className='d-flex flex-row   gap-10 text-shadow-outline   active-effect'>
                                <i className='fa-solid fa-user icons i1'></i>
                                <button className='btn text-center text-shadow-outline'> Présentation</button>
                            </li>
                    </NavLink>
                    <NavLink to='projects' end
                            className={ ({ isActive })  => isActive ? styles.activeLink :''}
                            >
                        <li className='d-flex flex-row  gap-10  text-shadow-outline active-effect'>
                            <i className='fa-solid fa-briefcase icons i2'></i>
                            <button className='btn  text-center text-shadow-outline'> Mes projets</button>
                        </li>
                    </NavLink>
                    <NavLink to='contact' end
                            className={ ({ isActive })  => isActive ? styles.activeLink :''}
                            >
                    <li className='d-flex gap-10 text-shadow-outline active-effect'>
                        <i className={`fa-solid fa-envelope icons i3`}></i>
                        <button
                        className='btn text-center text-shadow-outline'>
                        Me contacter
                        </button>
                    </li>
                    </NavLink>
                </ul>
            </nav>
        </header>
    )
};
export default Header;