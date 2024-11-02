document.addEventListener('DOMContentLoaded', () => {
    const flashcardsData = [
        {
            titulo: "Programação",
            pergunta: "Para que serve o main de uma página HTML?",
            resposta: "Serve para anexar todo conteúdo principal do site."
        },
        {
            titulo: "História",
            pergunta: "Quais foram algumas das principais revoltas que ocorreram durante a Primeira República do Brasil?",
            resposta: "Revolta das vacinas, Revolta de Canudos, Revolução Federalista, Movimento do Contestado."
        },
    ];

    function criarFlashcards() {
        const container = document.querySelector('.flashcards-container');
        flashcardsData.forEach(data => {
            const card = document.createElement('div');
            card.classList.add('flashcard');

            const front = document.createElement('div');
            front.classList.add('front');
            const titulo = document.createElement('h3');
            titulo.textContent = data.titulo;
            const pergunta = document.createElement('p');
            pergunta.textContent = data.pergunta;
            front.appendChild(titulo);
            front.appendChild(pergunta);

            const back = document.createElement('div');
            back.classList.add('back');
            const resposta = document.createElement('p');
            resposta.textContent = data.resposta;
            back.appendChild(resposta);

            card.appendChild(front);
            card.appendChild(back);
            container.appendChild(card);

            card.addEventListener('click', () => {
                card.classList.toggle('flip');
            });
        });
    }

    criarFlashcards();
});
