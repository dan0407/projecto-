import CardStyle from './navbar.css';

class Bar extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.mount();
	}

	mount() {
		this.render();

		const btn = this.shadowRoot?.querySelector('#btn-barrita');

		btn?.addEventListener('click', () => {
			console.log('se presiona el botón 1');
			this.dispatchEvent(new CustomEvent('btnBarritaClicked'));
		});
	}

	render() {
		let images = ['pesa.png', 'icons8-chicle--100 1.png', 'icons8-usuario-60.png', 'Ellipse 15.png'];

		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
			<style>
			${CardStyle}
			</style>
                    <section>
                      <nav class="navbar">
                        <div class="navbar-brand">
                          <img src="../../../../imagenes/${images[0]}" alt="Logo" id="logo" />
                        </div>

                        <ul class="navbar-nav">
                          <li class="nav-item">
                            <a href="#"> <img src="../../../../imagenes/${images[1]}" id="navbar-icons" /> HOME </a>
                          </li>
                          <li class="nav-item">
                            <a href="#" id="btn-barrita"> <img src="../../../../imagenes/${images[2]}" id="navbar-icons" /> USERS </a>
                          </li>
                          <li class="nav-item">
                            <a href="#"> <img src="../../../../imagenes/${images[3]}" id="navbar-icons" /> ACCOUNT </a>
                          </li>
                        </ul>
                      </nav>
                    </section>
                `;
		}
	}
}
customElements.define('my-bar', Bar);
export default Bar;
