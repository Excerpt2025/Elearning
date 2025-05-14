import React, { useState } from "react";
import { Link } from "react-router-dom";
import RecommendationSideBar from "./RecommendationSideBar";
import MobileRecommendationSideBar from "./MobileRecommendationSideBar";

const courseData = [
  {
    id: 1,
    image: "/assets/img/clients/1.webp",
    rating: 4.3,
    reviews: 1991,
    title: "Learn Figma - UI/UX Design Essential Training",
    lessons: 6,
    duration: "22h 0m",
    level: "Beginner",
    instructor: "Jane Cooper",
    instructorImage:
      "https://educrat-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fgeneral%2Favatar-1.png&w=32&q=75",
    originalPrice: "$199",
    discountedPrice: "$79",
    courseLink: "/CourseDetails",
  },
  {
    id: 2,
    image: "/assets/img/clients/2.webp",
    rating: 4.6,
    reviews: 1234,
    title: "Complete Python Bootcamp From Zero to Hero in Python",
    lessons: 10,
    duration: "30h 0m",
    level: "Intermediate",
    instructor: "John Doe",
    instructorImage:
      "https://educrat-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fgeneral%2Favatar-1.png&w=32&q=75",
    originalPrice: "$249",
    discountedPrice: "$89",
    courseLink: "/CourseDetails",
  },
  {
    id: 3,
    image: "/assets/img/clients/3.webp",
    rating: 4.3,
    reviews: 1991,
    title: "Angular - The Complete Guide (2022 Edition)",
    lessons: 6,
    duration: "22h 0m",
    level: "Beginner",
    instructor: "Jane Cooper",
    instructorImage:
      "https://educrat-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fgeneral%2Favatar-1.png&w=32&q=75",
    originalPrice: "$199",
    discountedPrice: "$79",
    courseLink: "/CourseDetails",
  },
  {
    id: 4,
    image: "/assets/img/clients/5.webp",
    rating: 4.6,
    reviews: 1234,
    title: "The Ultimate Drawing Course Beginner to Advanced",
    lessons: 10,
    duration: "30h 0m",
    level: "Intermediate",
    instructor: "John Doe",
    instructorImage:
      "https://educrat-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fgeneral%2Favatar-1.png&w=32&q=75",
    originalPrice: "$249",
    discountedPrice: "$89",
    courseLink: "/CourseDetails",
  },

  {
    id: 5,
    image: "/assets/img/clients/1.webp",
    rating: 4.3,
    reviews: 1991,
    title: "Learn Figma - UI/UX Design Essential Training",
    lessons: 6,
    duration: "22h 0m",
    level: "Beginner",
    instructor: "Jane Cooper",
    instructorImage:
      "https://educrat-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fgeneral%2Favatar-1.png&w=32&q=75",
    originalPrice: "$199",
    discountedPrice: "$79",
    courseLink: "/CourseDetails",
  },
  {
    id: 6,
    image: "/assets/img/clients/2.webp",
    rating: 4.6,
    reviews: 1234,
    title: "Learn Figma - UI/UX Design Essential Training",
    lessons: 10,
    duration: "30h 0m",
    level: "Intermediate",
    instructor: "John Doe",
    instructorImage:
      "https://educrat-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fgeneral%2Favatar-1.png&w=32&q=75",
    originalPrice: "$249",
    discountedPrice: "$89",
    courseLink: "/CourseDetails",
  },
  {
    id: 7,
    image: "/assets/img/clients/3.webp",
    rating: 4.3,
    reviews: 1991,
    title: "Learn Figma - UI/UX Design Essential Training",
    lessons: 6,
    duration: "22h 0m",
    level: "Beginner",
    instructor: "Jane Cooper",
    instructorImage:
      "https://educrat-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fgeneral%2Favatar-1.png&w=32&q=75",
    originalPrice: "$199",
    discountedPrice: "$79",
    courseLink: "/CourseDetails",
  },
  {
    id: 8,
    image: "/assets/img/clients/5.webp",
    rating: 4.6,
    reviews: 1234,
    title: "Learn Figma - UI/UX Design Essential Training",
    lessons: 10,
    duration: "30h 0m",
    level: "Intermediate",
    instructor: "John Doe",
    instructorImage:
      "https://educrat-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fgeneral%2Favatar-1.png&w=32&q=75",
    originalPrice: "$249",
    discountedPrice: "$89",
    courseLink: "/CourseDetails",
  },


  {
    id: 9,
    image: "/assets/img/clients/1.webp",
    rating: 4.3,
    reviews: 1991,
    title: "Learn Figma - UI/UX Design Essential Training",
    lessons: 6,
    duration: "22h 0m",
    level: "Beginner",
    instructor: "Jane Cooper",
    instructorImage:
      "https://educrat-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fgeneral%2Favatar-1.png&w=32&q=75",
    originalPrice: "$199",
    discountedPrice: "$79",
    courseLink: "/CourseDetails",
  },
  {
    id: 10,
    image: "/assets/img/clients/2.webp",
    rating: 4.6,
    reviews: 1234,
    title: "Learn Figma - UI/UX Design Essential Training",
    lessons: 10,
    duration: "30h 0m",
    level: "Intermediate",
    instructor: "John Doe",
    instructorImage:
      "https://educrat-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fgeneral%2Favatar-1.png&w=32&q=75",
    originalPrice: "$249",
    discountedPrice: "$89",
    courseLink: "/CourseDetails",
  },
  {
    id: 11,
    image: "/assets/img/clients/3.webp",
    rating: 4.3,
    reviews: 1991,
    title: "Learn Figma - UI/UX Design Essential Training",
    lessons: 6,
    duration: "22h 0m",
    level: "Beginner",
    instructor: "Jane Cooper",
    instructorImage:
      "https://educrat-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fgeneral%2Favatar-1.png&w=32&q=75",
    originalPrice: "$199",
    discountedPrice: "$79",
    courseLink: "/CourseDetails",
  },
  {
    id: 12,
    image: "/assets/img/clients/5.webp",
    rating: 4.6,
    reviews: 1234,
    title: "Learn Figma - UI/UX Design Essential Training",
    lessons: 10,
    duration: "30h 0m",
    level: "Intermediate",
    instructor: "John Doe",
    instructorImage:
      "https://educrat-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fgeneral%2Favatar-1.png&w=32&q=75",
    originalPrice: "$249",
    discountedPrice: "$89",
    courseLink: "/CourseDetails",
  },
];



const AllCourse = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };


  const handleToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };


  return (
    <div>
      <section class="breadcrumbs  ">
        <div class="container">
          <div class="row">
            <div class="col-auto">
              <div class="breadcrumbs__content">
                <div class="breadcrumbs__item  ">
                  <a href="/">Home</a>
                </div>
                <div class="breadcrumbs__item  ">
                  <a href="/courses-list-3">All courses</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="page-header -type-1">
        <div class="container">
          <div class="page-header__content">
            <div class="row">
              <div class="col-auto">
                <div>
                  <h1 class="page-header__title">What to Learn Next</h1>
                </div>
                <div>
                  <p class="page-header__text">Recommended For you</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="layout-pb-lg">
        <div class="container">
          <div class="row y-gap-50">
           <RecommendationSideBar/>

            <div class="col-xl-9 col-lg-8">
              <div class="accordion js-accordion">
                <div class="accordion__item  ">
                  <div class="row y-gap-20 items-center justify-between pb-30">
                    <div class="col-auto">
                      <div class="text-14 lh-12">
                        Showing
                        <span class="text-dark-1 fw-500">0</span>
                        total results
                      </div>
                    </div>
                    <div class="col-auto">
                      <div class="row x-gap-20 y-gap-20">
                        <div class="col-auto">
                          <div class="d-flex items-center">
                            <div class="text-14 lh-12 fw-500 text-dark-1 mr-20">
                              Sort by:
                            </div>
                            <div
                              id="dd41button"
                              className={`dropdown js-dropdown js-category-active ${isDropdownOpen ? "-is-dd-active" : ""}`}
                            >
                              <div
                                class="dropdown__button d-flex items-center text-14 rounded-8 px-20 py-10 text-14 lh-12"
                                onClick={handleToggle}
                              >
                                <span class="js-dropdown-title">Default</span>
                                <i class="icon text-9 ml-40 icon-chevron-down"></i>
                              </div>
                              <div
                                id="dd41content"
                                className={`toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-category-toggle ${isDropdownOpen ? "-is-el-visible" : ""}`}
                              >
                                <div class="text-14 y-gap-15 js-dropdown-list">
                                  <div>
                                    <span class="d-block js-dropdown-link cursor activeMenu ">
                                      Default
                                    </span>
                                  </div>
                                  <div>
                                    <span class="d-block js-dropdown-link cursor  ">
                                      Rating (asc)
                                    </span>
                                  </div>
                                  <div>
                                    <span class="d-block js-dropdown-link cursor  ">
                                      Rating (dsc)
                                    </span>
                                  </div>
                                  <div>
                                    <span class="d-block js-dropdown-link cursor  ">
                                      Price (asc)
                                    </span>
                                  </div>
                                  <div>
                                    <span class="d-block js-dropdown-link cursor  ">
                                      Price (dsc)
                                    </span>
                                  </div>
                                  <div>
                                    <span class="d-block js-dropdown-link cursor  ">
                                      Duration (asc)
                                    </span>
                                  </div>
                                  <div>
                                    <span class="d-block js-dropdown-link cursor  ">
                                      Duration (dsc)
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-auto d-none lg:d-block">
                          <div class="accordion__button w-unset">
                            <button class="button h-50 px-30 -light-7 text-purple-1" onClick={toggleAccordion}>
                              <i class="icon-filter mr-10"></i>Filter
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <MobileRecommendationSideBar isOpen={isOpen}/>

                </div>
              </div>

              <div class="row y-gap-30 side-content__wrap">

              {courseData.map((course) => (<div class="side-content col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div class="coursesCard -type-1 ">
                    <div class="relative">
                      <div class="coursesCard__image overflow-hidden rounded-8">
                        <img
                          alt="image"
                          loading="lazy"
                          width="530"
                          height="370"
                          decoding="async"
                          data-nimg="1"
                          class="w-1/1"
                          src={course.image}
                          style={{ color: "transparent" }}
                        />
                        <div class="coursesCard__image_overlay rounded-8"></div>
                      </div>

                      <div class="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                    </div>
                    <div class="h-100 pt-15">
                      <div class="d-flex items-center">
                        <div class="text-14 lh-1 text-yellow-1 mr-10">4.3</div>
                        <div class="d-flex x-gap-5 items-center">
                          <div class="icon-star text-9 text-yellow-1 "></div>
                          <div class="icon-star text-9 text-yellow-1 "></div>
                          <div class="icon-star text-9 text-yellow-1 "></div>
                          <div class="icon-star text-9 text-yellow-1 "></div>
                        </div>
                        <div class="text-13 lh-1 ml-10">(1991)</div>
                      </div>
                      <div class="text-17 lh-15 fw-500 text-dark-1 mt-10">
                        <Link class="linkCustom" to={course.courseLink}>
                          {course.title}
                        </Link>
                      </div>
                      <div class="d-flex x-gap-10 items-center pt-10">
                        <div class="d-flex items-center">
                          <div class="mr-8">
                            <img
                              alt="icon"
                              loading="lazy"
                              width="16"
                              height="17"
                              decoding="async"
                              data-nimg="1"
                              src="https://educrat-nextjs.vercel.app/assets/img/coursesCards/icons/1.svg"
                              style={{ color: "transparent" }}
                            />
                          </div>
                          <div class="text-14 lh-1">6 lesson</div>
                        </div>
                        <div class="d-flex items-center">
                          <div class="mr-8">
                            <img
                              alt="icon"
                              loading="lazy"
                              width="16"
                              height="17"
                              decoding="async"
                              data-nimg="1"
                              src="https://educrat-nextjs.vercel.app/assets/img/coursesCards/icons/2.svg"
                              style={{ color: "transparent" }}
                            />
                          </div>
                          <div class="text-14 lh-1">22h 0m</div>
                        </div>
                        <div class="d-flex items-center">
                          <div class="mr-8">
                            <img
                              alt="icon"
                              loading="lazy"
                              width="16"
                              height="17"
                              decoding="async"
                              data-nimg="1"
                              src="https://educrat-nextjs.vercel.app/assets/img/coursesCards/icons/3.svg"
                              style={{ color: "transparent" }}
                            />
                          </div>
                          <div class="text-14 lh-1">Beginner</div>
                        </div>
                      </div>
                      <div class="coursesCard-footer">
                        <div class="coursesCard-footer__author">
                          <img
                            alt="image"
                            loading="lazy"
                            width="30"
                            height="30"
                            decoding="async"
                            data-nimg="1"
                            src="https://educrat-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fgeneral%2Favatar-1.png&w=64&q=75"
                            style={{ color: "transparent" }}
                          />
                          <div>Jane Cooper</div>
                        </div>
                        <div class="coursesCard-footer__price">
                          <div>₹199</div>
                          <div>₹79</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="side-content__item">
                    <div class="px-30 pt-20 pb-30 bg-white rounded-8 border-light shadow-2">
                      <div class="text-18 lh-16 text-dark-1">
                        Learn Figma - UI/UX Design Essential Training
                      </div>
                      <div class="row x-gap-10 y-gap-10 items-center pt-15">
                        <div class="col-auto">
                          <div class="d-flex items-center">
                            <img
                              alt="icon"
                              loading="lazy"
                              width="16"
                              height="17"
                              decoding="async"
                              data-nimg="1"
                              class="mr-8"
                              src="https://educrat-nextjs.vercel.app/assets/img/coursesCards/icons/1.svg"
                              style={{ color: "transparent" }}
                            />
                            <div class="text-14 lh-1">6 lesson</div>
                          </div>
                        </div>
                        <div class="col-auto">
                          <div class="d-flex items-center">
                            <img
                              alt="icon"
                              loading="lazy"
                              width="16"
                              height="17"
                              decoding="async"
                              data-nimg="1"
                              class="mr-8"
                              src="https://educrat-nextjs.vercel.app/assets/img/coursesCards/icons/2.svg"
                              style={{ color: "transparent" }}
                            />
                            <div class="text-14 lh-1">22h 0m</div>
                          </div>
                        </div>
                        <div class="col-auto">
                          <div class="d-flex items-center">
                            <img
                              alt="icon"
                              loading="lazy"
                              width="16"
                              height="17"
                              decoding="async"
                              data-nimg="1"
                              class="mr-8"
                              src="https://educrat-nextjs.vercel.app/assets/img/coursesCards/icons/3.svg"
                              style={{ color: "transparent" }}
                            />
                            <div class="text-14 lh-1">Beginner</div>
                          </div>
                        </div>
                      </div>
                      <div class="d-inline-block px-15 py-5 bg-green-1 text-dark-1 rounded-200 text-11 fw-500 uppercase mt-20">
                        BEST SELLER
                      </div>
                      <p class="text-dark-1 mt-15">
                        Learn the #1 most important building block of all art,
                        Drawing. This course will teach you how to draw like a
                        pro!
                      </p>
                      <div class="row y-gap-15 pt-15">
                        <div class="col-12">
                          <div class="d-flex items-center">
                            <div class="size-20 d-flex items-center justify-center rounded-full border-light">
                              <div class="icon-check text-6"></div>
                            </div>
                            <div class="ml-10">Become a UX designer.</div>
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="d-flex items-center">
                            <div class="size-20 d-flex items-center justify-center rounded-full border-light">
                              <div class="icon-check text-6"></div>
                            </div>
                            <div class="ml-10">
                              You will be able to add UX designer.
                            </div>
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="d-flex items-center">
                            <div class="size-20 d-flex items-center justify-center rounded-full border-light">
                              <div class="icon-check text-6"></div>
                            </div>
                            <div class="ml-10">Become a UI designer.</div>
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="d-flex items-center">
                            <div class="size-20 d-flex items-center justify-center rounded-full border-light">
                              <div class="icon-check text-6"></div>
                            </div>
                            <div class="ml-10">
                              Build &amp; test a full website design.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row x-gap-20 y-gap-15 items-center pt-30">
                        <div class="col">
                          <button
                            class="button -md h-60 -purple-1 text-white col-12 py-54"
                            style={{padding: "0px 54px"}}
                          >
                            Add To Cart
                          </button>
                        </div>
                        <div class="col-auto">
                          <div class="d-flex items-center justify-center size-60 rounded-full border-light">
                            <div class="icon-bookmark text-20 text-purple-1"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>))}

              </div>

              <div class="row justify-center pt-90 lg:pt-50">
                <div class="col-auto">
                  <div class="pagination -buttons">
                    <button class="pagination__button -prev ">
                      <i class="icon icon-chevron-left"></i>
                    </button>
                    <div class="pagination__count">
                      <a class="-count-is-active" href="#">
                        1
                      </a>
                    </div>
                    <button class="pagination__button -next">
                      <i class="icon icon-chevron-right"></i>
                    </button>
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

export default AllCourse;
