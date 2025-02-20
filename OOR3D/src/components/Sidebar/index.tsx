"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menus } from "@/data/Sidebar/menu";

const Sidebar: React.FC = () => {

    const [active, setActive] = useState("dashboard");

    return (
        <aside className="lg:w-[200px] 3xl:w-[255px] fixed inset-y-0 left-0 z-10">
            <div className="flex items-center pl-4 h-20 3xl:h-24">
                <Link href="/">
                    <Image src="/images/logo.svg" alt="logo" width={50} height={50} />
                </Link>
            </div>
            <nav className="lg:pl-4 lg:pr-8 3xl:pl-4 3xl:pr-20 py-6 space-y-4 3xl:space-y-6 flex flex-col justify-between overflow-y-auto thin-scrollbar scrollbar-hide h-[calc(100vh-80px)] 3xl:h-[calc(100vh-96px)]">
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
        </aside>
    );
};

export default Sidebar;
