// Alphabet russe avec sa prononciation en français
const alphabet = [
    {letter: 'А', pronunciation: 'A'},
    {letter: 'Б', pronunciation: 'Bé'},
    {letter: 'В', pronunciation: 'Vé'},
    {letter: 'Г', pronunciation: 'Gué'},
    {letter: 'Д', pronunciation: 'Dé'},
    // Ajoute toutes les autres lettres...
];

// Pronoms russes
const pronouns = [
    {russian: 'Я', french: 'Je'},
    {russian: 'Ты', french: 'Tu'},
    {russian: 'Он', french: 'Il'},
    {russian: 'Она', french: 'Elle'},
    {russian: 'Мы', french: 'Nous'},
    {russian: 'Вы', french: 'Vous'},
    {russian: 'Они', french: 'Ils/Elles'},
];

// Fonction pour afficher une question sur l'alphabet
function displayAlphabetQuestion() {
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    const letterData = alphabet[randomIndex];
    
    document.getElementById('question').textContent = `Quelle est la prononciation de la lettre : ${letterData.letter}?`;
    
    const options = shuffleOptions([letterData.pronunciation, 'Vé', 'Té']);
    
    document.getElementById('option1').textContent = options[0];
    document.getElementById('option2').textContent = options[1];
    document.getElementById('option3').textContent = options[2];

    document.getElementById('option1').onclick = () => checkAnswer(options[0], letterData.pronunciation);
    document.getElementById('option2').onclick = () => checkAnswer(options[1], letterData.pronunciation);
    document.getElementById('option3').onclick = () => checkAnswer(options[2], letterData.pronunciation);
}

// Fonction pour afficher une question sur les pronoms
function displayPronounQuestion() {
    const randomIndex = Math.floor(Math.random() * pronouns.length);
    const pronounData = pronouns[randomIndex];
    
    document.getElementById('pronom-question').textContent = `Quel est le pronom correspondant à : ${pronounData.russian}?`;
    
    const options = shuffleOptions([pronounData.french, 'Il', 'Tu']);
    
    document.getElementById('pronoun-option1').textContent = options[0];
    document.getElementById('pronoun-option2').textContent = options[1];
    document.getElementById('pronoun-option3').textContent = options[2];

    document.getElementById('pronoun-option1').onclick = () => checkPronounAnswer(options[0], pronounData.french);
    document.getElementById('pronoun-option2').onclick = () => checkPronounAnswer(options[1], pronounData.french);
    document.getElementById('pronoun-option3').onclick = () => checkPronounAnswer(options[2], pronounData.french);
}

// Fonction pour vérifier la réponse pour l'alphabet
function checkAnswer(selected, correct) {
    if (selected === correct) {
        document.getElementById('result').textContent = 'Correct!';
    } else {
        document.getElementById('result').textContent = 'Faux! La bonne réponse était ' + correct;
    }
}

// Fonction pour vérifier la réponse pour les pronoms
function checkPronounAnswer(selected, correct) {
    if (selected === correct) {
        document.getElementById('pronoun-result').textContent = 'Correct!';
    } else {
        document.getElementById('pronoun-result').textContent = 'Faux! La bonne réponse était ' + correct;
    }
}

// Mélanger les options pour les rendre aléatoires
function shuffleOptions(options) {
    for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }
    return options;
}

// Charger une question dès le démarrage
displayAlphabetQuestion();
displayPronounQuestion();