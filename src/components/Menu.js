import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function TheMenu() {
  return (
    <div>
      <Menu as="div" className="relative z-10">
        <Menu.Button>
          <div className="flex items-center">
            <div className="flex items-center mr-3">
              <div className="w-[30px] h-[30px] bg-black rounded-full mr-2.5" />
              <div className="flex flex-col items-start">
                <h6 className="text-sm text-white font-medium	">
                  Muhammad Sayed
                </h6>
                <small className="text-xs	font-normal text-white opacity-70">
                  muhammad
                </small>
              </div>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="#fff"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
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
          <Menu.Items className="absolute right-0 w-56  origin-top-right bg-white divide-y divide-gray-100 rounded-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="flex items-start px-[10px] py-[10px] flex-col">
              <Menu.Item>
                <button className="text-[#738190] py-1.5 hover:text-[#0085FF] hover:bg-[#ebf5ff] w-full text-left px-[10px] rounded-md font-normal	text-[13px]">
                  Profile
                </button>
              </Menu.Item>
              <Menu.Item>
                <button className="text-[#738190] py-1.5 hover:text-[#0085FF] hover:bg-[#ebf5ff] w-full text-left px-[10px] rounded-md font-normal	text-[13px]">
                  Unavailability
                </button>
              </Menu.Item>
              <Menu.Item>
                <button className="text-[#738190] py-1.5 hover:text-[#0085FF] hover:bg-[#ebf5ff] w-full text-left px-[10px] rounded-md font-normal	text-[13px]">
                  Account
                </button>
              </Menu.Item>
              <Menu.Item>
                <button className="text-[#738190] py-1.5 hover:text-[#0085FF] hover:bg-[#ebf5ff] w-full text-left px-[10px] rounded-md font-normal	text-[13px]">
                  Unavailability
                </button>
              </Menu.Item>
              <hr className=" border-y-1 solid border-[#eeeeee] w-full my-[8px]" />
              <Menu.Item>
                <button className="text-[#738190] py-1.5 hover:text-[#0085FF] hover:bg-[#ebf5ff] w-full text-left px-[10px] rounded-md font-normal	text-[13px]">
                  Account
                </button>
              </Menu.Item>
              <Menu.Item>
                <button className="text-[#738190] py-1.5 hover:text-[#0085FF] hover:bg-[#ebf5ff] w-full text-left px-[10px] rounded-md font-normal	text-[13px]">
                  Unavailability
                </button>
              </Menu.Item>
              <Menu.Item>
                <button className="text-[#738190] py-1.5 hover:text-[#0085FF] hover:bg-[#ebf5ff] w-full text-left px-[10px] rounded-md font-normal	text-[13px] flex items-center">
                  Products updates
                  <span className="w-6 h-6 bg-[#E06F6B] rounded-full text-[13px] text-white ml-2.5 flex items-center justify-center">
                    46
                  </span>
                </button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
