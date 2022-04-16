import React, { useState } from "react";

export interface MenuItemProps {
    children: React.ReactNode,
    className?: string
}

const MenuItem: React.FC<MenuItemProps> = ({children, ...props}) => {
    const [hovered, setHovered] = useState(false)
    const toggleHover = () => setHovered(!hovered)

    return (
        <li>
            <div 
                className={hovered ? "activeMenuItem cursor-pointer" : "px-3 py-2 mb-2" + " " + props.className} 
                onMouseEnter={toggleHover}
                onMouseLeave={toggleHover}
            >
                {children}
            </div>
        </li>
    )
}

export default MenuItem