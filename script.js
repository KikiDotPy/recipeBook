const book = document.querySelector('.book');
const nextBtn = document.querySelector('.next-page');
const prevBtn = document.querySelector('.prev-page');

let currentPage = 0;

nextBtn.addEventListener('click', () => {
    currentPage++;
    updateBookTransform();
});

prevBtn.addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        updateBookTransform();
    }
});

function updateBookTransform() {
    book.style.transform = `rotateY(${currentPage * -180}deg)`;
}
