import Link from 'next/link'

const SR = () => {
    return ( 
        <div className='sr-container'>
            <Link href='/login'><a className='login'>Sign in</a></Link>
            <Link href='/register'><a className='register'>Register</a></Link>
        </div>
     );
}
 
export default SR;