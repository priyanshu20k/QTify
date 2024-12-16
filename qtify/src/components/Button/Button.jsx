import React from 'react'
import Styles from './Button.module.css';
function Button({children}) {
  return (
    <button className={Styles.btn}>{children}</button>
  )
}

export default Button