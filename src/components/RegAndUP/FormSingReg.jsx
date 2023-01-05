import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { singReg } from "../../services/firebase"
import { auch } from "../../store/profile/actions"

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export const FormSingReg = () => {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [error, setError] = useState('')

const navigate = useNavigate()
const dispatch = useDispatch()
const [loading, setLoading] = useState(false)

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
        await singReg(email, password)
        navigate('/singUp')
        setError('Happy Up!!!')
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
            <p>Fill in the form bellow to register new account.</p>
            <div>
                <input
                    placeholder="Email"
                    name="email"
                    type="email"
                    onChange={handleEmailChange}
                    value={email}
                />
            </div>
            <div>
                <input
                    placeholder="Password"
                    name="password"
                    type="password"
                    onChange={handlePassChange}
                    value={password}
                />
            </div>
            <div>
                {error && <p>{error}</p>}
                <button type="submit">Reg Up</button>
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