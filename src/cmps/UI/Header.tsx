import { Link } from 'react-router'

export default function Header() {
    return (
        <section className='app-header'>
            <img src='/logo.png' alt='Logo' width='80px' />
            <div className='header-links'>
                <Link to='/store'>Store</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/login'>Login</Link>
            </div>
        </section>
    )
}
