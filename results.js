const descriptions = {
    docile: [
        "Você aparenta ser...",
        "uma pessoa dócil. Você é gentil, prestativo e faz amigos com todos!",
        "Um docinho de pessoa!",
        "Será que eu tô exagerando? Não acho. Você sabe isso melhor que eu.",
        "Uma pessoa dócil como você deve ser o Pokémon ..."
    ],
    hardy: [
        "Você aparenta ser ...",
        "uma pessoa resiliente. Você faz o que tem que fazer e sabe se cuidar.",
        "Seus amigos sabem que podem confiar em você!",
        "Uma pessoa resiliente como você deve ser o Pokémon ..."
    ],
    jolly: [
        "Você aparenta ser ...",
        "uma pessoa feliz. Sempre rindo e sorrindo, você agrada todos ao seu redor.",
        "Você adora piadas! Você tem muitos amigos e é popular por todo lugar que vai.",
        "Uma pessoa feliz como você deve ser o Pokémon ..."
    ],
    impish: [
        "Você aparenta ser ...",
        "uma pessoa travessa. Você é brincalhão, alegre e adora pregar peças.",
        "Você também é gentil. E é por isso que pessoas ao seu redor te acham irresistível.",
        "Uma pessoa travessa como você deve ser o Pokémon ..."
    ],
    quirky: [
        "Você aparenta ser ...",
        "uma pessoa peculiar. Pessoas te consideram um excêntrico que faz tudo do seu jeito.",
        "Seu jeitão sem preocupações te faz uma presença acalmadora.",
        "Uma pessoa peculiar como você deve ser o Pokémon ..."
    ],
    relaxed: [
        "Você aparenta ser ...",
        "uma pessoa tranquila. Você ocasionalmente vai pro mundo da lua mas isso não é necessariamente uma coisa ruim.",
        "Você faz as coisas no seu tempo sem se sentir pressionado.",
        "Você pode viver de um jeito relaxado, sem pressa e sem preocupações.",
        "Acho que é um jeito de viver feliz que é invejável, até. Você também é surpreendentemente popular!",
        "Uma pessoa tranquila como você deve ser o Pokémon ..."
    ],
    brave: [
        "Você aparenta ser ...",
        "uma pessoa valente. Você tem um senso de justiça forte e sabe enfrentar todos.",
        "Não se dê por vencido nem deixe opressão passar despercebida!",
        "Uma pessoa valente como você deve ser o Pokémon ..."
    ],
    lonely: [
        "Você aparenta ser ...",
        "uma pessoa solitária. Você sempre parece alegre e brincalhona ao redor dos outros.",
        "Mas é só porque você tá com os outros. Quando você fica sozinho ...",
        "Você se sente estranhamente triste?",
        "Não é uma coisa ruim se sentir sozinho. Você sabe como é quando se não está sozinho e é por isso que fica triste.",
        "E é por isso que não está solitário de verdade.",
        "Uma pessoa solitária como você deve ser o Pokémon ..."
    ],
    timid: [
        "Você aparenta ser ...",
        "uma pessoa tímida. Você pode ter medo às vezes, ou ficar com vergonha de se expressar.",
        "Mas sua natureza tímida também é seu ponto bom!",
        "Porque aqueles que conhecem o medo também conhecem a verdadeira coragem.",
        "Uma pessoa tímida como você deve ser o Pokémon ..."
    ],
    naive: [
        "Você aparenta ser ...",
        "uma pessoa ingênua. Você é bem curioso e adora coisas raras.",
        "Sua atitude alegre e despreocupada deve fazer coisas divertidas pras pessoas ao seu redor.",
        "Uma pessoa ingênua como você deve ser o Pokémon ..."
    ],
    sassy: [
        "Você aparenta ser ...",
        "uma pessoa atrevida. Você é um pouco cínico.",
        "Mas apesar disso tem algo atraente e amável em você.",
        "Uma pessoa atrevida como você deve ser o Pokémon ...",
    ],
    hasty: [
        "Você aparenta ser ...",
        "uma pessoa apressada. Você gosta de ir a frente e fazer as coisas.",
        "Talvez você só tenha apertado o botão \"Responder\" sem parar agora.",
        "Você é bem motivado, só tome cuidado pra não se estressar com facilidade!",
        "Uma pessoa apressada como você deve ser o Pokémon ...",
    ],
    calm: [
        "Você aparenta ser ...",
        "uma pessoa calma. Você é capaz de dar conselhos aos seus amigos sem problemas.",
        "Você não gosta de lutar.",
        "Você é uma pessoa gentil que se importa e tem muitos amigos que se modelam em você.",
        "Uma pessoa calma como você deve ser o Pokémon ..."
    ],
    rash: [
        "Você aparenta ser ...",
        "uma pessoa precipitada, só um pouco precipitada demais às vezes!",
        "Ocasionalmente age sem pensar muito, mas em compensação quando tem algo a fazer você vai e faz!",
        "Uma pessoa precipitada como você deve ser o Pokémon ..."
    ],
    quiet: [
        "Você aparenta ser ...",
        "uma pessoa quieta. E muito calma.",
        "Você se dá bem com números e analiza informação antes de fazer decisões.",
        "Raramente comete erros, porque faz suas decisões muito calma e racionalmente.",
        "Uma pessoa quieta como você deve ser o Pokémon ..."
    ],
    bold: [
        "Você aparenta ser ...",
        "uma pessoa ousada.",
        "Muito valente e nunca desiste de nada!",
        "Você não sente muita timidez e não tem problema em fazer muitas coisas que outras pessoas pensariam duas vezes antes de fazer.",
        "Uma pessoa ousada como você deve ser o Pokémon ..."
    ]
}

const titles = {
    docile: "Dócil",
    hardy: "Resiliente",
    jolly: "Feliz",
    impish: "Travessa",
    quirky: "Peculiar",
    relaxed: "Tranquila",
    brave: "Valente",
    lonely: "Solitária",
    timid: "Tímida",
    naive: "Ingênua",
    sassy: "Atrevida",
    hasty: "Apressada",
    rash: "Precipitada",
    quiet: "Quieta",
    bold: "Ousada"
};

const starters = {
    docile: { 123: "Bulbasaur", 456: "Gothita", 789: "Pawmi" },
    hardy: { 123: "Geodude", 456: "Klink", 789: "Rolycoly" },
    jolly: { 123: "Mudkip", 456: "Vanillite", 789: "Cetoddle" },
    impish: { 123: "Gastly", 456: "Venipede", 789: "Nickit" },
    quirky: { 123: "Wurmple", 456: "Tepig", 789: "Rookidee" },
    relaxed: { 123: "Swinub", 456: "Sandile", 789: "Grubbin" },
    brave: { 123: "Machop", 456: "Starly", 789: "Tinkatink" },
    lonely: { 123: "Porygon", 456: "Phantump", 789: "Hatenna" },
    timid: { 123: "Abra", 456: "Axew", 789: "Applin" },
    naive: { 123: "Cyndaquil", 456: "Lillipup", 789: "Grookey" },
    sassy: { 123: "Magnemite", 456: "Froakie", 789: "Quaxly" },
    hasty: { 123: "Zubat", 456: "Timburr", 789: "Litten" },
    calm: { 123: "Cleffa", 456: "Tynamo", 789: "Mudbray" },
    rash: { 123: "Nidoran-m", 456: "Chimchar", 789: "Mareanie" },
    quiet: { 123: "Seedot", 456: "Rogenrolla", 789: "Sandygast" },
    bold: { 123: "Dratini", 456: "Riolu", 789: "Jangmo-o" },
};