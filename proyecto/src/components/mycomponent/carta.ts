export enum Attribute {
	'name' = 'name',
	'image' = 'image',
	'profileImage' = 'profileImage',
	'uid' = 'uid',
}

class Component extends HTMLElement {
	name?: string;
	image?: string;
	profileImage?: string;
	uid?: number;

	constructor() {
		super(); // always call super() first in the ctor.
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<Attribute, null> = {
			name: null,
			image: null,
			profileImage: null,
			uid: null,
		};
		return Object.keys(attrs);
	}
	attributeChangedCallback(propName: Attribute, oldValue: string | undefined, newValue: string | undefined) {
		switch (propName) {
			case Attribute.uid:
				this.uid = newValue ? Number(newValue) : undefined;
				break;

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
			<p>${this.uid} </p>
      </section>
      `;
		}
	}
}

export default Component;
customElements.define('my-component', Component);
