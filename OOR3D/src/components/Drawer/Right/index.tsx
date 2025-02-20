import React from "react";
import Image from "next/image";
import { GoPlus } from "react-icons/go";
import { FaBell } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import CountUp from "react-countup";
import { IoClose } from "react-icons/io5";



interface DrawerRightProps {
    isOpen: boolean;
    onClose: () => void;
}

const DrawerRight: React.FC<DrawerRightProps> = ({ isOpen, onClose }) => {

    const stats = [
        { value: 234, label: "TOTAL REMIXES" },
        { value: 1342, label: "TOTAL DOWNLOADS" },
        { value: 3494, label: "TOTAL PROJECTS" },
    ];

    return (
        <div
            className={`fixed inset-0 z-20 bg-black bg-opacity-50 transition-opacity ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
        >
            <div
                className={`fixed inset-y-0 right-0 bg-dashboard-gradient w-[300px] shadow-lg z-30 transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-64"
                    }`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center relative px-3 pt-4">
                    <span
                        className="fixed left-[-13px] top-[80px] w-6 h-6 rounded-full rotate-180 bg-blue text-white flex justify-center items-center"
                        onClick={onClose}
                    >
                        <IoClose className="text-white" />
                    </span>
                    <div className="relative p-[2px] rounded-full">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FFC90080] via-[#B496B10D] to-[#DD00CEB2] p-[2px]" />
                        <div className="relative bg-blue-100 py-1 sm:py-1 px-4 sm:px-4 lg:px-2 xl:px-4 rounded-full flex items-center gap-2 font-normal lg:text-[16px] xl:text-[18px] text-white">
                            <Image src="/images/dollar.svg" alt="dollar" width={36} height={36} className="lg:w-[20px] xl:w-auto" />
                            100,000
                        </div>
                        <div className="absolute -right-3 top-5 cursor-pointer">
                            <Image src="/images/plus.png" alt="plus" width={27} height={26} />
                            <GoPlus className="absolute top-1 left-1 text-white text-[20px]" />
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="relative p-[1px] rounded-full cursor-pointer">
                            {/* Gradient Border */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#11FFFF] to-[#00282D] p-[1px]" />
                            <div className="relative bg-blue-50 p-2 text-white flex items-center justify-center rounded-full">
                                <FaBell className="animate-ring" />
                            </div>
                            <div className="bg-red w-2 h-2 rounded-full absolute right-0 top-0" />
                        </div>
                        <div className="relative p-[1px] rounded-full cursor-pointer">
                            {/* Gradient Border */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#11FFFF] to-[#00282D] p-[1px]" />
                            <div className="relative bg-blue-50 p-2 text-white flex items-center justify-center rounded-full">
                                <IoPersonSharp />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-[6px] px-3 overflow-y-auto scrollbar-hide h-[calc(100vh-80px)] 3xl:h-[calc(100vh-96px)]">
                    <div className="relative flex justify-center">
                        <Image src="/images/person.svg" alt="plus" width={156} height={156} />
                        <Image src="/images/camera.png" alt="plus" width={30} height={130} className="absolute right-[4rem] bottom-2 cursor-pointer" />
                    </div>
                    <div className="flex items-center gap-2 text-white justify-center">
                        <h1 className="font-semibold lg:text-[19px] xl:text-[27px] text-white medium-text">Madelen Sam</h1>
                        <FaRegEdit className="cursor-pointer" />
                    </div>
                    <p className="semibold-text font-normal text-white-100 text-center">@raymadelen</p>
                    <p className="semibold-text font-normal text-white-100 text-center leading-[20px] mt-[6px] pb-3 border-b border-gray-600">
                        Lorem  odor amet, consec tetuer adipi scing elit ctus effi citur cura erdiet ntum senectus odio.
                    </p>
                    <h2 className="text-white font-semibold text-[18px] pt-[10px]">
                        Recent activities
                    </h2>
                    {/* Recent Downloads */}
                    <ul className="mb-3 space-y-3 mt-[10px]">
                        {["Downloaded new mesh 1", "Downloaded new mesh 2", "Downloaded new mesh 3", "Downloaded new mesh 4"].map((item, index) => (
                            <li key={index} className="flex items-center space-x-2 text-sm">
                                {/* Custom Radio Button */}
                                <input
                                    type="radio"
                                    name="downloadedMeshes"
                                    className="appearance-none w-3 h-3 border-2 border-red-500 rounded-full checked:bg-red-500"
                                />
                                <span className="text-white-100">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <p className="text-white font-semibold text-[18px] border-t border-gray-600 pt-3">
                        Statistics
                    </p>
                    {/* Statistics */}
                    <div className="pt-2 space-y-2 text-center">
                        {stats.map((stat, index, array) => (
                            <div key={index} className="relative">
                                <h2 className="text-[26px] font-semibold text-white">
                                    <CountUp start={0} end={stat.value} duration={2.5} separator="," />
                                </h2>
                                <p className="text-xs font-normal medium-text uppercase text-white-150">
                                    {stat.label}
                                </p>

                                {/* Dotted Line after first & second items */}
                                {index < array.length - 1 && (
                                    <div className="w-full border-t border-dotted border-gray-600 mt-3"></div>
                                )}

                                {/* Solid Line after the last item */}
                                {index === array.length - 1 && (
                                    <div className="w-full border-t border-solid border-gray-600 mt-3"></div>
                                )}
                            </div>
                        ))}
                    </div>


                    {/* Discord Section */}
                    <div className="text-center mt-4">
                        <Image src="/images/join.svg" alt="Discord" width={50} height={50} className="mx-auto mb-2" />
                        <h3 className="font-semibold text-[18px] capitalize text-white">Join Us On Discord!</h3>
                        <p className="text-xs text-white-100 font-normal medium-text">
                            Connect with fellow creators, stay in touch with the team, and get the latest updates and news from OOR!
                        </p>
                    </div>
                    <button className="relative group bg-white py-[10px] w-full text-center rounded-full mt-10 text-black font-normal text-[18px] overflow-hidden border-transparent transition-all duration-500 ease-in-out hover:bg-transparent hover:text-white hover:shadow-[0_0_5px_#7293ff,inset_0_0_5px_#7293ff]">
                        <span className="relative z-10">Join Now</span>
                        {/* Liquid Effect */}
                        <div className="absolute top-[-60px] left-0 w-full h-[200px] bg-red shadow-[inset_0_0_50px_rgba(0,0,0,0.7)] z-0 transition-all duration-600 ease-in-out group-hover:top-[-120px]">
                            <div className="absolute w-[200%] h-[330%] top-0 left-0 -translate-x-[25%] -translate-y-[60%] rounded-[40%] bg-[rgba(255,255,255,1)] shadow-[0_0_10px_rgba(26,26,26,0.5),inset_0_0_5px_rgba(26,26,26,0.5)] animate-[animate_7s_linear_infinite]"></div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DrawerRight;
