const data = [

    {
    title: "O Hobbit",
    description:
    "Bilbo Bolseiro é um hobbit que leva uma vida confortável e sem ambições, raramente aventurando-se para além de sua despensa ou sua adega. Mas seu contentamento é perturbado quando Gandalf, o mago, e uma companhia de anões batem em sua porta e levam-no para uma expedição.",
    bottom: "emprestar"
    },
    
    {
    title: "Percy Jackson",
    description:
    "O garoto-problema Percy Jackson é um meio deus. Tem experiências estranhas em que deuses e monstros mitológicos parecem saltar das páginas dos livros direto para a sua vida. Pior que isso: algumas dessas criaturas estão bastante irritadas. Um artefato precioso foi roubado do Monte Olimpo e Percy é o principal suspeito. Para restaurar a paz, ele e seus amigos – jovens heróis modernos – terão de fazer mais do que capturar o verdadeiro ladrão: precisam elucidar uma traição mais ameaçadora que fúria dos deuses.",
    bottom: "emprestar"
    },


    {
        title: "Harry Potter e a pedra filosofal",
        description:
        "Harry Potter é um garoto cujos pais, feiticeiros, foram assassinados por um poderosíssimo bruxo quando ele ainda era um bebê. Ele foi levado, então, para a casa dos tios que nada tinham a ver com o sobrenatural. No dia de seu aniversário de 11 anos, ele parece deslizar por um buraco sem fundo, como o de Alice no país das maravilhas, que o conduz a um mundo mágico. Descobre sua verdadeira história e seu destino",
        bottom: "emprestar"
        },


    {
        title: "As cronicas de Narnia",
        description:
        "Viagens ao fim do mundo, criaturas fantásticas e batalhas épicas entre o bem e o mal - o que mais um leitor poderia querer de um livro? O livro que tem tudo isso é 'O leão, a feiticeira e o guarda-roupa', escrito em 1949 por Clive Staples Lewis. MasLewis não parou por aí. Seis outros livros vieram depois e, juntos, ficaram conhecidos como 'As crônicas de Nárnia'. Nos últimos cinqüenta anos, 'As crônicas de Nárnia' transcenderam o gênero da fantasia para se tornar parte do cânone da literaturaclássica. Cada um dos sete livros é uma obra-prima, atraindo o leitor para um mundo em que a magia encontra a realidade, e o resultado é um mundo ficcional que tem fascinado gerações. Esta edição apresenta todas as sete crônicas integralmente, num único volume. Os livros são apresentados de acordo com a ordem de preferência de Lewis, cada capítulo com uma ilustração do artista original, Pauline Baynes. Enganosamente simples e direta, 'As crônicas de Nárnia' continuam cativando os leitores com aventuras, personagens e fatos que falam a pessoas de todas as idades.",
        bottom: "emprestar"
    },


    {
        title: "Luzes do norte",
        description:
        "Dimitria Coromandel é uma caçadora excepcional, a melhor da região, e, após a morte dos seus pais, se tornou a base para o sustento de sua pequena família. Para ela, o peso da responsabilidade e a necessidade de conseguir dinheiro são os impulsos de sua movimentada rotina, e, no inclemente inverno de Nurensalem, ela precisa caçar durante o dia se quiser trazer comida para a casa à noite. No entanto, quando fisga a atenção de Bóris van Vintermer, patriarca da família mais rica do local, sua realidade começa aos poucos a se transformar.",
        bottom: "emprestar"
    },



    {
        title: "Cidade dos ossos",
        description:
        "Clary Fray, 15 anos, decide passar a noite em uma boate em Nova York. O maior de seus problemas provavelmente seria lidar com o truculento segurança da porta, certo? Errado. Clary testemunha um crime, e não um crime qualquer: um assassinato cometido por três adolescentes cobertos por enigmáticas tatuagens, brandindo armas esquisitas. Para completar, o corpo da vítima desaparece no ar.",
        bottom: "emprestar"
    },



    {
        title: "A maldicao das Fadas",
        description:
        "Uma maldição é capaz de causar dor e sofrimento por muito tempo, mas ela não é eterna. Aos treze anos de idade, tudo o que Aurora deseja é libertar as mulheres do povo encantado da maldição centenária que mata qualquer um que tenha seu amor correspondido por uma fada. Assim, a jovem poderá viver seu sonho de amar e ser amada. Isso só será possível se ela for capaz de vencer os obstáculos na busca do Objeto de Poder do povo encantado. O maior desafio será não manifestar o sentimento que tem pelo aqueônio Pedro Theodor, para garantir que ele continue vivo até o fim da jornada.",
        bottom: "emprestar"
    },


    {
        title: "Robin Hood",
        description:
        "Ambientado na Inglaterra nos séculos XII e XIII, o livro traz as aventuras de Robin Hood e seu bando em busca de justiça, igualdade e também diversão. Nas matas de Sherwood e Barnsdale, acompanhamos os embates de Robin com o xerife de Nottingham, sua história de amor com lady Marian e sua parceria com o leal João Pequeno e frei Tuck. Essa edição reúne em um único volume os dois textos integrais de Dumas sobre o herói: O príncipe dos ladrões e O proscrito, publicados postumamente em 1872 e 1873. O primeiro acompanha a gênese do personagem, desde a sua adoção recém-nascido até a proscrição e o estabelecimento na floresta, assumindo-se como fora da lei. O segundo apresenta a sequência de suas aventuras, até a velhice e a morte.",
        bottom: "emprestar"
    },


        
    
    ];
    
    
    const cardContainer = document.querySelector(".card-container");
    const searchInput = document.querySelector("#searchInput");
    
    const displaydata = data => {
    cardContainer.innerHTML= "";
    data.forEach(e => {
        cardContainer.innerHTML += `
        
        <div class="card">
    
    <h3>${e.title}</h3>
    <p>${e.description}</p>
    <button>${e.bottom}</button>
    
        </div>
    
        `
    });
    }
    
    
    searchInput.addEventListener("keyup", (e) => {
     const search = data.filter(i => i.title.toLocaleUpperCase().includes(e.target.value.toLocaleUpperCase()))  
     displaydata (search);
    })
    
    window.addEventListener("load", displaydata.bind(null,data))