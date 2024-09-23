import React from "react";

const Nav = () => {
  return (
    <>
      <nav>
        <div className="one">
          <svg xmlns="http://www.w3.org/2000/svg">
            <g>
              <path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z"></path>
            </g>
          </svg>
          <img
            src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"
            alt="logo"
          />
        </div>

        <div className="two">
          <div>
            <input type="text" name="search" id="Search" placeholder="" />
          <svg className="search" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
            <path
              clip-rule="evenodd"
              d="M16.296 16.996a8 8 0 11.707-.708l3.909 3.91-.707.707-3.909-3.909zM18 11a7 7 0 00-14 0 7 7 0 1014 0z"
              fill-rule="evenodd"
            ></path>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg">
            <path d="M12 3c-1.66 0-3 1.37-3 3.07v5.86c0 1.7 1.34 3.07 3 3.07s3-1.37 3-3.07V6.07C15 4.37 13.66 3 12 3zm6.5 9h-1c0 3.03-2.47 5.5-5.5 5.5S6.5 15.03 6.5 12h-1c0 3.24 2.39 5.93 5.5 6.41V21h2v-2.59c3.11-.48 5.5-3.17 5.5-6.41z"></path>
          </svg>
          </div>
        </div>

        <div className="three">
        <svg xmlns="http://www.w3.org/2000/svg"><path d="M14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2zm3-7H3v12h14v-6.39l4 1.83V8.56l-4 1.83V6m1-1v3.83L22 7v8l-4-1.83V19H2V5h16z"></path></svg>
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24"><path d="M10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm10-2.65V19H4v-1.65l2-1.88v-5.15C6 7.4 7.56 5.1 10 4.34v-.38c0-1.42 1.49-2.5 2.99-1.76.65.32 1.01 1.03 1.01 1.76v.39c2.44.75 4 3.06 4 5.98v5.15l2 1.87zm-1 .42-2-1.88v-5.47c0-2.47-1.19-4.36-3.13-5.1-1.26-.53-2.64-.5-3.84.03C8.15 6.11 7 7.99 7 10.42v5.47l-2 1.88V18h14v-.23z"></path></svg>
        <img
            id="img"
            draggable="false"
            class="style-scope yt-img-shadow"
            alt="Avatar image"
            src="https://yt3.ggpht.com/ytc/AIdro_kBZyti_EdG7Z2tPURAhtvZcDEoq73Vm0cSpJGX4RcB-exQUY_LOdwIilGHZgafdKmRUA=s88-c-k-c0x00ffffff-no-rj"
          />
        </div>
      </nav>
    </>
  );
};

export default Nav;
