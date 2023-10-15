
import React from "react";
import Link from "next/link";
import Icon from "@/components/Icon"

export default function Footer() {
    const socials = ["tw", "fb", "ig", "li", "yt", "tt", "tg", "vk"]
    const menu = ["Terms & Conditions", "Cookies", "Contacts", "Careers", "Brand Guide"]
    return (
        <div className={"bg-purple-950/25 flex flex-col rounded-t-50 p-5 pb-7 border-2 border-b-0 border-blue-500 md:items-center xl:flex-row xl:justify-between xl:pt-9 xl:px-36"}>
            <div className={"flex flex-col gap-4 mb-5 md:flex-row md:items-end xl:gap-2 xl:mb-0"}>
                {
                    menu.map((item, index) => {
                        return (
                            <Link className={"hover:text-blue-400 font-light"} href={"#"} key={index}>
                                {item}
                            </Link>
                        )
                    })
                }
            </div>
            <div className={"flex flex-col items-start xl:items-end gap-2 "}>
                <div className={"font-light"}>Our social media:</div>
                <div className={"flex gap-2"}>
                    {Object.keys(socials).map((key: any) => {
                        const social = socials[key];
                        return (
                            <Link href={"/"} key={key}>
                                <Icon name={social} />
                            </Link>
                        );
                    })}
                </div>

            </div>
        </div>
    )
}