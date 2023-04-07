import { Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useState } from "react";
import { createPortal } from "react-dom";

import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";

type Props = {
  image: string;
  userName: string;
  onClick: () => void;
  isLocked: boolean;
};

const SidebarHeader: React.FC<Props> = ({
  image,
  userName,
  onClick,
  isLocked,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <div className="relative">
        <button
          className="group flex h-11 w-full items-center justify-between gap-1.5 px-4 outline-none transition-all duration-150 ease-in-out hover:bg-neutral-900"
          onClick={openModal}
        >
          <div className="flex items-center gap-1.5 truncate">
            <Image
              src={image ?? ""}
              width={22}
              height={22}
              alt="avatar"
              className="flex items-center justify-center rounded-full bg-neutral-700"
            />
            <p className="cursor-pointer truncate text-base font-medium text-neutral-300">
              {userName ?? ""}
            </p>
          </div>
          <button
            className="hidden items-center rounded-sm p-1 opacity-0  transition-all duration-300 ease-in-out hover:bg-neutral-800 group-hover:opacity-100 lg:flex"
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
          >
            {isLocked ? <AiOutlineDoubleLeft /> : <AiOutlineDoubleRight />}
          </button>
        </button>

        {isOpen
          ? createPortal(
              <button
                className="fixed inset-0 h-screen w-screen bg-black"
                onClick={closeModal}
              ></button>,
              document.body
            )
          : null}

        <Transition
          appear
          show={isOpen}
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="absolute left-4 top-8 w-screen max-w-xs rounded-md bg-neutral-800 shadow-md">
            <div className="gap-1.5S group flex h-11 w-full items-center justify-between px-4 transition-all duration-150 ease-in-out ">
              <div className="flex items-center gap-1.5 truncate">
                <Image
                  src={image ?? ""}
                  width={22}
                  height={22}
                  alt="avatar"
                  className="flex items-center justify-center rounded-full bg-neutral-700"
                />
                <p className="cursor-pointer truncate text-base font-medium text-neutral-100">
                  {userName ?? ""}
                </p>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </>
  );
};

export default SidebarHeader;
