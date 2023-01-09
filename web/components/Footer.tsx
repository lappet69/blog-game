import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-900">
      <footer className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 lg:gap-8 pt-10 lg:pt-12 mb-16">
          <div className="col-span-full lg:col-span-2">
            <div className="lg:-mt-2 mb-4">
              <a
                className="inline-flex items-center text-gray-100 text-xl md:text-2xl font-bold gap-2"
                href="#"
              >
                <span className="w-5 h-auto text-indigo-500">
                  <svg
                    className="w-5 h-auto text-indigo-500"
                    width="95"
                    height="94"
                    viewBox="0 0 95 94"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M96 0V47L48 94H0V47L48 0H96Z" />
                  </svg>
                </span>
                <span className=""> Chai Builder</span>
              </a>
            </div>
            <p className="text-gray-400 sm:pr-8 mb-6">
              Filler text is dummy text which has no meaning however looks very
              similar to real text.
            </p>
            <div className="flex gap-4">
              <a
                className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
                href="#"
              >
                <span className="w-5 h-5">
                  {/* <div style="font-size:inherit;color:inherit;padding:2px">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 640 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M386.061 228.496c1.834 9.692 3.143 19.384 3.143 31.956C389.204 370.205 315.599 448 204.8 448c-106.084 0-192-85.915-192-192s85.916-192 192-192c51.864 0 95.083 18.859 128.611 50.292l-52.126 50.03c-14.145-13.621-39.028-29.599-76.485-29.599-65.484 0-118.92 54.221-118.92 121.277 0 67.056 53.436 121.277 118.92 121.277 75.961 0 104.513-54.745 108.965-82.773H204.8v-66.009h181.261zm185.406 6.437V179.2h-56.001v55.733h-55.733v56.001h55.733v55.733h56.001v-55.733H627.2v-56.001h-55.733z"></path>
                    </svg>
                  </div> */}
                </span>
              </a>
              <a
                className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
                href="#"
              >
                <span className="w-5 h-5">
                  <svg
                    className="w-5 h-5"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </span>
              </a>
              <a
                className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
                href="#"
              >
                <span className="w-5 h-5">
                  <svg
                    className="w-5 h-5"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </span>
              </a>
              <a
                className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
                href="#"
              >
                {/* <span className="w-5 h-5">
                  <div style="font-size:inherit;color:inherit;padding:2px">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 448 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path>
                    </svg>
                  </div>
                </span> */}
              </a>
            </div>
          </div>
          <div className="">
            <div className="text-gray-100 font-bold tracking-widest uppercase mb-4">
              Products
            </div>
            <nav className="flex flex-col gap-4">
              <div className="">
                <a
                  className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                  href="#"
                >
                  Overview
                </a>
              </div>
              <div className="">
                <a
                  className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                  href="#"
                >
                  Solutions
                </a>
              </div>
              <div className="">
                <a
                  className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                  href="#"
                >
                  Pricing
                </a>
              </div>
              <div className="">
                <a
                  className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                  href="#"
                >
                  Customers
                </a>
              </div>
            </nav>
          </div>
          <div className="">
            <div className="text-gray-100 font-bold tracking-widest uppercase mb-4">
              Company
            </div>
            <nav className="flex flex-col gap-4">
              <div className="">
                <a
                  className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                  href="#"
                >
                  About
                </a>
              </div>
              <div className="">
                <a
                  className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                  href="#"
                >
                  Investor Relations
                </a>
              </div>
              <div className="">
                <a
                  className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                  href="#"
                >
                  Jobs
                </a>
              </div>
              <div className="">
                <a
                  className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                  href="#"
                >
                  Press
                </a>
              </div>
              <div className="">
                <a
                  className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                  href="#"
                >
                  Blog
                </a>
              </div>
            </nav>
          </div>
          <div className="">
            <div className="text-gray-100 font-bold tracking-widest uppercase mb-4">
              Support
            </div>
            <nav className="flex flex-col gap-4">
              <div className="">
                <a
                  className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                  href="#"
                >
                  Contact
                </a>
              </div>
              <div className="">
                <a
                  className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                  href="#"
                >
                  Documentation
                </a>
              </div>
              <div className="">
                <a
                  className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                  href="#"
                >
                  Chat
                </a>
              </div>
              <div className="">
                <a
                  className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                  href="#"
                >
                  FAQ
                </a>
              </div>
            </nav>
          </div>
          <div className="">
            <div className="text-gray-100 font-bold tracking-widest uppercase mb-4">
              Legal
            </div>
            <nav className="flex flex-col gap-4">
              <div className="">
                <a
                  className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                  href="#"
                >
                  Terms of Service
                </a>
              </div>
              <div className="">
                <a
                  className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                  href="#"
                >
                  Privacy Policy
                </a>
              </div>
              <div className="">
                <a
                  className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                  href="#"
                >
                  Cookie settings
                </a>
              </div>
            </nav>
          </div>
        </div>
        <div className="text-gray-400 text-sm text-center border-t border-gray-800 py-8">
          © 2021 - Present Chai Builder. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
