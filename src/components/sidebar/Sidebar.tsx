import { Transition } from "@headlessui/react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  AiFillHome,
  AiOutlineClose,
  AiOutlineDoubleLeft,
  AiOutlineDoubleRight,
  AiOutlineMenu,
} from "react-icons/ai";
import SidebarNavItem from "./SidebarNavItem";

const Sidebar = () => {
  const { data: sessionData } = useSession();
  const [hidden, setHiddden] = useState(true);
  const [lock, setLock] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setLock(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sidebarLockToggle = () => {
    setLock((current) => {
      if (current) {
        setHiddden(true);
        return false;
      }
      setHiddden(false);
      return true;
    });
  };

  return (
    <div
      className={`relative flex h-full bg-neutral-800 transition-all duration-300 ease-in-out ${
        lock ? "w-56 border-r border-neutral-700" : "w-0 items-center"
      }`}
    >
      {lock ? null : (
        <button
          className="absolute left-2 top-2 flex  h-7 w-7 items-center justify-center rounded-sm transition-all duration-300 ease-in-out hover:bg-neutral-800"
          onClick={() => {
            setHiddden((current) => !current);
          }}
        >
          <div className="relative flex items-center justify-center">
            <Transition
              show={hidden}
              enter="transform transition duration-[400ms]"
              enterFrom="opacity-0 rotate-[-120deg] scale-50"
              enterTo="opacity-100 rotate-0 scale-100"
              className="absolute"
            >
              <AiOutlineMenu className="h-6 w-6" />
            </Transition>
            <Transition
              show={!hidden}
              enter="transform transition duration-[400ms]"
              enterFrom="opacity-0 rotate-[-120deg] scale-50"
              enterTo="opacity-100 rotate-0 scale-100"
              className="absolute"
            >
              <AiOutlineClose className="h-6 w-6" />
            </Transition>
          </div>
        </button>
      )}
      <div
        className={`flex w-56 flex-col bg-neutral-800 transition-all duration-300 ease-in-out ${
          lock
            ? "h-full"
            : "absolute h-[calc(100vh-20vh)] overflow-hidden rounded-r-sm border-y border-r border-neutral-700"
        } ${!lock && hidden ? "-translate-x-full" : "translate-x-0"}`}
      >
        <div className="group flex h-11 w-full items-center justify-between gap-1.5 px-4 transition-all duration-150 ease-in-out hover:bg-neutral-900">
          <div className="flex items-center gap-1.5 truncate">
            <Image
              src={sessionData?.user.image ?? ""}
              width={22}
              height={22}
              alt="avatar"
              className="flex items-center justify-center rounded-full bg-neutral-700"
            />
            <p className="truncate text-base font-medium text-neutral-300">
              {sessionData?.user.name ?? "User Name"}
            </p>
          </div>
          <button
            className="bg hidden items-center rounded-sm p-1 opacity-0  transition-all duration-300 ease-in-out hover:bg-neutral-800 group-hover:opacity-100 lg:flex"
            onClick={sidebarLockToggle}
          >
            {lock ? <AiOutlineDoubleLeft /> : <AiOutlineDoubleRight />}
          </button>
        </div>

        <ul>
          <SidebarNavItem href="/" title="home" icon={<AiFillHome />} />
          <SidebarNavItem href="/" title="home" icon={<AiFillHome />} />
          <SidebarNavItem href="/" title="home" icon={<AiFillHome />} />
          <SidebarNavItem href="/" title="home" icon={<AiFillHome />} />
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
