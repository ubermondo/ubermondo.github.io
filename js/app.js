var app = new Vue({
  el: "#impress",
  data: function () {
    return {
      slides: [
        {
          id: "title",
          classes: ["quote", "medium", "right"],
          coordinates: {
            x: -1000,
            y: -1500,
            z: 0,
          },
          rotate: {},
          payload: `
            <h1>The Mechanisms of Comfort.</h1>
          `,
        },
        {
          id: "disneyworld",
          classes: [],
          coordinates: {
            x: 250,
            y: 3000,
          },
          rotate: {
            z: 270,
          },
          scale: 5,
          payload: `
            <p>
              "I'm going to <strong>Disney World!</strong>"
            </p>
          `,
        },
        {
          id: "rohde",
          classes: ["quote"],
          coordinates: {
            x: 0,
            y: -1500,
            z: 0,
          },
          rotate: {},
          payload: `
          <blockquote class="smaller">
          <p>
          The danger of imaginary worlds is that they make too much sense, become predictable, and fail to hold our interest.
          </p>
          <br />
          <p>
          The danger of the real world is that it becomes so confusing and contradictory that we abandon it for an imaginary world.
          </p>
          <br />
          <p>
          An imaginary world derives its power not from how realistic it is, but from how <strong>meaningful</strong> it is.
          </p>
          <footer>Joe Rohde</footer>
          </blockquote>
          `,
        },
        {
          id: "breakdown",
          classes: [],
          coordinates: {
            x: 6000,
            y: 3000,
          },
          rotate: {
            z: 90,
          },
          scale: 5,
          payload: `
          a <em class="spin wait short">breakdown</em> in the monopoly of meaning.
          `,
        },
        {
          id: "prosperity",
          classes: [],
          coordinates: {
            x: 500,
            y: 500,
          },
          rotate: {
            z: 90,
          },
          scale: 1,
          payload: `
            <h2>Prosperity Lessons from Victor Frankenstein</h2>
            <p class="size">
              (and the role of the "other")
            </p>
          `,
        },
        {
          id: "bikeryoga",
          classes: [],
          coordinates: {
            x: 7000,
            y: 1000,
            z: 0,
          },
          rotate: {
            z: 270,
          },
          scale: 1,
          payload: `
            <p>
              What do Hell's Angels and Yoga Teachers have in Common?
            </p>
          `,
        },
        {
          id: "finger",
          classes: [],
          coordinates: {
            x: 7200,
            y: 1000,
            z: -100,
          },
          rotate: {
            y: 40,
            z: 270,
          },
          scale: 1,
          payload: `
            <p>
              middle-finger politics.
            </p>
          `,
        },
        {
          id: "frankl",
          classes: ["quote"],
          coordinates: {
            x: 1000,
            y: -1500,
            z: 0,
          },
          rotate: {},
          payload: `
            <blockquote>
            When a person can't find a deep sense of <strong>meaning</strong>, they distract themselves with <strong>pleasure</strong>.
            <footer>Viktor Frankl</footer>
            </blockquote>
          `,
        },
        {
          id: "saltlamp",
          classes: ["tiny"],
          coordinates: {
            x: 600,
            y: 600,
            z: -3000,
          },
          rotate: {
            z: 360,
          },
          scale: 1,
          payload: `
            <p>wanna buy a salt lamp?</p>
          `,
        },
        {
          id: "mysticaldata",
          classes: [],
          coordinates: {
            x: 7700,
            y: 2000,
          },
          rotate: {
            z: 180,
          },
          scale: 4,
          payload: `
            <h1><span class="size wait short">data</span> <span class="size wait medium">isn't</span> <span class="size wait long">mystical</span></h1>
          `,
        },
        {
          id: "equation",
          classes: [],
          coordinates: {
            x: 6700,
            y: -300,
          },
          rotate: {},
          scale: 6,
          payload: `
            <p>
              comfort + control ≠ success
            </p>
          `,
        },
        {
          id: "singularities",
          classes: ["tiny"],
          coordinates: {
            x: 6000,
            y: 4000,
            z: -2000,
          },
          rotate: {},
          scale: 2,
          payload: `
            <p>sharpeners, singularities, and solutionism</p>
          `,
        },
        {
          id: "journey",
          classes: ["big"],
          coordinates: {
            x: 3500,
            y: 2100,
          },
          rotate: {
            z: 180,
          },
          scale: 6,
          payload: `
            <p>
              and then there's
              <strong>that</strong>
              <span>damn</span>
              <strong>slogan.</strong>
            </p>
          `,
        },
        {
          id: "happiest",
          classes: ["quote"],
          coordinates: {
            x: 2000,
            y: -1500,
            z: 0,
          },
          rotate: {},
          payload: `
            <blockquote>
            Just because this is the Happiest Place on Earth doesn't mean I can't beat you until you cry.
            <footer>every parent ever</footer>
            </blockquote>
          `,
        },
        
        
        
        {
          id: "adulthood",
          classes: ["big"],
          coordinates: {
            x: -2500,
            y: 2000,
          },
          rotate: {
            z: 90,
          },
          scale: 4,
          payload: `
            <p>
              I want to be an
              <strong>adult</strong>
              <span>I just don't want to grow up</span>
            </p>
          `,
        },
        {
          id: "renaissance",
          classes: ["title"],
          coordinates: {
            x: 0,
            y: -1000,
          },
          rotate: {},
          scale: 3,
          payload: `
            <header>like church, but less</header>
            <h1>huzzah</h1>
            <footer>more family, tribe, and the sharing of wonder</footer>
          `,
        },
        {
          id: "deal",
          classes: ["quote"],
          coordinates: {
            x: 3000,
            y: -1500,
            z: 0,
          },
          rotate: {},
          payload: `
            <h1>Here's the Deal:</h1>
            <ul>
              <li>Jargon is a <span class="size wait long">Thought</span> Technology</li>
              <li>Mystery beats Certainty</li>
              <li><strong>We need a Reversal of Larceny</strong></li>
            </ul>
          `,
        },
        {
          id: "summary",
          classes: [],
          coordinates: {
            x: 3000,
            y: 4000,
            z: 0,
          },
          rotate: {
            x: -70,
          },
          scale: 2,
          payload: `
            <p>
              After all,
              <br />
              <strong>You're not here for the food.</strong>
            </p>
          `,
        },
        {
          id: "overview",
          classes: [],
          coordinates: {
            x: 3000,
            y: 1500,
            z: 0,
          },
          rotate: {},
          scale: 10,
          payload: `
          `,
        },
      ],
    };
  },
  mounted() {
    impress().init();
  },
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
