import React, { useContext, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import TransitionContext from '../context/TransitionContext';
import SmoothScroll from '../components/SmoothScroll';
import Imagelist from '../components/Imagelist';

export default function Layers() {
  const main = useRef();
  return (
    <SmoothScroll>
        <main ref={main} className="p-32 flex flex-control">
            <Imagelist></Imagelist>

        </main>
    </SmoothScroll>
  );
}
