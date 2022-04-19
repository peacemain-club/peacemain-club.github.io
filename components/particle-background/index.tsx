import React from 'react';
import Particles from 'react-tsparticles';
import {loadFull} from 'tsparticles';

import type {Engine, RecursivePartial, IOptions} from 'tsparticles-engine';

function ParticleBackground() {
  const initParticles = async (main: Engine) => {
    await loadFull(main);
  };

  const options: RecursivePartial<IOptions> = {
    background: {
      opacity: 0,
    },
    fpsLimit: 120,
    particles: {
      color: {
        value: '#00AC3B',
      },
      links: {
        color: '#0047FF',
        distance: 180,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        enable: true,
        outModes: {
          default: 'bounce',
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        value: 30,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: {min: 1, max: 3},
      },
    },
    detectRetina: true,
  };

  return <Particles id="tsparticles" init={initParticles} options={options} />;
}

export default ParticleBackground;
