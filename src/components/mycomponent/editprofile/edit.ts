import styles from "./edits.css";
import {
  actualizarDatosUsuario,
  actualizarDatosUsuarioConImagen,
} from "../../../utils/firebase";

export class edit extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = ` `;

      // Create the general div
      const general = document.createElement("div");
      general.id = "general";

      // Create the inputs div
      const inputsDiv = document.createElement("div");
      inputsDiv.id = "inputs";

      const imglable = document.createElement("label");
      imglable.textContent = "imagen";

      const imgInput = document.createElement("input");
      imgInput.type = "file";
      imgInput.id = "file";

      const ageLabeldos = document.createElement("label");
      ageLabeldos.textContent = "age";

      const ageInputdos = document.createElement("input");
      ageInputdos.type = "number";
      ageInputdos.id = "age";

      const BenchpressLabel = document.createElement("label");
      BenchpressLabel.textContent = "Bench press";

      const BenchpressInput = document.createElement("input");
      BenchpressInput.type = "number";
      BenchpressInput.id = "Bench press";

      const DeadLiftLabel = document.createElement("label");
      DeadLiftLabel.textContent = "DeadLift";

      const DeadLiftInput = document.createElement("input");
      DeadLiftInput.type = "number";
      DeadLiftInput.id = "DeadLift";

      const SquatLabel = document.createElement("label");
      SquatLabel.textContent = "Squat";

      const SquatInput = document.createElement("input");
      SquatInput.type = "number";
      SquatInput.id = "Squat";

      // Create the login button
      const SAVE = document.createElement("button");
      SAVE.classList.add("button");
      SAVE.textContent = "SAVE";
      SAVE.addEventListener("click", () => {
        console.log(imgInput.files);
        if (imgInput.files) {
          if (imgInput.files?.length === 0) {
            actualizarDatosUsuario(
              parseInt(BenchpressInput.value),
              parseInt(DeadLiftInput.value),
              parseInt(SquatInput.value),
              parseInt(ageInputdos.value)
            );
          } else {
            actualizarDatosUsuarioConImagen(
              imgInput.files[0],
              parseInt(BenchpressInput.value),
              parseInt(DeadLiftInput.value),
              parseInt(SquatInput.value),
              parseInt(ageInputdos.value)
            );
          }
        }
      });
      this.shadowRoot?.appendChild(SAVE);

      // Add the general div to the document body
      document.body.appendChild(general);
      this.shadowRoot.appendChild(general);

      inputsDiv.appendChild(imglable);
      inputsDiv.appendChild(imgInput);
      inputsDiv.appendChild(ageLabeldos);
      inputsDiv.appendChild(ageInputdos);
      inputsDiv.appendChild(BenchpressLabel);
      inputsDiv.appendChild(BenchpressInput);
      inputsDiv.appendChild(DeadLiftLabel);
      inputsDiv.appendChild(DeadLiftInput);
      inputsDiv.appendChild(SquatLabel);
      inputsDiv.appendChild(SquatInput);
      inputsDiv.appendChild(SAVE);
      general.appendChild(inputsDiv);
    }

    const cssProfile = this.ownerDocument.createElement("style");
    cssProfile.innerHTML = styles;
    this.shadowRoot?.appendChild(cssProfile);
  }
}

customElements.define("my-edit", edit);
