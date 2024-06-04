import Suggestions, { Attribute } from '../../components/mycomponent/sidebar/Suggestions';
import Bar from '../../components/mycomponent/navbar/navbar';
import Card, { AttributeCard } from '../../components/mycomponent/carta/carta';
import styles from './dashboard.css';

import '../../components/indexpadre';
import { getPosts, getPostsListener } from '../../utils/firebase';
import { appState, dispatch } from '../../store';
import { getUserDataAction } from '../../store/actions';

export class dashboard extends HTMLElement {
  cards: Card[] = [];
  cardContainer: HTMLElement | null = null;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  async connectedCallback() {
    this.render();
    this.setupPostListener();
  }

  async render() {
    if (appState.userdata.age === 0) {
      const action = await getUserDataAction(String(appState.user));
      dispatch(action);
    }

    const divContainer = this.ownerDocument.createElement('div');
    divContainer.classList.add('container');

    const navBar = this.createNavigationBar();
    this.cardContainer = this.ownerDocument.createElement('div');
    this.cardContainer.classList.add('card-container');

    const sideBarC = this.ownerDocument.createElement('my-sidec');
    this.shadowRoot?.appendChild(sideBarC);

    this.shadowRoot?.appendChild(divContainer);

    const firebaseCardsData: Array<any> = await getPosts();

    // Crear y añadir las tarjetas
    this.createCards(firebaseCardsData);
		this.cards.forEach((card) => {
			if (this.cardContainer) {
				this.cardContainer.appendChild(card);
			}
		});

    // Añadir elementos al contenedor principal
    divContainer.appendChild(navBar);
    divContainer.appendChild(this.cardContainer);

    // Añadir el contenedor principal al shadow root

    // Añadir estilos
    const cssProfile = this.ownerDocument.createElement('style');
    cssProfile.innerHTML = styles;
    this.shadowRoot?.appendChild(cssProfile);
  }

  createNavigationBar(): HTMLElement {
    const navBar = this.ownerDocument.createElement('my-bar') as Bar;
    // Aquí podrías configurar propiedades, añadir eventos, etc.
    return navBar;
  }

  async createCards(data: any) {
    this.cards = []; // Inicializar el array de tarjetas
    this.renderCards(data);
  }

  renderCards(array: any) {
    array.forEach((cardData: any) => {
      const card = this.ownerDocument.createElement('my-card') as Card;
      card.setAttribute(AttributeCard.name, cardData.name);
      card.setAttribute(AttributeCard.profileimage, cardData.profileImage);
      card.setAttribute(AttributeCard.image, cardData.image);
      card.setAttribute(AttributeCard.uid, cardData.postFirebaseId);
      this.cards.push(card);
    });
  }

  setupPostListener() {
    getPostsListener((posts) => {
      if (this.cardContainer) {
        // Limpiar el contenedor de tarjetas antes de actualizarlo
        this.cardContainer.innerHTML = '';

        // Crear y añadir las nuevas tarjetas
        this.createCards(posts);
				this.cards.forEach((card) => {
					if (this.cardContainer) {
						this.cardContainer.appendChild(card);
					}
				});
      }
    });
  }
}

customElements.define('app-dashboard', dashboard);