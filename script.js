// Cart Counter functionality
let cartCount = 0;
const cartCountElement = document.getElementById('cart-count');
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

// Har ek button par event listener lagana
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        cartCountElement.textContent = cartCount;
        
        // Ek simple alert validation ke liye (Optional)
        alert('Item added to your Amazon Cart!');
    });
});

// Back to Top button functionality
const backToTop = document.querySelector('.foot-panel1');
backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
