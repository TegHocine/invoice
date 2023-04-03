import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import { IoContract } from "react-icons/io5";

const Sidebar = () => {
  const { data: sessionData } = useSession();
  const [hidden, setHiddden] = useState(true);
  const [lock, setLock] = useState(true);

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

  const containerLockClass = lock
    ? "w-56 border-r border-stone-700"
    : "w-0 items-center border-0";
  const lockClass = lock
    ? "h-full"
    : "absolute h-[calc(100vh-20vh)] border-r border-y rounded-r-sm border-stone-700 overflow-hidden";
  const hiddenClass = !lock && hidden ? "-translate-x-full" : "translate-x-0";

  return (
    <div
      className={`relative flex h-full   bg-neutral-800 transition duration-300 ease-in-out ${containerLockClass}`}
    >
      {lock ? null : (
        <button
          className="absolute left-0 top-0 flex  items-center rounded-sm p-1 transition duration-300 ease-in-out hover:bg-neutral-800"
          onClick={() => {
            setHiddden((current) => !current);
          }}
        >
          <IoContract />
        </button>
      )}
      <div
        className={`flex w-56 flex-col bg-neutral-800 ${lockClass} ${hiddenClass} transition duration-300 ease-in-out`}
      >
        <div className="group flex h-11 items-center justify-between gap-1.5 px-2 transition duration-150 ease-in-out hover:bg-neutral-900">
          <div className="flex items-center gap-1.5">
            <Image
              src={sessionData?.user.image || ""}
              width={22}
              height={22}
              alt="avatar"
              className="flex items-center justify-center rounded-full bg-neutral-700"
            />
            <span className="truncate text-base font-medium text-neutral-300">
              {sessionData?.user.name || "User Name"}
            </span>
          </div>
          <button
            className="bg flex items-center rounded-sm p-1  opacity-0 transition duration-300 ease-in-out hover:bg-neutral-800 group-hover:opacity-100"
            onClick={sidebarLockToggle}
          >
            <IoContract />
          </button>
        </div>

        <ul>
          <li>links or content</li>
          <li>links or content</li>
          <li>links or content</li>
          <li>links or content</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
