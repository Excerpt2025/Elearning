import React from "react";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <>
      <section class="breadcrumbs  ">
        <div class="container">
          <div class="row">
            <div class="col-auto">
              <div class="breadcrumbs__content">
                <div class="breadcrumbs__item  ">
                  <Link to="/">Home</Link>
                </div>
                <div class="breadcrumbs__item  ">
                  <Link to="/ContactUs">ContactUs</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="page-header -type-1">
        <div class="container">
          <div class="page-header__content">
            <div class="row justify-center text-center">
              <div class="col-auto">
                <div>
                  <h1 class="page-header__title">ContactUs</h1>
                </div>
                <div>
                  <p class="page-header__text">
                    We’re on a mission to deliver engaging, curated courses at a
                    reasonable price.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="content-wrapper js-content-wrapper overflow-hidden">
        <section class="layout-pt-md layout-pb-lg">
          <div class="container">
            <div class="row y-gap-50 justify-between">
              <div class="col-lg-4">
                <h3 class="text-24 fw-500">Keep In Touch With Us.</h3>
                <p class="mt-25">
                  Neque convallis a cras semper auctor. Libero id faucibus nisl
                  tincidunt egetnvallis.
                </p>
                <div class="y-gap-30 pt-60 lg:pt-40">
                  <div class="d-flex items-center">
                    <div class="d-flex justify-center items-center size-60 rounded-full bg-light-7">
                      <img
                        alt="icon"
                        loading="lazy"
                        width="30"
                        height="30"
                        decoding="async"
                        data-nimg="1"
                        src="/assets/img/contact-1/1.svg"
                        style={{ color: "transparent" }}
                      />
                    </div>
                    <div class="ml-20">
                      328 Queensberry Street, North Melbourne VIC 3051,
                    </div>
                  </div>
                  <div class="d-flex items-center">
                    <div class="d-flex justify-center items-center size-60 rounded-full bg-light-7">
                      <img
                        alt="icon"
                        loading="lazy"
                        width="30"
                        height="30"
                        decoding="async"
                        data-nimg="1"
                        src="/assets/img/contact-1/2.svg"
                        style={{ color: "transparent" }}
                      />
                    </div>
                    <div class="ml-20">+(1) 123 456 7890</div>
                  </div>
                  <div class="d-flex items-center">
                    <div class="d-flex justify-center items-center size-60 rounded-full bg-light-7">
                      <img
                        alt="icon"
                        loading="lazy"
                        width="30"
                        height="30"
                        decoding="async"
                        data-nimg="1"
                        src="/assets/img/contact-1/3.svg"
                        style={{ color: "transparent" }}
                      />
                    </div>
                    <div class="ml-20">hi@educrat.com</div>
                  </div>
                </div>
              </div>
              <div class="col-lg-7">
                <h3 class="text-24 fw-500">Send a Message.</h3>
                <p class="mt-25">
                  Neque convallis a cras semper auctor. Libero id faucibus nisl
                  <br /> tincidunt egetnvallis.
                </p>
                <form class="contact-form row y-gap-30 pt-60 lg:pt-40">
                  <div class="col-md-6">
                    <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Name
                    </label>
                    <input
                      required=""
                      placeholder="Name..."
                      type="text"
                      name="title"
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Email Address
                    </label>
                    <input
                      required=""
                      placeholder="Email..."
                      type="text"
                      name="title"
                    />
                  </div>
                  <div class="col-12">
                    <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Message...
                    </label>
                    <textarea
                      required=""
                      name="comment"
                      placeholder="Message"
                      rows="8"
                    ></textarea>
                  </div>
                  <div class="col-12">
                    <button
                      type="submit"
                      name="submit"
                      id="submit"
                      class="button -md -purple-1 text-white"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactUs;
