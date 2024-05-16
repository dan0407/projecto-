import Suggestions, { Attribute } from '../sidebar/Suggestions';
//import { workers } from '../../../data/data';
import styles from './suggestionsSection.css';

export class sideC extends HTMLElement {
	Component: Suggestions[] = [];

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

		//const filterdworkers = workers.filter((item) => item.id);

		//const shownWorkers = filterdworkers.slice(0, 8);

		// shownWorkers.forEach((user: any) => {
		// 	const mycomponentcard = this.ownerDocument.createElement('my-si') as Suggestions;
		// 	mycomponentcard.setAttribute(Attribute.name, user.name);
		// 	this.Component.push(mycomponentcard);
		// 	console.log(this.Component);
		// });
	}

	connectedCallback() {
		console.log('emtraaaa');

		this.render();
	}

	render() {
		const cssProfile = this.ownerDocument.createElement('style');
		cssProfile.innerHTML = styles;
		this.shadowRoot?.appendChild(cssProfile);

		const suggestionsSection = this.ownerDocument.createElement('section');
		suggestionsSection.className = 'hidden';
		this.shadowRoot?.appendChild(suggestionsSection);

		const titleSuggestions = document.createElement('h2');
		titleSuggestions.textContent = 'Suggestions';
		titleSuggestions.className = 'h2';
		suggestionsSection.appendChild(titleSuggestions);

		this.Component.forEach((component) => {
			suggestionsSection.appendChild(component);
		});
	}
}

customElements.define('my-sidec', sideC);
