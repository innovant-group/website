import Link from 'next/link'
import Logo from './logo';
const Navbar = () => {
    return ( 
        <nav>
          <div className='logo-header'>
            <Logo />
          </div>

            <Link href='/Home' ><a className='home'>Home</a></Link>
            <Link href='/AboutUs' ><a className='aboutus'>About Us</a></Link>
            <Link href='/ContactUs' ><a className='contactus'>Contact Us</a></Link>

           <div className="ar-icon">
             <p className='ar'>Ar</p>
           </div>
            


        </nav>
     );
}
 
export default Navbar;