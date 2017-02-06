const aboutme = [
  "I am a software engineer who loves clean, efficient and scalable code. I constantly refactor my code and look for ways to make it more readable and more efficient for both memory and time usage. Once I get to work on a project, I fall in love with it and dedicate 100% of myself.",
  "I am a passionate and steady learner who loves the learning experience. I spend vast majority of my time for learning new technologies and owning them. I feel really satisfied when I'm making use of new knowledge!",
  "In addition to writing software, I like to paint with acrylics or oils, exercise, travel, and translate Korean novels to English. I am really interested in helping humanity, like education and environment."];

const skills = [
  "JavaScript",
  "Ruby on Rails",
  "Node/Express",
  "React/Redux",
  "SQL",
  "HTML5/CSS3",
  "TDD",
  "WebSocket"
];

const projects = [
  {
    title: "WaterColor",
    live: "https://evdel720.github.io/watercolor/",
    github: "https://github.com/evdel720/watercolor",
    tech: "JavaScript, HTML/CSS, HTML Canvas",
    description: "WaterColor is a browser based sketching app that simulates the bloom effect of dropping water color onto paper. Along with the user's mouse movement, it initiates a BreadthFirst object with optional data (such as color, size, etc). Each BreadthFirst object picks the next pixel to fill using a breadth-first algorithm and fills the pixel with custom color gradation to generate the seemingly random bloom effect. I love this app because of its efficient algorithm and amazing beauty. Sometimes, I like to draw something on it and look at it for a while.",
    img: "https://res.cloudinary.com/wkdal720/image/upload/v1479779953/imageedit_6_4672038611_shbvrs.gif"
  },
  {
    title: "FormForm",
    live: "http://formform.us-west-1.elasticbeanstalk.com/",
    github: "https://github.com/evdel720/formform",
    tech: "JavaScript, HTML/CSS, WebSocket, Express.js, Node.js, Webpack, Babel, AWS Elastic Beanstalk",
    description: "FormForm is a fun and educational puzzle game that can help developing a geometrical sense. With FormForm, users can think of various ways to make a certain board with given pieces. I love the idea of generating a random board and giving users freedom to make the board with given pieces. Since it doesn't have set boards already made, users can play as many times as they want and it still would be new to them. I generated the random board by shuffling randomly selected pieces, getting the first piece's random rotated/flipped status, putting it in the center, and finding the board that has shortest border length. I made 3 levels for solo play and extra hard level for battle mode. Having more pieces will let users be more creative!",
    img: "https://res.cloudinary.com/wkdal720/image/upload/v1481661014/imageedit__4466087888_nqlmek.gif"
  },
  {
    title: "SpoonHelper",
    live: "http://www.spoonhelper.us",
    github: "https://github.com/evdel720/SpoonHelper",
    tech: "Ruby on Rails, JavaScript, React, Redux, HTML/CSS, Postgresql, Heroku",
    description: "SpoonHelper is a recipe sharing app. I utilized Ruby on Rails for the backend, and JS with React/Redux for the frontend. I used Rails polymorphic associations to use the Image model in both the Category and Recipe table. Also, I made the Recipe controller handle the Step model’s CRUD (Recipe model's subordinated model) by using nested attributes. I joined related tables to prevent n+1 queries and implemented a search feature with both autocomplete and an actual search result page. I kept the edit recipe page’s route without a recipe id to hide the information and prevent an invalid approach. Since this was my first full stack web app, I valued a basic UI with no bugs or errors. When it is expected to do A, then it should do A. That was my goal and I think I did pretty well!",
    img: "https://res.cloudinary.com/wkdal720/image/upload/v1479781237/imageedit_2_8175847738_nmmnax.gif"
  },
  {
    title: "HearthCard Ratings",
    live: "http://www.hearthcardratings.com/",
    github: "https://github.com/JD-softwaredesign/hearthstone-card-ratings",
    tech: "Ruby on Rails, JavaScript, React, Redux, HTML/CSS, Postgresql",
    description: "HearthCard Ratings is a site for users to rate cards for the popular Blizzard game, Hearthstone. Before a new set of cards is released, users can rate on a scale of 1-5 and ratings are locked when the cards are released, so later users can see how accurate their ratings predictions were. It uses a smart store design to reduce queries by grabbing cards and ratings for a user on enter. It keeps the filter information at the component state and applys filters on render, preventing additional queries.",
    img: "https://res.cloudinary.com/wkdal720/image/upload/v1479781605/imageedit_2_4059992972_jx0y0g.gif"
  },
  {
    title: "Algorithms",
    live: "https://www.livecoding.tv/evdel/",
    github: "https://github.com/evdel720/algorithms",
    tech: "Ruby, JavaScript",
    description: "I love problem solving and talking about my code. I code everyday and in this channel, I have so far streamed my coding for over 50 hours. I wanted to be great at explaining my ideas to other people. It had been very joyful and fun! In streaming sessions, I solve coding challenges and implement Data Structures or algorithms. Each session is about an hour. Now I don't stream solving challenges anymore but I still solve 2 problems each day to keep myself on top of them! (Currently working on book, Elements of Programming Interviews. I try my best to explain things easily and I use JS for this.)",
    img: "https://res.cloudinary.com/wkdal720/image/upload/v1480010902/Screen_Shot_2016-11-24_at_10.07.52_AM_qg6pqx.png"
  },
];

const data = {
  aboutme: []
};

module.exports = data;
