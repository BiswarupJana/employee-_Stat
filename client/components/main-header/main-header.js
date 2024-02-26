import NavLink from '@/components/nav-link/nav-link';
import classes from './main-header.module.css'
import Image from 'next/image';
import MainHeaderBackground from './main-header-background';
import logoImg from '@/assets/logo.png';
import Link from 'next/link';
import ProfileHeadBtn from '../profile-btn/profile-btn';
export default function MainHeader() {
  

  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={logoImg} alt="A plate with food on it" priority />
          
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
                <NavLink  href="/employee">Employees</NavLink>
            </li>
            <li>
                <NavLink  href="/peoples">Salary Statistics</NavLink>
            </li>
            <ProfileHeadBtn />
          </ul>
        </nav>
      </header>
    </>
  );
}
