import cx from "classnames";
import Image from "next/image";
interface MenuItemProps {
  title: string;
  icon:
    | "icon-menu-overview"
    | "icon-menu-transactions"
    | "icon-menu-messages"
    | "icon-menu-card"
    | "icon-menu-rewards"
    | "icon-menu-settings"
    | "icon-menu-logout";
  active?: boolean;
  href: string;
}
export default function MenuItem(props: Partial<MenuItemProps>) {
  const { title, icon, active, href } = props;
  const classItem = cx({
    item: true,
    "mb-30": true,
    active: active,
  });
  return (
    <div className={classItem}>
      <div className="me-3">
        <Image
          src={`/icon/${icon}.svg`}
          width={25}
          height={25}
          alt="icon menu"
        />
      </div>
      <p className="item-title m-0">
        <a href={href} className="text-lg text-decoration-none">
          {title}
        </a>
      </p>
    </div>
  );
}
