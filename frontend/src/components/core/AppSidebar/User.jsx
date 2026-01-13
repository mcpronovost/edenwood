import { useAuth } from "@/services/auth";
import { useStore } from "@/services/store";
import { EdwBanner } from "@/components/common";

export default function User() {
  const { currentUser } = useAuth();
  const { storeAppSidebarOpen } = useStore();

  if (!currentUser) {
    return null;
  }

  return (
    <section className="edw-app-sidebar-user">
      <EdwBanner
        avatarSrc={currentUser.avatar}
        avatarBorderSize={4}
        avatarBorderColor="var(--edw-app-sidebar-bg)"
        avatarSize={storeAppSidebarOpen ? 96 : 32}
        avatarTop={storeAppSidebarOpen ? 24 : 12}
        coverSrc={currentUser.cover}
        coverHeight={storeAppSidebarOpen ? 72 : 32}
        coverRadius="0"
        height={storeAppSidebarOpen ? 132 : 64}
      />
      <section className={`edw-app-sidebar-user-identity ${storeAppSidebarOpen ? '' : 'hidden'}`}>
        <div className="edw-app-sidebar-user-identity-name">
            {currentUser.name}
        </div>
        <div className="edw-app-sidebar-user-identity-title">
            Qui ne fait que passer
        </div>
      </section>
    </section>
  );
}
