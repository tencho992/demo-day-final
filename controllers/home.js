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
    res.render("quizOne.ejs");
    
  },
};
