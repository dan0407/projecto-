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

 
  handleeditButton() {
    dispatch(navigate(Screens.EDIT));
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

      
      // Create the login button
      const createButton = document.createElement("button");
      createButton.classList.add("button");
      createButton.textContent = "editprofile";
	  createButton.addEventListener('click', () => {
		createButton.addEventListener("click", this.handleeditButton);	
	});

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
      inputsDiv.appendChild(createButton);
      general.appendChild(inputsDiv);
    }

    const cssProfile = this.ownerDocument.createElement("style");
    cssProfile.innerHTML = styles;
    this.shadowRoot?.appendChild(cssProfile);
  }
}

customElements.define("my-perfil", perfil);
export default perfil;
