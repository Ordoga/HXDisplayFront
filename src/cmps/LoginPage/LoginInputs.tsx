import { Dispatch, SetStateAction, useState } from 'react'
import { loginAction, signupAction } from '../../store/actions/auth.action'
import { useNavigate } from 'react-router'

export default function LoginInputs() {
    const navigate = useNavigate()
    const [isLogin, setIsLogin] = useState(true)

    const [loginCreds, setLoginCreds] = useState({
        email: '',
        password: '',
    })
    const [signupCreds, setSignupCreds] = useState({
        name: '',
        email: '',
        password: '',
    })

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        let user = null
        if (isLogin) {
            user = await loginAction(loginCreds)
        } else {
            user = await signupAction(signupCreds)
        }
        if (user) {
            navigate('/')
        }
    }

    return (
        <section className='login-section'>
            {isLogin ? (
                <LoginForm
                    loginCreds={loginCreds}
                    setLoginCreds={setLoginCreds}
                    handleSubmit={handleSubmit}
                    isLogin={isLogin}
                    setIsLogin={setIsLogin}
                />
            ) : (
                <SignupForm
                    signupCreds={signupCreds}
                    setSignupCreds={setSignupCreds}
                    handleSubmit={handleSubmit}
                    isLogin={isLogin}
                    setIsLogin={setIsLogin}
                />
            )}
        </section>
    )
}

function LoginForm({ loginCreds, setLoginCreds, handleSubmit, isLogin, setIsLogin }: LoginFormProps) {
    return (
        <div className='login-form'>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Email'
                    autoComplete='email'
                    value={loginCreds.email}
                    onChange={e => setLoginCreds({ ...loginCreds, email: e.target.value })}
                />
                <input
                    type='password'
                    placeholder='Password'
                    autoComplete='current-password'
                    value={loginCreds.password}
                    onChange={e => setLoginCreds({ ...loginCreds, password: e.target.value })}
                />
                <button type='submit'>Login</button>
            </form>
            <div className='go-to-signup'>
                Don't have an account?{' '}
                <span className='switch' onClick={() => setIsLogin(!isLogin)}>
                    Sign Up
                </span>
            </div>
        </div>
    )
}

function SignupForm({ signupCreds, setSignupCreds, handleSubmit, isLogin, setIsLogin }: SignupFormProps) {
    return (
        <div className='login-form'>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Full Name'
                    autoComplete='name'
                    value={signupCreds.name}
                    onChange={e => setSignupCreds({ ...signupCreds, name: e.target.value })}
                />
                <input
                    type='text'
                    placeholder='Email'
                    autoComplete='email'
                    value={signupCreds.email}
                    onChange={e => setSignupCreds({ ...signupCreds, email: e.target.value })}
                />
                <input
                    type='password'
                    placeholder='Password'
                    autoComplete='current-password'
                    value={signupCreds.password}
                    onChange={e => setSignupCreds({ ...signupCreds, password: e.target.value })}
                />
                <button type='submit'>Sign Up</button>
            </form>
            <div className='go-to-signup'>
                Already have an account?{' '}
                <span className='switch' onClick={() => setIsLogin(!isLogin)}>
                    Sign In
                </span>
            </div>
        </div>
    )
}

interface SignupCreds {
    name: string
    email: string
    password: string
}

interface SignupFormProps {
    signupCreds: SignupCreds
    setSignupCreds: Dispatch<SetStateAction<SignupCreds>>
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
    isLogin: boolean
    setIsLogin: Dispatch<SetStateAction<boolean>>
}

interface LoginCreds {
    email: string
    password: string
}

interface LoginFormProps {
    loginCreds: LoginCreds
    setLoginCreds: Dispatch<SetStateAction<LoginCreds>>
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
    isLogin: boolean
    setIsLogin: Dispatch<SetStateAction<boolean>>
}
