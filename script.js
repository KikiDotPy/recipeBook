const pages = document.querySelectorAll('.recipe-page');
let currentPage = 0;

document.getElementById('nextPage').addEventListener('click', () => {
    pages[currentPage].classList.add('hidden');
    currentPage = (currentPage + 1) % pages.length;
    pages[currentPage].classList.remove('hidden');
});

document.getElementById('prevPage').addEventListener('click', () => {
    pages[currentPage].classList.add('hidden');
    currentPage = (currentPage - 1 + pages.length) % pages.length;
    pages[currentPage].classList.remove('hidden');
});
