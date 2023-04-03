import { type PropsWithChildren } from "react";

const PageLayout = (props: PropsWithChildren) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900">
      {props.children}
    </main>
  );
};

export default PageLayout;
