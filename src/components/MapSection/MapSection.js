import React from "react";

const MapSection = ({ fullWidth = false, className = "" }) => {
  return (
    <div className={`map-section ${className}`}>
      <div className={fullWidth ? "" : "auto-container"}>
        <div className="map-container">
          <iframe
            className="map-iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230899.1642407818!2d145.06327708904033!3d-37.792102974783376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65cd0db468a97%3A0xb61fde84306fc38a!2sMelbourne%20Zoo!5e0!3m2!1sen!2s!4v1592307685926!5m2!1sen!2s"
            style={{ border: 0 }}
            aria-hidden={false}
            tabIndex={0}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default MapSection;
