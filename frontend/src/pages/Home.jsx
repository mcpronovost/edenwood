import { useTranslation } from "@/services/translation";
import { EdwHeading } from "@/components/common";
import imgTestCardMyrrhSpore from "@/assets/img/myrrh-spore.webp";
import imgTestCardFloreePrele from "@/assets/img/floree-prele.webp";
import imgTestCardFarandoleFeufollet from "@/assets/img/farandole-feufollet.webp";
import imgTestCardSylveSlithy from "@/assets/img/sylve-slithy.webp";

export default function Home() {
  const { t } = useTranslation();

  return (
    <section className="edw-page edw-home">
      <EdwHeading title={t("Home")} />
      <section style={{ textAlign: "center" }}>
        <div className="edw-display" style={{ backgroundImage: `url(${imgTestCardMyrrhSpore})` }}>
          <div className="edw-display-overlay">
            <div className="edw-display-content">
              <div className="edw-display-content-image" style={{ backgroundImage: `url(${imgTestCardMyrrhSpore})` }}></div>
              <div className="edw-display-content-info">
                <h3>Spore</h3>
                <p>Myrrh</p>
              </div>
            </div>
          </div>
        </div>
        <div className="edw-display" style={{ backgroundImage: `url(${imgTestCardFloreePrele})` }}>
          <div className="edw-display-overlay">
            <div className="edw-display-content">
              <div className="edw-display-content-image" style={{ backgroundImage: `url(${imgTestCardFloreePrele})` }}></div>
              <div className="edw-display-content-info">
                <h3>Prêle</h3>
                <p>Floree</p>
              </div>
            </div>
          </div>
        </div>
        <div className="edw-display" style={{ backgroundImage: `url(${imgTestCardFarandoleFeufollet})` }}>
          <div className="edw-display-overlay">
            <div className="edw-display-content">
              <div className="edw-display-content-image" style={{ backgroundImage: `url(${imgTestCardFarandoleFeufollet})` }}></div>
              <div className="edw-display-content-info">
                <h3>Feu follet</h3>
                <p>Farandole</p>
              </div>
            </div>
          </div>
        </div>
        <div className="edw-display" style={{ backgroundImage: `url(${imgTestCardSylveSlithy})` }}>
          <div className="edw-display-overlay">
            <div className="edw-display-content">
              <div className="edw-display-content-image" style={{ backgroundImage: `url(${imgTestCardSylveSlithy})` }}></div>
              <div className="edw-display-content-info">
                <h3>Slithy</h3>
                <p>Sylve</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}