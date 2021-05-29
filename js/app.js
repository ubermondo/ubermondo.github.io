var app = new Vue({
  el: "#impress",
  data: function () {
    return {
      slides: [
        {
          id: "title",
          classes: ["quote", "big"],
          coordinates: {
            x: -1000,
            y: -1500,
            z: 0,
          },
          rotate: {},
          payload: `
            <h1>The Myth of Certainty.</h1>
          `,
        },
        {
          id: "intro",
          classes: ["quote"],
          coordinates: {
            x: 0,
            y: -1500,
            z: 0,
          },
          rotate: {},
          payload: `
            <h1>The Cheesecake Factory is not your friend.</h1>
            <p>&nbsp;</p>
            <p>(it's in the <em>name.</em>)</p>
          `,
        },
        {
          id: "questions",
          classes: ["quote"],
          coordinates: {
            x: 1000,
            y: -1500,
            z: 0,
          },
          rotate: {},
          payload: `
            <h1>Questions:</h1>
            <ul>
              <li>who <em>built</em> this?</li>
              <li>can I have a <em>bookmark?</em></li>
              <li>is this <em>wicker?</em></li>
            </ul>
          `,
        },
        {
          id: "slogan",
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
              you're not here for the
              <strong>food.</strong>
              <span>you're here to be</span>
              <strong>confused.</strong>
            </p>
          `,
        },
        {
          id: "approach",
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
              the <em class="spin wait short">sensory overload</em> approach.
            </p>
          `,
        },
        {
          id: "powered",
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
              powered by <em>larceny.</em>
            </p>
          `,
        },
        {
          id: "insanity",
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
              the insane trade
            </p>
          `,
        },
        {
          id: "commodity",
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
            <h2>Secrets are the Commodity</h2>
            <p class="size">
              (top tricks experts don't want you to know about)
            </p>
          `,
        },
        {
          id: "currency",
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
            <p>wrongness is the currency</p>
          `,
        },
        {
          id: "other",
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
            <p>
              <h2>response to the "other"</h2>
              and hair care tips
            </p>
          `,
        },
        {
          id: "NABSG",
          classes: ["quote"],
          coordinates: {
            x: 2000,
            y: -1500,
            z: 0,
          },
          rotate: {},
          payload: `
            <blockquote class="smaller">
            To walk the circuit is to become one with it. Life-force is a constant. Today, science tells us that the essence of nature is purpose.
            The goal of four-dimensional superstructures is to plant the seeds of empathy rather than stagnation.
            You and I are starseeds of the quantum matrix. We exist, we self-actualize, we are reborn. Will is the healing of karma, and of us.
            If you have never experienced this lightning bolt on a cosmic scale, it can be difficult to believe. Have you found your circuit? How should you navigate this quantum world?
            It is time to take peace to the next level. The infinite is approaching a tipping point. Eons from now, we mystics will believe like never before as we are guided by the galaxy.
            The nexus is calling to you via electromagnetic resonance. Can you hear it?
            Our conversations with other warriors have led to a summoning of pseudo-high-frequency consciousness. Reality has always been electrified with travellers whose bodies are nurtured by guidance. Humankind has nothing to lose.
            <footer>N.A.Bs.G.</footer>
            </blockquote>
          `,
        },
        {
          id: "idiocy",
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
            <h1>how sweet to be an idiot</h1>
          `,
        },
        {
          id: "conundrum",
          classes: ["tiny"],
          coordinates: {
            x: 6000,
            y: 4000,
            z: -2000,
          },
          rotate: {},
          scale: 2,
          payload: `
            <p>the emperor's new <strong>conundrum</strong></p>
          `,
        },
        {
          id: "faith",
          classes: [],
          coordinates: {
            x: 6700,
            y: -300,
          },
          rotate: {},
          scale: 6,
          payload: `
            <p>
              a call to faith
            </p>
            <p>
              <strong>(it's not what you think)</strong>
            </p>
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
