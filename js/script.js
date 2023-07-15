let question = {
  title: "gato",
  alternatives: ["dog", "cat", "bird", "fish"],
  correctAnswer: 1,
};

let questions = [
  // Question Expression
  {
    title: "Naam",
    alternatives: ["non", "oui", "stop", "ok"],
    correctAnswer: 1,
  },

  {
    title: "Aafak",
    alternatives: ["j'ai compris", "pardon", "de rien", "stp"],
    correctAnswer: 3,
  },

  {
    title: "Fahmt",
    alternatives: ["non", "stp", "oui", "j'ai compris"],
    correctAnswer: 3,
  },

  {
    title: "Bslama",
    alternatives: ["j'ai compris", "pardon", "non", "Au revoir"],
    correctAnswer: 3,
  },
  {
    title: "Wakha",
    alternatives: ["j'ai compris", "ok", "de rien", "non"],
    correctAnswer: 1,
  },

  {
    title: "Sba'7 l'KHir'",
    alternatives: ["j'ai compris", "bonjour", "ok", "au revoir"],
    correctAnswer: 1,
  },

  {
    title: "Mafahmtch",
    alternatives: ["pardon", "encore", "je ne comprends pas", "je vais partir"],
    correctAnswer: 2,
  },

  {
    title: "Msa l'Khir",
    alternatives: ["à demain", "bonne nuit", "non", "bonsoir"],
    correctAnswer: 3,
  },

  {
    title: "Smah liya",
    alternatives: ["je ne comprends", "non merci", "pardon", "d'accord"],
    correctAnswer: 2,
  },

  //Question Nombres

  {
    title: "Khamsa",
    alternatives: [1, 8, 5, 15],
    correctAnswer: 2,
  },

  {
    title: "Tsaoude",
    alternatives: [12, 8, 3, 9],
    correctAnswer: 3,
  },

  {
    title: "Sbatache",
    alternatives: [22, 8, 7, 17],
    correctAnswer: 3,
  },
  {
    title: "Tmania ou achrine",
    alternatives: [30, 42, 28, 23],
    correctAnswer: 2,
  },

  {
    title: "Khamsine",
    alternatives: [15, 5, 32, 50],
    correctAnswer: 3,
  },

  {
    title: "Tsaoude ou tlatine",
    alternatives: [58, 23, 33, 39],
    correctAnswer: 3,
  },

  {
    title: "Tnine ou tlatine",
    alternatives: [18, 42, 64, 39],
    correctAnswer: 3,
  },

  {
    title: "Khamsa ou arbrine",
    alternatives: [55, 25, 15, 45],
    correctAnswer: 3,
  },

  {
    title: "Sabra",
    alternatives: [12, 27, 7, 3],
    correctAnswer: 2,
  },

  {
    title: "Stta ou tlatine",
    alternatives: [22, 36, 7, 48],
    correctAnswer: 1,
  },
  {
    title: "Tlata ou achrine",
    alternatives: [10, 58, 23, 42],
    correctAnswer: 2,
  },

  {
    title: "Tnache",
    alternatives: [10, 20, 2, 12],
    correctAnswer: 3,
  },

  {
    title: "Tnine ou arbrine",
    alternatives: [42, 8, 44, 29],
    correctAnswer: 0,
  },

  {
    title: "T'ssrine",
    alternatives: [22, 70, 64, 90],
    correctAnswer: 3,
  },

  {
    title: "alf",
    alternatives: [0, 100, 1000, 10],
    correctAnswer: 2,
  },

  {
    title: "Tsa3tache",
    alternatives: [19, 8, 15, 7],
    correctAnswer: 0,
  },

  {
    title: "Tmania ou arbrine",
    alternatives: [74, 8, 23, 48],
    correctAnswer: 3,
  },
  {
    title: "Khamsa ou achrine",
    alternatives: [30, 25, 20, 55],
    correctAnswer: 1,
  },

  {
    title: "Wahad",
    alternatives: [0, 20, 100, 1],
    correctAnswer: 3,
  },

  {
    title: "Rbatache",
    alternatives: [12, 14, 33, 24],
    correctAnswer: 1,
  },

  {
    title: "Sabrine",
    alternatives: [7, 40, 70, 27],
    correctAnswer: 2,
  },

  {
    title: "Tlata",
    alternatives: [55, 13, 22, 3],
    correctAnswer: 3,
  },

  {
    title: "Rbatache",
    alternatives: [24, 27, 14, 4],
    correctAnswer: 2,
  },

  {
    title: "R'abra ou tlatine",
    alternatives: [44, 36, 30, 34],
    correctAnswer: 3,
  },

  {
    title: "Sttine",
    alternatives: [66, 58, 60, 70],
    correctAnswer: 2,
  },

  {
    title: "Wahad ou achrine",
    alternatives: [10, 20, 12, 21],
    correctAnswer: 3,
  },

  {
    title: "Jouje",
    alternatives: [2, 3, 41, 20],
    correctAnswer: 0,
  },

  {
    title: "Stta ou arbrine",
    alternatives: [22, 70, 46, 77],
    correctAnswer: 2,
  },

  {
    title: "Arbrine",
    alternatives: [4, 44, 64, 40],
    correctAnswer: 3,
  },

  {
    title: "Tmantache",
    alternatives: [8, 25, 18, 20],
    correctAnswer: 2,
  },

  {
    title: "Sabra ou tlatine",
    alternatives: [22, 47, 7, 37],
    correctAnswer: 3,
  },

  {
    title: "Mya",
    alternatives: [100, 10000, 1000, 10],
    correctAnswer: 0,
  },

  {
    title: "Khamastache",
    alternatives: [50, 58, 15, 29],
    correctAnswer: 2,
  },

  {
    title: "Tlatine",
    alternatives: [10, 20, 2, 30],
    correctAnswer: 3,
  },

  {
    title: "R'abra",
    alternatives: [42, 4, 44, 40],
    correctAnswer: 1,
  },

  {
    title: "Tmanine",
    alternatives: [18, 70, 80, 27],
    correctAnswer: 2,
  },

  {
    title: "Stta",
    alternatives: [70, 5, 7, 6],
    correctAnswer: 3,
  },

  {
    title: "Tsaoude ou arbrine",
    alternatives: [40, 29, 49, 7],
    correctAnswer: 2,
  },

  {
    title: "Wahad ou tlatine",
    alternatives: [41, 21, 11, 31],
    correctAnswer: 3,
  },

  {
    title: "Tmania",
    alternatives: [18, 48, 8, 28],
    correctAnswer: 2,
  },

  {
    title: "Sabra ou arbrine",
    alternatives: [47, 27, 57, 70],
    correctAnswer: 0,
  },

  {
    title: "Stta ou achrine",
    alternatives: [46, 72, 26, 47],
    correctAnswer: 2,
  },

  {
    title: "R'abra ou arbrine",
    alternatives: [24, 74, 70, 44],
    correctAnswer: 3,
  },

  {
    title: "Achrine",
    alternatives: [20, 100, 40, 50],
    correctAnswer: 0,
  },

  {
    title: "Wahad ou arbrine",
    alternatives: [21, 11, 41, 40],
    correctAnswer: 2,
  },

  {
    title: "Tnine ou achrine",
    alternatives: [44, 54, 42, 22],
    correctAnswer: 3,
  },

  {
    title: "Tsaoude ou achrine",
    alternatives: [29, 59, 49, 79],
    correctAnswer: 0,
  },

  {
    title: "Ach'ra",
    alternatives: [20, 44, 10, 21],
    correctAnswer: 2,
  },

  {
    title: "Tlata ou tlatine",
    alternatives: [43, 3, 53, 33],
    correctAnswer: 3,
  },

  {
    title: "Teltache",
    alternatives: [23, 13, 53, 43],
    correctAnswer: 1,
  },

  {
    title: "R'abra ou achrine",
    alternatives: [44, 54, 14, 24],
    correctAnswer: 3,
  },

  {
    title: "Khamsa ou tlatine",
    alternatives: [35, 25, 45, 55],
    correctAnswer: 0,
  },

  {
    title: "Sabra ou achrine",
    alternatives: [47, 17, 27, 57],
    correctAnswer: 2,
  },

  {
    title: "Tmania ou tlatine",
    alternatives: [38, 48, 18, 88],
    correctAnswer: 0,
  },

  {
    title: "Tlata ou arbrine",
    alternatives: [23, 13, 53, 43],
    correctAnswer: 3,
  },

  // Nourriture

  {
    title: "Hanout",
    alternatives: ["magasin", "epicier", "fromagerie", "conserve"],
    correctAnswer: 1,
  },

  {
    title: "Sokar",
    alternatives: ["pimenté", "sucre", "chaud", "poivre"],
    correctAnswer: 1,
  },

  {
    title: "L'bzar",
    alternatives: ["sel", "poivron", "poivre", "piquant"],
    correctAnswer: 2,
  },

  {
    title: "Hara",
    alternatives: ["acide", "chaud", "piquant", "poivre"],
    correctAnswer: 2,
  },

  {
    title: "Rhizo",
    alternatives: ["poivron", "citrouille", "carotte", "choux"],
    correctAnswer: 2,
  },

  {
    title: "Kharqoum",
    alternatives: ["cumin", "curry", "curcuma", "sel"],
    correctAnswer: 2,
  },

  {
    title: "L'Bayd",
    alternatives: ["oeuf", "viande", "fromagerie", "poulet"],
    correctAnswer: 0,
  },

  {
    title: "L'elma",
    alternatives: ["maman", "boire", "chaud", "eau"],
    correctAnswer: 3,
  },

  {
    title: "Moul l'hanout",
    alternatives: ["appartement", "la maison", "l'epicier", "le centre ville"],
    correctAnswer: 2,
  },

  {
    title: "Limoune",
    alternatives: ["acide", "pomme", "piquant", "citron"],
    correctAnswer: 3,
  },

  {
    title: "x baydat",
    alternatives: ["oeuf", "citrouille", "les oeufs", "choux"],
    correctAnswer: 2,
  },

  {
    title: "Fine l'hanout?",
    alternatives: [
      "elle est ou la sortie?",
      "elle est ou la maison?",
      "ou aller?",
      "elle est ou l'epicerie?",
    ],
    correctAnswer: 3,
  },

  {
    title: "Rali Bezzaaf",
    alternatives: [
      "c'est trop cher",
      "c'est trop rapide",
      "c'est trop loin",
      "c'est dommage",
    ],
    correctAnswer: 0,
  },

  {
    title: "B'chehal?",
    alternatives: [
      "c'est loin?",
      "c'est ou?",
      "combien ca coute?",
      "de l'argent?",
    ],
    correctAnswer: 2,
  },

  {
    title: "Fine",
    alternatives: ["ou", "ici", "derriere", "a coté"],
    correctAnswer: 0,
  },

  {
    title: "Bghite wa7da",
    alternatives: ["peut-etre", "j'en veux une", "a demain", "je ne sais pas"],
    correctAnswer: 1,
  },

  {
    title: "7na",
    alternatives: ["nous", "tu", "elle", "je"],
    correctAnswer: 3,
  },

  {
    title: "Koulchi",
    alternatives: ["tout", "non", "d'accord", "rien"],
    correctAnswer: 0,
  },

  //

  {
    title: "Achrine",
    alternatives: [20, 100, 40, 50],
    correctAnswer: 0,
  },

  {
    title: "Wahad ou arbrine",
    alternatives: [21, 11, 41, 40],
    correctAnswer: 2,
  },

  {
    title: "Tnine ou achrine",
    alternatives: [44, 54, 42, 22],
    correctAnswer: 3,
  },

  {
    title: "Tsaoude ou achrine",
    alternatives: [29, 59, 49, 79],
    correctAnswer: 0,
  },

  {
    title: "Ach'ra",
    alternatives: [20, 44, 10, 21],
    correctAnswer: 2,
  },

  {
    title: "Tlata ou tlatine",
    alternatives: [43, 3, 53, 33],
    correctAnswer: 3,
  },

  {
    title: "Teltache",
    alternatives: [23, 13, 53, 43],
    correctAnswer: 1,
  },

  {
    title: "R'abra ou achrine",
    alternatives: [44, 54, 14, 24],
    correctAnswer: 3,
  },

  {
    title: "Khamsa ou tlatine",
    alternatives: [35, 25, 45, 55],
    correctAnswer: 0,
  },

  {
    title: "Sabra ou achrine",
    alternatives: [47, 17, 27, 57],
    correctAnswer: 2,
  },

  {
    title: "Tmania ou tlatine",
    alternatives: [38, 48, 18, 88],
    correctAnswer: 0,
  },

  {
    title: "Tlata ou arbrine",
    alternatives: [23, 13, 53, 43],
    correctAnswer: 3,
  },

  {
    title: "Houwa",
    alternatives: ["il", "elle", "nous", "vous"],
    correctAnswer: 0,
  },

  {
    title: "Massousse",
    alternatives: ["avec sucre", "sucre", "sans sucre", "trop sucré"],
    correctAnswer: 2,
  },

  {
    title: "Hiya",
    alternatives: ["elle", "il", "je", "tu"],
    correctAnswer: 0,
  },

  {
    title: "ghlade",
    alternatives: ["gros", "grand", "petit", "nain"],
    correctAnswer: 0,
  },

  {
    title: "jemaa",
    alternatives: ["lundi", "samedi", "vendredi", "mercredi"],
    correctAnswer: 2,
  },

  {
    title: "moum ken",
    alternatives: ["peut etre", "je ne sais pas", "est-ce-que", "a demain"],
    correctAnswer: 3,
  },

  {
    title: "Sarf",
    alternatives: ["la monnaie", "l'argent", "le billet", "la carte bancaire"],
    correctAnswer: 0,
  },

  {
    title: "Aateni",
    alternatives: ["je n'ai pas", "pourquoi", "donne moi", "oui"],
    correctAnswer: 2,
  },

  {
    title: "bzef",
    alternatives: ["stop", "gros", "l'epicier", "beaucoup"],
    correctAnswer: 3,
  },

  {
    title: "l'had",
    alternatives: ["dimanche", "jeudi", "mardi", "vendredi"],
    correctAnswer: 0,
  },

  {
    title: "bel",
    alternatives: ["sans", "non", "avec", "pourquoi pas"],
    correctAnswer: 2,
  },

  {
    title: "Bghite wahad",
    alternatives: [
      "c'est loin",
      "elle est ou la maison?",
      "ou aller?",
      "j'en veux un",
    ],
    correctAnswer: 3,
  },

  {
    title: "Nta",
    alternatives: ["tu masculin", "vous", "nous", "elle feminin"],
    correctAnswer: 0,
  },

  {
    title: "andi",
    alternatives: ["ok", "non", "j'ai", "ou"],
    correctAnswer: 2,
  },

  {
    title: "nos kilo",
    alternatives: ["demi kilos", "un kilo", "juste un kilo", "avec un kilo"],
    correctAnswer: 0,
  },

  {
    title: "bzerba",
    alternatives: ["un", "courir", "double", "vite"],
    correctAnswer: 3,
  },

  {
    title: "Chi taman zwin",
    alternatives: [
      "fais un bon prix",
      "c'est trop cher",
      "je n'ai pas d'argent",
      "non je ne veux pas",
    ],
    correctAnswer: 0,
  },

  {
    title: "Ntouma",
    alternatives: ["tout", "non", "vous", "rien"],
    correctAnswer: 2,
  },

  {
    title: "Ana",
    alternatives: ["je", "il", "lui", "elle"],
    correctAnswer: 0,
  },

  {
    title: "larbaa",
    alternatives: ["dimanche", "jeudi", "vendredi", "mercredi"],
    correctAnswer: 3,
  },

  {
    title: "Chlada",
    alternatives: ["tomate", "salade", "chips", "cereale"],
    correctAnswer: 1,
  },

  {
    title: "tnin",
    alternatives: ["lundi", "jeudi", "mardi", "vendredi"],
    correctAnswer: 0,
  },

  {
    title: "maandich",
    alternatives: ["d'accord", "je n'ai pas", "avec", "pourquoi pas"],
    correctAnswer: 1,
  },

  {
    title: "rhmis",
    alternatives: ["jeudi", "mercredi", "lundi", "dimanche"],
    correctAnswer: 0,
  },

  {
    title: "flouss",
    alternatives: ["attends", "vous", "nous", "argent"],
    correctAnswer: 3,
  },

  {
    title: "Mon frère",
    alternatives: ["ma soeur", "mon pere", "mon frere", "mon fils"],
    correctAnswer: 3,
  },

  {
    title: "Felfla",
    alternatives: ["poivron", "patate", "piment", "poivre"],
    correctAnswer: 0,
  },

  {
    title: "basla",
    alternatives: ["carotte", "epice", "sandwich", "oignon"],
    correctAnswer: 3,
  },

  {
    title: "Maandich sarf",
    alternatives: [
      "je n'ai pas la monnaie",
      "je n'ai pas de billet",
      "je n'ai pas d'argent",
      "non je ne veux pas",
    ],
    correctAnswer: 0,
  },

  {
    title: "Nti",
    alternatives: ["toi", "tu masculin", "vous", "tu feminin"],
    correctAnswer: 3,
  },

  {
    title: "adi/ada",
    alternatives: ["ça", "la", "ici", "lui/elle"],
    correctAnswer: 0,
  },

  {
    title: "tlat",
    alternatives: ["lundi", "dimanche", "mardi", "jeudi"],
    correctAnswer: 2,
  },

  {
    title: "dyal",
    alternatives: ["de", "ça", "la", "ou pas"],
    correctAnswer: 0,
  },

  {
    title: "Kbir",
    alternatives: ["petit", "mince", "grand", "loin"],
    correctAnswer: 2,
  },

  {
    title: "sebt",
    alternatives: ["samedi", "lundi", "dimanche", "jeudi"],
    correctAnswer: 0,
  },

  {
    title: "Wa7da",
    alternatives: ["je", "vous", "il", "une"],
    correctAnswer: 3,
  },

  {
    title: "Chouia",
    alternatives: ["trop", "encore", "pas assez", "un peu"],
    correctAnswer: 3,
  },

  {
    title: "Oh Bezzaaf",
    alternatives: [
      "C'est cher",
      "je n'ai pas assez",
      "je ne veux pas",
      "je pars demain",
    ],
    correctAnswer: 0,
  },

  {
    title: "matecha",
    alternatives: ["de", "la bas", "sauce", "tomate"],
    correctAnswer: 3,
  },

  {
    title: "tofah",
    alternatives: ["poivre", "citron", "orange", "pomme"],
    correctAnswer: 3,
  },

  {
    title: "Mel'ha",
    alternatives: ["sel", "poivre", "piquant", "epicé"],
    correctAnswer: 0,
  },

  {
    title: "Kamoun",
    alternatives: ["eau", "curry", "poivre", "une"],
    correctAnswer: 2,
  },
  {
    title: "Stache",
    alternatives: [46, 16, 26, 56],
    correctAnswer: 2,
  },
];

let app = {
  currPosition: 0,
  score: 0,
  randomQuestion: null,

  start: function () {
    // get alternatives
    let alts = document.querySelectorAll(".alternative");

    alts.forEach((element, index) => {
      element.addEventListener("click", () => {
        // check correct answer
        this.checkAnswer(index);
      });
    });

    // refresh stats
    this.updateStats();

    // show current question
    this.showQuestion();
  },

  showQuestion: function () {
    // Générer un index aléatoire
    let randomIndex = Math.floor(Math.random() * questions.length);
    this.randomQuestion = questions[randomIndex];

    // Afficher la question aléatoire
    let titleDiv = document.getElementById("title");
    titleDiv.textContent = this.randomQuestion.title;

    let alts = document.querySelectorAll(".alternative");

    alts.forEach((element, index) => {
      element.textContent = this.randomQuestion.alternatives[index];
    });
  },

  checkAnswer: function (userSelected) {
    if (this.randomQuestion.correctAnswer === userSelected) {
      // Correct answer
      this.score++;
      this.showResult(true);
    } else {
      // Incorrect answer
      this.showResult(false);
    }

    // Refresh stats
    this.updateStats();

    // Show next question
    this.showQuestion();
  },

  increasePosition: function () {
    this.currPosition++;

    if (this.currPosition == questions.length) {
      this.currPosition = 0;
    }
  },

  updateStats: function () {
    let scoreDiv = document.getElementById("score");
    scoreDiv.textContent = `Your score: ${this.score}`;
  },

  showResult: function (isCorrect) {
    let resultDiv = document.getElementById("result");
    let result = "";

    if (isCorrect) {
      result = "✅ Correct Answer!";
    } else {
      let correctAnswerIndex = this.randomQuestion.correctAnswer;
      let correctAnswerText =
        this.randomQuestion.alternatives[correctAnswerIndex];
      result = `🤐 Wrong! Correct answer: ${correctAnswerText}`;
    }

    resultDiv.textContent = result;
  },
};

app.start();
