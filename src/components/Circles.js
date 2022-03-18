import React from "react";
import "../article.css";
import bamboo from "../assets/276 bamboo7-png-01.png";
import water from "../assets/Component 1 – 1.png";
import earth from "../assets/Earth black.png";

function Circles() {
  return (
    <div>
      <section class="main-article-container">
        <div class="article-container">
          <div class="circle-image-container1">
            <div class="circle">
              <img class="circle-image1" src={bamboo} alt="bamboo tree" />
            </div>
          </div>

          <div class="article-text-container">
            <h2>OUR PLEDGE TO A SUSTAINABLE FUTURE.</h2>

            <p>
              We set high standards so we only deliver quality bamboo-sourced
              products that leave a positive impact on the environment. Starting
              your sustainable lifestyle could be daunting, but don't panic, you
              can start small here with us.
            </p>

            <a href="projects.html">
              <button>More</button>
            </a>
          </div>
        </div>
      </section>

      <section class="main-article-container">
        <div class="article-container">
          <div class="circle-image-container2">
            <div class="circle">
              <img class="circle-image2" src={water} alt="Water" />
            </div>
          </div>

          <div class="article-text-container">
            <h2>We provide clean water around the world.</h2>

            <p>
              At Greensia Earthworks we strive to make a difference in people's
              lives through clean water. We partner with charities like Charity:
              Water a nonprofit organization that is committed to fighting the
              global water crises around the world.
            </p>

            <a href="projects.html">
              <button>More</button>
            </a>
          </div>
        </div>
      </section>

      <section class="main-article-container">
        <div class="article-container">
          <div class="circle-image-container3">
            <div class="circle">
              <img class="circle-image3" src={earth} alt="Earth" />
            </div>
          </div>
          <div class="article-text-container">
            <h2>
              We partner with the best water experts to help provide clean water
              around the world.
            </h2>

            <p>
              At Greensia Earthworks we strive to make a difference in people's
              lives through clean water. We partner with charities like Charity:
              Water a nonprofit organization that is committed to fighting the
              global water crises around the world.
            </p>

            <a href="projects.html">
              <button>More</button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Circles;
