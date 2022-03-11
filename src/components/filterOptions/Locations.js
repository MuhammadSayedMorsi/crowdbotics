import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function Locations() {
  return (
    <Menu as="div" className="relative">
      <Menu.Button className="svg-hover w-auto h-[36px] flex items-center justify-center border solid border-[#d8d8d8] opacity-60 hover:opacity-100 hover:bg-[#ebf5ff] text-sm font-semibold text-[#5F7183] tracking-wider transition duration-500	ease-in-out rounded-sm px-2.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        Location
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 rotate-90 ml-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#e2e2e2"
          strokeWidth={3}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute w-[160px]  origin-top-right bg-white divide-y divide-gray-100 rounded-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="flex items-start px-[10px] py-[10px] flex-col">
            <Menu.Item>
              <button className="text-[#738190] py-1.5  w-full text-left px-[10px] rounded-md font-semibold text-[13px]">
                LOCATIONS
              </button>
            </Menu.Item>
            <Menu.Item>
              <input
                placeholder="search..."
                className="h-[36px] border solid border-[#f2f5f7] px-[12px] w-full outline-none rounded-sm mb-2.5 mt-1"
              />
            </Menu.Item>

            <Menu.Item>
              <button className="text-[#738190] py-1.5 hover:text-[#0085FF] hover:bg-[#ebf5ff] w-full text-left px-[10px] rounded-md font-semibold	text-[13px] flex items-center">
                <label className="mr-2">
                  <input type="checkbox" id="chkProdTomove" checked />
                  <span class="check-box-effect"></span>
                </label>
                muhammad
              </button>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
