import React from "react";
import { MdError, MdOutlineWarning, MdDone } from "react-icons/md";

export default function Messages(props) {
    const [bgColor, setBgColor] = React.useState("");
    const [textColor, setTextColor] = React.useState("");
    const [Icon, setIcon] = React.useState(null);

    React.useEffect(() => {
        switch (props.type) {
            case "error":
                setBgColor("bg-red-500");
                setTextColor("text-white");
                setIcon(() => MdError);
                break;
            case "success":
                setBgColor("bg-green-500");
                setTextColor("text-white");
                setIcon(() => MdDone);
                break;
            case "warning":
                setBgColor("bg-yellow-500");
                setTextColor("text-black");
                setIcon(() => MdOutlineWarning);
                break;
            default:
                setBgColor("bg-blue-500");
                setTextColor("text-white");
                setIcon(null);
                break;
        }

        const timer = setTimeout(() => {
            props.setMessage({});
        }, 5000);

        return () => clearTimeout(timer);
    }, [props.type]);

    return (
        <div className={`flex items-center ${bgColor} ${textColor} text-sm font-bold px-4 py-3 absolute top-3 left-3 `} role="alert">
            {Icon && <Icon className="fill-current w-4 h-4 mr-2" />}
            <p>{props.message}</p>
        </div>
    );
}