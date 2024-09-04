import React from 'react';
import { Carousel } from 'flowbite-react';
import 'flowbite/dist/flowbite.css';
import banner1 from '/src/assets/images/beranda.png';
import banner2 from '/src/assets/images/penjual.png';
import Navbar from '/src/component/Navbar';

const Home = () => {
  // Ambil tema dari localStorage
  const theme = localStorage.getItem('theme') || 'light';

  return (
    <div className={`bg-brandPrimary dark:bg-brandPrimary`} id="/home">
      <Navbar />
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
        <Carousel className="w-full max-auto">
          {/*Slide 1*/}
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div className="container flex justify-end">
              <img src={banner1} alt="" />
            </div>
            {/*Text*/}
            <div>
              <h1 className="text-custom-40 font-semibold mb-8 text-black leading-snug dark:text-white">
                <span className="text-white leading-snug"> PaDi UMKM </span>{' '}
                Hadir Sebagai Solusi Bisnis bagi UMKM, BUMN dan Pemerintah
              </h1>
              <p className="text-black text-base mb-9 dark:text-white">
                Mempertemukan UMKM berkualitas dengan perusahaan BUMN maupun
                Swasta untuk mendapatkan transaksi dengan harga dan kualitas
                terbaik.
              </p>
            </div>
          </div>
          {/*Slide 2*/}
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div className="container flex justify-end">
              <img src={banner2} alt="" />
            </div>
            {/*Text*/}
            <div>
              <h1 className="text-custom-40 font-semibold mb-8 text-black leading-snug dark:text-white">
                Yuk jadi vendor langganan BUMN bersama{' '}
                <span className="text-white leading-snug"> PaDi UMKM </span>
              </h1>
              <p className="text-black text-base mb-9 dark:text-white">
                Bersama kita majukan perekonomian Indonesia
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
