import React from 'react';
import Footers from '/src/component/Footer';
import aboutImg from '/src/assets/images/penjual.png';
import aboutImg2 from '/src/assets/images/about.png';
import Navbar from '/src/component/Navbar';

const About = () => {
  return (
    <div
      id="about"
      style={{ marginTop: '82px' }}
      className="bg-white dark:bg-gray-700">
      <Navbar />
      <div className="px-16 lg:px-14 py-7 max-w-screen-2xl mx-auto my-8 bg-brandPrimary dark:bg-gray-700">
        <div className="flex flex-col  md:flex-row justify-between items-center gap-12 ">
          <div className="md:w-3/5 mx-auto ">
            <h2 className="text-custom-40 text-white font-bold mb-8 md:w-5/5">
              Tentang Kami
            </h2>
            <span className="text-custom-18 text-white mb-11 mt-11">
              Mengenal PaDi UMKM yang hadir sebagai MarketPlace B2B terpercaya
              di Indonesia yang merupakan solusi bisnis bagi UMKM, BUMN,
              Perusahaan Swasta dan Pemerintah
            </span>
          </div>

          <div>
            <img src={aboutImg} alt="" />
          </div>
        </div>
      </div>
      {/* About Text */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8 bg-white dark:bg-gray-700">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <img
              src={aboutImg2}
              alt="Visi Image"
              className="w-[370px] h-[370px]"
            />
          </div>
          {/* VISI */}
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neutralDGrey dark:text-white font-semibold mb-4 md:w-4/5">
              Visi Kami
            </h2>
            <p className="md:w-3/4 text-sm text-neutralGrey dark:text-white mb-8 nowrap text-custom-17">
              Menjadi ekosistem digital unggulan UMKM di seluruh Indonesia
            </p>
            {/* MISI */}
            <h2 className="text-4xl text-neutralDGrey dark:text-white font-semibold mb-4 md:w-4/5">
              Misi Kami
            </h2>
            <p className="md:w-3/4 text-sm text-neutralGrey dark:text-white mb-3 nowrap text-custom-17">
              1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
            <p className="md:w-3/4 text-sm text-neutralGrey dark:text-white mb-3 nowrap text-custom-17">
              2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
            <p className="md:w-3/4 text-sm text-neutralGrey dark:text-white mb-3 nowrap text-custom-17">
              3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
          </div>
        </div>
      </div>

      <Footers />
    </div>
  );
};

export default About;
