import React, { useState } from "react";
import ReactApexChart from 'react-apexcharts';

import AdminSideNavaBar from "../AdminSideNavaBar/AdminSideNavaBar";

const DashBoard = () => {
  const chartData = {
    series: [70, 55, 80, 45],
    options: {
      chart: {
        height: 350,
        type: 'radialBar',
      },
      colors: ['#140342', '#643efa', '#02e07c', '#F3C623'], // ✅ Custom colors
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: '22px',
            },
            value: {
              fontSize: '16px',
            },
            total: {
              show: true,
              label: 'Total Performance',
              formatter: function () {
                return "85%";
              },
            },
          },
        },
      },
      labels: ['Total Sales', 'Total Courses', 'Total Students', 'Total Instructors'],
    },
  };

  const chartDataBar = {
    series: [
      {
        name: 'Free Cash Flow',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      }
    ],
    options: {
      chart: {
        type: 'bar',
        height: 350,
      },
      colors:['#140342'],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          borderRadius: 5,
          borderRadiusApplication: 'end',
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      },
      
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands";
          },
        },
      },
    }
  };
  return (
    
    <div className="dashboard__main">
     {/* <AdminHeader/> */}
      <AdminSideNavaBar/>
    <div className="dashboard__content bg-light-4">
      <div class="row pb-50 mb-10">
        <div class="col-auto">
          <h1 class="text-30 lh-12 fw-700">Dashboard</h1>
          <div class="mt-10">
            Lorem ipsum dolor sit amet, consectetur.
          </div>
        </div>
      </div>
      <div class="row y-gap-30">
        <div class="col-xl-3 col-md-6">
          <div class="d-flex justify-between items-center py-35 px-30 rounded-16 bg-white -dark-bg-dark-1 shadow-4">
            <div>
              <div class="lh-1 fw-500">Total Sales</div>
              <div class="text-24 lh-1 fw-700 text-dark-1 mt-20">
                ₹10800
              </div>
              <div class="lh-1 mt-25">
                <span class="text-purple-1">₹50</span> New Sales
              </div>
            </div>
            <i class="text-40 icon-coupon text-purple-1"></i>
          </div>
        </div>
        <div class="col-xl-3 col-md-6">
          <div class="d-flex justify-between items-center py-35 px-30 rounded-16 bg-white -dark-bg-dark-1 shadow-4">
            <div>
              <div class="lh-1 fw-500">Total Courses</div>
              <div class="text-24 lh-1 fw-700 text-dark-1 mt-20">
                ₹3759
              </div>
              <div class="lh-1 mt-25">
                <span class="text-purple-1">₹40</span> New Sales
              </div>
            </div>
            <i class="text-40 icon-play-button text-purple-1"></i>
          </div>
        </div>
        <div class="col-xl-3 col-md-6">
          <div class="d-flex justify-between items-center py-35 px-30 rounded-16 bg-white -dark-bg-dark-1 shadow-4">
            <div>
              <div class="lh-1 fw-500">Total Students</div>
              <div class="text-24 lh-1 fw-700 text-dark-1 mt-20">
                ₹129786
              </div>
              <div class="lh-1 mt-25">
                <span class="text-purple-1">₹90</span> New Sales
              </div>
            </div>
            <i class="text-40 icon-graduate-cap text-purple-1"></i>
          </div>
        </div>
        <div class="col-xl-3 col-md-6">
          <div class="d-flex justify-between items-center py-35 px-30 rounded-16 bg-white -dark-bg-dark-1 shadow-4">
            <div>
              <div class="lh-1 fw-500">Total Instructors</div>
              <div class="text-24 lh-1 fw-700 text-dark-1 mt-20">
                ₹22786
              </div>
              <div class="lh-1 mt-25">
                <span class="text-purple-1">₹290</span> New Sales
              </div>
            </div>
            <i class="text-40 icon-online-learning text-purple-1"></i>
          </div>
        </div>
      </div>
      <div class="row y-gap-30 pt-30">
        <div class="col-xl-8 col-md-6">
          <div class="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
            <div class="d-flex justify-between items-center py-20 px-30 border-bottom-light">
              <h2 class="text-17 lh-1 fw-500">Earning Statistics</h2>
              <div class="">
                <div
                  id="ddtwobutton"
                  class="dropdown js-dropdown js-category-active"
                >
               
                  <select class="dropdown__button d-flex items-center text-14 bg-white -dark-bg-dark-1 border-light rounded-8 px-20 py-10 text-14 lh-12">
  <option value="" className="js-dropdown-title">Select Year</option>
  <option value="2025">2025</option>
  <option value="2024">2024</option>
  <option value="2023">2023</option>
  <option value="2022">2022</option>
</select>

                </div>
              </div>
            </div>
            <div>
      <ReactApexChart
        options={chartDataBar.options}
        series={chartDataBar.series}
        type="bar"
        height={350}
      />
    </div>
          </div>
        </div>

        <div class="col-xl-4 col-md-6">
          <div class="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
          <div class="d-flex justify-between items-center py-20 px-30 border-bottom-light">
              <h2 class="text-17 lh-1 fw-500">Overall Performance Breakdown</h2>
             
            </div>
          <div id="chart">
          <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="radialBar"
        height={350}
      />
    </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default DashBoard;
