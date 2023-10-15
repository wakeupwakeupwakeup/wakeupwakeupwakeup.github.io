import Image from "next/image";

export default function Button({ type, attributes, text, onClick, icon }: {
    type: string,
    attributes?: string,
    text: string,
    onClick?: any,
    icon?: string
}) {
    let classes;
    let iconPath;
    if (icon) {
        iconPath = `${icon}.svg`
    }

    switch (type) {
        case "header-button":
            classes = "font-light rounded-40 p-3.5 border-2 border-blue-300"
            break
        case "sign-up-button":
            classes = "font-light rounded-40 p-3.5 bg-blue-500"
            break
        case "regular-button":
            classes = "uppercase rounded-40 bg-blue-500 px-20 py-4"
    }

    return (
        <button
            type={"button"}
            className={`${classes} p-2 flex items-center`}
            onClick={onClick}
        >
            {iconPath && <Image className={"mr-2"} src={iconPath} width={16} height={16} alt={"icon"} />}
            {text}
        </button>
    )
}