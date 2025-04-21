import React, { useState, useEffect } from "react";
import "./KTX.css";
import image from "../assets/KTXDomA.jpg";
import { Wifi, Trash2 } from "lucide-react";

// ✅ Xuất danh sách WiFi để dùng ở các file khác
export const wifiLocations = [
    { name: "AP-KTX Dom A-ACP", top: "53.46%", left: "37.33%" },
];

export function KTXDomA() {
return (
    <div className="ktx">
        <div className="map-container-ktx">
            <img src={image} alt="Tang 1 Beta" className="map-image-ktx" />
            {wifiLocations.map((wifi, index) => (
                <div
                    key={index}
                    className="wifi-marker-ktx"
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