import './components/indexpadre';
import Suggestions, { Attribute } from './components/mycomponent/sidebar/Suggestions';
import Bar from './components/mycomponent/navbar/navbar';
import { workers } from './data/data';
import Component from './components/mycomponent/carta';
import { SuggCSS } from './components/mycomponent/sidebar/Suggestions.css';

class AppContainer extends HTMLElement {
	component: Suggestions[] = [];
	bar: Bar;
	card: Component = new Component();

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

		this.bar = new Bar();

		for (let i = 0; i < 5; i++) {
			const item = workers[i];
			const side = new Suggestions();
			side.setAttribute(Attribute.name, item.name);
			this.component.push(side);
		}
	}

	connectedCallback() {
		this.render();
		const btnMenu = this.shadowRoot?.querySelector('#btn-barrita');
		btnMenu?.addEventListener('click', () => {
			const sidebar = this.shadowRoot?.querySelector('.sidebar');
			sidebar?.classList.add('show');
		});
	}

	render() {
		const section = document.createElement('section');
		section.classList.add('sidebar');
		section.setAttribute('style', SuggCSS);
		this.shadowRoot?.appendChild(section);

		const h2element = document.createElement('h2');
		h2element.textContent = 'Suggestions';
		section.appendChild(h2element);

		if (this.shadowRoot) {
			this.shadowRoot.appendChild(this.bar);
			this.component.forEach((item) => {
				section.appendChild(item);
			});
		}
	}
}

customElements.define('app-container', AppContainer);
