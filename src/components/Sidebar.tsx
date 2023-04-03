import { useSession } from "next-auth/react";
import Image from "next/image";

const Sidebar = () => {
  const { data: sessionData } = useSession();
  console.log({ sessionData });
  return (
    <div className="relative h-full w-56 border border-red-900 bg-neutral-800">
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 border px-3 py-1.5 transition duration-150 ease-in-out hover:bg-neutral-900">
          <Image
            src={sessionData?.user.image || ""}
            width={20}
            height={20}
            alt="avatar"
            className="flex items-center justify-center rounded-full bg-neutral-700"
          />
          <span className="text-sm font-bold text-neutral-300">
            {sessionData?.user.name || "User Name"}
          </span>
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
