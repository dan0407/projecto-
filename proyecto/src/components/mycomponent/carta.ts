export enum Attribute {
	'name' = 'name',
	'image' = 'image',
	'profileImage' = 'profileImage',
}

class Component extends HTMLElement {
	name?: string;
	image?: string;
	profileImage?: string;

	constructor() {
		super(); // always call super() first in the ctor.
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<Attribute, null> = {
			name: null,
			image: null,
			profileImage: null,
		};
		return Object.keys(attrs);
	}
	attributeChangedCallback(propName: Attribute, oldValue: string | undefined, newValue: string | undefined) {
		switch (propName) {
			default:
				this[propName] = newValue;
				break;
		}

		this.render();
	}
	connectedCallback() {
		this.render();
	}
	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `<section class="carta">
      <h1>${this.name}</h1>
      <img src=${this.image}/>
      <img src=${this.profileImage}/>
      </section>
      `;
		}
	}
}

export default Component;
customElements.define('my-component', Component);
