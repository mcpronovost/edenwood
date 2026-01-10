import "@/assets/styles/page/_dev-components.scss";

import { useTranslation } from "@/services/translation";
import {
  EdwAlert,
  EdwAvatar,
  EdwButton,
  EdwCard,
  EdwChip,
  EdwFeedback,
  EdwGrid,
  EdwHeading,
} from "@/components/common";
import ComponentApiTable from "./ComponentApiTable";

export default function Components() {
  const { t } = useTranslation();

  return (
    <section className="edw-page edw-components">
      <EdwGrid className="edw-components-list">
        <article id="predefined-colours" className="edw-components-list-item">
          <EdwHeading title={t("Predefined Colours")} ph={0} />
          <div className="edw-components-list-item-example">
            <span style={{ color: "var(--edw-core-fg)" }}>Default text</span>
            <span style={{ color: "var(--edw-c-primary)" }}>Primary</span>
            <span style={{ color: "var(--edw-c-danger)" }}>Danger</span>
            <span style={{ color: "var(--edw-c-success)" }}>Success</span>
            <EdwCard
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "16px",
                width: "100%",
              }}
            >
              <span style={{ color: "var(--edw-card-fg)" }}>Card default text</span>
              <span style={{ color: "var(--edw-c-primary)" }}>Primary</span>
              <span style={{ color: "var(--edw-c-danger)" }}>Danger</span>
              <span style={{ color: "var(--edw-c-success)" }}>Success</span>
            </EdwCard>
          </div>
        </article>

        <article id="alert" className="edw-components-list-item">
          <EdwHeading title={t("Alert")} ph={0} />
          <div className="edw-components-list-item-example column">
            <EdwAlert title="Default Alert" message="Message here" />
            <br />
            <EdwAlert title="Primary Alert" message="Message here" variant="primary" />
            <br />
            <EdwAlert title="Danger Alert" message="Message here" variant="danger" />
            <br />
            <EdwAlert title="Success Alert" message="Message here" variant="success" />
          </div>
          <code className="full">{`<EdwAlert title="Title Here" message="Message here" variant="danger" />`}</code>
          <ComponentApiTable
            items={[
              {
                name: "title",
                description: "Title",
                type: "string",
                defaultValue: "-",
              },
              {
                name: "message",
                description: "Message",
                type: "string",
                defaultValue: "-",
              },
              {
                name: "variant",
                description: "Variant",
                type: "string",
                defaultValue: "default",
                enumValue: ["default", "primary", "danger", "warning", "success"],
              },
              {
                name: "showIcon",
                description: "Show icon",
                type: "boolean",
                defaultValue: "true",
              },
              {
                name: "icon",
                description: "Icon",
                type: "component",
                defaultValue: "-",
              },
              {
                name: "iconSize",
                description: "Icon size",
                type: "number",
                defaultValue: "24",
              },
            ]}
          />
        </article>

        <article id="avatar" className="edw-components-list-item">
          <EdwHeading title={t("Avatar")} ph={0} />
          <div className="edw-components-list-item-example">
            <EdwAvatar /> <EdwAvatar size={24} /> <EdwAvatar name="John Johnson" /> <EdwAvatar abbr="JJ" />{" "}
            <EdwAvatar abbr="JJ" size={32} />{" "}
            <EdwAvatar src="https://testingbot.com/free-online-tools/random-avatar/140" />{" "}
            <EdwAvatar src="https://testingbot.com/free-online-tools/random-avatar/64" name="John Johnson" size={48} />{" "}
            <EdwAvatar src="https://testingbot.com/free-online-tools/random-avatar/32" abbr="JD" size={24} />{" "}
            <EdwAvatar src="https://testingbot.com/free-online-tools/random-avatar/92" name="John Doe" abbr="JD" />{" "}
          </div>
          <code className="full">{`<EdwAvatar name="Name Here" src={url} size={24} />`}</code>
          <ComponentApiTable
            items={[
              {
                name: "name",
                description: "Name to display",
                type: "string",
                defaultValue: '""',
              },
              {
                name: "abbr",
                description: "Abbreviation to display if no src and no icon is provided",
                type: "string",
                defaultValue: '""',
              },
              {
                name: "src",
                description: "Source of the avatar image",
                type: "string",
                defaultValue: "-",
              },
              {
                name: "icon",
                description: "Icon to display if no src is provided",
                type: "component",
                defaultValue: "<User />",
              },
              {
                name: "size",
                description: "Size in pixels",
                type: "number",
                defaultValue: "64",
              },
              {
                name: "bgColor",
                description: "Background colour",
                type: "string",
                defaultValue: "var(--edw-c-primary)",
              },
              {
                name: "fgColor",
                description: "Colour of the text and icon",
                type: "string",
                defaultValue: "var(--edw-c-primary-fg)",
              },
              {
                name: "borderColor",
                description: "Border colour",
                type: "string",
                defaultValue: "var(--edw-card-bg)",
              },
            ]}
          />
        </article>

        <article id="button" className="edw-components-list-item">
          <EdwHeading title={t("Button")} ph={0} />
          <div className="edw-components-list-item-example">
            <div>
              <EdwButton>Default Button</EdwButton> <EdwButton color="primary">Primary Button</EdwButton>{" "}
              <EdwButton color="danger">Danger Button</EdwButton> <EdwButton color="success">Success Button</EdwButton>
            </div>
            <div>
              <EdwButton outline>Default Button</EdwButton>{" "}
              <EdwButton outline color="primary">
                Primary Button
              </EdwButton>{" "}
              <EdwButton outline color="danger">
                Danger Button
              </EdwButton>{" "}
              <EdwButton outline color="success">
                Success Button
              </EdwButton>
            </div>
            <div>
              <EdwButton disabled>Default Button</EdwButton>{" "}
              <EdwButton disabled color="primary">
                Primary Button
              </EdwButton>{" "}
              <EdwButton disabled color="danger">
                Danger Button
              </EdwButton>{" "}
              <EdwButton disabled color="success">
                Success Button
              </EdwButton>
            </div>
          </div>
          <code className="full">{`<EdwButton>Default Button</EdwButton>`}</code>
          <ComponentApiTable
            items={[
              {
                name: "children",
                description: "Button content",
                type: "string",
                defaultValue: "-",
              },
              {
                name: "routeName",
                description: "Route name",
                type: "string",
                defaultValue: "-",
              },
              {
                name: "params",
                description: "Route parameters",
                type: "object",
                defaultValue: "{}",
              },
              {
                name: "action",
                description: "Action to perform",
                type: "function",
                defaultValue: "-",
              },
              {
                name: "disabled",
                description: "Disable button",
                type: "boolean",
                defaultValue: "false",
              },
              {
                name: "color",
                description: "Colour",
                type: "string",
                defaultValue: "default",
                enumValue: ["default", "primary", "danger", "warning", "success", "#(hex)"],
              },
              {
                name: "outline",
                description: "Show button with border and without background",
                type: "boolean",
                defaultValue: "false",
              },
              {
                name: "block",
                description: "Make button full width",
                type: "boolean",
                defaultValue: "false",
              },
            ]}
          />
        </article>

        <article id="chip" className="edw-components-list-item">
          <EdwHeading title={t("Chip")} ph={0} />
          <div className="edw-components-list-item-example column">
            <EdwChip>Default Chip</EdwChip> <EdwChip color="primary">Primary Chip</EdwChip>{" "}
            <EdwChip color="danger">Danger Chip</EdwChip> <EdwChip color="success">Success Chip</EdwChip>
            <br />
            <EdwChip outline>Default Chip</EdwChip>{" "}
            <EdwChip outline color="primary">
              Primary Chip
            </EdwChip>{" "}
            <EdwChip outline color="danger">
              Danger Chip
            </EdwChip>{" "}
            <EdwChip outline color="success">
              Success Chip
            </EdwChip>
          </div>
          <code className="full">{`<EdwChip>Default Chip</EdwChip>`}</code>
          <ComponentApiTable
            items={[
              {
                name: "color",
                description: "Colour",
                type: "string",
                defaultValue: "default",
                enumValue: ["default", "primary", "danger", "warning", "success", "#(hex)"],
              },
              {
                name: "outline",
                description: "Show chip with border and without background",
                type: "boolean",
                defaultValue: "false",
              },
            ]}
          />
        </article>

        <article id="feedback" className="edw-components-list-item">
          <EdwHeading title={t("Feedback")} ph={0} />
          <div
            className="edw-components-list-item-example"
            style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}
          >
            <EdwFeedback title="Default Feedback" message="Message here" />
            <EdwFeedback title="Default Feedback" message="Ghost variant" ghost />
            <EdwFeedback title="Primary Feedback" message="Message here" variant="primary" />
            <EdwFeedback title="Primary Feedback" message="Ghost variant" variant="primary" ghost />
            <EdwFeedback title="Danger Feedback" message="Message here" variant="danger" />
            <EdwFeedback title="Danger Feedback" message="Ghost variant" variant="danger" ghost />
            <EdwFeedback title="Success Feedback" message="Message here" variant="success" />
            <EdwFeedback title="Success Feedback" message="Ghost variant" variant="success" ghost />
          </div>
          <code className="full">
            {`<EdwFeedback title="Title Here" message="Message here" variant="primary" ghost />`}
          </code>
          <ComponentApiTable
            items={[
              {
                name: "title",
                description: "Title",
                type: "string",
                defaultValue: "-",
              },
              {
                name: "message",
                description: "Message",
                type: "string",
                defaultValue: "-",
              },
              {
                name: "variant",
                description: "Variant",
                type: "string",
                defaultValue: "default",
                enumValue: ["default", "primary", "danger", "warning", "success"],
              },
              {
                name: "showIcon",
                description: "Show icon",
                type: "boolean",
                defaultValue: "true",
              },
              {
                name: "icon",
                description: "Icon",
                type: "component",
                defaultValue: "-",
              },
              {
                name: "iconSize",
                description: "Icon size",
                type: "number",
                defaultValue: "64",
              },
              {
                name: "ghost",
                description: "Show feedback with border and without background",
                type: "boolean",
                defaultValue: "false",
              },
            ]}
          />
        </article>

        <article className="edw-components-list-item">
          <EdwHeading title={t("Heading")} ph={0} />
          <code className="full">{`<EdwHeading title={t("Components")} />`}</code>
          <ComponentApiTable
            items={[
              {
                name: "title",
                description: "Title",
                type: "string",
                defaultValue: "-",
              },
              {
                name: "description",
                description: "Description",
                type: "string",
                defaultValue: "-",
              },
              {
                name: "actions",
                description: "Actions",
                type: "component",
                defaultValue: "-",
              },
              {
                name: "ph",
                description: "Horizontal padding",
                type: "number",
                defaultValue: "32",
              },
            ]}
          />
        </article>
      </EdwGrid>
    </section>
  );
}