import { useStore } from "@/services/store";
import { EdwBanner } from "@/components/common";

export default function User() {
  const { currentUser } = useStore();

  if (!currentUser) {
    return null;
  }

  return (
    <section className="edw-app-sidebar-user">
      <EdwBanner
        avatarSrc={currentUser.avatar}
        avatarBorderSize={4}
        avatarBorderColor="var(--edw-app-sidebar-bg)"
      />
    </section>
  );
}
