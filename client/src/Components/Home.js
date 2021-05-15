import React, { Component } from "react";
import anime from 'animejs/lib/anime.es.js';
import logoDate from './2022.png';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount = () => {
    anime.timeline({ loop: false })
      .add({
        targets: '.logo .word',
        scale: [14, 1],
        opacity: [0, 1],
        easing: 'cubicBezier(.5, .05, .1, .3)',
        duration: 300,
        delay: (el, i) => 300 * i
      })
  }

  render() {

    return (
      <div className="text-left p-4 logo">
        <h1 class='logo1 word'>Brandy's</h1>
        <h1 class='logo2 word'>Remote</h1>
        <h1 class='logo3 word'>Year</h1>
      </div>
    )
  }
}