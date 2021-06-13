import React from 'react'
import Toggle, { ToggleProps } from '../toggle/toggle'
import style from './frame.module.scss'

export interface FrameInterface {
  toggles?: ToggleProps[]
}

export const Frame: React.FC<FrameInterface> = ({ children, toggles }) => (
  <div className={style.frame}>
    <div className="title">
      <span>T9+</span>
      {toggles?.map((e) => (
        <Toggle {...e} key={e.text} />
      ))}
    </div>
    {children}
  </div>
)
