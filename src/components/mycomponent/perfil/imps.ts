import styles from "../perfil/imps.css";
import { appState, dispatch } from "../../../store/index";
import { navigate } from "../../../store/actions";
import { Screens } from "../../../types/trips";
import { getData } from "../../../utils/firebase";

class perfil extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  handleCreatButton() {
    dispatch(navigate(Screens.DASHBOARD));
  }

  handlelogButton() {
    dispatch(navigate(Screens.LOGIN));
  }

  logout() {
    indexedDB.deleteDatabase("firebase-heartbeat-database");
    indexedDB.deleteDatabase("firebaseLocalStorageDb");
    window.location.reload();
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
      const createButton = document.createElement("button");
      createButton.classList.add("button");
      createButton.textContent = "";

      const logoutBtn = document.createElement("button");
      logoutBtn.classList.add("button");
      logoutBtn.textContent = "logout";
      logoutBtn.addEventListener("click", this.logout);
      this.shadowRoot?.appendChild(logoutBtn);

      // Add the general div to the document body
      document.body.appendChild(general);
      this.shadowRoot.appendChild(general);

      const create = document.createElement("h8");
      create.textContent = appState.userdata.username;
      create.classList.add("h8");
      
      const userage = document.createElement("h9");
	  userage.textContent = String(appState.userdata.age);
      userage.classList.add("h9");

      const userbenchpress = document.createElement("h9");
	  userbenchpress.textContent = String(appState.userdata.benchpress);
      userbenchpress.classList.add("h9");

      const userdeadLift = document.createElement("h9");
	  userdeadLift.textContent = String(appState.userdata.deadLift);
      userdeadLift.classList.add("h9");

	  const usersquat = document.createElement("h8");
      usersquat.textContent = String(appState.userdata.squat);
      usersquat.classList.add("h8");

	//   const perfil = document.createElement("h8");
    //   perfil.textContent = String(appState.userdata.profile);
    //   perfil.classList.add("h8");

      inputsDiv.appendChild(create);
      inputsDiv.appendChild(userage);
      inputsDiv.appendChild(userbenchpress);
      inputsDiv.appendChild(userdeadLift);
      inputsDiv.appendChild(usersquat);
      inputsDiv.appendChild(BenchpressLabel);
      inputsDiv.appendChild(BenchpressInput);
      inputsDiv.appendChild(DeadLiftLabel);
      inputsDiv.appendChild(DeadLiftInput);
      inputsDiv.appendChild(SquatLabel);
      inputsDiv.appendChild(SquatInput);
      inputsDiv.appendChild(createButton);
      inputsDiv.appendChild(logoutBtn);
      general.appendChild(inputsDiv);
    }

    const cssProfile = this.ownerDocument.createElement("style");
    cssProfile.innerHTML = styles;
    this.shadowRoot?.appendChild(cssProfile);
  }
}

customElements.define("my-perfil", perfil);
export default perfil;
