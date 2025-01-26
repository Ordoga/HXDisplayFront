import { useState } from 'react'
import { loginAction } from '../../store/actions/auth.action'

export default function LoginInputs() {
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    })

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const user = await loginAction(credentials)
        console.log(user)
    }

    return (
        <section className='login-section'>
            <div className='login-content'>
                <div className='login-form'>
                    <form onSubmit={handleSubmit}>
                        <input
                            type='text'
                            placeholder='Email'
                            value={credentials.email}
                            onChange={e => setCredentials({ ...credentials, email: e.target.value })}
                        />
                        <input
                            type='password'
                            placeholder='Password'
                            value={credentials.password}
                            onChange={e => setCredentials({ ...credentials, password: e.target.value })}
                        />
                        <button type='submit'>Login</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
