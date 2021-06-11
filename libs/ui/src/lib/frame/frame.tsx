import React from 'react'
import style from './frame.module.scss'

export const Frame: React.FC = ({ children }) => (
  <div className={style.frame}>
    <div className="title">T9+</div>
    {children}
  </div>
)
