document.addEventListener('DOMContentLoaded', function() {
    // Function to handle removing a favourite movie
    function removeFromFavourites(id) {
      fetch(`/favourites/${id}`, {
        method: 'DELETE'
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to remove favourite');
        }
        // Reload the page after removing the favourite
        window.location.reload();
      })
      .catch(error => {
        console.error(error);
        alert('An error occurred while removing favourite');
      });
    }
  
    // Get all remove buttons
    const removeButtons = document.querySelectorAll('.remove-button');
  
    // Attach click event listener to each remove button
    removeButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        const id = event.target.dataset.id;
        removeFromFavourites(id);
      });
    });
  });
  