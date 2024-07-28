class Controller {
    constructor() {
        this.questions = [];
        this.spreads = [];
        this.points = {};

        // Arrow function needed due to this shenanigans
        document.getElementById('go-button').onclick = () => controller.startQuiz();
    }

    startQuiz() {
        let indices = [];
        for (let i = 0; i < 8; ++i) {
            let hashed = (Math.random() * 64) | 0;
            while (indices.includes(hashed)) {
                hashed = (Math.random() * 64) | 0;
            }
            indices.push(hashed);
        }
        indices.push(64);

        this.questions = indices.map(idx => questions[idx]);

        const button = document.getElementById('go-button');
        const clone = button.cloneNode(true);
        clone.textContent = "Responder";
        // Arrow function needed due to this shenanigans
        clone.onclick = () => this.checkAnswer();

        button.remove();
        document.getElementById('card-button-container').appendChild(clone);

        this.askQuestion();
    }

    askQuestion() {
        if (this.questions.length == 0) {
            this.presentResults();
            return;
        }

        const question = this.questions.shift();
        const answers = question.answers;

        let header = document.getElementById('card-header');
        header.style.textAlign = 'left';
        header.textContent = question.text;

        const content = document.getElementById('card-content');
        this.spreads = [];
        let html = `<ul class="list-group" style="padding-bottom: 20px">`;
        for (let i = 0; i < answers.length; ++i) {
            const isChecked = i == 0 ? "checked" : "";
            html += `<li class="list-group-item form-check form-check-inline">` +
                `<input class="form-check-input radio-inline" type="radio" name="question" id="a${i}" ${isChecked}>` +
                `<label class="form-check-label radio-inline" for="a${i}">${answers[i].text}</label>` +
                `</li>`;

            this.spreads.push(answers[i].points);
        }
        html += "</ ul>";

        content.innerHTML = html;
        Controller.setBumpers();
    }

    checkAnswer() {
        for (let i = 0; i < this.spreads.length; ++i) {
            const radio = document.getElementById('a' + i);
            if (radio.checked) {
                for (let key in this.spreads[i]) {
                    this.points[key] = (this.points[key] || 0) + this.spreads[i][key];
                }
                break;
            }
        }

        this.askQuestion();
    }

    presentResults() {
        let biggest = -1;
        let key = "naive";
        for (let k in this.points) {
            if (this.points[k] >= biggest) {
                biggest = this.points[k];
                key = k;
            }
        }


        let gen = null;
        if (this.points.any) {
            let index = (Math.random() * 3) | 0;
            gen = [123, 456, 789][index];
        }
        else {
            gen = this.points.classic ? 123 : this.points.modern ? 456 : 789;
        }

        const header = document.getElementById('card-header');
        header.textContent = titles[key];
        header.style.textAlign = 'center';

        const bottomContainer = document.getElementById('card-button-container');
        bottomContainer.remove();

        const container = document.getElementById('card-content');
        [...container.childNodes].forEach(node => node.remove());

        for (let line in descriptions[key]) {
            const p = document.createElement('p');
            p.textContent = descriptions[key][line];
            container.appendChild(p);
        }

        const img = document.createElement('img');
        img.src = `https://img.pokemondb.net/artwork/avif/${starters[key][gen].toLowerCase()}.avif`;
        img.alt = starters[key];
        img.style = "width: 200px; margin: 0 auto; display: block;";
        container.appendChild(img);

        const p = document.createElement('p');
        p.style.textAlign = "center";
        p.style.paddingTop = "10px";
        p.innerHTML = `<strong>${starters[key][gen]}</strong>`;
        container.appendChild(p);

        Controller.setBumpers();
    }

    static setBumpers() {
        const content = document.getElementById('card');

        const topBumper = document.getElementById('top-bumper');
        const bottomBumper = document.getElementById('bottom-bumper');

        const containerHeight = window.innerHeight;
        const contentHeight = content.getBoundingClientRect().height;

        const bumperSize = (containerHeight - contentHeight) / 2;

        topBumper.style.height = bumperSize + 'px';
        bottomBumper.style.height = bumperSize + 'px';
    }
}

const controller = new Controller();

// Generic listeners
window.addEventListener('resize', Controller.setBumpers);

Controller.setBumpers();
