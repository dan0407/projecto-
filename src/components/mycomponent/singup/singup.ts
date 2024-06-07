import styles from '../singup/singup.css';
import { dispatch } from "../../../store/index";
import { navigate } from "../../../store/actions";
import { Screens } from "../../../types/trips";
<<<<<<< HEAD
=======
import { createUser } from '../../../utils/firebase';
>>>>>>> ayuda

class singup extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}
<<<<<<< HEAD
	handleCreatButton() {
		dispatch(navigate(Screens.DASHBOARD));

}
=======

>>>>>>> ayuda
handlelogButton() {
	dispatch(navigate(Screens.LOGIN));
}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = ` `;

			// Create the general div
			const general = document.createElement('div');
			general.id = 'general';

			// Create the inputs div
			const inputsDiv = document.createElement('div');
			inputsDiv.id = 'inputs';

			// Create the email label and input
			const emailLabel = document.createElement('label');
			emailLabel.setAttribute('for', 'email');
<<<<<<< HEAD
			emailLabel.textContent = 'Email address or user name';
=======
			emailLabel.textContent = 'Email address ';
>>>>>>> ayuda

			const emailInput = document.createElement('input');
			emailInput.type = 'email';
			emailInput.classList.add('email');

			// Create the password label, input, and button
			const passwordLabel = document.createElement('label');
			passwordLabel.setAttribute('for', 'Password');
			passwordLabel.textContent = 'Password';

			const passwordInput = document.createElement('input');
			passwordInput.type = 'password';
			passwordInput.id = 'password';

			const userLabel = document.createElement('label');
			userLabel.textContent = 'User';

			const userInput = document.createElement('input');
			userInput.type = 'text';
			userInput.id = 'user';

			const ageLabel = document.createElement('label');
			ageLabel.textContent = 'age';

			const ageInput = document.createElement('input');
<<<<<<< HEAD
			ageInput.type = 'text';
=======
			ageInput.type = 'number';
>>>>>>> ayuda
			ageInput.id = 'age';

			const BenchpressLabel = document.createElement('label');
			BenchpressLabel.textContent = 'Bench press';

			const BenchpressInput = document.createElement('input');
<<<<<<< HEAD
			BenchpressInput.type = 'text';
=======
			BenchpressInput.type = 'number';
>>>>>>> ayuda
			BenchpressInput.id = 'Bench press';

			const DeadLiftLabel = document.createElement('label');
			DeadLiftLabel.textContent = 'DeadLift';

			const DeadLiftInput = document.createElement('input');
<<<<<<< HEAD
			DeadLiftInput.type = 'text';
=======
			DeadLiftInput.type = 'number';
>>>>>>> ayuda
			DeadLiftInput.id = 'DeadLift';

			const SquatLabel = document.createElement('label');
			SquatLabel.textContent = 'Squat';

			const SquatInput = document.createElement('input');
<<<<<<< HEAD
			SquatInput.type = 'text';
=======
			SquatInput.type = 'number';
>>>>>>> ayuda
			SquatInput.id = 'Squat';

			// Create the login button
			const createButton = document.createElement('button');
			createButton.classList.add('button');
			createButton.textContent = 'create account';

<<<<<<< HEAD
			// Agregar evento de clic al botón de "crear cuenta"
			createButton.addEventListener("click", this.handleCreatButton, );
				console.log('Se hizo clic en el botón de "crear cuenta"');


=======
>>>>>>> ayuda

			// Add the general div to the document body
			document.body.appendChild(general);
			this.shadowRoot.appendChild(general);
<<<<<<< HEAD

			const create = document.createElement('h4');
			create.classList.add('h4');
			create.textContent = 'Already have an ccount?';

=======
			
			const create = document.createElement('h4');
			create.classList.add('h4');
			create.textContent = 'Already have an ccount?';
			
>>>>>>> ayuda
			const up = document.createElement('h5');
			up.textContent = 'Log in';
			up.classList.add('h5');
			up.addEventListener("click", this.handlelogButton, );
<<<<<<< HEAD
				console.log('Se hizo clic en el elemento h5');
			;

			const titulo = document.createElement('text');
			titulo.textContent = 'Create an account';
			titulo.classList.add('text');

=======
			;
			
			const titulo = document.createElement('text');
			titulo.textContent = 'Create an account';
			titulo.classList.add('text');
			
>>>>>>> ayuda
			inputsDiv.appendChild(titulo);
			inputsDiv.appendChild(create);
			inputsDiv.appendChild(up);
			inputsDiv.appendChild(userLabel);
			inputsDiv.appendChild(userInput);
			inputsDiv.appendChild(ageLabel);
			inputsDiv.appendChild(ageInput);
			inputsDiv.appendChild(BenchpressLabel);
			inputsDiv.appendChild(BenchpressInput);
			inputsDiv.appendChild(DeadLiftLabel);
			inputsDiv.appendChild(DeadLiftInput);
			inputsDiv.appendChild(SquatLabel);
			inputsDiv.appendChild(SquatInput);
			inputsDiv.appendChild(emailLabel);
			inputsDiv.appendChild(emailInput);
			inputsDiv.appendChild(passwordLabel);
			inputsDiv.appendChild(passwordInput);
			inputsDiv.appendChild(createButton);
			general.appendChild(inputsDiv);
<<<<<<< HEAD
=======

			// Agregar evento de clic al botón de "crear cuenta"
			createButton.addEventListener("click", async () => {
				const userId = await createUser(userInput.value, parseInt(ageInput.value), parseInt(BenchpressInput.value), parseInt(DeadLiftInput.value), parseInt(SquatInput.value),  emailInput.value, passwordInput.value )
				alert(`Usuario registrado con id: ${userId}`)
				dispatch(navigate(Screens.DASHBOARD));
			});
>>>>>>> ayuda
		}

		const cssProfile = this.ownerDocument.createElement('style');
		cssProfile.innerHTML = styles;
		this.shadowRoot?.appendChild(cssProfile);
<<<<<<< HEAD
=======


>>>>>>> ayuda
	}
}

customElements.define('my-singup', singup);
<<<<<<< HEAD
export default singup;
=======
export default singup;  
>>>>>>> ayuda
