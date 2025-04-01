import React from "react";
import "./Tang1Beta.css";
import image from "../assets/T2Gamma.jpg";
import { Wifi } from "lucide-react"; // Import icon Wi-Fi

export function Tang2Gamma() {
    const wifiLocations = [
        { name: "AP-GM-Tang-2-219-U6P", top: "13%", left: "07%" },
        { name: "AP-GM-Tang-2-222-ACP", top: "13%", left: "37%" },
        { name: "AP-GM-Tang-2-223-U6P", top: "13%", left: "75%" },
        { name: "AP-GM-Tang-2-226-U6P", top: "33%", left: "75%" },
        { name: "AP-GM-Tang-2-225-U6P", top: "36%", left: "88%" },
        { name: "AP-GM-Tang-2-201-U6P", top: "50%", left: "82%" },
        { name: "AP-GM-Tang-2-203-U6P", top: "67%", left: "76%" },
        { name: "AP-GM-Tang-2-204-ACP", top: "70%", left: "88%" },
        { name: "AP-GM-Tang-2-205-U6P", top: "90%", left: "87%" },
        { name: "AP-GM-Tang-2-208-ACP", top: "91%", left: "58%" },
        { name: "AP-GM-Tang-2-209-ACP", top: "91%", left: "35%" },
        { name: "AP-GM-Tang-2-214-U6", top: "66%", left: "20%" },
        { name: "AP-GM-Tang-2-213-U6P", top: "69%", left: "7%" },
        { name: "AP-GM-Tang-2-215-U6P", top: "51%", left: "11%" },
        { name: "AP-GM-Tang-2-218-U6P", top: "33%", left: "6%" },
        { name: "AP-GM-Tang-2-217-U6P", top: "36%", left: "20%" },
        
    ];

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
