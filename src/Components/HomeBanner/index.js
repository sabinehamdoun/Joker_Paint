import { AppBar, Box, Button, CardMedia, CircularProgress, Toolbar, Typography } from '@mui/material';
import logo from "../../assets/images/HeaderLogo.svg";
import home from "../../assets/images/behr1.jpg";
import home2 from "../../assets/images/behr2.jpg";
import home3 from "../../assets/images/behr3.jpg";
import home4 from "../../assets/images/behr4.jpg";
import "../HomeBanner/swiper.modules.css";
import React, { useState } from 'react';
import { Autoplay, Controller } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";
import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; 

export default function HomeBanner() {

  const [controlledSwiper, setControlledSwiper] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <Box>
      <Swiper
        spaceBetween={5}
        slidesPerView={1}
        // onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Navigation, Pagination, Controller, Autoplay]}
        controller={{ control: controlledSwiper }}
        navigation={{ 
          clickable: true
        }}
        pagination={{
            // el: '.swiper-pagination',
            clickable: true,
        }}
        autoplay={{ delay: 3000 }}
      >
        <SwiperSlide>
          {loading && <CircularProgress />}
          <CardMedia
            component="img"
            height="100%"
            image={home}
            onLoad={handleImageLoad}
          />
        </SwiperSlide>
        <SwiperSlide>
          {loading && <CircularProgress />}
          <CardMedia
            component="img"
            height="100%"
            image={home2}
            onLoad={handleImageLoad}
          />
        </SwiperSlide>
        <SwiperSlide>
          {loading && <CircularProgress />}
          <CardMedia
            component="img"
            height="100%"
            image={home3}
            onLoad={handleImageLoad}
          />
        </SwiperSlide>
        <SwiperSlide>
          {loading && <CircularProgress />}
          <CardMedia
            component="img"
            height="100%"
            image={home4}
            onLoad={handleImageLoad}
          />
        </SwiperSlide> 
      </Swiper>
    </Box>
  );
}
