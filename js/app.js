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
            Some of the Pharisees in the crowd said to Him, "Teacher, rebuke Your disciples." But Jesus answered, "I tell you, if these become silent, the stones will cry out!"
            <footer>Luke 19:39-40, NASB</footer>
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
          <h2>This Story Has <em>Everything:</em></h2>
          <ul>
            <li>Donkey Transportation</li>
            <li>Eastern Gate</li>
            <li>Palm Fronds</li>
            <li>Ladies and Gentlemen,<br /><strong>The Stones</strong></li>
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
          <p>we just want to feel <b class="spin">special</p>
        `
      },
      {
        id: "conscious",
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
            this trip was
            <strong>conscious</strong>
            <span>not pedestrian</span>
          </p>
        `
      },
      {
        id: "pattern",
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
            <h2>it's time for a miracle</h2>
            and here is the manual
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
          <header>the trick is to make the</header>
          <h1>connection</h1>
          <footer>you are the proof you've been looking for</footer>
        `
      },
      {
        id: "scripture_blueprint",
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
          <h1>The Blueprint for Miracles:</h1>
          <ol>
            <li><strong>See</strong> What's There</li>
            <li><strong>Act</strong> Out Your Faith</li>
            <li><strong>Experience</strong> Results</li>
          </ol>
        `
      },
      {
        id: "inverse",
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
            this is a <strong>180&deg;</strong> from what we're used to
          </p>
        `
      },
      {
        id: "reboot",
        classes: [],
        coordinates: {
          x: 6700,
          y: -300
        },
        rotate: {},
        scale: 6,
        payload: `
          <p>
            it's time for a reboot;
          </p>
          <p>
            <strong>a bigger life is calling</strong>
          </p>
        `
      },
      {
        id: "material_proof",
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
          <h1>proof is fine, but <em>limited</em></h1>
        `
      },
      {
        id: "temporal",
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
          <p>there's also a <em>timing</em> issue</p>
        `
      },
      {
        id: "switch",
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
            make the
            <strong>Switch</strong>
            <span>what you see is what you get</span>
          </p>
        `
      },
      {
        id: "connections",
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
            we know that it's all <strong>vital</strong> and <strong>connected</strong>
          </p>
        `
      },
      {
        id: "metaphysical",
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
            <em>(now let's take that to a deeper level)</em>
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
          <h1>The Deal:</h1>
          <ul>
            <li><em>Prophecy,</em> not Proof</li>
            <li><em>Choose</em> what you respond to</li>
            <li><strong>Banners are Blessed</strong></li>
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
