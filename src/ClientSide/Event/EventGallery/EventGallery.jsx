// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const EventGallery = () => {
  return (
    <div className="sectionGap ">
      {/* mobile screen */}
      <div className="block md:hidden">
        <p className="eventGallarySmall">Events</p>
        <h2 className="eventGarlleryTitle">Trending events</h2>

        <div className="flex justify-between gap-x-[15px]">
          <div>
            {/* inde */}
            <div className="relative">
              <div className="img1">
                <img
                  className="h-full w-full object-cover rounded-[10px]"
                  src="https://i.ibb.co/Jt6h0FY/Independence-Day-Fusion-Celebration.jpg"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
                <div className="text-white">
                  <p className="dateEvent">Date: 05-05-1998</p>
                </div>
                <div className="text-white">
                  <h4 className="hoverTitleGallery">
                    Independence Day - Fusion Celebration
                  </h4>
                  <div className="flex items-center locationTextGallelry">
                    <FaLocationDot className="mr-2" />
                    <p>Contrary to popular belief, is not</p>
                  </div>
                  <button className="ParticipateBtn">Participate</button>
                </div>
              </div>
            </div>

            {/* story */}
            <div className="relative">
              <div className="img2">
                <img
                  className="h-full w-full object-cover rounded-[10px]"
                  src="https://i.ibb.co/Zx5QB8d/Story-Telling-Session.jpg"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
                <div className="text-white">
                  <p className="dateEvent">Date: 05-05-1998</p>
                </div>
                <div className="text-white">
                  <h4 className="hoverTitleGallery">Story Telling Session</h4>
                  <div className="flex items-center locationTextGallelry">
                    <FaLocationDot className="mr-2" />
                    <p>Contrary to popular belief, is not</p>
                  </div>
                  <button className="ParticipateBtn">Participate</button>
                </div>
              </div>
            </div>
          </div>
          {/* durga puja */}

          <div>
            <div className="relative">
              <div className="img3">
                <img
                  className="h-full w-full object-cover rounded-[10px]"
                  src="https://i.ibb.co/WyDd57z/Durga-Puja-Preview.jpg"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
                <div className="text-white">
                  <p className="dateEvent">Date: 05-05-1998</p>
                </div>
                <div className="text-white">
                  <h4 className="hoverTitleGallery">Durga Puja Preview</h4>
                  <div className="flex items-center locationTextGallelry">
                    <FaLocationDot className="mr-2" />
                    <p>Contrary to popular belief, is not</p>
                  </div>
                  <button className="ParticipateBtn">Participate</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* diwali */}
        <div className="relative">
          <div className="img4">
            <img
              className="h-full w-full object-fill rounded-[10px]"
              src="https://i.ibb.co/NjLWNZq/emo-2.png"
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
            <div className="text-white">
              <p className="dateEvent">Date: 05-05-1998</p>
            </div>
            <div className="text-white">
              <h4 className="hoverTitleGallery">Diwali On</h4>
              <div className="flex items-center locationTextGallelry">
                <FaLocationDot className="mr-2" />
                <p>Contrary to popular belief, is not</p>
              </div>
              <button className="ParticipateBtn">Participate</button>
            </div>
          </div>
        </div>

        {/* childrens day */}
        <div className="flex justify-center gap-x-[15px]">
          <div>
            <div className="relative">
              <div className="img5">
                <img
                  className="h-full w-full object-fill rounded-[10px] "
                  src="https://i.ibb.co/kcr3kJx/Children-s-Day-Elders-Way.jpg"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
                <div className="text-white">
                  <p className="dateEvent">Date: 05-05-1998</p>
                </div>
                <div className="text-white">
                  <h4 className="hoverTitleGallery">
                    {" "}
                    Children's Day - Elders Way
                  </h4>
                  <div className="flex items-center locationTextGallelry">
                    <FaLocationDot className="mr-2" />
                    <p>Contrary to popular belief, is not</p>
                  </div>
                  <button className="ParticipateBtn">Participate</button>
                </div>
              </div>
            </div>
            {/* Laugh */}
            <div className="relative">
              <div className="img6">
                <img
                  className="h-full w-full object-cover rounded-[10px]"
                  src="https://i.ibb.co/W5T8BVN/Laugh-all-the-way-1.jpg"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
                <div className="text-white">
                  <p className="dateEvent">Date: 05-05-1998</p>
                </div>
                <div className="text-white">
                  <h4 className="hoverTitleGallery">Laugh all the way </h4>
                  <div className="flex items-center locationTextGallelry">
                    <FaLocationDot className="mr-2" />
                    <p>Contrary to popular belief, is not</p>
                  </div>
                  <button className="ParticipateBtn">Participate</button>
                </div>
              </div>
            </div>
          </div>
          {/* Xmas to New Year Party */}
          <div>
            <div className="relative">
              <div className="right5">
                <img
                  className="h-full w-full object-fill rounded-[10px]"
                  src="https://i.ibb.co/mSWHyPD/Xmas-to-New-Year-Party-copy-1.jpg"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
                <div className="text-white">
                  <p className="dateEvent">Date: 05-05-1998</p>
                </div>
                <div className="text-white">
                  <h4 className="hoverTitleGallery">Xmas to New Year Party</h4>
                  <div className="flex items-center locationTextGallelry">
                    <FaLocationDot className="mr-2" />
                    <p>Contrary to popular belief, is not</p>
                  </div>
                  <button className="ParticipateBtn">Participate</button>
                </div>
              </div>
            </div>
            {/* elders */}
            <div className="relative">
              <div className="right6">
                <img
                  className="h-full w-full  rounded-[10px] object-cover"
                  src="https://i.ibb.co/kXg3K1r/Elders-Day-Out-Picnic-1.jpg"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
                <div className="text-white">
                  <p className="dateEvent">Date: 05-05-1998</p>
                </div>
                <div className="text-white">
                  <h4 className="hoverTitleGallery">Elders Day Out - Picnic</h4>
                  <div className="flex items-center locationTextGallelry">
                    <FaLocationDot className="mr-2" />
                    <p>Contrary to popular belief, is not</p>
                  </div>
                  <button className="ParticipateBtn">Participate</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= four row ================ */}
        {/* movie */}
        <div className="flex justify-between gap-x-[15px] ">
          <div className="relative">
            <div className="img3">
              <img
                className="h-full w-full  rounded-[10px]"
                src="https://i.ibb.co/M7rg3R7/Elders-Film-Festival.jpg"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
              <div className="text-white">
                <p className="dateEvent">Date: 05-05-1998</p>
              </div>
              <div className="text-white">
                <h4 className="hoverTitleGallery">Elders Film Festival</h4>
                <div className="flex items-center locationTextGallelry">
                  <FaLocationDot className="mr-2" />
                  <p>Contrary to popular belief, is not</p>
                </div>
                <button className="ParticipateBtn">Participate</button>
              </div>
            </div>
          </div>
          {/* holi */}
          <div>
            <div className="relative">
              <div className="img1">
                <img
                  className="h-full w-full rounded-[10px]"
                  src="https://i.ibb.co/4frnxZ0/Holi-Hai-1.jpg"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
                <div className="text-white">
                  <p className="dateEvent">Date: 05-05-1998</p>
                </div>
                <div className="text-white">
                  <h4 className="hoverTitleGallery">Holi Hai</h4>
                  <div className="flex items-center locationTextGallelry">
                    <FaLocationDot className="mr-2" />
                    <p>Contrary to popular belief, is not</p>
                  </div>
                  <button className="ParticipateBtn">Participate</button>
                </div>
              </div>
            </div>
            {/* Spiritual Session */}
            <div className="relative">
              <div className="img2">
                <img
                  className="h-full w-full object-cover rounded-[10px]"
                  src="https://i.ibb.co/SVZZL9G/Spiritual-Session-1.jpg"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
                <div className="text-white">
                  <p className="dateEvent">Date: 05-05-1998</p>
                </div>
                <div className="text-white">
                  <h4 className="hoverTitleGallery">Spiritual Session</h4>
                  <div className="flex items-center locationTextGallelry">
                    <FaLocationDot className="mr-2" />
                    <p>Contrary to popular belief, is not</p>
                  </div>
                  <button className="ParticipateBtn">Participate</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Baishaki  */}
        <div className="flex justify-between gap-x-[15px] pt-[15px]">
          <div>
            <div className="relative">
              <div className="img1">
                <img
                  className="h-full w-full object-cover rounded-[10px]"
                  src="https://i.ibb.co/jHtRKZk/Baishaki.jpg"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
                <div className="text-white">
                  <p className="dateEvent">Date: 05-05-1998</p>
                </div>
                <div className="text-white">
                  <h4 className="hoverTitleGallery">Baishaki </h4>
                  <div className="flex items-center locationTextGallelry">
                    <FaLocationDot className="mr-2" />
                    <p>Contrary to popular belief, is not</p>
                  </div>
                  <button className="ParticipateBtn">Participate</button>
                </div>
              </div>
            </div>

            {/* Rabindra Sandha */}
            <div className="relative">
              <div className="img2">
                <img
                  className="h-full w-full object-cover rounded-[10px]"
                  src="/Images/events/an evening with literature.JPG"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
                <div className="text-white">
                  <p className="dateEvent">Date: 05-05-1998</p>
                </div>
                <div className="text-white">
                  <h4 className="hoverTitleGallery">Rabindra Sandha</h4>
                  <div className="flex items-center locationTextGallelry">
                    <FaLocationDot className="mr-2" />
                    <p>Contrary to popular belief, is not</p>
                  </div>
                  <button className="ParticipateBtn">Participate</button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="relative">
              <div className="img3">
                <img
                  className="h-full w-full object-fill rounded-[10px]"
                  src="https://i.ibb.co/zf7v3sk/Live-musical-show-1.jpg"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
                <div className="text-white">
                  <p className="dateEvent">Date: 05-05-1998</p>
                </div>
                <div className="text-white">
                  <h4 className="hoverTitleGallery">Live Cultural show</h4>
                  <div className="flex items-center locationTextGallelry">
                    <FaLocationDot className="mr-2" />
                    <p>Contrary to popular belief, is not</p>
                  </div>
                  <button className="ParticipateBtn">Participate</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link to="/membership">
          <button className="exploreMemberShip">Explore Membership </button>
        </Link>
      </div>

      {/* big screen */}
      <div className="hidden md:block ">
        <p className="eventGallarySmall text-center">Events</p>
        <h2 className="eventGarlleryTitle text-center">Trending events</h2>

        <div
          className=" flex 2xl:gap-x-[30px] xl:gap-x-[30px]
            lg:gap-x-[15px] md:gap-x-[15px] "
        >
          {/*1,2,3 pic */}
          <div
            className="  grid  grid-cols-2  2xl:grid-cols-2 2xl:justify-between 
        xl:grid-cols-2 xl:justify-between
        md:grid-cols-2 md:justify-between
        lg:grid-cols-2 lg:justify-between 
      justify-between gap-x-[15px]  2xl:gap-x-[30px] 
       xl:gap-x-[30px]  lg:gap-x-[15px]  md:gap-x-[15px] "
          >
            <div className=" ">
              <div className="img1 w-full">
                <img
                  className="h-full w-full  rounded-[10px]"
                  src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719349378/Emopract/image_1_ydzyp5.png"
                  alt=""
                />
              </div>
              <div className="img2 w-full">
                <img
                  className="h-full w-full  rounded-[10px]"
                  src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719349631/Emopract/imgtow_s3zhi8.jpg"
                  alt=""
                />
              </div>
            </div>

            <div>
              <div className="img3 w-full">
                <img
                  className="h-full w-full  rounded-[10px]"
                  src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719349784/Emopract/img3_y7z7gq.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div
            className="flex md:gap-x-[10px] lg:gap-x-[10px] xl:gap-x-[30px]
          2xl:gap-x-[30px]"
          >
            <div>
              {/* 4,5 */}

              <div className="   2xl:h-[242px] xl:h-[242px] lg:h-[150px] md:h-[100px]">
                <img
                  className="h-full w-full  rounded-[10px]"
                  src="https://i.ibb.co/09rzDjL/image-1.png"
                  alt=""
                />
              </div>

              <div className=" md:mt-[10px] xl:mt-[30px] 2xl:mt-[10px] lg:mt-[10px]   2xl:h-[478px] xl:h-[478px] lg:h-[300px] md:h-[200px]">
                <img
                  className="h-full w-full  rounded-[10px]"
                  src="https://i.ibb.co/VDY8ywF/image-3.png"
                  alt=""
                />
              </div>
            </div>

            {/* 6 , 7 pic */}
            <div>
              <div className="  2xl:h-[242px] xl:h-[242px] lg:h-[150px] md:h-[100px] ">
                <img
                  className="h-full w-full  rounded-[10px]"
                  src="https://i.ibb.co/ckKkGG2/image-2.png"
                  alt=""
                />
              </div>

              <div
                className=" md:mt-[10px] xl:mt-[30px] 2xl:mt-[10px] lg:mt-[10px]  2xl:h-[478px] 
              xl:h-[478px] lg:h-[300px] md:h-[200px]"
              >
                <img
                  className="h-full w-full  rounded-[10px]"
                  src="https://i.ibb.co/3srckzj/image-4.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        {/* 8 pic */}
        <div
          className="2xl:h-[750px] xl:h-[750px] lg:h-[675px] md:h-[675px] 2xl:mb-[30px] xl:mb-[30px] lg:mb-[15px] md:mb-[15px] md:mt-[15px]
        lg:mt-[15px] xl:mt-[30px] 2xl:mt-[30px]"
        >
          <img
            className="h-full w-full  rounded-[10px]"
            src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719563524/Emopract/middleImg_seijua.jpg"
            alt=""
          />
        </div>

        <div
          className=" flex 2xl:gap-x-[30px] xl:gap-x-[30px]
            lg:gap-x-[15px] md:gap-x-[15px] "
        >
          {/*1,2,3 pic */}
          <div
            className="  grid  grid-cols-2  2xl:grid-cols-2 2xl:justify-between 
        xl:grid-cols-2 xl:justify-between
        md:grid-cols-2 md:justify-between
        lg:grid-cols-2 lg:justify-between 
      justify-between gap-x-[15px]  2xl:gap-x-[30px] 
       xl:gap-x-[30px]  lg:gap-x-[15px]  md:gap-x-[15px] "
          >
            <div className=" ">
              <div className="img1 w-full">
                <img
                  className="h-full w-full  rounded-[10px]"
                  src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719349378/Emopract/image_1_ydzyp5.png"
                  alt=""
                />
              </div>
              <div className="img2 w-full">
                <img
                  className="h-full w-full  rounded-[10px]"
                  src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719349631/Emopract/imgtow_s3zhi8.jpg"
                  alt=""
                />
              </div>
            </div>

            <div>
              <div className="img3 w-full">
                <img
                  className="h-full w-full  rounded-[10px]"
                  src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719349784/Emopract/img3_y7z7gq.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div
            className="flex md:gap-x-[10px] lg:gap-x-[10px] xl:gap-x-[30px]
          2xl:gap-x-[30px]"
          >
            <div>
              {/* 4,5 */}

              <div className="   2xl:h-[242px] xl:h-[242px] lg:h-[150px] md:h-[100px]">
                <img
                  className="h-full w-full  rounded-[10px]"
                  src="https://i.ibb.co/09rzDjL/image-1.png"
                  alt=""
                />
              </div>

              <div className=" md:mt-[10px] xl:mt-[30px] 2xl:mt-[10px] lg:mt-[10px]   2xl:h-[478px] xl:h-[478px] lg:h-[300px] md:h-[200px]">
                <img
                  className="h-full w-full  rounded-[10px]"
                  src="https://i.ibb.co/VDY8ywF/image-3.png"
                  alt=""
                />
              </div>
            </div>

            {/* 6 , 7 pic */}
            <div>
              <div className="  2xl:h-[242px] xl:h-[242px] lg:h-[150px] md:h-[100px] ">
                <img
                  className="h-full w-full  rounded-[10px]"
                  src="https://i.ibb.co/ckKkGG2/image-2.png"
                  alt=""
                />
              </div>

              <div
                className=" md:mt-[10px] xl:mt-[30px] 2xl:mt-[10px] lg:mt-[10px]  2xl:h-[478px] 
              xl:h-[478px] lg:h-[300px] md:h-[200px]"
              >
                <img
                  className="h-full w-full  rounded-[10px]"
                  src="https://i.ibb.co/3srckzj/image-4.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <button className="exploreMemberShip">Explore Membership </button>
      </div>
    </div>
  );
};

export default EventGallery;
