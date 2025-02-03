import { Link } from 'react-router'

export default function Header() {
    return (
        <section className='app-header'>
            <Link to='/'>
                <img src='/logo.png' alt='Logo' width='80px' />
            </Link>
            <div className='header-links'>
                <Link to='/store'>Store</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/login'>Login</Link>
                <Link to='/product'>Product Example</Link>
            </div>
        </section>
    )
}
