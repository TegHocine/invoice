import Link from "next/link";

type Props = {
  icon: React.ReactNode;
  title: string;
  href: string;
};

const SidebarNavItem: React.FC<Props> = ({ icon, title, href }) => {
  return (
    <li className="w-full px-1">
      <Link
        href={href}
        className="flex  w-full items-center gap-2 rounded-sm px-3 py-1 text-neutral-300 hover:bg-neutral-900"
      >
        {icon ?? null}
        <p className="flex h-full items-center truncate align-middle text-base capitalize">
          {title}
        </p>
      </Link>
    </li>
  );
};

export default SidebarNavItem;
