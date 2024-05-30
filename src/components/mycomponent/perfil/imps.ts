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
      this.shadowRoot.innerHTML = ` `;


      // Create the inputs div
      const inputsDiv = document.createElement("div");
      inputsDiv.id = "inputs";

      const IMGDiv = document.createElement("div");
      IMGDiv.classList.add("dimg");

      const contdiv = document.createElement("div");
      contdiv.classList.add("dimg");

      // Create the login button
      const createButton = document.createElement("button");
      createButton.classList.add("button");
      createButton.textContent = "editprofile";
	  createButton.addEventListener('click', () => {
		createButton.addEventListener("click", this.handleeditButton);
	});

      
      const create = document.createElement("title");
      create.textContent = appState.userdata.username;
      create.classList.add("title");

      const ageLabelp = document.createElement('label');
			ageLabelp.textContent = 'age';
      ageLabelp.classList.add("labeluno");

      const userage = document.createElement("h9");
	  userage.textContent = String(appState.userdata.age);
      userage.classList.add("h9");

      const benchpressLabelp = document.createElement('label');
			benchpressLabelp.textContent = 'benchpress';

      const userbenchpress = document.createElement("h9");
	  userbenchpress.textContent = String(appState.userdata.benchpress);
      userbenchpress.classList.add("h9")

      const deadLiftLabelp = document.createElement('label');
			deadLiftLabelp.textContent = 'deadLift';;

      const userdeadLift = document.createElement("h9");
	  userdeadLift.textContent = String(appState.userdata.deadLift);
      userdeadLift.classList.add("h9");

      const squatLabelp = document.createElement('label');
			squatLabelp.textContent = 'squat';;

	  const usersquat = document.createElement("h9");
      usersquat.textContent = String(appState.userdata.squat);
      usersquat.classList.add("h9");

	  const perfil = document.createElement("img");
      perfil.src = appState.userdata.profile;
      perfil.classList.add("imgDOS");

      const logoutBtn = document.createElement('button');
			logoutBtn.classList.add('button');
			logoutBtn.textContent = 'logout';
			logoutBtn.addEventListener('click', this.logout);
		
    
      
      IMGDiv.appendChild(create);
      IMGDiv.appendChild(ageLabelp);
      IMGDiv.appendChild(userage);
      IMGDiv.appendChild(perfil);
      inputsDiv.appendChild(benchpressLabelp);
      inputsDiv.appendChild(userbenchpress);
      inputsDiv.appendChild(deadLiftLabelp);
      inputsDiv.appendChild(userdeadLift);
      inputsDiv.appendChild(squatLabelp);
      inputsDiv.appendChild(usersquat);
      inputsDiv.appendChild(createButton);
      inputsDiv.appendChild(logoutBtn);
      this.shadowRoot.appendChild(IMGDiv)
      this.shadowRoot.appendChild(inputsDiv)

    }

    const cssProfile = this.ownerDocument.createElement("style");
    cssProfile.innerHTML = styles;
    this.shadowRoot?.appendChild(cssProfile);
  }
}

customElements.define("my-perfil", perfil);
export default perfil;
