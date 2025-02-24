import React, { useEffect, useContext } from "react";
import { FaCog } from "react-icons/fa";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./Notification.css";

const Notification = ({ message, onClose, icon: Icon = FaCog }) => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="notification-container">
      <div className={`notification-card ${theme}`}>
        <div className="notification-header">
          <div className="notification-app-icon">
            <Icon />
          </div>
          <div className="notification-content">
            <h4 className="notification-title">Quick Access</h4>
            <p className="notification-message">{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
