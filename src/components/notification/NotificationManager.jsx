import React, { useContext } from "react";
import { WindowManagerContext } from "../../contexts/WindowManagerContext";
import Notification from "./Notification";

const NotificationManager = () => {
  const { notifications, setNotifications } = useContext(WindowManagerContext);

  const removeNotification = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <>
      {notifications.map((notification) => (
        <Notification
          key={notification.id}
          message={notification.message}
          icon={notification.icon}
          onClose={() => removeNotification(notification.id)}
        />
      ))}
    </>
  );
};

export default NotificationManager;
