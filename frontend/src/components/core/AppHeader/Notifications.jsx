import { Bell, Smile } from "lucide-react";

export default function AppHeaderNotifications() {
  return (
    <section className="edw-app-header-notifications">
      <div className="edw-app-header-notifications-group">
        <button className="edw-app-header-notifications-button">
          <Bell size={18} />
        </button>
      </div>
      <div className="edw-app-header-notifications-group">
        <button className="edw-app-header-notifications-button">
          <Smile size={18} />
        </button>
      </div>
    </section>
  );
}
