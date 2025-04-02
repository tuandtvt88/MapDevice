import React from "react";
import "./Tang1Beta.css";
import image from "../assets/T5.jpg";
import { Wifi } from "lucide-react"; // Import icon Wi-Fi

// ✅ Xuất danh sách WiFi để dùng ở các file khác
export const wifiLocations = [
        { name: "AP-Tang-5-503-U6", top: "11%", left: "65%" },
        { name: "AP-Tang-5-505-ACP", top: "11%", left: "88%" },
        { name: "AP-Tang-5-506-U6", top: "33%", left: "88%"},
        { name: "AP-Tang-5-507-U6P", top: "35%", left: "75%"},
        { name: "AP-Tang-5-509-U6", top: "52%", left: "85%" },
        { name: "AP-Tang-5-510-U6", top: "67%", left: "76%" },
        { name: "AP-Tang-5-511-U6", top: "69%", left: "90%" },      
        { name: "AP-Tang-5-512-U6P", top: "89%", left: "91%" },
        { name: "AP-Tang-5-513-U6P", top: "91%", left: "76%" },
        { name: "AP-Tang-5-515-U6", top: "90%", left: "16%" },
        { name: "AP-Tang-5-H3-U6", top: "67%", left: "16%" },
        { name: "AP-Tang-5-H2-U6", top: "49%", left: "16%" },
        { name: "AP-Tang-5-H1-U6", top: "29%", left: "16%" },
];

export function Tang5Beta() {
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
