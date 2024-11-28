document.getElementById('category-filter').addEventListener('change', function () {
    const selectedCategory = this.value;
    const products = document.querySelectorAll('.product');
  
    products.forEach(product => {
      product.classList.remove('reveal');
      product.style.opacity = '0';  // Start the fade-out transition
      setTimeout(() => {
        product.style.display = 'none';  // Remove it from the layout
  
        if (selectedCategory === 'all' || product.dataset.category === selectedCategory) {
          product.style.display = 'block';  // Make it visible again
          setTimeout(() => {
            product.style.opacity = '1';  // Trigger fade-in transition
            product.classList.add('reveal');
          }, 50);
        }
      }, 500);  // Wait for transition to complete before removing the element from the layout
    });
  });
  