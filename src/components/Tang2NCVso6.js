import "./NhaCongVu.css";
import image from "../assets/t2ncvso6.jpg";
import { Wifi } from "lucide-react";

// ✅ Xuất danh sách WiFi để dùng ở các file khác
export const wifiLocations = [
    { name: "AP-NCV -6-T2-ACP", top: "60.81%", left: "44.04%" },
];

export function Tang2NCVso6() {
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