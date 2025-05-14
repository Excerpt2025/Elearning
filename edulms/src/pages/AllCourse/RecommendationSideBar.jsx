import React from 'react'

const RecommendationSideBar = () => {
  return (
    
       <div class="col-xl-3 col-lg-4 lg:d-none">
              <div class="pr-30 lg:pr-0">
                <div class="sidebar -courses">
                  <div class="sidebar__item">
                    <div class="accordion js-accordion">
                      <div class="accordion__item js-accordion-item-active is-active ">
                        <div class="accordion__button items-center">
                          <h5 class="sidebar__title">Category</h5>
                          <div class="accordion__icon">
                            <div class="icon icon-chevron-down"></div>
                            <div class="icon icon-chevron-up"></div>
                          </div>
                        </div>
                        <div
                          class="accordion__content"
                          style={{ maxHeight: "350px" }}
                        >
                          <div class="accordion__content__inner">
                            <div class="sidebar-checkbox">
                              <div class="sidebar-checkbox__item">
                                <div class="form-checkbox">
                                  <input type="checkbox" checked="" />
                                  <div class="form-checkbox__mark">
                                    <div class="form-checkbox__icon icon-check"></div>
                                  </div>
                                </div>
                                <div class="sidebar-checkbox__title">All</div>
                                <div class="sidebar-checkbox__count"></div>
                              </div>
                              <div class="sidebar-checkbox__item cursor">
                                <div class="form-checkbox">
                                  <input type="checkbox" />
                                  <div class="form-checkbox__mark">
                                    <div class="form-checkbox__icon icon-check"></div>
                                  </div>
                                </div>
                                <div class="sidebar-checkbox__title">Art</div>
                                <div class="sidebar-checkbox__count"></div>
                              </div>
                              <div class="sidebar-checkbox__item cursor">
                                <div class="form-checkbox">
                                  <input type="checkbox" />
                                  <div class="form-checkbox__mark">
                                    <div class="form-checkbox__icon icon-check"></div>
                                  </div>
                                </div>
                                <div class="sidebar-checkbox__title">
                                  Animation
                                </div>
                                <div class="sidebar-checkbox__count"></div>
                              </div>
                              <div class="sidebar-checkbox__item cursor">
                                <div class="form-checkbox">
                                  <input type="checkbox" />
                                  <div class="form-checkbox__mark">
                                    <div class="form-checkbox__icon icon-check"></div>
                                  </div>
                                </div>
                                <div class="sidebar-checkbox__title">
                                  Design
                                </div>
                                <div class="sidebar-checkbox__count"></div>
                              </div>
                              <div class="sidebar-checkbox__item cursor">
                                <div class="form-checkbox">
                                  <input type="checkbox" />
                                  <div class="form-checkbox__mark">
                                    <div class="form-checkbox__icon icon-check"></div>
                                  </div>
                                </div>
                                <div class="sidebar-checkbox__title">
                                  Photography
                                </div>
                                <div class="sidebar-checkbox__count"></div>
                              </div>
                              <div class="sidebar-checkbox__item cursor">
                                <div class="form-checkbox">
                                  <input type="checkbox" />
                                  <div class="form-checkbox__mark">
                                    <div class="form-checkbox__icon icon-check"></div>
                                  </div>
                                </div>
                                <div class="sidebar-checkbox__title">
                                  Programming
                                </div>
                                <div class="sidebar-checkbox__count"></div>
                              </div>
                              <div class="sidebar-checkbox__item cursor">
                                <div class="form-checkbox">
                                  <input type="checkbox" />
                                  <div class="form-checkbox__mark">
                                    <div class="form-checkbox__icon icon-check"></div>
                                  </div>
                                </div>
                                <div class="sidebar-checkbox__title">
                                  Writing
                                </div>
                                <div class="sidebar-checkbox__count"></div>
                              </div>
                            </div>
                            <div class="sidebar__more mt-15">
                              <a
                                href="#"
                                class="text-14 fw-500 underline text-purple-1"
                              >
                                Show more
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="sidebar__item">
                    <div class="accordion js-accordion">
                      <div class="accordion__item js-accordion-item-active is-active ">
                        <div class="accordion__button items-center">
                          <h5 class="sidebar__title">Ratings</h5>
                          <div class="accordion__icon">
                            <div class="icon icon-chevron-down"></div>
                            <div class="icon icon-chevron-up"></div>
                          </div>
                        </div>
                        <div
                          class="accordion__content"
                          style={{ maxHeight: "350px" }}
                        >
                          <div class="accordion__content__inner">
                            <div class="sidebar-checkbox">
                              <div class="sidebar-checkbox__item">
                                <div class="form-radio mr-10">
                                  <div class="radio">
                                    <input type="radio" checked="" />
                                    <div class="radio__mark">
                                      <div class="radio__icon"></div>
                                    </div>
                                  </div>
                                </div>
                                <div class="sidebar-checkbox__title d-flex items-center">
                                  <div class="d-flex x-gap-5 pr-10"></div>All
                                </div>
                                <div class="sidebar-checkbox__count"></div>
                              </div>
                              <div class="sidebar-checkbox__item cursor">
                                <div class="form-radio mr-10">
                                  <div class="radio">
                                    <input type="radio" />
                                    <div class="radio__mark">
                                      <div class="radio__icon"></div>
                                    </div>
                                  </div>
                                </div>
                                <div class="sidebar-checkbox__title d-flex items-center">
                                  <div class="d-flex x-gap-5 pr-10"></div>4.5
                                  &amp; up
                                </div>
                                <div class="sidebar-checkbox__count"></div>
                              </div>
                              <div class="sidebar-checkbox__item cursor">
                                <div class="form-radio mr-10">
                                  <div class="radio">
                                    <input type="radio" />
                                    <div class="radio__mark">
                                      <div class="radio__icon"></div>
                                    </div>
                                  </div>
                                </div>
                                <div class="sidebar-checkbox__title d-flex items-center">
                                  <div class="d-flex x-gap-5 pr-10"></div>4.0
                                  &amp; up
                                </div>
                                <div class="sidebar-checkbox__count"></div>
                              </div>
                              <div class="sidebar-checkbox__item cursor">
                                <div class="form-radio mr-10">
                                  <div class="radio">
                                    <input type="radio" />
                                    <div class="radio__mark">
                                      <div class="radio__icon"></div>
                                    </div>
                                  </div>
                                </div>
                                <div class="sidebar-checkbox__title d-flex items-center">
                                  <div class="d-flex x-gap-5 pr-10"></div>3.5
                                  &amp; up
                                </div>
                                <div class="sidebar-checkbox__count"></div>
                              </div>
                              <div class="sidebar-checkbox__item cursor">
                                <div class="form-radio mr-10">
                                  <div class="radio">
                                    <input type="radio" />
                                    <div class="radio__mark">
                                      <div class="radio__icon"></div>
                                    </div>
                                  </div>
                                </div>
                                <div class="sidebar-checkbox__title d-flex items-center">
                                  <div class="d-flex x-gap-5 pr-10"></div>3.0
                                  &amp; up
                                </div>
                                <div class="sidebar-checkbox__count"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                 
                  <div class="sidebar__item">
                    <div class="accordion js-accordion">
                      <div class="accordion__item js-accordion-item-active is-active ">
                        <div class="accordion__button items-center">
                          <h5 class="sidebar__title">Price</h5>
                          <div class="accordion__icon">
                            <div class="icon icon-chevron-down"></div>
                            <div class="icon icon-chevron-up"></div>
                          </div>
                        </div>
                        <div
                          class="accordion__content"
                          style={{ maxHeight: "350px" }}
                        >
                          <div class="accordion__content__inner">
                            <div class="sidebar-checkbox">
                              <div class="sidebar-checkbox__item cursor">
                                <div class="form-radio mr-10">
                                  <div class="radio">
                                    <input type="radio" checked="" />
                                    <div class="radio__mark">
                                      <div class="radio__icon"></div>
                                    </div>
                                  </div>
                                </div>
                                <div class="sidebar-checkbox__title">All</div>
                                <div class="sidebar-checkbox__count"></div>
                              </div>
                              <div class="sidebar-checkbox__item cursor">
                                <div class="form-radio mr-10">
                                  <div class="radio">
                                    <input type="radio" />
                                    <div class="radio__mark">
                                      <div class="radio__icon"></div>
                                    </div>
                                  </div>
                                </div>
                                <div class="sidebar-checkbox__title">Free</div>
                                <div class="sidebar-checkbox__count"></div>
                              </div>
                              <div class="sidebar-checkbox__item cursor">
                                <div class="form-radio mr-10">
                                  <div class="radio">
                                    <input type="radio" />
                                    <div class="radio__mark">
                                      <div class="radio__icon"></div>
                                    </div>
                                  </div>
                                </div>
                                <div class="sidebar-checkbox__title">Paid</div>
                                <div class="sidebar-checkbox__count"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="sidebar__item">
                    <div class="accordion js-accordion">
                      <div class="accordion__item js-accordion-item-active is-active  ">
                        <div class="accordion__button items-center">
                          <h5 class="sidebar__title">Level</h5>
                          <div class="accordion__icon">
                            <div class="icon icon-chevron-down"></div>
                            <div class="icon icon-chevron-up"></div>
                          </div>
                        </div>
                        <div
                          class="accordion__content"
                          style={{ maxHeight: "350px" }}
                        >
                          <div class="accordion__content__inner">
                            <div class="sidebar-checkbox">
                              <div class="sidebar-checkbox__item cursor">
                                <div class="form-checkbox">
                                  <input type="checkbox" checked="" />
                                  <div class="form-checkbox__mark">
                                    <div class="form-checkbox__icon icon-check"></div>
                                  </div>
                                </div>
                                <div class="sidebar-checkbox__title">All</div>
                                <div class="sidebar-checkbox__count"></div>
                              </div>
                              <div class="sidebar-checkbox__item cursor">
                                <div class="form-checkbox">
                                  <input type="checkbox" />
                                  <div class="form-checkbox__mark">
                                    <div class="form-checkbox__icon icon-check"></div>
                                  </div>
                                </div>
                                <div class="sidebar-checkbox__title">
                                  Beginner
                                </div>
                                <div class="sidebar-checkbox__count"></div>
                              </div>
                              <div class="sidebar-checkbox__item cursor">
                                <div class="form-checkbox">
                                  <input type="checkbox" />
                                  <div class="form-checkbox__mark">
                                    <div class="form-checkbox__icon icon-check"></div>
                                  </div>
                                </div>
                                <div class="sidebar-checkbox__title">
                                  Intermediate
                                </div>
                                <div class="sidebar-checkbox__count"></div>
                              </div>
                              <div class="sidebar-checkbox__item cursor">
                                <div class="form-checkbox">
                                  <input type="checkbox" />
                                  <div class="form-checkbox__mark">
                                    <div class="form-checkbox__icon icon-check"></div>
                                  </div>
                                </div>
                                <div class="sidebar-checkbox__title">
                                  Expert
                                </div>
                                <div class="sidebar-checkbox__count"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="sidebar__item">
                    <div class="accordion js-accordion">
                      <div class="accordion__item js-accordion-item-active is-active ">
                        <div class="accordion__button items-center">
                          <h5 class="sidebar__title">Languange</h5>
                          <div class="accordion__icon">
                            <div class="icon icon-chevron-down"></div>
                            <div class="icon icon-chevron-up"></div>
                          </div>
                        </div>
                        <div
                          class="accordion__content"
                          style={{ maxHeight: "350px" }}
                        >
                          <div class="accordion__content__inner">
                            <div class="sidebar-checkbox">
                              <div class="sidebar-checkbox__item cursor">
                                <div class="form-checkbox">
                                  <input type="checkbox" checked="" />
                                  <div class="form-checkbox__mark">
                                    <div class="form-checkbox__icon icon-check"></div>
                                  </div>
                                </div>
                                <div class="sidebar-checkbox__title">All</div>
                                <div class="sidebar-checkbox__count"></div>
                              </div>
                              <div class="sidebar-checkbox__item cursor">
                                <div class="form-checkbox">
                                  <input type="checkbox" />
                                  <div class="form-checkbox__mark">
                                    <div class="form-checkbox__icon icon-check"></div>
                                  </div>
                                </div>
                                <div class="sidebar-checkbox__title">
                                  English
                                </div>
                                <div class="sidebar-checkbox__count"></div>
                              </div>
                              <div class="sidebar-checkbox__item cursor">
                                <div class="form-checkbox">
                                  <input type="checkbox" />
                                  <div class="form-checkbox__mark">
                                    <div class="form-checkbox__icon icon-check"></div>
                                  </div>
                                </div>
                                <div class="sidebar-checkbox__title">
                                  French
                                </div>
                                <div class="sidebar-checkbox__count"></div>
                              </div>
                              <div class="sidebar-checkbox__item cursor">
                                <div class="form-checkbox">
                                  <input type="checkbox" />
                                  <div class="form-checkbox__mark">
                                    <div class="form-checkbox__icon icon-check"></div>
                                  </div>
                                </div>
                                <div class="sidebar-checkbox__title">
                                  German
                                </div>
                                <div class="sidebar-checkbox__count"></div>
                              </div>
                              <div class="sidebar-checkbox__item cursor">
                                <div class="form-checkbox">
                                  <input type="checkbox" />
                                  <div class="form-checkbox__mark">
                                    <div class="form-checkbox__icon icon-check"></div>
                                  </div>
                                </div>
                                <div class="sidebar-checkbox__title">
                                  Italian
                                </div>
                                <div class="sidebar-checkbox__count"></div>
                              </div>
                            </div>
                            <div class="sidebar__more mt-15">
                              <a
                                href="#"
                                class="text-14 fw-500 underline text-purple-1"
                              >
                                Show more
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                
                </div>
              </div>
            </div>
    
  )
}

export default RecommendationSideBar
