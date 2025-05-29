document.addEventListener("DOMContentLoaded", () => {
 
  const ratingContainers = document.querySelectorAll('.rating-container');

  ratingContainers.forEach(container => {
    const stars = container.querySelectorAll('.star');
    const output = container.querySelector('#output') || document.createElement('p');

    
    if (!container.contains(output)) {
      output.id = "output"; 
      container.appendChild(output);
    }

    let currentRating = 0;

    stars.forEach(star => {
      
      star.addEventListener('mouseover', () => {
        highlightStars(stars, star.dataset.value);
      });

     
      star.addEventListener('mouseout', () => {
        highlightStars(stars, currentRating);
      });

      
      star.addEventListener('click', () => {
        currentRating = star.dataset.value;
        output.textContent = `You rated this event ${currentRating} star${currentRating > 1 ? 's' : ''}`;
        highlightStars(stars, currentRating);
      });
    });

    
    function highlightStars(stars, rating) {
      stars.forEach(star => {
        if (star.dataset.value <= rating) {
          star.style.color = 'gold';
        } else {
          star.style.color = 'gray';
        }
      });
    }

    
    highlightStars(stars, 0);
  });
});


