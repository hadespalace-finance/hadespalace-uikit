import React from "react";
import { MenuEntry as MenuEntryType } from "./types";
interface Props {
    isPushed: boolean;
    links: Array<MenuEntryType>;
}
declare const HeaderMenu: React.FC<Props>;
export default HeaderMenu;
