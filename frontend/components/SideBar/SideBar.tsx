import { GroupLinkMenuItem, LinkMenuItem } from "components";
import type { SideBarProps } from "./SideBarProps";



export function SideBar({ sideBarItems }: SideBarProps) {
    return (
        <div className="flex flex-col h-full gap-5 pt-8 pl-5 pr-5 border border-gray-200 w-85">
            <div className="flex items-center">
                <img src="../../public/assets/images/icon/logo.svg"></img>
            </div>

            <div>
                <span className="text-xs font-medium text-gray-400">MENU</span>

                <div className="flex flex-col gap-3 mt-5">
                    {sideBarItems.map((item, key) =>
                        item.childrens ? (
                            <GroupLinkMenuItem
                                icon={item.icon}
                                label={item.label}
                                childrens={item.childrens}
                                key={key}
                            />
                        ) : (
                            <LinkMenuItem
                                icon={item.icon}
                                label={item.label}
                                url={item.url}
                                onClick={item.onClick}
                                key={key}

                            />
                        )
                    )}
                </div>
            </div>
        </div>
    );
}
