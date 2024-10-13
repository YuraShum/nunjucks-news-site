const articles = new Set([
    {
        id: 1,
        title: 'Перша стаття',
        publishedDate: '10 жовтня 2024',
        author: 'Юрій Шумельчук',
        content: 'Це текст першої статті, що використовує динамічне відображення.',
        comments: [
            { author: 'Олександр', text: 'Дуже цікава стаття!' }
        ]
    },
    {
        id: 2,
        title: 'Друга стаття',
        publishedDate: '12 жовтня 2024',
        author: 'Марія Іванова',
        content: 'Це текст другої статті. Тема: розвиток веб-технологій.',
        comments: [
            { author: 'Катерина', text: 'Дякую за корисну інформацію!' }
        ]
    }
]);

const articlesContainer = document.getElementById('articles-container');

articles.forEach(article => {
    const articleElement = document.createElement('article');
    
    const commentsHtml = `
        <ul class="comments-list" style="display: none;">
            ${article.comments.map(comment => `<li><strong>${comment.author}:</strong> ${comment.text}</li>`).join('')}
        </ul>
    `;

    articleElement.innerHTML = `
        <h2>${article.title}</h2>
        <p><strong>Автор:</strong> ${article.author}</p>
        <p><strong>Дата публікації:</strong> ${article.publishedDate}</p>
        <p>${article.content}</p>
        <button class="toggle-comments-btn">Показати коментарі</button>
        ${commentsHtml}
    `;

    articlesContainer.appendChild(articleElement);

    const toggleCommentsBtn = articleElement.querySelector('.toggle-comments-btn');
    const commentsList = articleElement.querySelector('.comments-list');

    toggleCommentsBtn.addEventListener('click', () => {
        if (commentsList.style.display === 'none') {
            commentsList.style.display = 'block';
            toggleCommentsBtn.textContent = 'Приховати коментарі';
        } else {
            commentsList.style.display = 'none';
            toggleCommentsBtn.textContent = 'Показати коментарі';
        }
    });
});