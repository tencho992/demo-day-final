module.exports = {
  getIndex: (req, res) => {
    res.render("index.ejs");
    
  },
  getNews: (req, res) => {
    res.render("news.ejs");
    
  },
  getAbout: (req, res) => {
    res.render("about.ejs");
    
  },
  getContact: (req, res) => {
    res.render("contact.ejs");
    
  },
  getCourseList: (req, res) => {
    res.render("courseList.ejs");
    
  },
  getCourseDetails: (req, res) => {
    res.render("courseDetails.ejs");
    
  },
  getPracticeOne: (req, res) => {
    res.render("practiceOne.ejs");
    
  },
  getQuizOne: (req, res) => {
    const testQuestions = [
      {
        questionNum: 1,
        question: 'Match the consonants to the sound',
        img: "assets/img/course/game/tka.png",
        character: ['assets/img/course/game/ka.png','assets/img/course/game/ra.png','assets/img/course/game/ha.png'],
        correctIndex: 1
      },
      {
        questionNum: 2,
        question: 'Match the consonants to the sound',
        img: "assets/img/course/game/tha.png",
        character: ['assets/img/course/game/ka.png','assets/img/course/game/ha.png','assets/img/course/game/ma.png'],
        correctIndex: 2
      },
      {
        questionNum: 3,
        question: 'Match the sound to the consonants',
        img: "assets/img/course/game/cha.png",
        character: ['assets/img/course/game/tra.png','assets/img/course/game/tma.png','assets/img/course/game/tcha.png'],
        correctIndex: 3
      },
      {
        questionNum: 4,
        question: 'Match the sound to the consonants',
        img: "assets/img/course/game/ra.png",
        character: ['assets/img/course/game/tka.png','assets/img/course/game/tma.png','assets/img/course/game/tra.png'],
        correctIndex: 3
      },
      {
        questionNum: 5,
        question: 'Match the sound to the consonants',
        img: "assets/img/course/game/ka.png",
        character: ['assets/img/course/game/k.png','assets/img/course/game/tha.png','assets/img/course/game/tkha.png'],
        correctIndex: 1
      },
      {
        question: 'Match the sound to the consonants',
        img: "assets/img/course/game/kha.png",
        character: ['assets/img/course/game/tka.png','assets/img/course/game/tkha.png','assets/img/course/game/tha.png'],
        correctIndex: 2
      },
      {
        question: 'Match the sound to the consonants',
        img: "assets/img/course/game/ma.png",
        character: ['assets/img/course/game/tcha.png','assets/img/course/game/tma.png','assets/img/course/game/tra.png'],
        correctIndex: 2
      },
      {
        question: 'Match the sound to the consonants',
        img: "assets/img/course/game/ka.png",
        character: ['assets/img/course/game/tka.png','assets/img/course/game/tha.png','assets/img/course/game/tkha.png'],
        correctIndex: 1
      },
      {
        question: 'Match the consonant to the sound',
        img: "assets/img/course/game/tra.png",
        character: ['assets/img/course/game/ma.png','assets/img/course/game/cha.png','assets/img/course/game/ra.png'],
        correctIndex: 3
      },
      {
        question: 'Match the sound to the consonants',
        img: "assets/img/course/game/pa.png",
        character: ['assets/img/course/game/tha.png','assets/img/course/game/tpa.png','assets/img/course/game/taa.png'],
        correctIndex: 2
      },
      {
        question: 'Match the sound to the consonants',
        img: "assets/img/course/game/na.png",
        character: ['assets/img/course/game/taa.png','assets/img/course/game/tna.png','assets/img/course/game/tma.png'],
        correctIndex: 2
      },
      {
        question: 'Match the sound to the consonants',
        img: "assets/img/course/game/aa.png",
        character: ['assets/img/course/game/taa.png','assets/img/course/game/tha.png','assets/img/course/game/tkha.png'],
        correctIndex: 1
      },
     
    ]
      for (let i = testQuestions.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [testQuestions[i], testQuestions[j]] = [testQuestions[j], testQuestions[i]];
      }
    console.log(testQuestions)
    res.render("quizOne.ejs", {testQuestions : testQuestions});
    
  },
  getCompleteGame: (req, res) => {
    res.render("completeGame.ejs");
    
  },
  getCompleteQuiz: (req, res) => {
    res.render("completeQuiz.ejs");
    
  }
};
