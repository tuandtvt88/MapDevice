import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css"; // Import CSS

export function Sidebar() {
    return (
        <div className="sidebar">
            <h2 className="sidebar-title">DANH MỤC TẦNG</h2>
            <nav className="sidebar-menu">
                <SidebarButton to="/tang1beta" text="Tầng 1 Beta" />
                <SidebarButton to="/tang2beta" text="Tầng 2 Beta" />
                <SidebarButton to="/tang3beta" text="Tầng 3 Beta" />
            </nav>
        </div>
    );
}

function SidebarButton({ to, text }) {
    return (
        <Link to={to} className="sidebar-button">
            {text}
        </Link>
    );
}
