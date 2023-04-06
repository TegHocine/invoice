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
        className="flex w-full items-center gap-2 truncate rounded-sm px-3 py-1 text-neutral-300 hover:bg-neutral-900"
      >
        <span>{icon ?? null}</span>
        <p className="truncate text-base capitalize">{title}</p>
      </Link>
    </li>
  );
};

export default SidebarNavItem;
