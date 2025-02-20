import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SidebarMenu } from "@/data/Sidebar/menu";
import { Menus } from "@/data/Sidebar/menu";
import { IoClose } from "react-icons/io5";

interface Props {
    menus: SidebarMenu[];
    isOpen: boolean;
    onClose: () => void;
}

const Drawer: React.FC<Props> = ({ isOpen, onClose }) => {

    const [active, setActive] = useState("dashboard");

    return (
        <div
            className={`fixed inset-0 z-20 bg-black bg-opacity-50 transition-opacity ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
        >
            <div
                className={`fixed inset-y-0 left-0 bg-dashboard-gradient w-[230px] shadow-lg z-30 transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-64"
                    }`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center pl-4 h-20 relative">
                    <Link href="/" className="3xl:hidden">
                        <Image src="/images/logo.svg" alt="logo" width={50} height={50} />
                    </Link>
                    <span
                        className="fixed right-[-12px] top-[66px] w-6 h-6 rounded-full rotate-180 bg-blue text-white flex justify-center items-center"
                        onClick={onClose}
                    >
                        <IoClose className="text-white" />
                    </span>
                </div>
                <nav className="sm:pl-4 pl-4 pr-[4rem] sm:pr-[4rem] py-6 space-y-4 3xl:space-y-6 flex flex-col justify-between overflow-y-auto scrollbar-hide h-[calc(100vh-80px)] 3xl:h-[calc(100vh-96px)]">
                    <div className="space-y-5">
                        {Menus[0].menuItems.slice(0, 5).map((item) => (
                            <Link href={item.link} key={item.id}>
                                <div
                                    className={`flex items-center gap-3 px-4 py-2 rounded-full cursor-pointer mb-2 font-normal ${active === item.id
                                        ? "border-2 border-white text-white shadow-lg bg-blue bold-text"
                                        : "text-white-50 semibold-text"
                                        }`}
                                    onClick={() => setActive(item.id)}
                                >
                                    <Image src={item.icon} alt={item.title} width={20} height={20} />
                                    <span>{item.title}</span>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Lower Menu Items */}
                    <div className="space-y-4">
                        {Menus[0].menuItems.slice(5).map((item) => (
                            <Link href={item.link} key={item.id}>
                                <div
                                    className={`flex items-center gap-3 px-4 py-2 rounded-full cursor-pointer mb-2 font-normal ${active === item.id
                                        ? "border-2 border-white text-white shadow-lg bg-blue bold-text"
                                        : "text-white-50 semibold-text"
                                        }`}
                                    onClick={() => setActive(item.id)}
                                >
                                    <Image src={item.icon} alt={item.title} width={20} height={20} />
                                    <span>{item.title}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Drawer;
