import React from 'react'

const MobileRecommendationSideBar = ({isOpen}) => {
  return (
    <div className={`accordion__content hidden lg:block transition-all duration-500 overflow-hidden`}
    style={isOpen ? { maxHeight: "1800px" } : { maxHeight: "0px" }}>
                <div class="sidebar -courses px-30 py-30 rounded-8 bg-light-3 mb-50">
                  <div class="row x-gap-60 y-gap-40">
                    <div class="col-xl-3 col-lg-4 col-sm-6">
                      <div class="sidebar__item">
                        <h5 class="sidebar__title">Category</h5>
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
                    <div class="col-xl-3 col-lg-4 col-sm-6">
                      <div class="sidebar__item">
                        <h5 class="sidebar__title">Ratings</h5>
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
                   
                    <div class="col-xl-3 col-lg-4 col-sm-6">
                      <div class="sidebar__item">
                        <h5 class="sidebar__title">Price</h5>
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
                    <div class="col-xl-3 col-lg-4 col-sm-6">
                      <div class="sidebar__item">
                        <h5 class="sidebar__title">Level</h5>
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
                    <div class="col-xl-3 col-lg-4 col-sm-6">
                      <div class="sidebar__item">
                        <h5 class="sidebar__title">Languange</h5>
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
  )
}

export default MobileRecommendationSideBar
