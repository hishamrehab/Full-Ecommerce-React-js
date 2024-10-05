
import { Link } from "react-router-dom"
import Logo from "/logo.png"
import { CiSettings } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
export const Header = () => {
    return (
        <header>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={Logo} className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                    </Link>
                    <div className="flex items-center ">
                        <CiSettings className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 " />
                        <FaSearch className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 " />
                        <IoCart className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 " />
                        <RxAvatar className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 " />
                    </div>
                </div>
            </nav>
        </header >
    )
}
