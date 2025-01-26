import { Link } from 'react-router'

export default function Header() {
    return (
        <section className='app-header'>
            <div>HXDisplay</div>
            <Link to='/store'>Store</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/login'>Login</Link>
        </section>
    )
}
