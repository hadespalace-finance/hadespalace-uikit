import React from "react";
import { MenuEntry as MenuEntryType } from "./types";
interface Props {
    isPushed: boolean;
    links: Array<MenuEntryType>;
}
declare const NavMenu: React.FC<Props>;
export default NavMenu;
