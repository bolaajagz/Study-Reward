import React from "react";
import Link from "next/link";

interface Btnprops {
    link: string,
    btnClass: string,
    children: React.ReactNode,
    onClick?: any 
}


const ButtonDefault =  ({link, btnClass, children, onClick}: Btnprops) => {
    return (
        <button>
            <Link className={`rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44
             ${btnClass === "primary" ? "text-red-500" : "text-green-500"}`}
            href={link}
            onClick={onClick}>
            {children}
            </Link>
        </button>
    )
};

export default ButtonDefault;