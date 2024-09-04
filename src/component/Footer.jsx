import React from 'react';
import { Footer } from 'flowbite-react';
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import logo from '/src/assets/images/logo.png';

const Footers = () => {
  return (
    <Footer
      className="w-full bg-gray-200  dark:bg-gray-500 text-gray-900 dark:text-gray-100"
      container
      style={{ marginTop: '90px' }}>
      <div className="w-full bg-gray-200 dark:bg-gray-500" id="contact">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <a href="">
              <img src={logo} alt="Logo" className="logo" />
            </a>
          </div>
          <div className="flex flex-wrap gap-8 sm:mt-4">
            <div className="flex-1 min-w-[200px]">
              <Footer.Title
                title="Layanan Informasi Pengguna"
                className="text-gray-900 dark:text-white"
              />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-gray-900 dark:text-white">
                  Email : cs@padiumkm.id
                </Footer.Link>
                <Footer.Link href="#" className="text-gray-900 dark:text-white">
                  Whatsapp : +62 812 9000 7820
                </Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div className="flex-1 min-w-[200px]">
              <Footer.Title
                title="Kantor Kami"
                className="text-gray-900 dark:text-white"
              />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-gray-900 dark:text-white">
                  Gedung Telkom Direktorat Business & Technology
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Hacker Task Day 2"
            year={2024}
            className="text-gray-900 dark:text-white"
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="#"
              icon={BsFacebook}
              className="text-gray-900 dark:text-white"
            />
            <Footer.Icon
              href="#"
              icon={BsInstagram}
              className="text-gray-900 dark:text-white"
            />
            <Footer.Icon
              href="#"
              icon={BsTwitter}
              className="text-gray-900 dark:text-white"
            />
            <Footer.Icon
              href="#"
              icon={BsGithub}
              className="text-gray-900 dark:text-white"
            />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default Footers;
