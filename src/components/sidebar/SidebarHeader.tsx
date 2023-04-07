import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useRef, useState } from "react";

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
  const [top, setTop] = useState(0);

  const headerRef = useRef<HTMLDivElement>(null);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);

    const offsetTop = headerRef.current?.parentElement?.offsetTop ?? 0;
    const clientHieght = headerRef.current?.clientHeight ?? 0;
    setTop(offsetTop + clientHieght);
  }
  return (
    <>
      <div
        ref={headerRef}
        tabIndex={0}
        aria-label="button"
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
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                style={{
                  top: top,
                }}
                className={`absolute left-4 z-50 w-screen max-w-xs rounded-md bg-neutral-800 shadow-md`}
              >
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
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default SidebarHeader;
