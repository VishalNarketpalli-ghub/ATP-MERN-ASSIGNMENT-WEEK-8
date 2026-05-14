import React from "react";

function Footer() {
    return (
        <footer className="footer">
            © {new Date().getFullYear()} User Management · Built with React
        </footer>
    );
}

export default Footer;
