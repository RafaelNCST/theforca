import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../public/lottie/loadingpencil.json';

const defaultOptions = {
  animationData: animationData,
  loop: true,
  autoPlay: true,
};

const PencilLoading = () => {
  return (
    <div>
      <Lottie options={defaultOptions} height={300} width={300} />
    </div>
  );
};

export default PencilLoading;
