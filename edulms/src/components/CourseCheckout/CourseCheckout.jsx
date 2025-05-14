import React, { useState } from "react";
import { Link } from "react-router-dom";

const CourseCheckout = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    email: "",
    notes: "",
    country: "USA",
    paymentMethod: "directBankTransfer",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here
    console.log(formData);
  };
  return (
    <div>
      <section class="breadcrumbs  ">
        <div class="container">
          <div class="row">
            <div class="col-auto">
              <div class="breadcrumbs__content">
                <div class="breadcrumbs__item  ">
                  <Link to="/">Home</Link>
                </div>
                <div class="breadcrumbs__item  ">
                  <Link to="/courses-list-3">Course Checkout</Link>
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
                  <h1 class="page-header__title">Course Checkout</h1>
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

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-50">
            <div className="col-lg-8">
              <div className="shopCheckout-form">
                <form
                  className="contact-form row x-gap-30 y-gap-30"
                  onSubmit={handleSubmit}
                >
                  <div className="col-12">
                    <h5 className="text-20">Billing details</h5>
                  </div>
                  <div className="col-sm-6">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      First name
                    </label>
                    <input
                      required
                      placeholder="First name"
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-sm-6">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Last name
                    </label>
                    <input
                      required
                      placeholder="Last name"
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-sm-6">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Phone *
                    </label>
                    <input
                      required
                      placeholder="Phone *"
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-sm-6">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Email address *
                    </label>
                    <input
                      required
                      placeholder="Email address *"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-12">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Country / Region *
                    </label>
                    <select
                      className="selectize wide js-selectize"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                    >
                      <option value="USA">India</option>
                      <option value="Germany">Germany</option>
                      <option value="France">France</option>
                      <option value="Greece">Greece</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      House number and street name
                    </label>
                    <input
                      required
                      placeholder="House number and street name"
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-sm-6">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Apartment, suite, unit etc. (optional)
                    </label>
                    <input
                      placeholder="Apartment, suite, unit etc. (optional)"
                      type="text"
                      name="apartment"
                      value={formData.apartment}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-sm-6">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Town / City *
                    </label>
                    <input
                      required
                      placeholder="Town / City *"
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-sm-6">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      State *
                    </label>
                    <input
                      required
                      placeholder="State *"
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-sm-6">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      PinCode *
                    </label>
                    <input
                      required
                      placeholder="Pin code *"
                      type="text"
                      name="Pin code"
                      value={formData.zip}
                      onChange={handleChange}
                    />
                  </div>
                

                  <div className="col-12 mt-30">
                    <button
                      type="submit"
                      className="button -md -purple-1 text-white col-12 mt-30"
                    >
                      Buy course
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="pt-30 pb-15 bg-white border-light rounded-8 bg-light-4">
                <h5 className="px-30 text-20 fw-500">Your order</h5>
                <div className="d-flex justify-between px-30 mt-25">
                  <div className="py-15 fw-500 text-dark-1">Product</div>
                  <div className="py-15 fw-500 text-dark-1">Subtotal</div>
                </div>
                <div className="d-flex justify-between border-top-dark px-30">
                  <div className="py-15 text-grey">
                    <Link className="linkCustom" to="/courses/2">
                      Complete Python Bootcamp From Zero to Hero in Python{" "}
                    </Link>
                    x 1
                  </div>
                  <div className="py-15 text-grey">₹89.00</div>
                </div>
                <div className="d-flex justify-between border-top-dark px-30">
                  <div className="py-15 fw-500">Subtotal</div>
                  <div className="py-15 fw-500">₹89.00</div>
                </div>
                <div className="d-flex justify-between border-top-dark px-30">
                  <div className="py-15 fw-500 text-dark-1">Shipping</div>
                  <div className="py-15 fw-500 text-dark-1">₹10.00</div>
                </div>
                <div className="d-flex justify-between border-top-dark px-30">
                  <div className="py-15 fw-500 text-dark-1">Total</div>
                  <div className="py-15 fw-500 text-dark-1">₹99.00</div>
                </div>
              </div>
              <div className="py-30 px-30 bg-white mt-30 border-light rounded-8 bg-light-4">
                <h5 className="text-20 fw-500">Payment Mode</h5>
                <div class="mt-30">
                  <div class="form-radio d-flex items-center">
                    <div class="radio">
                      <input type="radio" checked="" name="radio" />
                      <div class="radio__mark">
                        <div class="radio__icon"></div>
                      </div>
                    </div>
                    <h5 class="ml-15 text-15 lh-1 text-dark-1">PayPal</h5>
                  </div>
                </div>
                <div class="mt-30">
                  <div class="form-radio d-flex items-center">
                    <div class="radio">
                      <input type="radio" checked="" name="radio" />
                      <div class="radio__mark">
                        <div class="radio__icon"></div>
                      </div>
                    </div>
                    <h5 class="ml-15 text-15 lh-1 text-dark-1">Paytm</h5>
                  </div>
                </div>
                <div class="mt-30">
                  <div class="form-radio d-flex items-center">
                    <div class="radio">
                      <input type="radio" checked="" name="radio" />
                      <div class="radio__mark">
                        <div class="radio__icon"></div>
                      </div>
                    </div>
                    <h5 class="ml-15 text-15 lh-1 text-dark-1">PhonePe</h5>
                  </div>
                </div>
                <div class="mt-30">
                  <div class="form-radio d-flex items-center">
                    <div class="radio">
                      <input type="radio" checked="" name="radio" />
                      <div class="radio__mark">
                        <div class="radio__icon"></div>
                      </div>
                    </div>
                    <h5 class="ml-15 text-15 lh-1 text-dark-1">Card</h5>
                  </div>
                </div>
                <div class="mt-30">
                  <div class="form-radio d-flex items-center">
                    <div class="radio">
                      <input type="radio" checked="" name="radio" />
                      <div class="radio__mark">
                        <div class="radio__icon"></div>
                      </div>
                    </div>
                    <h5 class="ml-15 text-15 lh-1 text-dark-1">UPI</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseCheckout;
