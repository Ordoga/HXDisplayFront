import { Link } from 'react-router'
import { httpService } from '../../services/http.service.js'

export default function Header() {
    const colors = [
        { id: 1, name: 'Black', hex: '#000000' },
        { id: 2, name: 'Matte Black', hex: '#000000' },
        { id: 3, name: 'Cold White', hex: '#ffffff' },
        { id: 4, name: 'White', hex: '#ffffff' },
        { id: 5, name: 'Matte White', hex: '#ffffff' },
        { id: 6, name: 'Sky Blue', hex: '#87ceeb' },
        { id: 7, name: 'Army Blue', hex: '#87ceeb' },
        { id: 8, name: 'Matte Liliach', hex: '#d8b9ff' },
    ]

    const products = [
        { id: 1, name: 'Hex', description: 'Hex Only', price: 27 },
        { id: 2, name: 'Acrylic Cover', description: 'Cover Only', price: 7 },
        { id: 3, name: 'Combo', description: 'Hex With Cover', price: 30 },
    ]

    const productColors = [
        { id: 1, productId: 1, colorId: 1 },
        { id: 2, productId: 1, colorId: 2 },
        { id: 3, productId: 1, colorId: 3 },
        { id: 4, productId: 1, colorId: 4 },
        { id: 5, productId: 1, colorId: 5 },
        { id: 6, productId: 1, colorId: 6 },
        { id: 7, productId: 1, colorId: 7 },
    ]

    const db = { colors, products, productColors }

    async function fillDB() {
        const response = await httpService.post('product/filldb', db)
        console.log(response)
    }

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
                <button onClick={fillDB}>Fill DB</button>
            </div>
        </section>
    )
}
