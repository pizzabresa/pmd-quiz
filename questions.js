const questions = [
    {
        text: "Você já falou alguma coisa sem pensar nas consequências antes?", answers: [
            { text: "Sim.", points: { lonely: 4, rash: 4 } },
            { text: "Não.", points: { hardy: 2 } }
        ]
    },
    {
        text: "Você gostaria de ser mais alto ou alta?", answers: [
            { text: "Pra caralho!", points: { sassy: 4 } },
            { text: "Claro que não!", points: { calm: 2 } }
        ]
    },
    {
        text: "Uma vez que você decide alguma coisa, você acha que tem que seguir com ela até o final?", answers: [
            { text: "Sim.", points: { hardy: 4 } },
            { text: "Não.", points: { quirky: 4, hasty: 2 } }
        ]
    },
    {
        text: "Você já falou \"Prazer em te conhecer\" para alguém que já tinha conhecido antes?", answers: [
            { text: "Sim.", points: { quirky: 4, rash: 4 } },
            { text: "Não.", points: { calm: 2 } }
        ]
    },
    {
        text: "Você está no cinema. Que filme você foi ver?", answers: [
            { text: "Um filme de ação.", points: { impish: 4, sassy: 2 } },
            { text: "Um drama.", points: { hardy: 4 } },
            { text: "Um romance.", points: { quirky: 4 } },
        ]
    },
    {
        text: "Já olhou pra seu reflexo e pensou \"Que delícia\"?", answers: [
            { text: "Óbvio!", points: { jolly: 2, naive: 2, sassy: 4 } },
            { text: "Bem, não ...", points: { hardy: 2 } }
        ]
    },
    {
        text: "Já jogou na loteria só porque \"vai quê, né?\"?", answers: [
            { text: "Sim.", points: { naive: 4 } },
            { text: "Não.", points: { quiet: 2 } }
        ]
    },
    {
        text: "Você prefere passar o fim de semana em um rolê caseiro ou na saideira?", answers: [
            { text: "Saideira", points: { impish: 4, rash: 4 } },
            { text: "Caseiro", points: { calm: 2 } }
        ]
    },
    {
        text: "Você achou dinheiro escondido atrás da privada no tribunal. O que você faz?", answers: [
            { text: "Boto no bolso e saio de fininho.", points: { brave: 4, hasty: 4, impish: 4, rash: 2 } },
            { text: "Finjo que nem vi.", points: { timid: 2 } }
        ]
    },
    {
        text: "Já teve uma vez que você se tocou que estava falando demais?", answers: [
            { text: "Sim.", points: { rash: 4, hasty: 4 } },
            { text: "Não.", points: { docile: 2, quiet: 2 } }
        ]
    },
    {
        text: "Quando você vê um botão, você sente uma vontade enorme de apertar ele?", answers: [
            { text: "Sim.", points: { hasty: 4 } },
            { text: "Não.", points: { calm: 2 } },
        ]
    },
    {
        text: "Já se esqueceu que comprou alguma coisa e comprou ela de novo?", answers: [
            { text: "Sim.", points: { hasty: 2, quirky: 4, rash: 2 } },
            { text: "Não.", points: { quiet: 2 } }
        ]
    },
    {
        text: "Você acha que é importante sempre tentar ser o número 1?", answers: [
            { text: "Claro!", points: { lonely: 2, sassy: 4 } },
            { text: "Não.", points: { calm: 4, quirky: 2 } }
        ]
    },
    {
        text: "Você quer ser famoso ou famosa?", answers: [
            { text: "Sim.", points: { lonely: 4, sassy: 4 } },
            { text: "Não.", points: { relaxed: 2 } }
        ]
    },
    {
        text: "Se você visse alguém fazendo merda, você acha que deve chamar a atenção dessa pessoa?", answers: [
            { text: "Claro!", points: { bold: 2, brave: 4, sassy: 4 } },
            { text: "Não.", points: { timid: 2 } }
        ]
    },
    {
        text: "Você já contou uma piada que ninguém riu?", answers: [
            { text: "Sim.", points: { impish: 2, naive: 4 } },
            { text: "Não.", points: { calm: 4 } }
        ]
    },
    {
        text: "Você gosta de festas animadas?", answers: [
            { text: "Sim.", points: { jolly: 4, lonely: 2 } },
            { text: "Não.", points: { quiet: 2 } }
        ]
    },
    {
        text: "Quando você se desculpa, você é realmente sincero ou sincera?", answers: [
            { text: "Claro!", points: { bold: 2, docile: 4 } },
            { text: "Não é fácil admitir isso!", points: { lonely: 2, timid: 4 } }
        ]
    },
    {
        text: "Você gosta de karaokê?", answers: [
            { text: "Sim.", points: { jolly: 4, bold: 4 } },
            { text: "Não.", points: { docile: 2, timid: 2 } }
        ]
    },
    {
        text: "Você tá subindo uma trilha quando você chega em uma bifurcação. Qual caminho você escolhe?", answers: [
            { text: "Estreito", points: { impish: 4, naive: 2 } },
            { text: "Largo", points: { quirky: 4, timid: 2 } }
        ]
    },
    {
        text: "Um amigo leva um tombo enorme! O que você faz?", answers: [
            { text: "Fico preocupado e ajudo a se levantar!", points: { brave: 4, lonely: 2 } },
            { text: "Rio e o ajudo a se levantar.", points: { naive: 2, rash: 2 } },
            { text: "Rio pra caralho.", point: { impish: 4 } }
        ]
    },
    {
        text: "Você tem uma prova importante amanhã! O que você faz?", answers: [
            { text: "Viro a noite estudando.", points: { hardy: 4 } },
            { text: "Improviso! Tenho certeza que vai dar bom.", points: { relaxed: 4 } },
            { text: "Prova? Acho que tô com febre ...", points: { naive: 4 } }
        ]
    },
    {
        text: "Você alguma vez já chamou um professor ou professora de \"Pai\" ou \"Mãe\"?", answers: [
            { text: "Sim.", points: { rash: 4, bold: 2 } },
            { text: "Não.", points: { quiet: 2 } }
        ]
    },
    {
        text: "Tem um rumor no bairro que tá tendo assalto à noite! O que você faz?", answers: [
            { text: "Evito fazer qualquer coisa à noite.", points: { docile: 4, timid: 2 } },
            { text: "Sigo vivendo como normal.", points: { bold: 2, jolly: 4, relaxed: 2 } }
        ]
    },
    {
        text: "Você está em uma reunião quando vê que tem que ir no banheiro! O que você faz?", answers: [
            { text: "Falo que aconteceu um imprevisto e já volto.", points: { brave: 4, bold: 4 } },
            { text: "Saio de fininho.", points: { hasty: 2 } },
            { text: "Tento segurar até o fim.", points: { timid: 2 } }
        ]
    },
    {
        text: "Você acha que tem bons hábitos de estudo?", answers: [
            { text: "Sim.", points: { docile: 4 } },
            { text: "Não.", points: { naive: 4, rash: 2 } },
            { text: "Tenho histórico de atleta!", points: { impish: 4 } }
        ]
    },
    {
        text: "Qual é o seu estilo de estudo ou trabalho?", answers: [
            { text: "Trabalho duro, todo dia", points: { hardy: 4 } },
            { text: "Se eu me lembrar...", points: { quirky: 4, hasty: 2 } },
            { text: "Eu dou uma olhada no que é necessário.", points: { quiet: 2 } },
            { text: "Não consigo sem ajuda...", points: { lonely: 4 } }
        ]
    },
    {
        text: "Você e seu amigo estão atrasados pra um compromisso. Enquando esperava ele no ponto, o ônibus chega. O que você faz?", answers: [
            { text: "Pego o ônibus e encontro ele lá.", points: { hasty: 4 } },
            { text: "Espero ele e a gente chega atrasado juntos.", points: { hardy: 4 } },
            { text: "Não ia estar nem esperando ele.", points: { rash: 4 } }
        ]
    },
    {
        text: "Você vê um bolo que venceu ontem. O que você faz?", answers: [
            { text: "Não é um problema! Vai pra dentro!", points: { brave: 4, relaxed: 2 } },
            { text: "Penso nisso por um segundo e decido.", points: { timid: 2 } },
            { text: "Peço pra alguém decidir antes.", points: { bold: 4 } }
        ]
    },
    {
        text: "Você comeu até se fartar quando uma sobremesa deliciosa aparece. O que você faz?", answers: [
            { text: "Como. Meu estômago é que nem coração de mãe.", points: { hasty: 4, rash: 2 } },
            { text: "Recuso. Engorda demais!", points: { hardy: 2 } },
            { text: "Delícia! Adoro sobremesa! ♪", points: { bold: 4, jolly: 4, relaxed: 2 } }
        ]
    },
    {
        text: "Seu amigo fez uma comida horrível. Ele te pergunta \"O que achou?\" O que você diz ..?", answers: [
            { text: "\"Foi uma merda\"", points: { brave: 2, quiet: 2 } },
            { text: "Só sorrio", points: { calm: 4, lonely: 2 } },
            { text: "\"Ehhh, é ... bom.\"", points: { rash: 2, timid: 2 } }
        ]
    },
    {
        text: "Você vai comer em um restaurante chique conhecido pela comida. Que proteína escolhe?", answers: [
            { text: "Carne vermelha.", points: { impish: 4, naive: 4 } },
            { text: "Carne branca.", points: { hardy: 2 } },
            { text: "Proteína vegetal.", points: { hardy: 4 } },
            { text: "Qualquer coisa! Tudo é uma delícia!", points: { bold: 4 } }
        ]
    },
    {
        text: "Todo mundo tá dividindo uma sobremesa e tem uma fatia sobrando. O que você faz?", answers: [
            { text: "Não conto pra ninguém.", points: { bold: 4, timid: 2 } },
            { text: "Conto pra todo mundo.", points: { docile: 4, rash: 4 } },
            { text: "É de quem pegar primeiro.", points: { impish: 4 } }
        ]
    },
    {
        text: "Um amigo te convida para jantar à conta dele. O que você faz?", answers: [
            { text: "Já tô lá!", points: { bold: 4 } },
            { text: "Se não for incomodar", points: { jolly: 4 } },
            { text: "Obrigado...", points: { quirky: 4 } }
        ]
    },
    {
        text: "Todo mundo ao seu redor está rindo mundo de algo que você não achou engraçado. O que você faz?", answers: [
            { text: "Nada.", points: { brave: 4, bold: 2 } },
            { text: "Rio junto.", points: { lonely: 4, timid: 2 } },
            { text: "Depende da situação.", points: { quiet: 2, quirky: 2 } }
        ]
    },
    {
        text: "Você prefere uma agenda cronometrada ou muito tempo vago?", answers: [
            { text: "Agenda cronometrada", points: { lonely: 4, sassy: 2 } },
            { text: "Tempo livre!", points: { calm: 4 } },
            { text: "Meio termo!", points: { quirky: 4 } }
        ]
    },
    {
        text: "Você está prestes a comprar um jogo popular quando alguém compra a última cópia! Como se sente?", answers: [
            { text: "Que seja!", points: { calm: 4 } },
            { text: "Puto. Eu tava aqui primeiro.", points: { jolly: 4, relaxed: 4 } },
            { text: "Choro um pouco.", points: { lonely: 4 } }
        ]
    },
    {
        text: "Você encontra uma pessoa com a qual não tinha falado muito antes. O que você faz?", answers: [
            { text: "Faço conversa fiada.", points: { calm: 2 } },
            { text: "Digo nada!", points: { quirky: 2 } },
            { text: "Dou uma desculpa pra ir embora!", points: { timid: 4 } }
        ]
    },
    {
        text: "Boas notícias e más notícias... Qual quer ouvir primeiro?", answers: [
            { text: "Boas notícias", points: { relaxed: 4 } },
            { text: "Más notícias", points: { bold: 2, naive: 4 } },
            { text: "Não quero ouvir nada", points: { timid: 4 } }
        ]
    },
    {
        text: "Te deram uma caixa grande de presente. O que você faz?", answers: [
            { text: "Você espera chegar em casa pra abrir.", points: { docile: 4 } },
            { text: "Balança ela!", points: { naive: 4 } },
            { text: "Abre logo!", points: { rash: 4 } },
            { text: "É menor que a dos outros ...", points: { lonely: 4 } }
        ]
    },
    {
        text: "Você tem medo de histórias de terror?", answers: [
            { text: "Muito!", points: { timid: 4 } },
            { text: "Só de jumpscares.", points: { docile: 4 } },
            { text: "Não.", points: { lonely: 4, sassy: 4 } },
            { text: "Cara, nem vejo.", points: { relaxed: 4 } }
        ]
    },
    {
        text: "Como são suas manhãs?", answers: [
            { text: "Sempre uma correria!", points: { brave: 4, impish: 4 } },
            { text: "Sempre perfeitas!", points: { quiet: 2 } },
            { text: "São OK.", points: { docile: 2, timid: 4 } }
        ]
    },
    {
        text: "Te convidaram pra uma festa de arromba. Na hora da festa começar não tem ninguém lá! O que você pensa?", answers: [
            { text: "Aconteceu alguma coisa?", points: { docile: 4, lonely: 4 } },
            { text: "Vim no dia errado?", points: { jolly: 4, relaxed: 4 } },
            { text: "Vamos animar essa festa!", points: { bold: 4 } }
        ]
    },
    {
        text: "Você tira seus sapatos e se toca que suas meias são de cores diferentes! O que você faz?", answers: [
            { text: "Morro de vergonha!", points: { docile: 4 } },
            { text: "De novo !?", points: { rash: 4 } },
            { text: "Foi de propósito!", points: { jolly: 4 } }
        ]
    },
    {
        text: "Você faz Promessas de Ano Novo?", answers: [
            { text: "Claro!", points: { hardy: 4 } },
            { text: "Não.", points: { quirky: 4, rash: 2 } },
            { text: "Quê que é isso?", points: { relaxed: 4 } }
        ]
    },
    {
        text: "Você tá em uma reunião quieta quando escuta alguém peidar. Como você reage?", answers: [
            { text: "Rio um pouco!", points: { jolly: 4, naive: 4 } },
            { text: "Deixo quieto...", points: { docile: 2, impish: 2 } },
            { text: "Quem fez isso?", points: { brave: 4 } }
        ]
    },
    {
        text: "Você tá em uma maratona, e no começo você leva um tombo! O que você faz?", answers: [
            { text: "Não vou desistir!", points: { brave: 2, hardy: 4 } },
            { text: "Desisto.", points: { quirky: 4 } },
            { text: "Grito \"Começa de novo!\"", points: { bold: 4, rash: 2 } }
        ]
    },
    {
        text: "Você encontra algo em uma pechincha! O que você faz?", answers: [
            { text: "Compro logo!", points: { hasty: 4 } },
            { text: "Penso se eu preciso ou não.", points: { quiet: 2 } },
            { text: "Exijo um desconto ainda maior!", points: { bold: 4 } }
        ]
    },
    {
        text: "Te pediram pra fazer uma tarefa difícil. O que você vai fazer?", answers: [
            { text: "Fazer sozinho.", points: { brave: 2, hardy: 4 } },
            { text: "Pedir ajuda.", points: { docile: 2 } },
            { text: "Fazer outra pessoa fazer!", points: { bold: 4, sassy: 2 } }
        ]
    },
    {
        text: "Você nota que um presente que você comprou ontem tá em 50% de desconto hoje. Como você se sente?", answers: [
            { text: "Coração partido...", points: { hardy: 4 } },
            { text: "AAAAAAAAAAHHHHHHHH", points: { docile: 4 } },
            { text: "Timing ruim, né...", points: { bold: 4, calm: 4 } }
        ]
    },
    {
        text: "Seu amigo tá meio atrasado pra te encontrar. Isso é OK?", answers: [
            { text: "Sim.", points: { bold: 4, relaxed: 2 } },
            { text: "Não.", points: { hasty: 2, lonely: 4 } }
        ]
    },
    {
        text: "Você tomou um pé na bunda. Como você reage?", answers: [
            { text: "Ai, que alívio!", points: { jolly: 2, relaxed: 4 } },
            { text: "É triste, mas faz parte", points: { calm: 2 } },
            { text: "Só choro e tristeza", points: { quiet: 2 } }
        ]
    },
    {
        text: "O telefone tá tocando! O que você faz?", answers: [
            { text: "Atendo logo!", points: { hasty: 4, lonely: 4 } },
            { text: "Espero um pouco antes de responder", points: { quiet: 2 } },
            { text: "Ignoro e deixo tocar", points: { timid: 2 } }
        ]
    },
    {
        text: "Seus amigos parecem estar planejando alguma coisa de onde você não consegue ouvir. Você pensa ...", answers: [
            { text: "Quero ir também!", points: { naive: 4 } },
            { text: "Nada demais.", points: { lonely: 4 } },
            { text: "Será que eles vão me convidar?", points: { timid: 2 } }
        ]
    },
    {
        text: "Você acha que é importante ser pontual?", answers: [
            { text: "Não.", points: { brave: 4 } },
            { text: "Sim.", points: { bold: 4, quiet: 4 } },
            { text: "Sei lá.", points: { docile: 4 } }
        ]
    },
    {
        text: "Você ganhou muito em uma rifa! O que você diz?", answers: [
            { text: "Aeeeee porra!", points: { jolly: 2, naive: 4 } },
            { text: "Não consigo acreditar...", points: { timid: 2 } },
            { text: "Esse é o meu segredinho...", points: { quiet: 4 } }
        ]
    },
    {
        text: "Você acha que culpar alguém por algo que você fez é necessário de vez em quando?", answers: [
            { text: "Claro!", points: { quiet: 4, sassy: 4 } },
            { text: "Não!", points: { brave: 4 } }
        ]
    },
    {
        text: "Seu amigo do nada para de falar com você, quando ontem tava tudo bem. O que aconteceu?", answers: [
            { text: "Talvez ele esteja doente.", points: { hasty: 4 } },
            { text: "Ele tá ocupado.", points: { quiet: 4 } },
            { text: "O quê! Por quê?", points: { timid: 2 } }
        ]
    },
    {
        text: "Você falhou miseravelmente. Todo mundo descobriu, e estão decepcionados com você ... O que você faz?", answers: [
            { text: "Tenta se esconder.", points: { timid: 2 } },
            { text: "Pensa em uma desculpa.", points: { naive: 4, sassy: 2 } },
            { text: "Finge que morreu.", points: { rash: 4 } }
        ]
    },
    {
        text: "Você quer mostrar que você gosta muito de uma certa pessoa! O que você faz?", answers: [
            { text: "Mostro um pouco jogando algo junto.", points: { jolly: 4, quiet: 2 } },
            { text: "Deixo óbvio ao ... pregar uma peça!", points: { lonely: 4, naive: 2 } },
            { text: "Falo logo pra todo mundo!", points: { bold: 2, brave: 4, impish: 4 } },
            { text: "Não falo nada! Arriscado demais!", points: { timid: 2 } }
        ]
    },
    {
        text: "Você tá em uma caminhada quando uma repórter te aborda pra uma entrevista. O que você faz?", answers: [
            { text: "Saio correndo!", points: { timid: 4 } },
            { text: "Respondo as perguntas numa boa.", points: { brave: 4, sassy: 4 } },
            { text: "Avacalho com ela. Tô na TV!", points: { bold: 2, naive: 4 } }
        ]
    },
    {
        text: "As pessoas na mesa do lado estão cantando Parabéns para alguém. O que você faz?", answers: [
            { text: "Fico nos arredores", points: { calm: 2 } },
            { text: "Canto junto!", points: { jolly: 4, naive: 4 } },
            { text: "Vou embora.", points: { lonely: 2, sassy: 4 } }
        ]
    },
    {
        text: "Você vê uma cama grande e confortável. Sua primeira reação é ...", answers: [
            { text: "Pular nela!", points: { hasty: 2, sassy: 2 } },
            { text: "Bola de canhão!", points: { impish: 4 } },
            { text: "Cair e dormir.", points: { lonely: 4 } }
        ]
    },
    {
        text: "Você tá sonhando acordado ... quando um amigo seu te molha todo! O que você faz?", answers: [
            { text: "Fico puto!", points: { hasty: 4 } },
            { text: "Fico triste.", points: { lonely: 4 } },
            { text: "Aeee! Briga de água!", points: { impish: 4, jolly: 4, naive: 4 } }
        ]
    },
    {
        text: "Qual era de Pokémon você mais gosta, reconhece e gostaria de jogar?", answers: [
            { text: "Pokémon Clássico (Kanto, Johto e Hoenn)", points: { classic: -2 } },
            { text: "Pokémon Moderno (Sinnoh, Unova e Kalos)", points: { modern: -2 } },
            { text: "Pokémon Contemporâneo (Alola, Galar e Paldea)", points: { contemp: -2 } },
            { text: "Qualquer era", points: { any: -2 } }
        ]
    }
];