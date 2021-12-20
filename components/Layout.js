import Navbar from './header'
import Footer from './footer'
import SR from './signin-register';

const Layout = ({children}) => {
    return ( 
       <div className='content'> 
       <SR />
       <Navbar />
       { children }
       <Footer />
       </div>
     );
}
 
export default Layout;