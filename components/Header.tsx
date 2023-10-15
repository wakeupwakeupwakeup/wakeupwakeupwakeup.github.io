"use client"

import  Image from 'next/image'
import Link from "next/link";
import Button from "@/components/Button";
import React from "react";
import Icon from "@/components/Icon";
import { useState, useEffect } from 'react';
import HamburgerMenu from "@/components/HamburgerMenu/Menu";

export default function Header() {
    const menu = ["About us", "Brands", "Commissions", "News", "Contact us", "Careers"]
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    })


    let mobile = "/logo_m.svg";
    let desktop = "/logo.svg";
    let logo = mobile;
    let logoWidth = 54;
    let logoHeight = 18;
    if (windowWidth >= 640) {
        logo = desktop;
        logoWidth = 296;
        logoHeight = 32;
    }

    return (
        <div className={"flex justify-between items-center xl:mx-36 2xl:px-12 p-2.5 mx-2.5 border-2 border-blue-500 rounded-64 z-40"}>
            <div className={"w-1/3"}>
                <Image className={""} src={logo} alt={"logo"} width={logoWidth} height={logoHeight}/>
            </div>
            <div className={"2xl:flex 2xl:gap-4 hidden"}>
                {
                    menu.map((item, index) => {
                        return (
                            <Link className={"whitespace-nowrap hover:text-blue-400 font-light"} href={"#"} key={index}>
                                {item}
                            </Link>
                        )
                    })
                }
            </div>
            <div className={"flex w-1/3 lg:hidden justify-end items-center"}>
                <div>
                    <Link href={"#"}>
                        <Icon name={"lang_m"} />
                    </Link>
                </div>
                <div>
                    <HamburgerMenu />
                </div>
            </div>
            <div className={"hidden lg:flex gap-3.5 w-1/3 justify-end"}>
                <Button type={"header-button"} text={"EN"} icon={"lang_icon"}/>
                <Button type={"header-button"} text={"LOG IN"}/>
                <Button type={"sign-up-button"} text={"SIGN UP"}/>
            </div>
        </div>
    )
}