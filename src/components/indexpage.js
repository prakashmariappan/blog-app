import React from 'react';
import Header from './header';
import Featuredarticles from './featured_articles';
import Latestarticles from './latest_articles';
import Add from './add';
import Lateststories from './latest_stories';
const Indexpage = () => (
    <>
      <Header />
      <Featuredarticles />
      <Latestarticles />
      <Add />
      <Lateststories />
    </>
  )
  
  export default Indexpage;