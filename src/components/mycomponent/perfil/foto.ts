import styles from '../singup/singup.css';


class foto extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}


	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = ` `;

            const fotoperfil = document.createElement('section');
            fotoperfil.className = 'section';


        const imagenperfil = document.createElement('img')
        
        imagenperfil.className='img'




			
		}

		const cssProfile = this.ownerDocument.createElement('style');
		cssProfile.innerHTML = styles;
		this.shadowRoot?.appendChild(cssProfile);


	}
}

customElements.define('my-foto', foto);
export default foto;
