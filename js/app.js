var app = new Vue({
  el: '#impress',
  data: {
    slides: [
      {
        id: "scripture",
        classes: [
          "quote"
        ],
        coordinates: {
          x: -1000,
          y: -1500,
          z: 0
        },
        rotate: {},
        payload: `
          <blockquote>
            And He made a scourge of cords, and drove them all out of the temple, with the sheep and the oxen; and He poured out the coins of the money changers and overturned their tables; and to those who were selling the doves He said, "Take these things away; stop making My Father's house a place of business."
            <footer>John 2:15-16, NASB</footer>
          </blockquote>
        `
      },
      {
        id: "story_breakdown",
        classes: [],
        coordinates: {
          x: 500,
          y: 500
        },
        rotate: {
          z: 90
        },
        scale: 1,
        payload: `
          <h2>The Breakdown:</h2>
          <ul>
            <li>Right after Passover</li>
            <li>Food Court</li>
            <li><strong>(Showtime)</strong></li>
            <li><q>Zeal for your House will consume me</q></em>
          </ul>
        `
      },
      {
        id: "feelings",
        classes: [
          "tiny"
        ],
        coordinates: {
          x: 600,
          y: 600,
          z: -3000
        },
        rotate: {
          z: 360
        },
        scale: 1,
        payload: `
          <p>how does that make you <em class="size">feel?</em></p>
        `
      },
      {
        id: "justified",
        classes: [
          "big"
        ],
        coordinates: {
          x: 3500,
          y: 2100
        },
        rotate: {
          z: 180
        },
        scale: 6,
        payload: `
          <p>
            anger is
            <strong>valid</strong>
            <span>it's just not the point</span>
          </p>
        `
      },
      {
        id: "timing",
        classes: [],
        coordinates: {
          x: 6000,
          y: 3000
        },
        rotate: {
          z: 90
        },
        scale: 5,
        payload: `
          <p>
            <h2>after all:</h2>
            Jesus took His time
            <br />
            <strong>and <em>nobody</em> called the cops</strong>
          </p>
        `
      },
      {
        id: "title",
        classes: [
          "title"
        ],
        coordinates: {
          x: 0,
          y: -1000
        },
        rotate: {},
        scale: 3,
        payload: `
          <header>we want to live</header>
          <h1>on purpose</h1>
          <footer>miracles start when we make room</footer>
        `
      },
      {
        id: "passover",
        classes: [],
        coordinates: {
          x: 250,
          y: 3000
        },
        rotate: {
          z: 270
        },
        scale: 5,
        payload: `
          <p>
            Passover is <strong>tradition,</strong> <strong>freedom,</strong> and <em>something else</em>
          </p>
        `
      },
      {
        id: "tp_parable",
        classes: [
          "quote"
        ],
        coordinates: {
          x: 0,
          y: -1500,
          z: 0
        },
        rotate: {},
        payload: `
          <p>
            <em>And now:</em>
          </p>
          <h1>The Parable of the Toilet Paper</h1>
        `
      },
      {
        id: "needful",
        classes: [],
        coordinates: {
          x: 6700,
          y: -300
        },
        rotate: {},
        scale: 6,
        payload: `
          <p>
            There is a perfect tool for every job
          </p>
          <p>
            <strong>You know what you need to do</strong>
          </p>
        `
      },
      {
        id: "economic",
        classes: [],
        coordinates: {
          x: 7700,
          y: 2000
        },
        rotate: {
          z: 180
        },
        scale: 4,
        payload: `
          <h1>The Revolution is <em>Economic</em></h1>
        `
      },
      {
        id: "zeal",
        classes: [
          "tiny"
        ],
        coordinates: {
          x: 6000,
          y: 4000,
          z: -2000
        },
        rotate: {},
        scale: 2,
        payload: `
          <p>so, <em>zeal?</em></p>
        `
      },
      {
        id: "normal",
        classes: [
          "big"
        ],
        coordinates: {
          x: -2500,
          y: 2000
        },
        rotate: {
          z: 90
        },
        scale: 4,
        payload: `
          <p>
            <strong>Normal</strong>
            <span>might not be what you think it is</span>
          </p>
        `
      },
      {
        id: "fall",
        classes: [],
        coordinates: {
          x: 7000,
          y: 1000,
          z: 0
        },
        rotate: {
          z: 270
        },
        scale: 1,
        payload: `
          <p>
            sometimes you have to bring down the house to lift up the home
          </p>
        `
      },
      {
        id: "rise",
        classes: [],
        coordinates: {
          x: 7200,
          y: 1000,
          z: -100
        },
        rotate: {
          y: 40,
          z: 270
        },
        scale: 1,
        payload: `
          <p>
            <em>(but you have a choice about how that gets done)</em>
          </p>
        `
      },
      {
        id: "process",
        classes: [
          "quote"
        ],
        coordinates: {
          x: 1000,
          y: -1500,
          z: 0
        },
        rotate: {},
        payload: `
          <h1>The Process:</h1>
          <ol>
            <li>Give thanks for your <strong>freedom</strong> and <strong>connection</strong></li>
            <li>Recognize that there's <strong>work</strong> to be done</li>
            <li><strong>do.<br />the.<br />work.</strong>
          </ol>
        `
      },
      {
        id: "overview",
        classes: [],
        coordinates: {
          x: 3000,
          y: 1500,
          z: 0
        },
        rotate: {},
        scale: 10,
        payload: `
        `
      },
      {
        id: "signoff",
        classes: [],
        coordinates: {
          x: 3000,
          y: 4000,
          z: 0
        },
        rotate: {
          x: -70
        },
        scale: 2,
        payload: `
          <p>
            Because after all,
            <br />
            <strong>Freedom is a Choice.</strong>
          </p>
        `
      }
    ]
  },
  mounted() {
    impress().init();
  }
});

/*
//EMPTY SLIDE OBJECT, FOR COPY/PASTE
{
  id: "",
  classes: [],
  coordinates: {
    x: 0,
    y: 0,
    z: 0
  },
  rotate: {
    x: 0,
    y: 0,
    z: 0,
  },
  scale: 0,
  payload: `
  `
}

//EXAMPLE SLIDE OBJECT
{
  id: "myslide", //should be unique; NOT OPTIONAL
  classes: [ //can send empty array here - some example classes below (you wouldn't want to use all of these in the same slide):
    "quote", //makes the slide appear like a traditional slide, with border, etc.
    "title", //used to make the main title of the presentation; you proably only one of these in your deck.
    "big", //I bet you can guess what this one does.
    "tiny", //please see previous note.
    //you can also add any other css classes you want here, naturally.
  ],
  coordinates: { //the position of the CENTER of the slide on the canvas (in pixels); default for each value is 0. Do not need to populate all three values.
    x: 0,
    y: 0,
    z: 0
  },
  rotate: { //the rotation of the slide; default value is 0, and you don't need to send all three.
    x: 0,
    y: 0,
    z: 0,
  },
  scale: 0, //scale of the element; default value is 1.
  payload: `
    <h1>This is an example.</h1>
    <p>You can put any HTML here that you like.</p>
    <p>You can also add some inline classes to animate <b class="shift">position</b>, <b class="spin wait short">rotation</b> and <b class="size wait medium">scale</b>.</p>
    <p>(you probably already noticed that there are "short," "medium," and "long" classes that delay the animation. For more details, check out the css/main.less file.)</p>
  `
},
{ //you almost certainly want an "overview" slide at the end of your deck.
  id: "overview",
  classes: [],
  coordinates: {
    x: 3000,
    y: 1500,
    z: 0
  },
  rotate: {},
  scale: 10,
  payload: `
  `
}
*/
