import React from 'react';
import ParallaxImage from './ParallaxImage';

const Footer = () => {
  return (
    <div className="relative">
      <div className="relative h-[100dvh]">
        <div className="overlay size-full overflow-hidden">
          <ParallaxImage
            size
            alt="picture"
            src="https://images.unsplash.com/photo-1580657018950-c7f7d6a6d990?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        <div className="absolute bottom-0 z-10 flex h-[100dvh] max-h-[700px] w-5/6 max-w-[500px] translate-y-1/2 flex-col items-center justify-center gap-10 bg-black px-5 text-center text-balance text-white max-sm:left-1/2 max-sm:-translate-x-1/2 sm:right-[3rem]">
          <h1 className="text-3xl font-semibold uppercase">
            Subscribe to our news letter
          </h1>
          <p className="text-xs font-light text-white/70">
            Get the latests updates about our suits. We hope to bring you the
            best products
          </p>
          <input
            type="text"
            className="h-10 w-full rounded-full border pl-5 sm:text-xs"
            placeholder="Enter your email"
          />
          <button>Subscribe</button>
        </div>
      </div>

      <footer className="relative py-8 text-xs text-gray-600 max-lg:top-[300px]">
        <div className="max-w-[600px] max-lg:mx-auto">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 md:grid-cols-4">
            <div>
              <h3 className="mb-3 font-semibold text-gray-800">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#">Help Center</a>
                </li>
                <li>
                  <a href="#">Manage Bookings</a>
                </li>
                <li>
                  <a href="#">Customer Support</a>
                </li>
                <li>
                  <a href="#">Safety Guidelines</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 font-semibold text-gray-800">Explore</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#">Loyalty Program</a>
                </li>
                <li>
                  <a href="#">Special Offers</a>
                </li>
                <li>
                  <a href="#">Travel Inspiration</a>
                </li>
                <li>
                  <a href="#">Business Travel</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 font-semibold text-gray-800">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">Cookie Preferences</a>
                </li>
                <li>
                  <a href="#">Accessibility Statement</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 font-semibold text-gray-800">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Press & Media</a>
                </li>
                <li>
                  <a href="#">Corporate Responsibility</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center text-gray-500">
            © {new Date().getFullYear()} YourCompany. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
