"use client";
import React, { useState } from "react";
import Drawer from "../Drawer/Left";
import DrawerRight from '../Drawer/Right'
import { IoReorderThreeSharp } from "react-icons/io5";
import { Menus } from "@/data/Sidebar/menu";
import { CiSearch } from "react-icons/ci";
import { IoPersonSharp } from "react-icons/io5";

const Header: React.FC = () => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isDrawerOpens, setIsDrawerOpens] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen((prevState) => !prevState);
    };

    const toggleDrawers = () => {
        setIsDrawerOpens((prevState) => !prevState);
    };

    return (
        <header className="flex items-center gap-2">
            <div className="lg:hidden cursor-pointer text-white" onClick={toggleDrawer}>
                <IoReorderThreeSharp />
            </div>
            <div className="group relative rounded-full w-full px-[5px] flex items-center gap-3 bg-blue-50 focus-within:ring-2 focus-within:ring-transparent focus-within:ring-offset-2 focus-within:ring-offset-transparent focus-within:border-none">
                <div className="relative flex w-full items-center gap-3 bg-blue-50 rounded-full py-[12px] px-[17px] transition-all duration-300 group-focus-within:ring-2 group-focus-within:ring-offset-2 group-focus-within:ring-[#FFC90080] group-focus-within:ring-opacity-100">
                    <CiSearch className="text-[24px] text-gray-50" />
                    <input
                        type="text"
                        placeholder="Search anything..."
                        className="font-normal text-white outline-none border-none w-full bg-transparent"
                    />
                </div>
            </div>
            <div className="lg:hidden cursor-pointer text-white" onClick={toggleDrawers}>
                <IoPersonSharp />
            </div>

            <Drawer
                menus={Menus}
                isOpen={isDrawerOpen}
                onClose={toggleDrawer}
            />
            <DrawerRight
                isOpen={isDrawerOpens}
                onClose={toggleDrawers}
            />
        </header>
    );
};

export default Header;
