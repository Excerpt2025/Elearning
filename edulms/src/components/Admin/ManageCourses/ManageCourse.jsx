import React from "react";
import ReactApexChart from "react-apexcharts";

const ManageCourse = () => {
  return (
    <div className="dashboard__main">
      <div className="dashboard__content bg-light-4">
        <div class="row pb-50 mb-10">
          <div class="col-auto">
            <h1 class="text-30 lh-12 fw-700">Dashboard</h1>
            <div class="mt-10">Lorem ipsum dolor sit amet, consectetur.</div>
          </div>
        </div>
        <div class="row y-gap-60">
          <div class="col-12">
            <div class="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
              <div class="d-flex items-center py-20 px-30 border-bottom-light">
                <h2 class="text-17 lh-1 fw-500">Basic Information</h2>
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
                      Short Description*
                    </label>
                    <textarea
                      required=""
                      placeholder="Description"
                      rows="7"
                    ></textarea>
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
                      What will students learn in your course?*
                    </label>
                    <textarea
                      required=""
                      placeholder="Description"
                      rows="7"
                    ></textarea>
                  </div>
                  <div class="col-md-6">
                    <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Requirements*
                    </label>
                    <textarea
                      required=""
                      placeholder="Description"
                      rows="7"
                    ></textarea>
                  </div>
                  <div class="col-md-6">
                    <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Course Level*
                    </label>
                    <input required="" placeholder="Select" type="text" />
                  </div>
                  <div class="col-md-6">
                    <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Audio Language*
                    </label>
                    <input required="" placeholder="Select" type="tex" />
                  </div>
                  <div class="col-md-6">
                    <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Close Caption*
                    </label>
                    <input required="" placeholder="Select" type="text" />
                  </div>
                  <div class="col-md-6">
                    <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Course Category*
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
        </div>
      </div>
    </div>
  );
};

export default ManageCourse;
