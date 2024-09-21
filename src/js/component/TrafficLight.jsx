import React, { useState } from "react";

export const TrafficLight = () => {
    const [ color, setColor] = useState("red"); 

    const saveTrafficLightColor = ['red', 'yellow', 'green'];

    const clickHandler = (color) => {
        setColor(color);
    }

    return (
        <>
        <div className="line"></div>
        <div className="traffic-signal">
            {saveTrafficLightColor.map((lightColor) => (
                <div key={lightColor} className={`light ${lightColor} ${color === lightColor ? 'active' : ''}`} onClick={() => clickHandler(lightColor)}>
         </div>))}
        </div>
        </>
    )
}

