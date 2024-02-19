document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('search-form');
  
    searchForm.addEventListener('submit', async function(event) {
      event.preventDefault();
  
      const searchTerm = document.getElementById('search-term').value;
  
      try {
        const response = await fetch('/search/results', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ searchTerm })
        });
  
        if (!response.ok) {
          throw new Error('Failed to fetch search results');
        }
  
        const data = await response.json();
        displaySearchResults(data.movies);
      } catch (error) {
        console.error(error);
        alert('An error occurred while fetching search results');
      }
    });
  
    function displaySearchResults(movies) {
      const searchResultsContainer = document.getElementById('search-results');
      searchResultsContainer.innerHTML = '';
  
      movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
  
        const titleElement = document.createElement('h2');
        titleElement.textContent = movie.Title;
        movieElement.appendChild(titleElement);
  
        const yearElement = document.createElement('p');
        yearElement.textContent = `Year: ${movie.Year}`;
        movieElement.appendChild(yearElement);
  
        const typeElement = document.createElement('p');
        typeElement.textContent = `Type: ${movie.Type}`;
        movieElement.appendChild(typeElement);
  
        const posterElement = document.createElement('img');
        posterElement.src = movie.Poster;
        posterElement.alt = movie.Title;
        movieElement.appendChild(posterElement);
  
        const addToFavouritesForm = document.createElement('form');
        addToFavouritesForm.setAttribute('action', '/favourites');
        addToFavouritesForm.setAttribute('method', 'POST');
  
        const hiddenTitleInput = document.createElement('input');
        hiddenTitleInput.setAttribute('type', 'hidden');
        hiddenTitleInput.setAttribute('name', 'title');
        hiddenTitleInput.setAttribute('value', movie.Title);
        addToFavouritesForm.appendChild(hiddenTitleInput);
  
        const hiddenYearInput = document.createElement('input');
        hiddenYearInput.setAttribute('type', 'hidden');
        hiddenYearInput.setAttribute('name', 'year');
        hiddenYearInput.setAttribute('value', movie.Year);
        addToFavouritesForm.appendChild(hiddenYearInput);
  
        const hiddenTypeInput = document.createElement('input');
        hiddenTypeInput.setAttribute('type', 'hidden');
        hiddenTypeInput.setAttribute('name', 'type');
        hiddenTypeInput.setAttribute('value', movie.Type);
        addToFavouritesForm.appendChild(hiddenTypeInput);
  
        const hiddenPosterInput = document.createElement('input');
        hiddenPosterInput.setAttribute('type', 'hidden');
        hiddenPosterInput.setAttribute('name', 'poster');
        hiddenPosterInput.setAttribute('value', movie.Poster);
        addToFavouritesForm.appendChild(hiddenPosterInput);
  
        const addToFavouritesButton = document.createElement('button');
        addToFavouritesButton.setAttribute('type', 'submit');
        addToFavouritesButton.textContent = 'Add to Favourites';
        addToFavouritesForm.appendChild(addToFavouritesButton);
  
        movieElement.appendChild(addToFavouritesForm);
  
        searchResultsContainer.appendChild(movieElement);
      });
    }
  });
  