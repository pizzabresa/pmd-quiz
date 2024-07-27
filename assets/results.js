const descriptions = {
    docile: [
        "Você aparenta ser ... uma pessoa dócil. Você é gentil, prestativo e faz amigos com todos!",
        "Você é uma pessoa maravilhosa.",
        "......",
        "Será que eu tô exagerando? Não acho. Você sabe isso melhor que eu.",
        "Uma pessoa dócil como você deve ser o Pokémon ..."
    ],
    hardy: [
        "Você aparenta ser ... uma pessoa resiliente. Você faz seu dever de casa e sabe comer direito.",
        "Você tem muita força de vontade que te deixa completar tarefas, não importa quão difíceis.",
        "Mas você também pode ser teimoso ao ponto de brigar com seus amigos ...",
        "Nada vai dar certo pra você quando estiver irritado, então aprenda a esfriar a cabeça!",
        "Uma pessoa resiliente como você deve ser o Pokémon ..."
    ],
    jolly: [
        "Você aparenta ser ... uma pessoa feliz. Sempre rindo e sorrindo, você agrada todos ao seu redor.",
        "Você adora piadas! Você tem muitos amigos e é popular por todo lugar que vai.",
        "Mas às vezes você se deixa levar e diz coisas que te deixa em apuros.",
        "Você devia aprender a pensar melhor antes de dizer ou pensar em alguma coisa.",
        "Uma pessoa feliz como você deve ser o Pokémon ..."
    ],
    impish: [
        "Você aparenta ser ... uma pessoa travessa. Você é brincalhão, alegre e adora pregar peças.",
        "Você também é gentil. E é por isso que pessoas ao seu redor te acham irresistível.",
        "Você deve ser a pessoa mais popular do seu grupo!",
        "Ah, você não é tão popular? Ou você está sendo modesto ... ou só não notou.",
        "Aposto que as pessoas são tímidas demais pra mostrar seus sentimentos.",
        "Tem alguém aí que tá com medo demais pra declarar o amor dele por você!",
        "Uma pessoa travessa como você deve ser o Pokémon ..."
    ],
    quirky: [
        "Você aparenta ser ... uma pessoa peculiar. Pessoas te consideram um excêntrico que faz tudo do seu jeito.",
        "Seu jeitão sem preocupações te faz atraente, mas também um pouco infantil ...",
        "Você é meio volúvel e causa problemas para as pessoas ao seu redor.",
        "Talvez até as pessoas estão chateadas por você ser tão pipa voada?",
        "Se você ver que estiver agindo de maneira egoísta, tenta pensar antes de fazer algo drástico.",
        "Uma pessoa peculiar como você deve ser o Pokémon ..."
    ],
    relaxed: [
        "Você aparenta ser ... uma pessoa tranquila. Você ocasionalmente vai pro mundo da lua e perde o busão?",
        "Ou você se vê dormindo do nada?",
        "Ou o seu tempo de reação é um pouco menor que dos outros?",
        "Mas isso não é necessariamente uma coisa ruim.",
        "Você faz as coisas no seu tempo sem se sentir pressionado. Você pode viver de um jeito relaxado, sem pressa e sem preocupações.",
        "Acho que é um jeito de viver feliz que é invejável, até. Você também é surpreendentemente popular.",
        "O jeito que você olha pro nada, deve fazer o pulso de alguém especial começar a correr.",
        "Uma pessoa tranquila como você deve ser o Pokémon ..."
    ],
    brave: [
        "Você aparenta ser ... uma pessoa valente. Você tem um senso de justiça forte. Você odeia o mal. Você enfrenta qualquer um.",
        "Você é um herói de verdade.",
        "Vá lutar contra as forças das trevas!",
        "Pela justiça ..., pela paz na terra ... vá!",
        "Se eu estiver errado ... trabalhe para virar um herói de verdade!",
        "Uma pessoa valente como você deve ser o Pokémon ..."
    ],
    lonely: [
        "Você aparenta ser ... uma pessoa solitária. Você sempre parece alegre e brincalhona ao redor dos outros.",
        "Mas é só porque você tá com os outros. Quando você fica sozinho ...",
        "Você se sente estranhamente deprimida?",
        "É por isso que você quer estar com os outros. Mas se você se sente muito deprimido ...",
        "Sua saúde vai pro espaço. Coma mais vegetais!",
        "Dito isso ... não é uma coisa ruim se sentir sozinho. Você sabe como é quando se não está sozinho e é por isso que fica triste.",
        "E é por isso que não está solitário de verdade.",
        "Uma pessoa solitária como você deve ser o Pokémon ..."
    ],
    timid: [
        "Você aparenta ser ... uma pessoa tímida. Você pode achar difícil ir ao banheiro à noite.",
        "Ou voltar pra escola para pegar algo que você esqueceu na sala.",
        "Se você estiver andando em uma rua escura à noite, você provavelmente olha pra trás frequentemente.",
        "Mas sua natureza tímida também é seu ponto bom!",
        "Porque aqueles que conhecem o medo também conhecem a verdadeira coragem.",
        "Uma pessoa tímida como você deve ser o Pokémon ..."
    ],
    naive: [
        "Você aparenta ser ... uma pessoa ingênua. Você é bem curioso e adora coisas raras.",
        "Sua atitude alegre e despreocupada deve fazer coisas divertidas pras pessoas ao seu redor.",
        "Mas você tem uma falha: você pode ser infantil.",
        "Você nunca fica quieto. Mas sempre está se mexendo.",
        "Você também pode ser egoísta, então tome cuidado!",
        "Uma pessoa ingênua como você deve ser o Pokémon ..."
    ],
    sassy: [
        "Você aparenta ser ... uma pessoa atrevida. Você é um pouco cínico.",
        "Mas apesar disso tem algo atraente e amável em você.",
        "Mas você ocasionalmente diz algo arrogante que irrita os outros?",
        "Você faz esse tipo de erro? Pessoas já te chamaram de vão, egoísta ou convencido?",
        "Pessoas já disseram isso pra você?",
        "Ah? Tá me mandando ir tomar no cú?",
        "Vai você, seu filho da puta.",
        "Ah. Desculpa. Perdi o controle. Mil perdões, de verdade.",
        "De qualquer forma sua atitude é o que te define.",
        "Algo que te faz irritante e agradável ao mesmo tempo.",
        "Uma pessoa atrevida como você deve ser o Pokémon ...",
    ],
    hasty: [
        "Você aparenta ser ... uma pessoa apressada. Você gosta de ir a frente e fazer as coisas.",
        "Você é bem motivado.",
        "Mas também é bem estressado?",
        "Você fica irritado quando seus amigos não chegam na hora.",
        "Você fica frustrado quando coisas não acontecem como você espera.",
        "Você bate no botão do elevador se ele demora pra chegar.",
        "Talvez você só tenha apertado o botão \"Enviar\" sem parar agora.",
        "Toma cuidado - ficar irritado com facilitada não é bom pro seu bem-estar.",
        "Uma pessoa apressada como você deve ser o Pokémon ...",
    ],
    calm: [
        "Você aparenta ser ... uma pessoa calma. Você é capaz de dar conselhos aos seus amigos sem problemas.",
        "Você não gosta de lutar.",
        "Você é uma pessoa gentil que se importa.",
        "Você tem muitos amigos que se modelam em você.",
        "Mas ... você também é um pouco ingênuo ... e relaxado ... e talvez descuidado.",
        "Você talvez queira ter essas coisas em mente.",
        "Uma pessoa calma como você deve ser o Pokémon ..."
    ]
}

const starters = {
    docile: { mon: "Happiny", pt: "dócil" },
    hardy: { mon: "Aron", pt: "resiliente" },
    jolly: { mon: "Woobat", pt: "feliz" },
    impish: { mon: "Sprigatito", pt: "travesso" },
    quirky: { mon: "Trubbish", pt: "peculiar" },
    relaxed: { mon: "Slowpoke", pt: "tranquila" },
    brave: { mon: "Scraggy", pt: "valente" },
    lonely: { mon: "Cubone", pt: "solitária" },
    timid: { mon: "Snom", pt: "tímida" },
    naive: { mon: "Pichu", pt: "ingênua" },
    sassy: { mon: "Litten", pt: "atrevida" },
    hasty: { mon: "Growlithe", pt: "apressada" },
    calm: { mon: "Munchlax", pt: "calma" }
};