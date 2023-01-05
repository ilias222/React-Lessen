import { Outlet, Link, NavLink } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { selectIsAuch } from '../../store/profile/selectors'

import { logOut } from '../../services/firebase'

import styles from './Header.module.css'

export const navigate = [
  {
    id: 1,
    name: 'Main',
    to: '/'
  },
  {
    id: 2,
    name: 'Profile',
    to: '/profile'
  },
  {
    id: 3,
    name: 'Chat',
    to: '/chats'
  },
  {
    id: 4,
    name: 'Chak Mems',
    to: '/chakmems'
  },
  {
    id: 5,
    name: 'SingUp',
    to: '/singup'
  },
  {
    id: 6,
    name: 'SingReg',
    to: '/singreg'
  },
]

export function Header() {
  const selectorAuch = useSelector(selectIsAuch)
  const name = useSelector((store) => store.name)

  return (
    <>
      <header>
        <nav className={styles.header}>
          <ul>
            {navigate.map((link) => (
              <li key={link.id}>
              <NavLink 
                to={link.to}
                style={({ isActive }) => ({
                  color: isActive ? 'green' : 'blue'
                })}
              >
                {link.name}
              </NavLink>
            </li>
            ))}
            {selectorAuch && <li>
              <button onClick={logOut}>Exit</button>
              </li>}
          </ul>
        <p>{name}</p>
        </nav>
      </header>
      <main>
        <Outlet/>
      </main>
    </>
  )
}