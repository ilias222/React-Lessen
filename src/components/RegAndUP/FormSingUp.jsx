import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { auch } from "../../store/profile/actions"
import { singUp } from "../../services/firebase"

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export const FormSingUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handlePassChange = (e) => {
        setPassword(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setLoading(true)
        try {
            await singUp(email, password)
            navigate('/chats')
            setError('Happy Up!!!')
            dispatch(auch(true))
        } catch (error) {
            setError(error.message)
            setEmail('')
            setPassword('')
        } finally{
            setLoading(false)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>Fill in form below to login to your account.</p>
                <div>
                    <input
                        placeholder="Email"
                        name="email"
                        type='email'
                        onChange={handleEmailChange}
                        value={email}
                    />
                </div>
                <div>
                    <input
                        placeholder="Password"
                        name="password"
                        onChange={handlePassChange}
                        value={password}
                        type='password'
                    />
                </div>
                <div>
                    { error && <p>{error}</p>}
                    <button type='submit'>Login</button>
                </div>
                <hr />
                <div>
                        {loading && <Box sx={{ display: 'flex' }}>
                                    <CircularProgress />
                                    </Box>}
                </div>
            </form>
        </div>
    )
}