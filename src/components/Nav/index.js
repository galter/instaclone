import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FiHome, FiCompass, FiHeart } from 'react-icons/fi'

import NewPost from '../NewPost'
import Search from '../Search'

import { UserContext } from '../../context/UserContext'

import navlogo from '../../assets/navlogo.png'

import { user_storage as userData } from '../../data'

import { NavWrapper } from './styles'

const Nav = () => {
  // const { user } = useContext(UserContext);
  const user = userData

  return (
    <NavWrapper>
      <nav>
        <Link to="/">
          <img className="nav-logo" src={navlogo} alt="logo" />
        </Link>
        <Search />
        <ul>
          <li>
            <Link to="/">
              <FiHome size="1.6em" />
            </Link>
          </li>
          <li>
            <NewPost />
          </li>
          <li>
            <Link to="/explore">
              <FiCompass size="1.6em" />
            </Link>
          </li>
          <li>
            <FiHeart size="1.6em" />
          </li>
          <li>
            <Link to={`/${user.username}`}>
              <img
                style={{
                  width: '28px',
                  height: '28px',
                  objectFit: 'cover',
                  borderRadius: '28px',
                }}
                src={user.avatar}
                alt="avatar"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </NavWrapper>
  )
}

export default Nav
