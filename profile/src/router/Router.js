import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import { TransitionProvider } from '../context/TransitionContext';
import TransitionComponent from '../components/Transition';
import Boxes from '../views/Boxes';
import Scroll from '../views/Scroll';
import Layers from '../views/Layers';
import Parallax from '../views/Parallax';

const Router = () => {
  return (
    <TransitionProvider>
      <Routes>
        <Route
          path="/scroll"
          element={
            <TransitionComponent>
              <Scroll />
            </TransitionComponent>
          }
        />
        <Route
          index
          element={
            <TransitionComponent>
              <Boxes />
            </TransitionComponent>
          }
        />
        <Route
          path="/layers"
          element={
            <TransitionComponent>
              <Layers />
            </TransitionComponent>
          }
        />
        <Route
          path="/Parallax"
          element={
            <TransitionComponent>
              <Parallax />
            </TransitionComponent>
          }
        />
      </Routes>
    </TransitionProvider>
  );
};

export default Router;
