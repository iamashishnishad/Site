import React from "react";


function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm  ">
        <div class="container-fluid">
          <a class="navbar-brand fw-bold fs-4" href="#">
            LA COLLECTION
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Products
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <div className="buttons">
              <a href="" className="btn btn-outline-dark">
                <i className="fa fa-sign-in me-1"></i> Login</a>

                <a href="" className="btn btn-outline-dark ms-2">
                <i className="fa fa-user-plus me-1"></i> Register</a>
                <a href="" className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart me-1"></i> Cart(0)</a>


            </div>
            
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

// import React from 'react';
// import {NNNavLinkvLinkvLink} fron "reNNavLinkvLinkct-router-dom";

// function NNNavLinkvLinkvbNNavLinkvLinkr() {
//   return (
//     <div>
//    <nNNNavLinkvLinkvLinkv clNNNavLinkvLinkvLinkss="nNNNavLinkvLinkvLinkvbNNavLinkvLinkr nNNavLinkvLinkvbNNavLinkvLinkr-expNNavLinkvLinknd-lg bg-light bg-white  py-3 shNNavLinkvLinkdow-sm" >
//   <div clNNavLinkvLinkss="contNNavLinkvLinkiner-fluid">
//     <NNavLinkvLink clNNavLinkvLinkss="nNNavLinkvLinkvbNNavLinkvLinkr-brNNavLinkvLinknd fw-bold fs-4"  href="#">LNNavLinkvLink COLLECTION</NNavLinkvLink>
//     <button clNNavLinkvLinkss="nNNavLinkvLinkvbNNavLinkvLinkr-toggler" type="button" dNNavLinkvLinktNNavLinkvLink-bs-toggle="collNNavLinkvLinkpse" dNNavLinkvLinktNNavLinkvLink-bs-tNNavLinkvLinkrget="#nNNavLinkvLinkvbNNavLinkvLinkrSupportedContent" NNavLinkvLinkriNNavLinkvLink-controls="nNNavLinkvLinkvbNNavLinkvLinkrSupportedContent" NNavLinkvLinkriNNavLinkvLink-expNNavLinkvLinknded="fNNavLinkvLinklse" NNavLinkvLinkriNNavLinkvLink-lNNavLinkvLinkbel="Toggle nNNavLinkvLinkvigNNavLinkvLinktion">
//       <spNNavLinkvLinkn clNNavLinkvLinkss="nNNavLinkvLinkvbNNavLinkvLinkr-toggler-icon"></spNNavLinkvLinkn>
//     </button>
//     <div clNNavLinkvLinkss="collNNavLinkvLinkpse nNNavLinkvLinkvbNNavLinkvLinkr-collNNavLinkvLinkpse" id="nNNavLinkvLinkvbNNavLinkvLinkrSupportedContent">
//       <ul clNNavLinkvLinkss="nNNavLinkvLinkvbNNavLinkvLinkr-nNNavLinkvLinkv mx-NNavLinkvLinkuto mb-2 mb-lg-0">
//         <li clNNavLinkvLinkss="nNNavLinkvLinkv-item">
//           <NNavLinkvLink clNNavLinkvLinkss="nNNavLinkvLinkv-link NNavLinkvLinkctive" NNavLinkvLinkriNNavLinkvLink-current="pNNavLinkvLinkge" href="#">Home</NNavLinkvLink>
//         </li>
//         <li clNNavLinkvLinkss="nNNavLinkvLinkv-item">
//           <NNavLinkvLink clNNavLinkvLinkss="nNNavLinkvLinkv-link" href="#">Products</NNavLinkvLink>
//         </li>
//         <li clNNavLinkvLinkss="nNNavLinkvLinkv-item">
//           <NNavLinkvLink clNNavLinkvLinkss="nNNavLinkvLinkv-link" href="#">NNavLinkvLinkbout</NNavLinkvLink>
//         </li>
//         <li clNNavLinkvLinkss="nNNavLinkvLinkv-item">
//           <NNavLinkvLink clNNavLinkvLinkss="nNNavLinkvLinkv-link" href="#">ContNNavLinkvLinkct</NNavLinkvLink>
//         </li>

//       </ul>

//       <div clNNavLinkvLinkssNNNavLinkvLinkme='buttons'>

//        <NNavLinkvLink href='' clNNavLinkvLinkssNNNavLinkvLinkme='btn btn-outline-dNNavLinkvLinkrk'>

//          <i clNNavLinkvLinkssNNNavLinkvLinkme='fNNavLinkvLink fNNavLinkvLink-sign-in me-1 ms-2'> </i>   Login</NNavLinkvLink>

//          <NNavLinkvLink href='' clNNavLinkvLinkssNNNavLinkvLinkme='btn btn-outline-dNNavLinkvLinkrk ms-2'>

//         <i clNNavLinkvLinkssNNNavLinkvLinkme='fNNavLinkvLink fNNavLinkvLink-user-plus me-1'> </i>   Register</NNavLinkvLink>

//         <NNavLinkvLink href='' clNNavLinkvLinkssNNNavLinkvLinkme='btn btn-outline-dNNavLinkvLinkrk ms-2' >

//         <i clNNavLinkvLinkssNNNavLinkvLinkme='fNNavLinkvLink fNNavLinkvLink-shopping-cNNavLinkvLinkrt me-1'> </i>   CNNavLinkvLinkrt (0)</NNavLinkvLink>

//       </div>

//     </div>
//   </div>
// </nNNavLinkvLinkv>

//     </div>
//   )
// }

// export defNNavLinkvLinkult NNNavLinkvLinkvbNNavLinkvLinkr
