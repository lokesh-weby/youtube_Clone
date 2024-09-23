import React from "react";

const Nav = () => {
  function demo(){
    var sidebar=document.getElementById("sidebar")
    sidebar.classList.toggle("remove")
  }
  return (
    <>
    <div id="sidebar" className="remove">
      <ul>
        <li>
        <svg xmlns="http://www.w3.org/2000/svg">
            <g>
              <path d="M4 21V10.08l8-6.96 8 6.96V21h-6v-6h-4v6H4z"></path>
            </g>
          </svg>
          Home
        </li>
        <li>
        <svg xmlns="http://www.w3.org/2000/svg">
            <g>
              <path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path>
            </g>
          </svg>
          Shorts
        </li>
        <li>
        <svg xmlns="http://www.w3.org/2000/svg">
            <g>
              <path d="M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 10h18v10H3V10z"></path>
            </g>
          </svg>
          Subscription
        </li>
      </ul>

      <ul>
        <li>You <svg style={{marginTop: 10+'px'}} xmlns="http://www.w3.org/2000/svg"><path d="M4.97 12.65 9.62 8 4.97 3.35l.71-.71L11.03 8l-5.35 5.35-.71-.7z"></path></svg>
        
        </li>
        <li>Your Channel</li>
        <li>Playlist</li>
        <li>History</li>
        <li>Your Video</li>
        <li>Watch Later</li>
        <li>Liked Video</li>
      </ul>

    </div>
      <nav>
        <div className="one">
          <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>demo()}>
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
