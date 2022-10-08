import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-white shadow-2xl pt-8 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-4xl font-bold">Company Name</h4>
              <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <hr className="my-6 border-blueGray-300" />
                          <div className="mt-6 lg:mb-0 mb-6">
                <button
                  className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <img src="https://www.facebook.com/images/fb_icon_325x325.png" />
                </button>
                <button
                  className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <img src="data:image/jpeg;base64,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" />
                </button>
                <button
                  className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" />
                </button>
                <button
                  className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <img src="data:image/png;base64,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" />
                </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://www.creative-tim.com/presentation?ref=nr-footer"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://blog.creative-tim.com?ref=nr-footer"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://www.github.com/creativetimofficial?ref=nr-footer"
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://www.creative-tim.com/bootstrap-themes/free?ref=nr-footer"
                      >
                        Free Products
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="www.google.com"
                      >
                        Terms & Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="www.google.com"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="www.google.com"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © {new Date().getFullYear()} Company Name{" "}
                <a
                  href="www.google.com"
                  className="text-blueGray-500 hover:text-blueGray-800"
                >
                  All Rights Are Reserved
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
