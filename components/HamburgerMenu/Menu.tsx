import Icon from "@/components/Icon";
import Link from "next/link";
import React from "react";
import styles from './Menu.module.css'
import {hidden} from "next/dist/lib/picocolors";
import { useState, useEffect } from 'react';
import Image from "next/image";

export default function HamburgerMenu() {
    const menu = ["About us", "Brands", "Commissions", "News", "Contact us", "Careers"]
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => setIsOpen(!isOpen);

    return (
        <div className={"flex justify-center items-center"}>
            <div className={""}>
                <Image src={isOpen? "close_icon.svg" : "menu_icon.svg"} alt={"Menu Icon"} onClick={handleClick} width={40} height={28}/>
            </div>
            <div className={isOpen? "flex flex-col gap-1.5 absolute bg-black px-1.5 top-24 -right-0 w-screen h-screen z-40" : "hidden"}>
                {
                    menu.map((item, index) => {
                        return (
                            <Link href={"#"} key={index} className={"border-2 border-blue-500 rounded-40 py-2 px-5"}>
                                {item}
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

