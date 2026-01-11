import { useTranslation } from "@/services/translation";
import { EdwDisplay, EdwGrid, EdwHeading } from "@/components/common";
import imgTestCardMyrrhSpore from "@/assets/img/myrrh-spore.webp";
import imgTestCardFloreePrele from "@/assets/img/floree-prele.webp";
import imgTestCardFarandoleFeufollet from "@/assets/img/farandole-feufollet.webp";
import imgTestCardFarandolePuck from "@/assets/img/farandole-puck.webp";
import imgTestCardSylveSlithy from "@/assets/img/sylve-slithy.webp";

export default function Discover() {
  const { t } = useTranslation();

  const displays = [
    { img: imgTestCardMyrrhSpore, name: "Spore", type: "Myrrh" },
    { img: imgTestCardFloreePrele, name: "Prêle", type: "Floree" },
    { img: imgTestCardFarandoleFeufollet, name: "Feu follet", type: "Farandole" },
    { img: imgTestCardSylveSlithy, name: "Slithy", type: "Sylve" },
    { img: imgTestCardFarandolePuck, name: "Puck", type: "Farandole" },
  ];

  return (
    <section className="edw-page edw-discover">
      <EdwHeading title={t("Discover")} />
      <EdwGrid>
        <section style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
          {displays.map((d, index) => (
            <EdwDisplay
              key={index}
              img={d.img}
              name={d.name}
              type={d.type}
            />
          ))}
        </section>
      </EdwGrid>
    </section>
  );
}