import { faHome, faBook, faCompass, faLayerGroup, faFeatherPointed, faGear, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Tabs = [
  { id: 1, name: "Home",   path: '/home',    icon: faHome },
  { id: 2, name: "Library",    path: '/library', icon: faBook },
 { id:6, name: "Search", action: "search", icon: faMagnifyingGlass, style: "hidden md:flex" },
  { id: 3, name: "Discovery",  path: '/discovery', icon: faCompass, style: "hidden md:block"  },
  { id: 4, name: "Categories",  path: '/category',  icon: faLayerGroup },
  { id: 5, name: "Authors",  path: '/authors',  icon: faFeatherPointed},
  { id: 7, name: "Settings",  path: '/settings',  icon: faGear }
];

export default Tabs;