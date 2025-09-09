import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import { Navigate } from "react-router-dom";
import { ACCESS_TOKEN } from "~/constants/localStorage";
import { toastNotification } from "~/utils/helpers";
import { RxHamburgerMenu } from "react-icons/rx";
import { ButtonMenuItem, IconButton, InputField, LinkMenuItem } from "components";
import { CiLogout, CiSearch } from "react-icons/ci";
import { IoMoonOutline } from "react-icons/io5";
import { BsBell } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { LuCircleUserRound } from "react-icons/lu";


function Layout() {
    const token = localStorage.getItem(ACCESS_TOKEN);
    const [accessDenied, setAccessDenied] = useState(false);
    const [open,setOpen] = useState(false)

    useEffect(() => {
        if (!token) {
            toastNotification('Access Denied', 'error');
            setAccessDenied(true);
        }
    }, [token]);

    if (accessDenied) {
        return <Navigate to="/sign-in" replace />;
    }

    function dropDown(open: boolean){
        return !open;
    }

    return (
        <main className="h-screen">
            <div className="flex h-full">
                <div className="border border-yellow-400 w-85 h-full pt-8 pl-5 flex flex-col gap-5">
                    <div className="flex items-center">
                        <img src="../../public/assets/images/icon/logo.svg"></img>
                    </div>
                    
                    <div>
                        <span className="text-xs text-gray-400 font-medium">MENU</span>

                        <div className="flex flex-col mt-5">
                            <LinkMenuItem 
                                icon={<LuCircleUserRound size={23} className="text-gray-500"/>} 
                                label={"Edit Profile"}
                                url="/sign-in"
                            />

                            <LinkMenuItem 
                                icon={<LuCircleUserRound size={23} className="text-gray-500"/>} 
                                label={"Edit Profile"}
                                url="/sign-in"
                            />
                        </div>
                    </div>    
                </div>
                
                <div className="flex flex-col w-full">
                    <div className="border border-gray-200 w-full h-21 bg-white flex flex-row items-center pl-5 justify-between">
                        <div className="flex flex-row items-center gap-5 w-200">
                            <button className="border text-gray-500 border-gray-200 h-11 w-11 rounded-lg flex items-center justify-center">
                                <RxHamburgerMenu size={20} />
                            </button>

                            <InputField
                                name="email"
                                type="text"
                                placeholder="Search or type command..."
                                icon={<CiSearch  size={23} />}
                                className="h-11 w-[420px]"
                                iconClassName="left-3 top-5.5"
                            />
                        </div>
                        
                        <div className="flex gap-3 mr-10">
                            <IconButton 
                                icon={<IoMoonOutline size={20} className="text-gray-700" />}
                            />

                            <IconButton 
                                icon={<BsBell size={20} className="text-gray-700" />}
                            />

                            <div className="flex items-center gap-2">
                                <img src="../../public/assets/images/profile/profile_pic.png" className="w-12 h-12 rounded-full border border-gray-200 object-cover"></img>
                                <span className="text-sm block font-medium">Fermando Minaj</span>
                                <div className="cursor-pointer relative">
                                    {open ? <IoIosArrowUp onClick={() => setOpen(open => !open)} /> : <IoIosArrowDown onClick={() => setOpen(open => !open)} />}
                                    {open && <div className="absolute top-11 right-3 border border-gray-200 w-[260px] rounded-2xl p-3 flex flex-col gap-5">
                                        <div>
                                            <span className="text-sm block font-medium text-gray-700">Fermand Minaj</span>
                                            <span className="text-xs block font-medium text-gray-500 dark:text-gray-400">minajfermando871@gmail.com</span>
                                        </div>

                                        <div className="ml-1">
                                            <LinkMenuItem 
                                                icon={<LuCircleUserRound size={21} className="text-gray-500"/>} 
                                                label={"Edit Profile"}
                                                url="/sign-in"
                                                clearLocalService = {['test']}
                                            />

                                            <ButtonMenuItem 
                                                icon={<CiLogout size={22}/>} 
                                                label={"Log Out"}
                                                onClick={() => {
                                                    localStorage.removeItem(ACCESS_TOKEN);
                                                    window.location.href = "/sign-in";
                                                }}
                                            />
                                        </div>
                                    </div>}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#f9fafb] w-full h-full">
                        <Outlet />
                    </div>
                </div>

            </div>
        </main>
    )
}

export default Layout
