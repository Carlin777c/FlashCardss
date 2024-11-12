document.addEventListener('DOMContentLoaded', () => {
    const flashcardsData = [
        ["Geografia", "O que é o neoliberalismo?", "É uma corrente econômica que defende a liberdade de mercado, a desregulamentação e a redução do papel do Estado na economia."],
        ["Geografia", "O que é o desemprego estrutural?", "Refere-se a mudanças de longo prazo na economia que afetam a demanda para certos tipos de trabalho."],
        ["Geografia", "O que é o desemprego conjuntural?", "Resulta de flutuações de curto prazo no ciclo econômico."],
        ["Geografia", "Quais são as responsabilidades da ONU?", "Manter a paz e a segurança internacional, desenvolver relações amistosas entre as nações, entre outros."],
        ["Geografia", "Quais os países que formam o BRICS?", "Brasil, Rússia, Índia, China e África do Sul."],
        ["Geografia", "O que é um produto manufaturado?", "São aqueles que são fabricados em grande quantidade, de forma padronizada e em série."],
        ["Geografia", "Qual país que mais importa produtos brasileiros?", "O Chile."],
        ["Geografia", "O que é gentrificação?", "É o processo que ocorre em áreas urbanas quando em uma área que antes era considerada degradada ou carente começa a atrair investimentos e novos moradores com poder aquisitivo maior."],
        ["Geografia", "O que é especulação imobiliária?", "É a prática de pessoas de comprar imóveis esperando que seus preços aumentem no futuro para vendê-los com lucro, sem necessariamente usá-los ou investir em melhorias."],
        ["Geografia", "Quais os problemas enfrentados nas fronteiras brasileiras?", "Tráfico de drogas, contrabando, imigração ilegal."],
        ["Geografia", "Quem faz o controle das fronteiras brasileiras?", "A Polícia Federal, Receita Federal, Forças Armadas e agentes da Vigilância Sanitária."],
        ["Geografia", "O que é contrabando?", "São importações e exportações de produtos proibidos no país."],
        ["Geografia", "O que é descaminho?", "São produtos comercializados sem o recolhimento do imposto."],
        ["Geografia", "Qual é o órgão no Brasil responsável pela demarcação de terras indígenas no Brasil?", "A FUNAI (Fundação Nacional dos Povos Indígenas)"],
        
        ["História", "Quais eram as principais características do governo da Primeira República no Brasil?", "Características: Governo dominado pela elite agrária, com poder concentrado em São Paulo e Minas Gerais e baixa participação popular."],
        ["História", "Qual era o papel dos 'coronéis' na política durante a Primeira República?", "Coronéis: Líderes locais que controlavam votos e exerciam forte influência política nas regiões rurais."],
        ["História", "Quais foram os principais motivos para o fim da Primeira República?", "Fim: Crise de 1929 e insatisfação popular levaram à Revolução de 1930 e à ascensão de Getúlio Vargas, encerrando a Primeira República."],
        ["História", "O que motivou a Revolta da Armada?", "Revolta da Armada: Foi motivada pela insatisfação da Marinha com o governo e pela falta de condições de trabalho."],
        ["História", "Qual era o objetivo do movimento conhecido como Canudos?", "Canudos: Liderado por Antônio Conselheiro, o movimento buscava criar uma comunidade autossuficiente e religiosa, rejeitando o governo da República."],
        ["História", "Quem liderou a Revolta da Vacina e por que ela aconteceu?", "Revolta da Vacina: Liderada por populares no Rio de Janeiro, ocorreu devido à imposição da vacina obrigatória e a insatisfação com as condições de vida."],
        ["História", "Quais foram as principais reivindicações dos participantes da Revolta dos Tenentes?", "Revolta dos Tenentes: Os tenentes exigiam reformas políticas e sociais e contestavam o poder das oligarquias regionais."],
        ["História", "Como o Cangaço refletia as condições sociais do Brasil na época?", "Cangaço: Refletia a violência e a injustiça social no sertão nordestino, com bandos armados desafiando o poder local."],
        ["História", "Qual foi o impacto da Revolta do Contestado para os moradores locais?", "Revolta do Contestado: Causou conflitos entre moradores locais e autoridades por causa de terras desapropriadas para uma estrada de ferro."],
        ["História", "Qual foi o papel das oligarquias na repressão das revoltas durante a Primeira República?", "As oligarquias usaram seu poder político e econômico para reprimir revoltas, garantindo a manutenção de seus interesses e o controle sobre o governo."],
    ];

    function criarFlashcards() {
        const container = document.querySelector('.flashcards-container');
        flashcardsData.forEach(data => {
            const card = document.createElement('div');
            card.classList.add('flashcard');

            const front = document.createElement('div');
            front.classList.add('front');
            const titulo = document.createElement('h3');
            titulo.textContent = data[0];
            const pergunta = document.createElement('p');
            pergunta.textContent = data[1];
            front.appendChild(titulo);
            front.appendChild(pergunta);

            const back = document.createElement('div');
            back.classList.add('back');
            const resposta = document.createElement('p');
            resposta.textContent = data[2];
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
