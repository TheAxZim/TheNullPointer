import styles from './Header.module.scss';

import Link from 'next/link'
import Image from 'next/image';
import logo from '../../public/logo.svg';
import menuBtn from '../../public/menu.svg';
import crossBtn from '../../public/cross.svg';

function openNavigation() {
    const nav = document.querySelector('nav');
    nav.classList.add(styles.menuBtn);
}

function closeNavigation() {
    const nav = document.querySelector('nav');
    nav.classList.remove(styles.menuBtn);
}

export default function Header() {
    return (
        <>
            <div className={styles.header}>
                <div className={styles.container}>
                    <Link href="/" passHref>
                        <div className={styles.logo}>
                        <Image 
                            src={logo}
                            alt="The Null Pointer Logo, Click to go to the Home Page" 
                            width="337px"
                            height="45px"/>
                        </div>
                    </Link>
                    <div className={styles.mobileMenu}>
                        <Image 
                            onClick={openNavigation}
                            src={menuBtn}
                            alt="Open Navigation"
                            layout="intrinsic" 
                            width="40px"
                            height="40px"/>
                    </div>
                </div>
            </div>
            <div className={styles.navbar}>
                <div className={styles.container}>
                    <nav>
                        <div className={styles.mobileMenuExit}>
                            <Image 
                                onClick={closeNavigation}
                                src={crossBtn}
                                alt="Close Navigation"/>
                        </div>
                        <ul className={styles.mainNav}>
                            <li><Link href="/">Home</Link></li>

                            <li><Link href="/blog">Blog</Link></li>
                            <li><Link href="/projects">Projects</Link></li>
                            <li><Link href="/services">Services</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                            <li className={styles.requestCta}><Link href="#">Request</Link></li>
                        </ul>
                    </nav>
                    <hr />
                </div>
            </div>
        </>
    );
}