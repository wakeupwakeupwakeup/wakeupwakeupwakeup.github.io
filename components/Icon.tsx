import Image from "next/image";

export default function Icon({ name }: { name: any }) {
    let iconPath = `${name}_icon.svg`

    return (
         <Image src={iconPath} width={32} height={32} alt={"icon"} className={"hover:brightness-50 transition-all"}/>

    )
}