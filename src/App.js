import React from 'react';
import Header from './compontes/header';
import Aws from './compontes/awesome';
import Well from './compontes/well';
import Specialdiv from './compontes/special';
import Video from './compontes/video';
import Cool from './compontes/cool';
import Screenshots from './compontes/screenshots';
import Pricing from './compontes/price';

function App() {
  return (
    <div className="">
      <Header/>
      <Well/>
      <Specialdiv/>
      <Aws/>
      <Video/>
      <Cool/>
      <Screenshots/>
      <Pricing/>
    </div>
  );
}

export default App;
