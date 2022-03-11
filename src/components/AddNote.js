import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function AddNote() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="w-4 h-4 flex items-center" onClick={openModal}>
          <img
            src="/note-add.svg"
            alt="add-icon"
            className="hidden cursor-pointer"
          />
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto "
          onClose={closeModal}
        >
          <div className="min-h-screen text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-[620px] my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="flex items-center p-[20px] pb-0"
                >
                  <svg
                    width="32"
                    height="32"
                    className="mr-4"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <path d="M0 0h32v32H0z" />
                      <path
                        d="M16 1c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15C1 7.716 7.716 1 16 1zm-1 19h3m4 0h3m-10-4h3m4 0h3m-10-4h3m4 0h3M8 20h3m-3-4h3m-3-4h3"
                        stroke="#0085FF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                  <span className="text-[#0085FF] text-lg font-normal mr-2">
                    09 March
                  </span>
                  <span class="text-[#97A2AE]">
                    <strong>·</strong> 2022
                  </span>
                </Dialog.Title>
                <div className="mt-2">
                  <form className="bg-[#f2f5f7] pl-[60px] py-[20px]">
                    <div className="flex items-center">
                      <div className="mr-3 flex items-center">
                        <span className="text-[#738190] text-[11px] font-bold uppercase flex items-center mr-4">
                          Notes
                        </span>
                        <img src="/notes-gray.svg" alt="icon" />
                      </div>

                      <input
                        className="bg-white border solid border-[#D6DADE] outline-none pl-2 w-full mx-[20px] h-[36px] rounded-sm focus:border-[#0085FF]"
                        placeholder="Add a note"
                      />
                    </div>
                  </form>
                </div>

                <button
                  type="button"
                  className="absolute right-4 top-4"
                  onClick={closeModal}
                >
                  <svg
                    width="34"
                    height="34"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <path d="M0 0h34v34H0z" />
                      <path
                        d="M11 23l12-12m0 12L11 11"
                        stroke="#9CA6B0"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                  </svg>
                </button>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
