import { Link } from "react-router-dom"
import Logo from "/logo.png"
import { CiSettings } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { useEffect, useState } from "react";
export const Header = () => {
    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) || false);

    useEffect(() => {
        localStorage.setItem("darkMode", JSON.stringify(darkMode));
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <header>
            <nav class="bg-white dark:bg-gray-900">
                <div className="border-b border-slate-200 dark:border-b-0 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-3">
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={Logo} className="h-8" alt="CodeBook Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CodeBook</span>
                    </Link>
                    <div className="flex items-center ">
                        <CiSettings onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 " />
                        <FaSearch className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 " />
                        <a href="/cart" class="text-gray-700 dark:text-white mr-5 relative">
                            <IoCart className="cursor-pointer text-lg   text-gray-700 dark:text-white mr-5 " />
                            <span class="text-white text-sm absolute -top-2 left-2.5 bg-rose-500 px-1 rounded-full ">0</span>
                        </a>
                        <RxAvatar className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 " />
                    </div>
                </div>
            </nav>
        </header >
    )
}




