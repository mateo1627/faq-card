document.querySelectorAll('.article').forEach(article => {
    article.addEventListener('click', function() {
        const answer = this.nextElementSibling; 

        answer.classList.toggle('block');
    });
});
