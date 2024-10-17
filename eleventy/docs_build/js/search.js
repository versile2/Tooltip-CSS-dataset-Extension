// Search functionality
let searchIndex = [];

// Function to load the search index
async function loadSearchIndex() {
  try {
    const response = await fetch('/search-index.json');
    searchIndex = await response.json();
  } catch (error) {
    console.error('Error loading search index:', error);
  }
}

// Function to perform the search
function performSearch(query) {
  const results = searchIndex.filter(item => {
    const titleMatch = item.title.toLowerCase().includes(query.toLowerCase());
    const contentMatch = item.content.toLowerCase().includes(query.toLowerCase());
    const codeMatch = item.code && item.code.toLowerCase().includes(query.toLowerCase());
    const installationMatch = item.installation && typeof item.installation === 'string' && item.installation.toLowerCase().includes(query.toLowerCase());
    return titleMatch || contentMatch || codeMatch || installationMatch;
  });
  displayResults(results);
}

// Function to display search results
function displayResults(results) {
  const resultsContainer = document.getElementById('search-results');
  resultsContainer.innerHTML = '';

  if (results.length === 0) {
    resultsContainer.innerHTML = '<p>No results found.</p>';
    return;
  }

  const categories = {
    'Introduction': [],
    'Getting Started': [],
    'How-to': [],
    'Other': []
  };

  results.forEach(result => {
    if (result.title.includes('Introduction')) {
      categories['Introduction'].push(result);
    } else if (result.title.includes('Get Started')) {
      categories['Getting Started'].push(result);
    } else if (result.title.includes('How To')) {
      categories['How-to'].push(result);
    } else {
      categories['Other'].push(result);
    }
  });

  for (const [category, categoryResults] of Object.entries(categories)) {
    if (categoryResults.length > 0) {
      const categoryHeader = document.createElement('h3');
      categoryHeader.textContent = category;
      resultsContainer.appendChild(categoryHeader);

      const ul = document.createElement('ul');
      categoryResults.forEach(result => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = result.url;
        a.textContent = result.title;
        li.appendChild(a);
        ul.appendChild(li);
      });
      resultsContainer.appendChild(ul);
    }
  }
}

// Event listener for search input
document.addEventListener('DOMContentLoaded', () => {
  loadSearchIndex();

  const searchInput = document.querySelector('#hero-input-group input');
  const searchButton = document.querySelector('#hero-input-group .button');

  searchInput.addEventListener('input', (e) => {
    if (e.target.value.length > 2) {
      performSearch(e.target.value);
    } else {
      document.getElementById('search-results').innerHTML = '';
    }
  });

  searchButton.addEventListener('click', () => {
    performSearch(searchInput.value);
  });
});
