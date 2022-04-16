import React from "react";
import { HomeIcon, FireIcon, UserGroupIcon, TrendingUpIcon } from "@heroicons/react/outline"
import MenuItem from "./menuItem";

const Menu = () => {

    return (
        <nav className="mr-10 fixed">
            <ul className="mb-10">
                <MenuItem className="activeMenuItem"><HomeIcon className="h-7 w-7 text-gray-500 inline-block mr-4" />Home</MenuItem>
                <MenuItem><FireIcon className="h-7 w-7 text-gray-500 inline-block mr-4" />Popular</MenuItem>
                <MenuItem><UserGroupIcon className="h-7 w-7 text-gray-500 inline-block mr-4" />Communities</MenuItem>
                <MenuItem><TrendingUpIcon className="h-7 w-7 text-gray-500 inline-block mr-4" />Trending</MenuItem>
            </ul>
            <hr className="bg-gray-300 h-0.5"/>
        </nav>
    )
}

export default Menu