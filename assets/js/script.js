document.addEventListener('DOMContentLoaded', () => {
    const flashcardsData = [
        // Biotecnologia
        ["Biotecnologia", "Quais os objetivos da modificação genética em animais?", "Aumentar o tamanho, melhorar características específicas ou resistência à doenças, podendo resultar em comportamento agressivo."],
        ["Biotecnologia", "Como a modificação genética afetou o gorila albino, o lobo, e o jacaré?", "As modificações causaram o crescimento excessivo e instabilidade emocional, levando os animais à agressividade."],
        ["Biotecnologia", "Quais os riscos éticos da criação de animais geneticamente modificados?", "Sofrimento animal, impacto nos ecossistemas, e possíveis consequências imprevistas na biodiversidade."],
        ["Biotecnologia", "Como esses animais podem afetar o ecossistema se soltos?", "Podem competir com espécies nativas, causar desequilíbrios ecológicos, e ameaçar a sobrevivência de outras espécies."],
        ["Biotecnologia", "O que ocorreu no caso das gêmeas que foram alteradas geneticamente na China?", "Um cientista anunciou que modificou geneticamente gêmeas para torná-las resistentes ao HIV, gerando controvérsias éticas."],
        ["Biotecnologia", "Quais são os principais métodos de modificação genética?", "Os principais métodos incluem CRISPR, clonagem e inserção de genes, que permitem alterar o DNA de organismos."],
        ["Biotecnologia", "Quais são os riscos associados à modificação genética?", "Os riscos incluem efeitos colaterais inesperados, impacto na biodiversidade e questões éticas sobre manipulação genética."],
        ["Biotecnologia", "O que é a edição de genes?", "Edição de genes é a alteração precisa do DNA de um organismo para corrigir mutações ou adicionar novas características."],
        ["Biotecnologia", "Quais são as aplicações da modificação genética na agricultura?", "Na agricultura, é usada para criar plantas resistentes a pragas, melhorar o rendimento e aumentar a resistência a condições climáticas adversas."],
        ["Biotecnologia", "Quais são as implicações éticas da modificação genética em humanos?", "As implicações éticas incluem preocupações sobre consentimento, desigualdade social e possíveis consequências imprevistas para a saúde e a sociedade."],
    
        // Química
        ["Química", "O que é heteroátomo?", "Átomo diferente de carbono (C), localizado entre carbonos."],
        ["Química", "O que são carbonos: primário, secundário, terciário, quaternário?", "São carbonos ligados entre carbonos (C)-(C), se um (C) está ligado à outro (C) ele é primário, se um (C) está ligado a dois (C) ele é secundário, assim por diante."],
        ["Química", "O que é uma cadeia aromática?", "É uma cadeia fechada que apresenta anel ou núcleo benzênico, apresenta seis átomos de carbono, unidos por alternância de duplas e simples ligações."],
        ["Química", "O que é uma cadeia saturada ou insaturada?", "Saturada apresenta apenas simples ligações, Insaturada apresenta duplas e triplas ligações."],
        ["Química", "O que se precisa ter para a função da cadeia orgânica ser Álcool?", "Precisa ter a hidroxila ligada à carbono saturado."],
        ["Química", "O que precisa ter para a função da cadeia orgânica ser Fenol?", "Precisa ter uma hidroxila ligada diretamente no carbono do anel benzênico."],
        ["Química", "O que precisa ter para a função da cadeia orgânica ser Enol?", "Precisa ter uma hidroxila ligada à carbono que faz dupla ligação."],
        ["Química", "O que precisa ter na cadeia carbônica para se chamar Cicloalcana?", "Precisa ser uma cadeia fechada com carbonos alternando entre si com apenas simples ligações."],
        ["Química", "O que precisa ter na cadeia carbônica para se chamar Cicloalceno?", "Precisa ser uma cadeia fechada com carbonos alternando entre si, e deve haver uma dupla ligação."],
        ["Química", "O que precisa ter na cadeia carbônica para se chamar Alcadieno?", "Precisa ter duas duplas ligações entre carbonos."],
        ["Química", "Como se chama a função que apresenta no grupo funcional um carbono (C) fazendo uma dupla ligação à um oxigênio (O) e uma simples ligação à hidroxila?", "Ácido Carboxílico."],
    
        // Robótica
        ["Robótica", "Qual é a função principal da placa de Arduino no carrinho?", "Controlar os motores e processar o código."],
        ["Robótica", "Como o Arduino é alimentado no carrinho?", "Com as mesmas pilhas do motor ou uma fonte separada."],
        ["Robótica", "Que tipo de motor é recomendado para uso com Arduino?", "Motores DC."],
        ["Robótica", "O que é um driver de motor?", "Um circuito que conecta o Arduino ao motor, controlando direção e velocidade."],
        ["Robótica", "Como o Arduino pode ser programado para andar em linha reta?", "Acionando os motores em velocidade constante e sincronizada."],
        ["Robótica", "Por que usar resistores nas conexões do Arduino?", "Para proteger contra sobrecarga de corrente."],
        ["Robótica", "Como o chassi do carrinho influencia a formação elétrica?", "Suporta a estrutura e organiza os componentes."],
        ["Robótica", "Qual a importância de boas conexões entre Arduino e componentes?", "Garantir transmissão correta de sinais."],
        ["Robótica", "Como as pilhas influenciam a programação do Arduino?", "Ajustar o consumo de energia para mais tempo de operação."],
        ["Robótica", "O que considerar ao escolher as pilhas para o carrinho?", "Capacidade, voltagem e tipo de pilha."],
    
        // Empreendedorismo
        ["Empreendedorismo", "Qual é a função principal de um plano de negócios?", "Guiar a direção e as estratégias do negócio."],
        ["Empreendedorismo", "Como um empreendedor pode identificar oportunidades de mercado?", "Através de pesquisa e análise de tendências."],
        ["Empreendedorismo", "Que tipo de financiamento é recomendado para startups?", "Investimentos anjo ou capital de risco."],
        ["Empreendedorismo", "O que é um pitch de negócios?", "Uma apresentação breve para convencer investidores."],
        ["Empreendedorismo", "Como os empreendedores podem definir seu público-alvo?", "Analisando demografia e comportamentos de consumo."],
        ["Empreendedorismo", "Por que é importante ter uma proposta de valor clara?", "Para diferenciar o negócio da concorrência."],
        ["Empreendedorismo", "Como a tecnologia pode impactar um novo empreendimento?", "Aumentando eficiência e alcance de mercado."],
        ["Empreendedorismo", "Qual a importância do feedback do cliente para um empreendedor?", "Ajustar produtos e serviços às necessidades do mercado."],
        ["Empreendedorismo", "Como o networking pode ajudar na criação de um negócio?", "Facilitando parcerias e oportunidades de investimento."],
        ["Empreendedorismo", "O que considerar ao escolher uma equipe para sua startup?", "Habilidades complementares e alinhamento de visão."],
    
        // Matemática
        ["Matemática", "Qual é o coeficiente angular de uma função afim?", "O a"],
        ["Matemática", "O que o f(x) representa?", "Y"],
        ["Matemática", "Qual é o coeficiente linear?", "O b"],
        ["Matemática", "Qual é a fórmula utilizada para calcular delta?", "Δ=b² - 4 × a × c"],
        ["Matemática", "A função afim f(x) x - 2 é crescente ou decrescente?", "Crescente"],
        ["Matemática", "Quem é o A na equação 3x² + 4x - 8?", "É o 3"],
        ["Matemática", "O que é preciso para achar o ponto de intersecção do eixo X?", "Igualar y a 0"],
        ["Matemática", "Qual é o Y do ponto (-5, 6)?", "6"],
        ["Matemática", "Qual o nome da fórmula que normalmente é usada para calcular uma equação de segundo grau?", "Fórmula de Bhaskara"],
        ["Matemática", "O que acontece se o discriminante for zero?", "A equação tem uma raiz real dupla"],
        ["Matemática", "Quando a equação quadrática não tem raízes?", "Quando Δ<0."],
        ["Matemática", "O que significa 'completar o quadrado'?", "Transformar a equação quadrática em uma forma fatorada"],
        ["Matemática", "Qual o coeficiente da parte quadrática em uma equação quadrática?", "O coeficiente a"],
        ["Matemática", "Como se chama o gráfico de uma equação quadrática?", "Parábola"],
        ["Matemática", "Qual a forma geral de uma equação quadrática?", "ax²+bx+c=0"],
    
        // Português
        ["Português", "O que é o cubismo e quem o fundou?", "O cubismo é uma arte que busca representar objetos e cenas por meio de formas geométricas e foi fundado por Pablo Picasso e Georges Braque."],
        ["Português", "Quais são as principais características do movimento surrealista?", "Exploração do inconsciente, sonhos e o irracional, criando obras com elementos fantásticos e oníricos."],
        ["Português", "Quem foi um dos principais autores do Modernismo no Brasil?", "Mário de Andrade."],
        ["Português", "O que é o verso livre?", "É uma forma de poesia sem uma métrica ou rima fixas."],
        ["Português", "O que é a metáfora?", "É uma figura de linguagem que compara dois elementos sem usar palavras como 'como' ou 'tal como'."],
        ["Português", "O que significa 'carpe diem'?", "É uma expressão latina que significa 'aproveite o dia'."],
        ["Português", "Qual a diferença entre sinônimo e antônimo?", "Sinônimo é a palavra de significado semelhante, enquanto antônimo é a palavra de significado oposto."],
        ["Português", "Qual é a função do advérbio na frase?", "Modificar o verbo, o adjetivo ou outro advérbio, indicando tempo, modo, lugar ou intensidade."],
        ["Português", "O que é a anáfora?", "É a repetição de uma palavra ou expressão no início de versos ou frases consecutivas."],
        ["Português", "O que é uma oração subordinada?", "É uma oração que depende de outra para ter sentido completo."],
    

        // ??
        ["Resiliência, tolerância e persistência", "Qual a importância da tolerância e da persistência na trajetória profissional?", "Além de uma boa responsabilidade em serviço também ajuda em não ter concorrentes."],
        ["Resiliência, tolerância e persistência", "Qual o papel da tolerância da persistência diante de imprevistos cotidianos?", "Trás harmonia às diferenças e o respeito, aceitação das diversidades das culturas do nosso mundo."],
        ["Resiliência, tolerância e persistência", "Qual a importância do Feedback para o crescimento profissional e pessoal?", "Valoriza a oportunidade de melhorar relacionamentos interpessoais na empresa e um grande aliado da produtividade na vida."],
        ["Resiliência, tolerância e persistência", "Qual que é a importância de se ter uma boa comunicação nas relações profissionais e pessoais?", "Melhora o clima e a integração da equipe com uma boa comunicação e se entende melhor."],
        

        // Educação financeira
        ["Educação financeira", "O que significa C D B?", "Certificado de depósito bancário."],
        ["Educação financeira", "Como funciona o C D B?", "É um investimento de renda (com juros definidos no momento da aplicação) ou C atrelada à variação C D I com a taxa no momento da aplicação."],
        ["Educação financeira", "Quais exemplos de investimento de imóvel?", "Dívidas, juros, aluguéis."],
        ["Educação financeira", "O que significa renda passiva?", "Rendimentos financeiros gerados sem necessidades ou investimentos de grande porte do tempo."],
        ["Educação financeira", "Quais os riscos da renda passiva?", "Necessidade de ter bastante capital para construir essa boa quantia."],
        

        //Biologia
        ["Biologia", "Marcos é heterozigoto e se casa com Maria que não possui polidactilia. O casal tem uma filha, Cláudia, que possui polidactilia. Cláudia se casa com Murilo, filho de pais normais. Qual a probabilidade de Cláudia e Murilo terem uma criança sem polidactilia?", "50% de chance."],
        ["Biologia", "O que Mendel usou em seus experimentos sobre hereditariedade?", "Ervilhas."],
        ["Biologia", "Como o experimento afeta os animais no filme Rampage?", "Faz eles crescerem indefinidamente e terem impulsos agressivos."],
        

        // Sociologia
        ["Sociologia", "O que é indústria cultural?", "É um conceito desenvolvido no contexto social do século XX, em que as bases de produção econômica e cultural sofriam uma grande influência do sistema capitalista."],
        ["Sociologia", "O que significa movimentos sociais?", "São grupos de indivíduos que defendem ou lutam por uma causa social e política."],
        ["Sociologia", "Quais os efeitos do totalitarismo?", "Características comuns de regimes totalitários incluem o recurso a campos de concentração."],
        ["Sociologia", "O que é Autoritarismo?", "Não tem liberdade individual e também violência estatal - prisões arbitrárias."],
        ["Sociologia", "Qual o conceito de Marx?", "Marx viveu no século XIX e vivenciou diversas mudanças sociais."]
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