import { faHome, faBook, faCompass, faLayerGroup, faFeatherPointed, faGear, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Tabs = [
  { id: 1, name: "Home",   path: '/home',    icon: faHome },
  { id: 2, name: "Library",    path: '/library', icon: faBook },
  { id: 3, name: "Search", action: "search", icon: faMagnifyingGlass, style: "xl:block flex" },
  { id: 4, name: "Discovery",  path: '/discovery', icon: faCompass,  style: "xl:hidden"  },
  { id: 5, name: "Categories",  path: '/category',  icon: faLayerGroup },
  { id: 6, name: "Authors",  path: '/authors',  icon: faFeatherPointed},
  { id: 7, name: "Settings",  path: '/settings',  icon: faGear }
];

export default Tabs;