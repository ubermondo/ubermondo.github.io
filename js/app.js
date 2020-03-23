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
          y: -1500
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
        id: "wouldyoulike",
        classes: [
          "quote"
        ],
        coordinates: {
          x: 1000,
          y: -1500
        },
        rotate: {},
        payload: `
          <q>Would you like to <strong>impress your audience</strong> with <strong>stunning visualization</strong> of your talk?</q>
        `
      },
      {
        id: "title",
        classes: [
          "title"
        ],
        coordinates: {
          x: 0,
          y: 0
        },
        rotate: {},
        scale: 4,
        payload: `
          <header>then you should try</header>
          <h1>impress.js<sup>*</sup></h1>
          <footer><sup>*</sup> no rhyme intended</footer>
        `
      },
      {
        id: "its",
        classes: [],
        coordinates: {
          x: 850,
          y: 3000
        },
        rotate: {
          z: 90
        },
        scale: 5,
        payload: `
          <p>
            It’s a <strong>presentation tool</strong>
            <br/>
            inspired by the idea behind <a href="http://prezi.com">prezi.com</a>
            <br/>
            and based on the <strong>power of CSS3 transforms and transitions</strong> in modern browsers.
          </p>
        `
      },
      {
        id: "big",
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
          <p>visualize your <b>big</b> <span>thoughts</span></p>
        `
      },
      {
        id: "tiny",
        classes: [
          "tiny"
        ],
        coordinates: {
          x: 2825,
          y: 2325,
          z: -3000
        },
        rotate: {
          z: 300
        },
        scale: 1,
        payload: `
          <p>(and <b>tiny</b> ideas.)</p>
        `
      },
      {
        id: "bored",
        classes: [
          "quote"
        ],
        coordinates: {
          x: 0,
          y: -1500
        },
        rotate: {},
        payload: `
          <q>Aren’t you just <b>bored</b> with all those slides-based presentations?</q>
        `
      },
      {
        id: "ing",
        classes: [],
        coordinates: {
          x: 3500,
          y: -850,
          z: 0
        },
        rotate: {
          z: 270
        },
        scale: 6,
        payload: `
          <p>by <b class="shift">positioning</b>, <b class="spin wait short">rotating</b> and <b class="size wait medium">scaling</b> them on an infinite canvas</p>
        `
      },
      {
        id: "imagination",
        classes: [],
        coordinates: {
          x: 6700,
          y: -300
        },
        rotate: {},
        scale: 6,
        payload: `
          <p>the only <b>limit</b> is your <b class="imagination">imagination</b></p>
        `
      },
      {
        id: "source",
        classes: [],
        coordinates: {
          x: 6300,
          y: 2000
        },
        rotate: {
          z: 20
        },
        scale: 4,
        payload: `
          <p>want to know more?</p>
          <q><a href="http://github.com/impress/impress.js">use the source</a>, Luke!</q>
        `
      },
      {
        id: "one-more-thing",
        classes: [],
        coordinates: {
          x: 6000,
          y: 4000
        },
        rotate: {},
        scale: 2,
        payload: `
          <p>one more thing...</p>
        `
      },
      {
        id: "its-in-3d",
        classes: [],
        coordinates: {
          x: 6200,
          y: 4300,
          z: -100
        },
        rotate: {
          x: -40,
          y: 10
        },
        scale: 2,
        payload: `
          <p>have you noticed it's in <b>3D<sup>*</sup></b>?</p>
          <span class="footnote"><sup>*</sup>beat that, prezi ;)</span>
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
//EMPTY OBJECT, FOR COPY/PASTE
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

//EXAMPLE OBJECT
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
}
*/
