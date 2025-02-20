export interface CardItem {
  id: string;
  img: string;
  item: string;
  image: string;
  title?: string;
  arrow: string;
  btn: string;
}

export const cardData: CardItem[] = [
  {
    id: "1",
    img: "/images/group.png",
    item: "Current Plan",
    image: "/images/trophy.svg",
    title: "Designer",
    arrow: "/images/arrow.png",
    btn: "Upgrade",
  },
  {
    id: "2",
    img: "/images/group.png",
    item: "Saved Projects",
    image: "/images/folder.svg",
    arrow: "/images/arrow.png",
    btn: "Upgrade",
  },
  {
    id: "3",
    img: "/images/group.png",
    item: "Trending Meshed",
    image: "/images/sun.png",
    title: "Popular",
    arrow: "/images/arrow.png",
    btn: "Upgrade",
  },
];

export interface SlickCardItem {
  id: string;
  bgimg: string;
  title: string;
  desp: string;
  image: string;
}

export const slickcardData: SlickCardItem[] = [
  {
    id: "1",
    bgimg: "/images/one.svg",
    title: "New? Start Here!",
    desp: "Learn the basics of how to use OOR3D",
    image: "/images/vector.png",
  },
  {
    id: "2",
    bgimg: "/images/two.svg",
    title: "Edit Your First Mesh",
    desp: "Beginner friendly",
    image: "/images/vector.png",
  },
  {
    id: "3",
    bgimg: "/images/one.svg",
    title: "New? Start Here!",
    desp: "Learn the basics of how to use OOR3D",
    image: "/images/vector.png",
  },
  {
    id: "4",
    bgimg: "/images/two.svg",
    title: "Edit Your First Mesh",
    desp: "Beginner friendly",
    image: "/images/vector.png",
  },
];
