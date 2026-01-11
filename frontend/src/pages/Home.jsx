import { useTranslation } from "@/services/translation";
import { EdwDisplay, EdwGrid, EdwHeading } from "@/components/common";
import imgTestCardMyrrhSpore from "@/assets/img/myrrh-spore.webp";
import imgTestCardFloreePrele from "@/assets/img/floree-prele.webp";
import imgTestCardFarandoleFeufollet from "@/assets/img/farandole-feufollet.webp";
import imgTestCardSylveSlithy from "@/assets/img/sylve-slithy.webp";

export default function Home() {
  const { t } = useTranslation();

  const displays = [
    { img: imgTestCardMyrrhSpore, name: "Spore", type: "Myrrh" },
    { img: imgTestCardFloreePrele, name: "Prêle", type: "Floree" },
    { img: imgTestCardFarandoleFeufollet, name: "Feu follet", type: "Farandole" },
    { img: imgTestCardSylveSlithy, name: "Slithy", type: "Sylve" },
  ];

  return (
    <section className="edw-page edw-home">
      <EdwHeading title={t("Home")} />
      <EdwGrid>
        <section style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
          {displays.map((d, index) => (
            <EdwDisplay
              key={index}
              img={d.img}
              name={d.name}
              type={d.type}
              blurred
            />
          ))}
        </section>
      </EdwGrid>
    </section>
  );
}