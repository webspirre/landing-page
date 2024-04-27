import { ModalType } from "@/types/types";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { VideoPlayer } from "..";
import { ImCancelCircle } from "react-icons/im";

const VideoModal: React.FC<ModalType> = ({ open, toogleModal }) => {
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={toogleModal}
          className="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          Open dialog
        </button>
      </div>

      <Transition appear show={open} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-50" onClose={toogleModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Panel
              className="fixed inset-0 overflow-y-auto flex items-center justify-center"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            >
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="w-full max-w-full md:max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex justify-between items-center p-3 border-b mb-5 w-full">
                    <Dialog.Title
                      as="h3"
                      className="text-xs font-medium leading-6 text-gray-900"
                    >
                      Watch how it works
                    </Dialog.Title>
                    <ImCancelCircle
                      onClick={toogleModal}
                      className="cursor-pointer"
                    />
                  </div>
                  <VideoPlayer />
                </div>
              </Transition.Child>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
};

export default VideoModal;
