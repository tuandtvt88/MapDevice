import React from "react";
import "./Tang1Beta.css";
import image from "../assets/T3.jpg";
import { Wifi } from "lucide-react"; // Import icon Wi-Fi

export function Tang3Beta() {
    const wifiLocations = [
        { name: "AP-Tang-3-305-U6P", top: "12%", left: "6%" },
        { name: "AP-Tang-3-306-U6P", top: "13%", left: "22%" },
        { name: "AP-Tang-3-308-U6P", top: "11%", left: "41%" },
        { name: "AP-Tang-3-309-U6P", top: "13%", left: "58%" },
        { name: "AP-Tang-3-311-U6P", top: "14%", left: "76%" },
        { name: "AP-Tang-3-312-U6P", top: "11%", left: "86%" },
        { name: "AP-Tang-3-314-U6P", top: "35%", left: "75%" },
        { name: "AP-Tang-3-313-U6P", top: "33%", left: "88%" },
        { name: "AP-Tang-3-316-U6P", top: "52%", left: "85%" },
        { name: "AP-Tang-3-317-U6P", top: "67%", left: "78%" },
        { name: "AP-Tang-3-320-U6P", top: "90%", left: "80%" },
        { name: "AP-Tang-3-322-U6P", top: "90%", left: "11%" },
        { name: "AP-Tang-3-323-U6P", top: "68%", left: "9%" },
        { name: "AP-Tang-3-324-U6P", top: "70%", left: "22%" },
        { name: "AP-Tang-3-301-U6P", top: "52%", left: "13%" },
        { name: "AP-Tang-3-304-U6P", top: "36%", left: "07%" },
        { name: "AP-Tang-3-303-U6P", top: "33%", left: "20%" },
        
    ];

    return (
        <div className="tang1beta">
            <div className="map-container">
            <img src={image} alt="Tang 3 Beta" className="map-image" />
            {wifiLocations.map((wifi, index) => (
                <div
                    key={index}
                    className="wifi-marker"
                    style={{ top: wifi.top, left: wifi.left }}
                >
                    <Wifi className="wifi-icon" size={28} color="green" />
                    <div className="wifi-name">{wifi.name}</div>
                </div>
            ))}
            </div>
        </div>
    );
}
