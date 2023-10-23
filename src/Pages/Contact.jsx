import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../Slices/themeReducer';
function Contact() {
  const { theme } = useSelector(state => state.theme)
  const dispatch = useDispatch()

  function themehandler  (){
    dispatch(toggleTheme())
  }
  return (
    <>
    <div style={{background : theme === 'light' ? '#fff' : 'black',color: theme === "light" ? '#111' : '#fff',transition:'0.5s' }}>
       <button style={{background:'transparent',border:'none',fontSize:'20px'}} onClick={themehandler}>{theme=== 'light' ? '🌞' : '🌙'}</button>
    <ul>
    <Link style={{textDecoration:'none',color: theme === "light" ? '#111' : '#fff'}} to='/'>
      <li>Home</li>
    </Link>
    <Link style={{textDecoration:'none',color: theme === "light" ? '#111' : '#fff'}} to='/about'>
      <li >About</li>
    </Link>
    <Link style={{textDecoration:'none',color: theme === "light" ? '#111' : '#fff'}} to='/contact'>
      <li>Contact</li>
    </Link>   
  </ul>
  <br />
    <div>This is Contact Page</div>
  </div>
    </>
  )
}

export default Contact