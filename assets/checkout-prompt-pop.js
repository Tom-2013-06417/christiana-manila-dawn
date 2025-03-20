class CheckoutPromptPop extends HTMLElement {
  constructor() {
    super();
    this.hasAgreed = false;
    this.modal = document.getElementById("checkout-prompt-pop");
    this.closeButton = this.modal.querySelector(".close-button");
    this.proceedButton = document.getElementById("checkout-prompt-proceed");
    this.attachEventListeners();
  }

  attachEventListeners() {
    document.body.addEventListener("click", (event) => {
      if (
        event.target.matches(
          'button[name="checkout"], #CartDrawer-Checkout, #checkout'
        )
      ) {
        this.checkout(event);
      }
    });

    this.closeButton.addEventListener("click", () => this.closeModal());
    this.proceedButton.addEventListener("click", () => this.proceedCheckout());
  }

  checkout(event) {
    event.preventDefault();
    this.openModal();
  }

  openModal() {
    this.modal.style.display = "flex";
  }

  closeModal() {
    this.modal.style.display = "none";
    if (this.hasAgreed) {
      window.location.href = "/checkout";
    }
  }

  proceedCheckout() {
    this.hasAgreed = true;
    this.closeModal();
  }
}

customElements.define("checkout-prompt-pop", CheckoutPromptPop);
