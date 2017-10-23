import React, { Component } from 'react';

export default class Drumkit extends Component {
  componentDidMount() {
    window.addEventListener('keydown', e => {
      const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
      const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
      key.classList.add('playing');
      if (!audio) return;
      audio.currentTime = 0;
      audio.play();
    });
    function removeTransition(e) {
      if (e.propertyName !== 'transform') return;
      this.classList.remove('playing');
    }
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => {
      key.addEventListener('transitionend', removeTransition);
    });
  }
  render() {
    return(
      <div>
        <div className="keys">
          <div data-key="65" className="key">
            <kbd>A</kbd>
            <span className="sound">clap</span>
          </div>
          <div data-key="83" className="key">
            <kbd>S</kbd>
            <span className="sound">hihat</span>
          </div>
          <div data-key="68" className="key">
            <kbd>D</kbd>
            <span className="sound">kick</span>
          </div>
          <div data-key="70" className="key">
            <kbd>F</kbd>
            <span className="sound">openhat</span>
          </div>
          <div data-key="71" className="key">
            <kbd>G</kbd>
            <span className="sound">boom</span>
          </div>
          <div data-key="72" className="key">
            <kbd>H</kbd>
            <span className="sound">ride</span>
          </div>
          <div data-key="74" className="key">
            <kbd>J</kbd>
            <span className="sound">snare</span>
          </div>
          <div data-key="75" className="key">
            <kbd>K</kbd>
            <span className="sound">tom</span>
          </div>
          <div data-key="76" className="key">
            <kbd>L</kbd>
            <span className="sound">tink</span>
          </div>
        </div>

        <audio data-key="65" src="../../sounds/clap.wav"></audio>
        <audio data-key="83" src="../../sounds/hihat.wav"></audio>
        <audio data-key="68" src="../../sounds/kick.wav"></audio>
        <audio data-key="70" src="../../sounds/openhat.wav"></audio>
        <audio data-key="71" src="../../sounds/boom.wav"></audio>
        <audio data-key="72" src="../../sounds/ride.wav"></audio>
        <audio data-key="74" src="../../sounds/snare.wav"></audio>
        <audio data-key="75" src="../../sounds/tom.wav"></audio>
        <audio data-key="76" src="../../sounds/tink.wav"></audio>

      </div>
    );
  }
}
