import { StandardEvents } from '@shopify/events';

/** Keeps the mobile menu's cart quantity in sync with cart changes. */
class MobileCartCount extends HTMLElement {
  connectedCallback() {
    document.addEventListener(StandardEvents.cartLinesUpdate, this.onCartUpdate);
  }

  disconnectedCallback() {
    document.removeEventListener(StandardEvents.cartLinesUpdate, this.onCartUpdate);
  }

  onCartUpdate = (event) => {
    event.promise
      ?.then(({ cart, detail }) => {
        const count = cart?.totalQuantity ?? detail?.itemCount;
        if (count !== undefined) this.textContent = String(count);
      })
      .catch((error) => {
        if (error?.name !== 'AbortError') console.warn('[mobile-cart-count] Event promise rejected:', error);
      });
  };
}

if (!customElements.get('mobile-cart-count')) {
  customElements.define('mobile-cart-count', MobileCartCount);
}
