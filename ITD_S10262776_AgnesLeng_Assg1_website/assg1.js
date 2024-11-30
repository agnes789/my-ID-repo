function showTab(tabName) {
  const tabs = document.querySelectorAll('.tab-content');
  
  tabs.forEach(tab => {
    tab.classList.remove('active');
  });

  const activeTab = document.getElementById(tabName);
  if (activeTab) {
    activeTab.classList.add('active');
  }
}

window.onload = function() {
  showTab('about-us');
  
  document.getElementById('filter-button').addEventListener('click', function() {
    const selectedCategory = document.getElementById('category-filter').value;
    filterProducts(selectedCategory);
  });

  document.getElementById('category-filter').addEventListener('change', function() {
    const selectedCategory = this.value;
    filterProducts(selectedCategory);
  });

  filterProducts('all');
};

function filterProducts(category) {
  const products = document.querySelectorAll('.product');
  
  products.forEach(product => {
    if (category === 'all') {
      product.classList.remove('hidden'); // Show all
    } else {
      if (product.getAttribute('data-category') === category) {
        product.classList.remove('hidden');
      } else {
        product.classList.add('hidden');
      }
    }
  });
}
