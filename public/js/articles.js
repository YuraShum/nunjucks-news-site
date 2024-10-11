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
    articleElement.innerHTML = `
        <h2>${article.title}</h2>
        <p><strong>Автор:</strong> ${article.author}</p>
        <p><strong>Дата публікації:</strong> ${article.publishedDate}</p>
        <p>${article.content}</p>
        <h3>Коментарі:</h3>
        <ul>
            ${article.comments.map(comment => `<li><strong>${comment.author}:</strong> ${comment.text}</li>`).join('')}
        </ul>
    `;
    articlesContainer.appendChild(articleElement);
});