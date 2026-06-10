document.addEventListener('DOMContentLoaded', () => {
  // 1. Toggle Like State (Heart Icons)
  const likeButtons = document.querySelectorAll('.like-btn');
  
  likeButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      btn.classList.toggle('liked');
      
      const isLiked = btn.classList.contains('liked');
      if (isLiked) {
        btn.setAttribute('aria-label', 'Unlike car');
      } else {
        btn.setAttribute('aria-label', 'Like car');
      }
    });
  });

  // 2. Swap Pick-Up and Drop-Off Form Values
  const swapBtn = document.getElementById('swap-booking');
  const pickupLocation = document.getElementById('pickup-location');
  const pickupDate = document.getElementById('pickup-date');
  const pickupTime = document.getElementById('pickup-time');
  
  const dropoffLocation = document.getElementById('dropoff-location');
  const dropoffDate = document.getElementById('dropoff-date');
  const dropoffTime = document.getElementById('dropoff-time');

  if (swapBtn) {
    swapBtn.addEventListener('click', () => {
      // Rotate animation class
      swapBtn.classList.add('rotate-anim');
      setTimeout(() => {
        swapBtn.classList.remove('rotate-anim');
      }, 500);

      // Temporary swap variables
      const tempLoc = pickupLocation.value;
      const tempDate = pickupDate.value;
      const tempTime = pickupTime.value;

      // Swap Location
      pickupLocation.value = dropoffLocation.value;
      dropoffLocation.value = tempLoc;

      // Swap Date
      pickupDate.value = dropoffDate.value;
      dropoffDate.value = tempDate;

      // Swap Time
      pickupTime.value = dropoffTime.value;
      dropoffTime.value = tempTime;
    });
  }

  // 3. Simple Search Focus styling
  const searchInput = document.getElementById('search-input');
  const searchBar = document.querySelector('.search-bar');
  if (searchInput && searchBar) {
    searchInput.addEventListener('focus', () => {
      searchBar.classList.add('focused');
    });
    searchInput.addEventListener('blur', () => {
      searchBar.classList.remove('focused');
    });
  }

  // 4. Show More Cars click handler
  const showMoreBtn = document.getElementById('show-more-cars');
  if (showMoreBtn) {
    showMoreBtn.addEventListener('click', () => {
      showMoreBtn.textContent = 'Loading...';
      showMoreBtn.disabled = true;
      setTimeout(() => {
        showMoreBtn.textContent = 'Show more car';
        showMoreBtn.disabled = false;
        alert('All cars are loaded!');
      }, 800);
    });
  }
});
