import React from 'react';
import { FaSearch } from 'react-icons/fa';
import serviceImg from '/src/assets/images/hero.svg';
import Footers from '/src/component/Footer';
import Navbar from '/src/component/Navbar';

const Services = () => {
  const services = [
    // Card 1
    {
      id: 1,
      title: 'Akun',
      description: 'Cara Buyer Membatalkan Penawaran Tender Kilat',
      image: '/src/assets/icons/akun.png',
    },
    // Card 2
    {
      id: 2,
      title: 'Pemesanan',
      description: 'Cara Terima dan Checkout Tender Kilat',
      image: '/src/assets/icons/pemesanan.png',
    },
    // Card 3
    {
      id: 3,
      title: 'Pembayaran & Perpajakan',
      description: 'Fitur Saldo Refund bagi Pembeli B2B PaDi UMKM',
      image: '/src/assets/icons/pembayaran.png',
    },
  ];
  return (
    <div
      className=" mx-auto bg-white dark:bg-gray-700 "
      id="service"
      style={{ marginTop: '82px' }}>
      <Navbar />
      {/* About Services */}
      <div className="px-16 lg:px:14 py-7 max-w-screen-2xl mx-auto my-8 bg-brandPrimary dark:bg-brandPrimary">
        <div className=" flex flex-col md:flex-row justify-between items-center gap-12 ">
          <div>
            <img src={serviceImg} alt="" />
          </div>
          <div className="md:w-3/5 mx-auto ">
            <h2 className="text-custom-30 text-black font-semibold mb-4 md:w-5/5">
              Selamat datang di Layanan Bantuan{' '}
              <span className="text-white leading-snug"> PaDi UMKM </span>, Ada
              yang bisa kami bantu ?
            </h2>
            <div className="relative w-full max-w-xs ">
              <input
                type="text"
                className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brandPrimary"
                placeholder="Search..."
              />
              <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                <FaSearch className="text-gray-500" />
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Card */}
      <div className="text-center my-8 bg-white dark:bg-gray-700">
        <h2 className="text-custom-30 font-neutralGrey font-semibold mb-2 text-black dark:text-white">
          Pilih Topik Sesuai Kendalamu
        </h2>
      </div>
      {/* Cards Component */}
      <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12  ">
        {services.map((service) => (
          <div
            key={service.id}
            className="
            text-center mx-auto rounded-md shadow-lg cursor-pointer 
            hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 
            transition-all duration-300 border border-grey900 bg-white dark:bg-grey"
            style={{ width: '350px', height: '190px', padding: '8px 4px' }}>
            <div className="bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl flex items-center justify-center">
              <img src={service.image} alt="" className="w-[55px] h-[55px]" />
            </div>

            <h4 className="text-2xl font-bold text-neutralDGrey mb-2 px-2">
              {service.title}
            </h4>
            <p className="text-sm text-neutralDGrey">{service.description}</p>
          </div>
        ))}
      </div>
      <Footers />
    </div>
  );
};

export default Services;
