import React from "react";
import "./Tang1Beta.css";
import image from "../assets/T1.png";
import { Wifi } from "lucide-react"; // Import icon Wi-Fi

export const wifiLocations = [
        { name: "LAB AI-ARUBA", top: "10%", left: "7%" },
        { name: "AP-BT-Phong AI-U6", top: "17%", left: "15%" },
        { name: "AP-BT-IT-ACP", top: "17%", left: "37%" },
        { name: "AP-BT-Phong hop-ACP", top: "15%", left: "62%" },
        { name: "AP-BT-Sales-U6P", top: "15%", left: "75%" },
        { name: "AP-BT-CTSV-U6", top: "13%", left: "88%" },
        { name: "AP-BT-SanTruong-01-U6", top: "28%", left: "55%" },
        { name: "AP-BT-SanTruong-03-ACP", top: "50%", left: "67%" },
        { name: "AP-BT-FU-U6P", top: "86%", left: "80%" },
        { name: "AP-BT-SanTruong-02-U6P", top: "78%", left: "40%" },
        { name: "AP-BT-Thu vien-01-ACP", top: "83%", left: "14%" },
        { name: "AP-BT-Server-ACP", top: "97%", left: "14%" },
        { name: "AP-BT-Thu vien-02-ACP", top: "53%", left: "14%" },
        { name: "AP-BT-Thu vien-03-ACP", top: "33%", left: "14%" },
        
    ];

    export function Tang1Beta() {
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
