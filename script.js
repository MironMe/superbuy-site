document.addEventListener('DOMContentLoaded', () => {
  const cartCount = document.getElementById('cart-count');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const newsletterForm = document.querySelector('.newsletter-form');

  let count = 0;

  addToCartButtons.forEach((button) => {
    button.addEventListener('click', () => {
      count += 1;
      if (cartCount) {
        cartCount.textContent = String(count);
      }

      const originalText = button.textContent;
      button.textContent = 'Added';
      button.disabled = true;

      setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
      }, 900);
    });
  });

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const input = newsletterForm.querySelector('input');
      const button = newsletterForm.querySelector('button');

      if (input.value.trim()) {
        button.textContent = 'Subscribed';
        button.disabled = true;
        input.value = '';
      }
    });
  }
});
