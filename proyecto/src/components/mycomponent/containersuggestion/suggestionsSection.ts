
import Suggestions, { Attribute } from '../sidebar/Suggestions';
import { workers } from '../../../data/data';


export class sideC extends HTMLElement {
	Component: Suggestions[] = [];

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

		const filterdworkers = workers.filter((item) => item.id);

		const shownWorkers = filterdworkers.slice(0, 8);

		shownWorkers.forEach((user:any) => {
			const mycomponentcard = this.ownerDocument.createElement('my-si') as Suggestions;
			mycomponentcard.setAttribute(Attribute.name, user.name);
			this.Component.push(mycomponentcard);
			console.log(this.Component);
		});

	}

	connectedCallback() {
		this.render();
	}

	render() {
		const suggestionsSection = this.ownerDocument.createElement('section');
		suggestionsSection.className = 'hidden';
		this.shadowRoot?.appendChild(suggestionsSection);
		
		const titleSuggestions = document.createElement('h2');
		titleSuggestions.textContent = 'Suggestions';
		suggestionsSection.appendChild(titleSuggestions);
		
		this.Component.forEach((component) => {
			suggestionsSection.appendChild(component);
		});
	}
	}

	customElements.define('my-sidec', sideC);