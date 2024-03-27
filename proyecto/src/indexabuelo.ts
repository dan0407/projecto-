import './components/indexpadre';
import Suggestions, { Attribute } from './components/mycomponent/sidebar/Suggestions';
import Bar from './components/mycomponent/navbar/navbar';
import { workers } from './data/data';
import Component from './components/mycomponent/carta';
import styles from './indexabuelo.css';

class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		const navBar = this.ownerDocument.createElement('my-bar') as Bar;
		this.shadowRoot?.appendChild(navBar);
	}
}

customElements.define('app-container', AppContainer);
