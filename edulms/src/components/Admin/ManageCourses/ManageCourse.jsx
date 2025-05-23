import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import AdminSideNavaBar from "../AdminSideNavaBar/AdminSideNavaBar";

const ManageCourse = () => {
  const [isCurriculum, setCurriculum] = useState(false);

  const Curriculum = () => {
    setCurriculum((prev) => !prev);
  };

  return (
    <div className="dashboard__main">
      <AdminSideNavaBar />
      <div className="dashboard__content bg-light-4">
        <div class="row pb-50 mb-10">
          <div class="col-auto">
            <h1 class="text-30 lh-12 fw-700">Course Management</h1>
          </div>
        </div>
        <div class="row y-gap-60">
          <div class="col-12">
            <div class="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
              <div class="d-flex items-center py-20 px-30 border-bottom-light">
                <h2 class="text-17 lh-1 fw-500">Course Information</h2>
              </div>
              <div class="py-30 px-30">
                <form class="contact-form row y-gap-30" action="#">
                  <div class="col-12">
                    <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Course Title*
                    </label>
                    <input
                      required=""
                      placeholder="Learn Figma - UI/UX Design Essential Training"
                      type="text"
                    />
                  </div>

                  <div class="col-12">
                    <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Course Description*
                    </label>
                    <textarea
                      required=""
                      placeholder="Description"
                      rows="7"
                    ></textarea>
                  </div>

                  <div class="col-md-6">
                    <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Category*
                    </label>
                    <input required="" placeholder="Select" type="text" />
                  </div>
                  <div class="col-md-6">
                    <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Add Sections*
                    </label>
                    <input required="" placeholder="Select" type="text" />
                  </div>
                  <div class="col-md-6">
                    <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Upload Videos*
                    </label>
                    <button
                      className="button -sm -purple-1 text-white"
                      type="button"
                    >
                      <label
                        htmlFor="imageUpload1"
                        style={{ cursor: "pointer" }}
                      >
                        Upload Files
                      </label>
                      <input
                        required
                        id="imageUpload1"
                        accept="image/*"
                        type="file"
                        style={{ display: "none" }}
                      />
                    </button>
                  </div>
                  <div class="col-md-6">
                    <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Set Price*
                    </label>
                    <input required="" placeholder="Select" type="text" />
                  </div>
                </form>
                <div class="row y-gap-20 justify-between pt-15">
                  <div class="col-auto">
                    <button class="button -md -outline-purple-1 text-purple-1">
                      Prev
                    </button>
                  </div>
                  <div class="col-auto">
                    <button class="button -md -purple-1 text-white">
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12">
            <div class="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
              <div class="d-flex items-center py-20 px-30 border-bottom-light">
                <h2 class="text-17 lh-1 fw-500">Curriculum</h2>
              </div>
              <div class="py-30 px-30">
                <div class="row   ">
                  <div class="col-12">
                    <h4 class="text-16 lh-1 fw-500">
                      Introduction to JavaScript
                    </h4>
                  </div>
                  <div class="col-12">
                    <div class="accordion -block-2 text-left js-accordion">
                      <div
                        class={`accordion__item -dark-bg-dark-1 mt-10 ${
                          isCurriculum ? "is-active" : ""
                        }`}
                      >
                        <div class="accordion__button py-20 px-30 bg-light-4">
                          <div class="d-flex items-center">
                            <div class="icon icon-drag mr-10"></div>
                            <span class="text-16 lh-14 fw-500 text-dark-1">
                              Introduction
                            </span>
                          </div>
                          <div class="d-flex x-gap-10 items-center">
                            <a href="#" class="icon icon-edit mr-5"></a>
                            <a href="#" class="icon icon-bin"></a>
                            <div
                              class="accordion__icon mr-0"
                              onClick={Curriculum}
                            >
                              <div class="d-flex items-center justify-center icon icon-chevron-down"></div>
                              <div class="d-flex items-center justify-center icon icon-chevron-up"></div>
                            </div>
                          </div>
                        </div>
                        {isCurriculum && (
                          <div
                            class="accordion__content"
                            style={{ maxHeight: "100px" }}
                          >
                            <div class="accordion__content__inner px-30 py-30">
                              <div class="d-flex x-gap-10 y-gap-10 flex-wrap">
                                <div>
                                  <a
                                    href="#"
                                    class="button -sm py-15 -purple-3 text-purple-1 fw-500"
                                  >
                                    Add Article +
                                  </a>
                                </div>
                                <div>
                                  <a
                                    href="#"
                                    class="button -sm py-15 -purple-3 text-purple-1 fw-500"
                                  >
                                    Add Article +
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      <div class="accordion__item -dark-bg-dark-1 mt-10  ">
                        <div class="accordion__button py-20 px-30 bg-light-4">
                          <div class="d-flex items-center">
                            <div class="icon icon-drag mr-10"></div>
                            <span class="text-16 lh-14 fw-500 text-dark-1">
                              Installing Development Software
                            </span>
                          </div>
                          <div class="d-flex x-gap-10 items-center">
                            <a href="#" class="icon icon-edit mr-5"></a>
                            <a href="#" class="icon icon-bin"></a>
                            <div class="accordion__icon mr-0">
                              <div class="d-flex items-center justify-center icon icon-chevron-down"></div>
                              <div class="d-flex items-center justify-center icon icon-chevron-up"></div>
                            </div>
                          </div>
                        </div>
                        <div class="accordion__content">
                          <div class="accordion__content__inner px-30 py-30">
                            <div class="d-flex x-gap-10 y-gap-10 flex-wrap">
                              <div>
                                <a
                                  href="#"
                                  class="button -sm py-15 -purple-3 text-purple-1 fw-500"
                                >
                                  Add Article +
                                </a>
                              </div>
                              <div>
                                <a
                                  href="#"
                                  class="button -sm py-15 -purple-3 text-purple-1 fw-500"
                                >
                                  Add Article +
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="accordion__item -dark-bg-dark-1 mt-10  ">
                        <div class="accordion__button py-20 px-30 bg-light-4">
                          <div class="d-flex items-center">
                            <div class="icon icon-drag mr-10"></div>
                            <span class="text-16 lh-14 fw-500 text-dark-1">
                              Hello World Project from GitHub
                            </span>
                          </div>
                          <div class="d-flex x-gap-10 items-center">
                            <a href="#" class="icon icon-edit mr-5"></a>
                            <a href="#" class="icon icon-bin"></a>
                            <div class="accordion__icon mr-0">
                              <div class="d-flex items-center justify-center icon icon-chevron-down"></div>
                              <div class="d-flex items-center justify-center icon icon-chevron-up"></div>
                            </div>
                          </div>
                        </div>
                        <div class="accordion__content">
                          <div class="accordion__content__inner px-30 py-30">
                            <div class="d-flex x-gap-10 y-gap-10 flex-wrap">
                              <div>
                                <a
                                  href="#"
                                  class="button -sm py-15 -purple-3 text-purple-1 fw-500"
                                >
                                  Add Article +
                                </a>
                              </div>
                              <div>
                                <a
                                  href="#"
                                  class="button -sm py-15 -purple-3 text-purple-1 fw-500"
                                >
                                  Add Article +
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row y-gap-20 justify-between pt-30">
                  <div class="col-auto sm:w-1/1">
                    <button class="button -md -outline-purple-1 text-purple-1 sm:w-1/1">
                      Prev
                    </button>
                  </div>
                  <div class="col-auto sm:w-1/1">
                    <button class="button -md -purple-1 text-white sm:w-1/1">
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12">
            <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
              <div className="d-flex items-center py-20 px-30 border-bottom-light">
                <h2 className="text-17 lh-1 fw-500">Media</h2>
              </div>

              <div className="py-30 px-30">
                <div className="row y-gap-50">
                  {/* Thumbnail Upload Form */}
                  <div className="col-12">
                    <form className="contact-form d-flex lg:flex-column">
                      <div className="relative shrink-0">
                        <img
                          alt="image"
                          loading="lazy"
                          width="735"
                          height="612"
                          decoding="async"
                          className="w-1/1"
                          src="/_next/image?url=%2Fassets%2Fimg%2Fdashboard%2Fmedia%2F1.png&w=1920&q=75"
                          style={{
                            width: "250px",
                            height: "200px",
                            objectFit: "contain",
                            color: "transparent",
                          }}
                        />
                        <div className="absolute-full-center d-flex justify-end py-20 px-20">
                          <span
                            className="d-flex justify-center items-center bg-white size-40 rounded-8 shadow-1"
                            style={{ cursor: "pointer" }}
                          >
                            <i className="icon-bin text-16"></i>
                          </span>
                        </div>
                      </div>

                      <div className="w-1/1 ml-30 lg:ml-0 lg:mt-20">
                        <div className="form-upload col-12">
                          <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                            Course thumbnail*
                          </label>
                          <div className="form-upload__wrap">
                            <input
                              required
                              placeholder="Cover-1.png"
                              type="text"
                              name="thumbnailName"
                            />
                            <button
                              className="button -dark-3 text-white"
                              type="button"
                            >
                              <label
                                htmlFor="imageUpload1"
                                style={{ cursor: "pointer" }}
                              >
                                Upload Files
                              </label>
                              <input
                                required
                                id="imageUpload1"
                                accept="image/*"
                                type="file"
                                style={{ display: "none" }}
                              />
                            </button>
                          </div>
                        </div>
                        <p className="mt-10">
                          Upload your course image here. It must meet our course
                          image quality standards to be accepted. Important
                          guidelines: 750x440 pixels; .jpg, .jpeg, .gif, or
                          .png. no text on the image.
                        </p>
                      </div>
                    </form>
                  </div>

                  {/* Video Upload Form */}
                  <div className="col-12">
                    <form className="contact-form d-flex lg:flex-column">
                      <div className="relative shrink-0">
                        <img
                          alt="image"
                          loading="lazy"
                          width="735"
                          height="612"
                          decoding="async"
                          className="w-1/1"
                          src="/_next/image?url=%2Fassets%2Fimg%2Fdashboard%2Fmedia%2F2.png&w=1920&q=75"
                          style={{
                            width: "250px",
                            height: "200px",
                            objectFit: "contain",
                            color: "transparent",
                          }}
                        />
                        <div className="absolute-full-center d-flex justify-end py-20 px-20">
                          <span
                            className="d-flex justify-center items-center bg-white size-40 rounded-8 shadow-1"
                            style={{ cursor: "pointer" }}
                          >
                            <i className="icon-bin text-16"></i>
                          </span>
                        </div>
                      </div>

                      <div className="w-1/1 ml-30 lg:ml-0 lg:mt-20">
                        <div className="form-upload col-12">
                          <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                            Video URL*
                          </label>
                          <div className="form-upload__wrap">
                            <input
                              required
                              placeholder="Video-1.mp3"
                              type="text"
                              name="videoUrl"
                            />
                            <button
                              className="button -dark-3 text-white"
                              type="button"
                            >
                              <label
                                htmlFor="imageUpload2"
                                style={{ cursor: "pointer" }}
                              >
                                Upload Files
                              </label>
                              <input
                                required
                                id="imageUpload2"
                                accept="image/*"
                                type="file"
                                style={{ display: "none" }}
                              />
                            </button>
                          </div>
                        </div>
                        <p className="mt-10">
                          Enter a valid video URL. Students who watch a
                          well-made promo video are 5X more likely to enroll in
                          your course.
                        </p>
                      </div>
                    </form>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="row y-gap-20 justify-between pt-30">
                  <div className="col-auto">
                    <button
                      className="button -md -outline-purple-1 text-purple-1"
                      type="button"
                    >
                      Prev
                    </button>
                  </div>
                  <div className="col-auto">
                    <button
                      className="button -md -purple-1 text-white"
                      type="button"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageCourse;
