import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function SelectDate() {
  return (
    <div className="">
      <Menu as="div" className="relative z-10">
        <Menu.Button>
          <button className="svg-hover w-[84px] h-[36px] flex items-center justify-center border solid border-[#d8d8d8] opacity-60 hover:opacity-100 hover:bg-[#ebf5ff] text-sm font-semibold text-[#5F7183] tracking-wider transition duration-500	ease-in-out rounded-sm ml-2.5">
            Week
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 rotate-90 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#e2e2e2"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
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
          <Menu.Items className="absolute right-0 w-[160px]  origin-top-right bg-white divide-y divide-gray-100 rounded-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="flex items-start px-[10px] py-[10px] flex-col">
              <Menu.Item>
                <button className="text-[#738190] py-1.5 hover:text-[#0085FF] hover:bg-[#ebf5ff] w-full text-left px-[10px] rounded-md font-normal	text-[13px]">
                  Day
                </button>
              </Menu.Item>
              <Menu.Item>
                <button className="text-[#738190] py-1.5 hover:text-[#0085FF] hover:bg-[#ebf5ff] w-full text-left px-[10px] rounded-md font-normal	text-[13px]">
                  Week
                </button>
              </Menu.Item>
              <Menu.Item>
                <button className="text-[#738190] py-1.5 hover:text-[#0085FF] hover:bg-[#ebf5ff] w-full text-left px-[10px] rounded-md font-normal	text-[13px]">
                  Month
                </button>
              </Menu.Item>
              <Menu.Item>
                <button className="text-[#738190] py-1.5 hover:text-[#0085FF] hover:bg-[#ebf5ff] w-full text-left px-[10px] rounded-md font-normal	text-[13px]">
                  Custome
                </button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
