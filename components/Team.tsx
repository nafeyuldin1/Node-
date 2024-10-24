// Testimonials.tsx
import { useCursor } from '../hooks/CursorContext'; // Adjust the path as necessary
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Scrollbar } from 'swiper/modules';
import Link from 'next/link';
import { TeamInfo } from '@/constants';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Rancher, SedaN } from '@/fonts';
import 'swiper/css/scrollbar';

const Team: React.FC = () => {
  const { cursorText, setCursorText } = useCursor();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Check initial size
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='z-[11] relative flex     flex-col items-center py-[50px] justify-start '>
        <h2 className={`text-3xl ${Rancher} text-center  text-black md:text-7xl pb-3`}>Our team of friends</h2>
        <p className={` text-md text-center md:text-xl text-black ${SedaN} `} >Each And Every One Is A Preasure To Work With</p>
      <div 
        className='w-[100%] relative px-6 lg:pl-0  py-0 md:py-14 pr-0 lg:pr-14'
        onMouseEnter={() => setCursorText('SCROLL')}
        onMouseLeave={() => setCursorText('')}
      >
        <motion.div
          className={`cursor flex items-center justify-center`}
          variants={{ default: { opacity: 0 }, hover: { opacity: 1 }}}
          animate={cursorText ? 'hover' : 'default'}
        >
          {cursorText && (
            <span className="text-black text-lg z-[1111111] relative italic font-bold">{cursorText}</span>
          )}
        </motion.div>
        <Swiper
          direction={isMobile ? 'horizontal' : 'horizontal'}
          slidesPerView={isMobile ? 1 : 2.5}
          spaceBetween={0}
          mousewheel={true}
          scrollbar={true}
          modules={[Mousewheel, Scrollbar]}
          className="mySwiper TeamS lg:px-[5%] rounded-lg overflow-hidden"
        >
          {TeamInfo.map((item) => (
            <SwiperSlide key={item.id} className='bg-transparent flex flex-col p-8 rounded-lg'>
              <div className='item'>
                <div className='flex h-full transform rotate-1 flex-col items-start gap-6 justify-between'>
                  <div className='relative'>
                    <div style={{
                      background: `${item.backgroundColor}`
                    }} className={`absolute h-[70%] rounded-2xl -z-10 w-full bottom-0 left-0`}></div>
                    <Image
                      src={item.profileImage}
                      height={1500}
                      width={1500}
                      alt={item.profileName}
                      loading="lazy" // Explicitly setting lazy loading
                      sizes="(max-width: 768px) 100vw, 50vw" // Adjust sizes for responsiveness
                    />
                  </div>
                  <div className='flex flex-col text-black text-start'>
                    <h3 className={` ${Rancher} text-md lg:text-xl font-bold `}>{item.profileName}</h3>
                    <h5 className={` text-sm lg:text-md ${SedaN} `}>{item.profileProfession}</h5>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Team;
