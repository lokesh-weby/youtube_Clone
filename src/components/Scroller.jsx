import st from "../scroller.module.css"

import React from 'react'

const Scroller = () => {
  return (
    <>
    <div className={st.scroller}>
        <li className={st.selected}>All</li>
        <li>New to you</li>
        <li>Gamming</li>
        <li>live</li>
        <li>Free Fire</li>
        <li>Recently Upload</li>
        <li>Music</li>
        <li>Gardning</li>
        <li>COC</li>
        <li>JavaScript</li>

    </div>
      
    </>
  )
}

export default Scroller
