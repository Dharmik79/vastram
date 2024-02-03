import React from 'react';
import image from '../../assets/images/model.jpg';

export default function index() {
  const photoStyle = {
    backgroundImage: image,
  };
  return (
    <div class="page">
      <div class="company section js-faq">
        <div class="company__wrap section">
          <div class="company__center center">
            <h2 class="company__title title title_mb-lg">All About Us</h2>
            {/* <div
              class="company__bg"
              style="background-image: url('img/company-bg.jpg');"
            ></div> */}
          </div>
        </div>
        <div class="company__container section">
          <div class="company__center center">
            <div class="company__row">
              <div class="company__col">
                <h2 class="company__title title">
                  How and When it has All Started
                </h2>
                <img src={photoStyle?.backgroundImage}></img>
              </div>
              <div class="company__col">
                <div class="company__item">
                  <div class="company__category">Natural Ingredients Only</div>
                  <div class="company__text">
                    10 years ago, when one of the co-founders came up with the
                    idea of making skincare and beauty products using only
                    natural ingreadients, he did not even think twice.
                  </div>
                </div>
                <div class="company__item">
                  <div class="company__category">
                    Affordable Pricing Strategy
                  </div>
                  <div class="company__text">
                    One of our main goals from the start was to offer high
                    quality products that would also have affordable prices. We
                    just can’t believe that we have finally achieved this and
                    now we are proud of it.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="about section">
        <div class="about__center center">
          <h2 class="about__title title title__mb-lg">Our Core Values</h2>
          <div class="about__list">
            <div class="about__item">
              <div class="about__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="none"
                  stroke="#000"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M30 9L17.91 20.875l-6.364-6.25L2 24"></path>
                  <path d="M22 9h8v8"></path>
                </svg>
              </div>
              <div class="about__category">Great Innovation</div>
              <div class="about__text">
                We are always focusing on making all our products as innovative
                as possible.
              </div>
            </div>
            <div class="about__item">
              <div class="about__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="none"
                >
                  <path
                    d="M16 3l4.326 8.557L30 12.938l-7 6.657L24.652 29 16 24.557 7.348 29 9 19.595l-7-6.657 9.674-1.38L16 3z"
                    stroke="#000"
                    stroke-width="2.5"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div class="about__category">High Quality</div>
              <div class="about__text">
                One of our main values is the quality of the products that we
                sell to the customers.
              </div>
            </div>
            <div class="about__item">
              <div class="about__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="none"
                  stroke="#000"
                  stroke-width="2.5"
                  stroke-linejoin="round"
                >
                  <path
                    d="M28 30v-3a6 6 0 0 0-6-6H10a6 6 0 0 0-6 6v3"
                    stroke-linecap="round"
                  ></path>
                  <path d="M16 14a6 6 0 1 0 0-12 6 6 0 1 0 0 12z"></path>
                </svg>
              </div>
              <div class="about__category">Teamwork Matters</div>
              <div class="about__text">
                We believe that being a successful company is all about being a
                team.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
