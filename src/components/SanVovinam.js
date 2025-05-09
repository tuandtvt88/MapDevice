import React from "react";
import "./Tang1Beta.css";
import image from "../assets/Vovinam.jpg";
import { Wifi } from "lucide-react"; // Import icon Wi-Fi

export const wifiLocations = [
        { name: "AP-VOVINAM-ACP", top: "50%", left: "44%" },
         
    ];

    export function SanVovinam() {
        return (
            <div className="tang1beta">
                <div className="map-container">
                    <img src={image} alt="Tang 1 Beta" className="map-image" />
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
