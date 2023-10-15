import Button from '@/components/Button'
import Blog from '@/components/Blog'
import ChipAnimation from '@/components/ChipsAnimation/ChipsAnimation'
import Image from "next/image";
import handleClick from '@/components/HamburgerMenu/Menu'

export default function Home() {


  return (
    <div className={ "flex flex-col mx-2.5 my-16 justify-between items-center xl:my-auto xl:flex-row xl:m-36 z-10 relative"}>

        <div className={"flex text-center items-center xl:text-start flex-col gap-4 w-full xl:w-1/2 xl:items-start"}>
            <h1 className={"uppercase text-5xl font-medium 2xl:text-8xl"}>House of <span className={"text-blue-400"}>Gambling</span></h1>
            <span className={"text-xl text-gray-400 xl:text-3xl"}>Raise your ROU with direct advertiser</span>
            <Button type={"regular-button"} text={"Become a partner"}/>
        </div>
        <div className={"xl:w-1/3 flex gap-4 items-center justify-center overflow-hidden relative"}>
            <div className={"absolute left-0 top-0"}>
                <ChipAnimation />
                <ChipAnimation />
                <ChipAnimation />
            </div>
        </div>
        <div className={"flex flex-col xl:max-w-1/3 items-end justify-center"}>
            <div className={"flex flex-col gap-4 items-center mb-32 h-max-1/4 overflow-hidden md:mb-auto"}>
                <h2 className={"uppercase text-3xl"}>Blog</h2>
                <Blog />
            </div>
        </div>

    </div>
  )
}
