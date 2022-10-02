import React from "react";
import Products from "./Products";

function Home() {
  return (
    <div className="hero">
      <div class="card text-bg-dark text-white border-0">
        <img
          src="https://png.pngtree.com/thumb_back/fw800/back_our/20190619/ourmid/pngtree-taobao-vector-creative-technology-online-shopping-illustration-computer-finger-poster-image_131803.jpg"
          class="card-img"
          alt="background"
          height="550px"
        />
        <div class="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 class="card-title display-3 fw-bolder mb-0">
              NEW SEASON ARRIVALS
            </h5>
            <p class="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
          </div>
        </div>
      </div>
      <Products />

    </div>
  );
}

export default Home;
