import LoginHero from '../cmps/LoginPage/LoginHero'
import LoginInputs from '../cmps/LoginPage/LoginInputs'

export default function LoginPage() {
    return (
        <section className='login-page'>
            <LoginInputs />
            <LoginHero />
        </section>
    )
}
