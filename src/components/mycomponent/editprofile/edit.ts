import styles from "./edits.css";

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

      const BenchpressLabel = document.createElement("label");
      BenchpressLabel.textContent = "Bench press";

      const BenchpressInput = document.createElement("input");
      BenchpressInput.type = "text";
      BenchpressInput.id = "Bench press";

      const DeadLiftLabel = document.createElement("label");
      DeadLiftLabel.textContent = "DeadLift";

      const DeadLiftInput = document.createElement("input");
      DeadLiftInput.type = "text";
      DeadLiftInput.id = "DeadLift";

      const SquatLabel = document.createElement("label");
      SquatLabel.textContent = "Squat";

      const SquatInput = document.createElement("input");
      SquatInput.type = "text";
      SquatInput.id = "Squat";

      // Create the login button
      const SAVE = document.createElement("button");
      SAVE.classList.add("button");
      SAVE.textContent = "SAVE";
     	SAVE.addEventListener('click', () => {
			});
      this.shadowRoot?.appendChild(SAVE);
    
      

      // Add the general div to the document body
      document.body.appendChild(general);
      this.shadowRoot.appendChild(general);


	//   const perfil = document.createElement("h8");
    //   perfil.textContent = String(appState.userdata.profile);
    //   perfil.classList.add("h8");

      
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

