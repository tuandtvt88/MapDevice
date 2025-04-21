import React, { useState, useEffect } from "react";
import "./NhaCongVu.css";
import image from "../assets/t1ncvso6.jpg";
import { Wifi, Trash2 } from "lucide-react";

// ✅ Xuất danh sách WiFi để dùng ở các file khác
export const wifiLocations = [
    { name: "AP-NCV-6-T1-Lite", top: "57.51%", left: "50.77%" },
];

export function Tang1NCVso6() {
return (
    <div className="nhacongvu">
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