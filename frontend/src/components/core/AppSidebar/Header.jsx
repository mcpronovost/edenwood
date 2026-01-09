import { useRef } from "react";
import { Stone } from "lucide-react";
import { useStore } from "@/services/store";
import { EdwLink, EdwDropdown } from "@/components/common";

export default function Header() {
  const { currentUser } = useStore();

  const dropdownRef = useRef(null);

  return (
    <header className="edw-app-sidebar-header">
      <EdwDropdown
        ref={dropdownRef}
        toggle={
          <EdwLink routeName="home" className="edw-app-sidebar-header-button">
            <span className="edw-app-sidebar-header-button-logo">
              <Stone size={18} color="var(--edw-c-primary-fg)" />
            </span>
            <span className="edw-app-sidebar-header-button-brand">Edenwood</span>
          </EdwLink>
        }
        direction="full"
        disabled={!currentUser}
      />
    </header>
  );
}
