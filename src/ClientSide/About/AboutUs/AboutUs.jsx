// eslint-disable-next-line no-unused-vars
import React from "react";

const AboutUs = () => {
  return (
    <div>
      <div className="sectionGap">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-[50px] 2xl:gap-x-[100px] justify-center items-center">
          <div className="ourServiceImgParent md:block hidden">
            <img
              className="h-full w-full object-cover rounded-[10px]"
              src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719392724/Emopract/mobileslider_hfyhac.jpg"
              alt=""
            />
          </div>
          <div>
            <p className="ourServiceSmall">about us</p>
            <h3 className="ourServiceTitle">most joyful service for elders</h3>
            <p className="ourServicePara">
              We are a group of enthusiastic, affectionate and trained personnel
              to accompany you in your journey of life. Our team looks forward
              to being with you, by you, like a family member. The greatest
              happiness comes from knowing that there is someone to rely on
            </p>

            <p className="ourServicePara pt-[10px]">
              {" "}
              Emopract is conceptualized by Gourab Nath Ghosh and Dhrubajyoti
              Bose. Collectively, they have 50+ years of professional experience
              in creating consumer-focused impact across multiple states of
              India and nurturing thriving communities around the fusion of
              arts, culture, social causes, and livelihood opportunities. They
              met at crossroads of life when both of them were envisioning a
              life of secure comfort for the elderly, replete with Wellness of
              Being and Joys of Life
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
