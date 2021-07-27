import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface MenuSubItem {
    title: string;
    url: string;
    id:number;
    icon: IconProp | undefined;
    }

export interface MenuItem {
title: string;
isOpen: boolean | undefined;
url: string | undefined;
icon: IconProp | undefined;
children: MenuSubItem[] | undefined;
}