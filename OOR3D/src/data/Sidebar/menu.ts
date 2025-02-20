export interface MenuItem {
  id: string;
  title: string;
  link: string;
  icon: string;
}

export interface SidebarMenu {
  menuItems: MenuItem[];
}

export const Menus: SidebarMenu[] = [
  {
    menuItems: [
      {
        id: "dashboard",
        title: "Dashboard",
        link: "/",
        icon: "/images/dashboard.svg",
      },
      {
        id: "Emporium",
        title: "Emporium",
        link: "/",
        icon: "/images/global.svg",
      },
      {
        id: "Library",
        title: "Library",
        link: "/",
        icon: "/images/library.svg",
      },
      {
        id: "Studio +",
        title: "Studio +",
        link: "/",
        icon: "/images/studio.svg",
      },
      {
        id: "Ocoins",
        title: "Ocoins",
        link: "/",
        icon: "/images/ocoins.svg",
      },
      {
        id: "Help",
        title: "Help",
        link: "/",
        icon: "/images/help.svg",
      },
      {
        id: "Setting",
        title: "Setting",
        link: "/",
        icon: "/images/setting.svg",
      },
      {
        id: "Logout",
        title: "Logout",
        link: "/",
        icon: "/images/logout.svg",
      },
    ],
  },
];