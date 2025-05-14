import React from "react";
import { Link } from "react-router-dom";

const cartItems = [
  {
    id: 1,
    title: "Complete Python Bootcamp From Zero to Hero in Python",
    image: "/assets/img/clients/1.webp",
    price: 89,
    
    link: "/courses/2",
  },
  {
    id: 2,
    title: "JavaScript Mastery: Build Projects",
    image: "/assets/img/clients/2.webp",
    price: 120,
    
    link: "/courses/3",
  },
];

const CourseCart = () => {
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
                  <Link to="/">Course Cart</Link>
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
                  <h1 class="page-header__title">Course Cart</h1>
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

      <section class="layout-pt-md layout-pb-lg">
        <div class="container">
          <div class="row justify-end">
            <div class="col-12">
              <div class="px-30 pr-60 py-25 rounded-8 bg-light-6 md:d-none">
                <div class="row justify-between">
                  <div class="col-md-4">
                    <div class="fw-500 text-purple-1">Course</div>
                  </div>
                  <div class="col-md-2">
                    <div class="fw-500 text-purple-1">Price</div>
                  </div>
                  
                  <div class="col-md-2">
                    <div class="fw-500 text-purple-1">Subtotal</div>
                  </div>
                  <div class="col-md-1">
                    <div class="d-flex justify-end">
                      <div class="fw-500 text-purple-1">Remove</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="px-30 pr-60 md:px-0">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="row y-gap-20 justify-between items-center pt-30 pb-30 border-bottom-light"
                  >
                    <div className="col-md-4">
                      <div className="d-flex items-center">
                        <div>
                          <div
                            className="size-100 bg-image rounded-8"
                            style={{
                              backgroundImage: `url(₹{item.image})`,
                              backgroundSize: "cover",
                            }}
                          ></div>
                        </div>
                        <div className="fw-500 text-dark-1 ml-30">
                          <Link className="linkCustom" to={item.link}>
                            {item.title}
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-2 md:mt-15">
                      <div>
                        <div className="shopCart-products__title d-none md:d-block mb-10">
                          Price
                        </div>
                        <p>₹{item.price}</p>
                      </div>
                    </div>

                    

                    <div className="col-md-1">
                      <div>
                        <div className="shopCart-products__title d-none md:d-block mb-10">
                          Subtotal
                        </div>
                        <p>₹{(item.price * 2).toFixed(2)}</p>
                      </div>
                    </div>

                    <div className="col-md-1">
                      <div className="md:d-none d-flex justify-end">
                        <button onClick={() => handleRemove(item.id)} style={{color:"red"}}>
                         <Link class="icon icon-bin" to="#" ></Link>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
             
            </div>
            <div class="col-xl-4 col-lg-5 layout-pt-lg">
              <div class="py-30 bg-light-4 rounded-8 border-light">
                <h5 class="px-30 text-20 fw-500">Cart Totals</h5>
                <div class="d-flex justify-between px-30 item mt-25">
                  <div class="py-15 fw-500 text-dark-1">Subtotal</div>
                  <div class="py-15 fw-500 text-dark-1">₹386.00</div>
                </div>
                <div class="d-flex justify-between px-30 item border-top-dark">
                  <div class="pt-15 fw-500 text-dark-1">Total</div>
                  <div class="pt-15 fw-500 text-dark-1">₹386.00</div>
                </div>
              </div>
              <Link
                class="button -md -purple-1 text-white col-12 mt-30"
                to="/coursCheckOut"
              >
                Proceed to checkout
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseCart;
