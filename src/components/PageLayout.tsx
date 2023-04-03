import { type PropsWithChildren } from "react";
import Sidebar from "./Sidebar";

const PageLayout = (props: PropsWithChildren) => {
  return (
    <main className=" h-screen min-h-screen bg-neutral-900 font-roboto text-neutral-100">
      <div className="flex h-full w-screen">
        <Sidebar />
        <div className="h-full w-full">{props.children}</div>
      </div>
    </main>
  );
};

export default PageLayout;
