const pages = document.querySelectorAll('.page'); 
const prevButton = document.getElementById('prevPage');
const nextButton = document.getElementById('nextPage');

let currentPageIndex = 0; 

function updatePageVisibility() {
  pages.forEach((page, index) => {
    page.style.display = index === currentPageIndex ? 'block' : 'none';
  });
}

prevButton.addEventListener('click', () => {
  if (currentPageIndex === 0) {
    currentPageIndex = pages.length - 1; 
  } else {
    currentPageIndex--;
  }
  updatePageVisibility();
});

nextButton.addEventListener('click', () => {
  if (currentPageIndex === pages.length - 1) {
    currentPageIndex = 0; 
  } else {
    currentPageIndex++;
  }
  updatePageVisibility();
});

updatePageVisibility();