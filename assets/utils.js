function hashPreprocess(name) {
    return name.toLowerCase().replace(/[^a-zãõéíúóêôç]/i, "");
}

function hash(name) {
    const preprocess = hashPreprocess(name);

    let hashed = 0;
    for (const index in preprocess) {
        const ch = preprocess.charCodeAt(index);
        hashed += ch * (index + 1);
        hashed %= 0xFFFF;
    }

    return hashed;
}

function prngFactory(seed) {
    let value = seed;

    let prng = () => {
        const a = 7;
        const c = 11;
        const m = 10037;

        const next = (a * value + c) % m;
        value = next;

        return next;
    }

    return prng;
}

let playerName = null;
let playerData = {}
let seed = null;
let prng = null;
let questionsIds = [];
let dicts = [];

function populate(id) {
    const question = questions[id];
    document.getElementById('quiz-question').textContent = question.text;

    const answers = question.answers;
    const form = document.getElementById('question-body');
    form.innerHTML = "";

    dicts = [];
    for (const answer in answers) {
        let answerText = question.answers[answer].text;
        dicts.push(question.answers[answer].points);

        const isFirst = answer == 0 ? "checked" : "";

        form.innerHTML += `<div class="form-check">` +
            `<input class="form-check-input" type="radio" name="q" id="a${answer}" ${isFirst}>` +
            `<label class="form-check-label" for="a${answer}">${answerText}</label>` +
            `</div>`;
    }
}

function updateData(dict) {
    for (let key in dict) {
        playerData[key] = (playerData[key] || 0) + dict[key];
    }
}

function checkAnswer() {
    let i = 0;
    for (; i < 4; ++i) {
        const checked = document.getElementById('a' + i).checked;
        if (checked) {
            break;
        }
    }

    updateData(dicts[i]);
    if (questionsIds.length > 0) {
        populate(questionsIds[0]);
        questionsIds.shift();
    } else {
        document.getElementById('quiz-body').style.display = 'none';
        document.getElementById('quiz-answer').style.display = 'block';

        populateAnswer(playerData);
    }
}

function populateAnswer(playerData) {
    let maxValue = -1;
    let maxKey = null;
    for (let key in playerData) {
        if (playerData[key] > maxValue) {
            maxKey = key;
        }
    }

    let description = descriptions[maxKey].map(str => `<p>${str}</p>`).join('\n');
    description += `<h2>${starters[maxKey].mon}</h2>`;
    description += `<img src="https://img.pokemondb.net/artwork/avif/${starters[maxKey].mon.toLowerCase()}.avif" />`;

    document.getElementById('quiz-answer').innerHTML = description;
}

function prepQuiz() {
    playerName = document.getElementById('name').value;
    seed = hash(playerName);
    prng = prngFactory(seed);

    document.getElementById('quiz-intro').style.display = 'none';
    document.getElementById('quiz-body').style.display = 'block';

    for (let i = 0; i < 8; ++i) {
        let id = prng() & 63;
        while (questionsIds.includes(id)) {
            id = (id + 1) & 63;
        }

        questionsIds.push(id);
    }

    populate(questionsIds[0]);
    questionsIds.shift();
}

document.getElementById('name-button').onclick = prepQuiz;