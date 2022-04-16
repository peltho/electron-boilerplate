import React from "react";

const Header = () => {
    return (
        <header className="w-full bg-white mh-16 border-b-2 border-gray-200 py-5 px-8 flex flex-row fixed z-10">
            <h1 className="uppercase text-xl font-bold basis-1/2">ACME</h1>
            <div className="text-right basis-1/2"><span className="button ~info @low text-sm px-4 py-2">Click to action</span></div>
        </header>
    )
}

export default Header