import React from "react";
import st from "../mobileNav.module.css"

const MobileNav = () => {
  return (
    <>
      <nav className="container-fluid shadow-lg">
        <img
          src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"
          alt="logo"
        />

        <div className={st.holder}>
        <svg xmlns="http://www.w3.org/2000/svg"><path d="M14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2zm3-7H3v12h14v-6.39l4 1.83V8.56l-4 1.83V6m1-1v3.83L22 7v8l-4-1.83V19H2V5h16z"></path></svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 24 24"
        >
            
          <path d="M10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm10-2.65V19H4v-1.65l2-1.88v-5.15C6 7.4 7.56 5.1 10 4.34v-.38c0-1.42 1.49-2.5 2.99-1.76.65.32 1.01 1.03 1.01 1.76v.39c2.44.75 4 3.06 4 5.98v5.15l2 1.87zm-1 .42-2-1.88v-5.47c0-2.47-1.19-4.36-3.13-5.1-1.26-.53-2.64-.5-3.84.03C8.15 6.11 7 7.99 7 10.42v5.47l-2 1.88V18h14v-.23z"></path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor">
          <path
            clip-rule="evenodd"
            d="M16.296 16.996a8 8 0 11.707-.708l3.909 3.91-.707.707-3.909-3.909zM18 11a7 7 0 00-14 0 7 7 0 1014 0z"
            fill-rule="evenodd"
          ></path>
        </svg>


        </div>

        
      </nav>
    </>
  );
};

export default MobileNav;
