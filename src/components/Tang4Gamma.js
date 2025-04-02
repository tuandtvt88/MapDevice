import React from "react";
import "./Tang1Beta.css";
import image from "../assets/T4GammaCSD.jpg";
import { Wifi } from "lucide-react"; // Import icon Wi-Fi

// ✅ Xuất danh sách WiFi để dùng ở các file khác
export const wifiLocations = [

];

export function Tang4Gamma() {
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
