var app = new Vue({
  el: '#impress',
  data: function() {
    return {
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
            And he said to them, "Do not be amazed; you are looking for Jesus the Nazarene, who has been crucified. He has risen; He is not here; behold, here is the place where they laid Him. But go, tell His disciples and Peter, 'He is going ahead of you to Galilee; there you will see Him, just as He told you.'"
            <footer>Mark 16:6-7, NASB</footer>
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
          <h2>Life Wins.</h2>
          <p>
            This is the culmination of
            <br />
            <em>His</em> ministry and <em>our</em> experience.
          </p>
        `
      },
      {
        id: "reality",
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
            this was real.
            <strong>it happened.</strong>
            <span>life <em>and</em> death.</span>
          </p>
        `
      },
      {
        id: "fixation",
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
          <p>which part do you <b class="size">see?</b></p>
        `
      },
      {
        id: "acceptance",
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
            <h2>we get what we expect</h2>
            what has room in your life?
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
          <header>what part of this is</header>
          <h1>amazing?</h1>
          <footer>Be delighted. Be grateful. Just don't be surprised.</footer>
        `
      },
      {
        id: "absence",
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
          <h1>"It's Gone."</h1>
          <p>Instead of fixating on creation, this story is about proof through <em>absence.</em></p>
          <p>&nbsp;</p>
          <p>Your life is <strong>full</strong> of empty tombs.</p>
        `
      },
      {
        id: "evidence",
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
            <strong>everything</strong> is a footprint
          </p>
        `
      },
      {
        id: "redux",
        classes: [],
        coordinates: {
          x: 6700,
          y: -300
        },
        rotate: {},
        scale: 6,
        payload: `
          <p>
            lift up your vision
          </p>
          <p>
            <strong>do not be amazed</strong>
          </p>
        `
      },
      {
        id: "guides",
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
          <h1>there are guides in every story</h1>
        `
      },
      {
        id: "solitude",
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
          <p>you were <em>never</em> alone</p>
        `
      },
      {
        id: "mantra",
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
            look for
            <strong>one true thing</strong>
            <span>it's always there</span>
          </p>
        `
      },
      {
        id: "message",
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
            life and healing is at the core
          </p>
        `
      },
      {
        id: "transition",
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
            from <em>possible</em> to <em>probable</em> to <strong>certain</strong>
          </p>
        `
      },
      {
        id: "deal",
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
          <h1>The Beginning:</h1>
          <ul>
            <li>The tomb is empty</li>
            <li>You are not alone</li>
            <li><strong>Do Not Be Amazed</strong></li>
          </ul>
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
      }
    ]
    }
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
