import styles from "../perfil/imps.css";
import { appState, dispatch } from "../../../store/index";
import { navigate } from "../../../store/actions";
import { Screens } from "../../../types/trips";

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
      this.shadowRoot.innerHTML = ``;

      // Create the inputs div
      const inputsDiv = document.createElement("div");
      inputsDiv.id = "inputs";

      const IMGDiv = document.createElement("div");
      IMGDiv.classList.add("dimg");

      // Create the login button
      const createButton = document.createElement("button");
      createButton.classList.add("button");
      createButton.textContent = "editprofile";
      createButton.addEventListener('click', () => {
        createButton.addEventListener("click", this.handleeditButton);
      });

      const create = document.createElement("h2");
      create.textContent = appState.userdata.username;
      create.classList.add("title");

      const ageLabelp = document.createElement('label');
      ageLabelp.textContent = 'Age:';
      ageLabelp.classList.add("labeluno");

      const userage = document.createElement("span");
      userage.textContent = String(appState.userdata.age);
      userage.classList.add("h9");

      const benchpressLabelp = document.createElement('label');
      benchpressLabelp.textContent = 'Bench press:';

      const userbenchpress = document.createElement("span");
      userbenchpress.textContent = `${appState.userdata.benchpress}kg`;
      userbenchpress.classList.add("h1");

      const deadLiftLabelp = document.createElement('label');
      deadLiftLabelp.textContent = 'Deadlift:';

      const userdeadLift = document.createElement("span");
      userdeadLift.textContent = `${appState.userdata.deadLift}kg`;
      userdeadLift.classList.add("h2");

      const squatLabelp = document.createElement('label');
      squatLabelp.textContent = 'Squat:';

      const usersquat = document.createElement("span");
      usersquat.textContent = `${appState.userdata.squat}kg`;
      usersquat.classList.add("h3");

      const perfil = document.createElement("img");
      perfil.src = appState.userdata.profile;
      perfil.classList.add("imgDOS");

      const logoutBtn = document.createElement('button');
      logoutBtn.classList.add('button');
      logoutBtn.textContent = 'logout';
      logoutBtn.setAttribute('aria-label', 'logout');
      logoutBtn.addEventListener('click', this.logout);

      IMGDiv.appendChild(perfil);
      IMGDiv.appendChild(create);
      IMGDiv.appendChild(ageLabelp);
      IMGDiv.appendChild(userage);
      inputsDiv.appendChild(benchpressLabelp);
      inputsDiv.appendChild(userbenchpress);
      inputsDiv.appendChild(deadLiftLabelp);
      inputsDiv.appendChild(userdeadLift);
      inputsDiv.appendChild(squatLabelp);
      inputsDiv.appendChild(usersquat);
      inputsDiv.appendChild(createButton);
      inputsDiv.appendChild(logoutBtn);
      this.shadowRoot.appendChild(IMGDiv);
      this.shadowRoot.appendChild(inputsDiv);
    }

    const cssProfile = this.ownerDocument.createElement("style");
    cssProfile.innerHTML = styles;
    this.shadowRoot?.appendChild(cssProfile);
  }
}

customElements.define("my-perfil", perfil);
export default perfil;