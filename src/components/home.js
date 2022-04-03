import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Indexpage from './indexpage';
import Bollywood from './bollywood';
import Technology from './technology';
import Hollywood from './hollywood';
import Fitness from './fitness';
import Fitness1 from './Fitness/fitness1';
import Fitness2 from './Fitness/fitness2';
import Fitness3 from './Fitness/fitness3';
import Fitness4 from './Fitness/fitness4';
import Fitness5 from './Fitness/fitness5';
import Fitness6 from './Fitness/fitness6';
import Fitness7 from './Fitness/fitness7';
import Food from './food';
import Food1 from './Food/food1';
import Food2 from './Food/food2';
import Food3 from './Food/food3';
import Food4 from './Food/food4';
import Food5 from './Food/food5';
import Food6 from './Food/food6';
import Food7 from './Food/food7';
import Bollywood1 from './Bollywood/bollywood1';
import Bollywood2 from './Bollywood/bollywood2';
import Bollywood3 from './Bollywood/bollywood3';
import Bollywood4 from './Bollywood/bollywood4';
import Bollywood5 from './Bollywood/bollywood5';
import Bollywood6 from './Bollywood/bollywood6';
import Bollywood7 from './Bollywood/bollywood7';
import Hollywood1 from './Hollywood/hollywood1';
import Hollywood2 from './Hollywood/hollywood2';
import Hollywood3 from './Hollywood/hollywood3';
import Hollywood4 from './Hollywood/hollywood4';
import Hollywood5 from './Hollywood/hollywood5';
import Hollywood6 from './Hollywood/hollywood6';
import Hollywood7 from './Hollywood/hollywood7';
import Technology1 from './Technology/technology1';
import Technology2 from './Technology/technology2';
import Technology3 from './Technology/technology3';
import Technology4 from './Technology/technology4';
import Technology5 from './Technology/technology5';
import Technology6 from './Technology/technology6';
import Technology7 from './Technology/technology7';
const Home = () => (
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Indexpage/>} exact/>
    <Route path='bollywood' element={<Bollywood/>} exact/>
    <Route path='bollywood/bollywood1' element={<Bollywood1/>} exact/>
    <Route path='bollywood/bollywood2' element={<Bollywood2/>} exact/>
    <Route path='bollywood/bollywood3' element={<Bollywood3/>} exact/>
    <Route path='bollywood/bollywood4' element={<Bollywood4/>} exact/>
    <Route path='bollywood/bollywood5' element={<Bollywood5/>} exact/>
    <Route path='bollywood/bollywood6' element={<Bollywood6/>} exact/>
    <Route path='bollywood/bollywood7' element={<Bollywood7/>} exact/>
    <Route path='technology' element={<Technology/>} exact/>
    <Route path='technology/technology1' element={<Technology1/>} exact/>
    <Route path='technology/technology2' element={<Technology2/>} exact/>
    <Route path='technology/technology3' element={<Technology3/>} exact/>
    <Route path='technology/technology4' element={<Technology4/>} exact/>
    <Route path='technology/technology5' element={<Technology5/>} exact/>
    <Route path='technology/technology6' element={<Technology6/>} exact/>
    <Route path='technology/technology7' element={<Technology7/>} exact/>
    <Route path='hollywood' element={<Hollywood/>} exact/>
    <Route path='hollywood/hollywood1' element={<Hollywood1/>} exact/>
    <Route path='hollywood/hollywood2' element={<Hollywood2/>} exact/>
    <Route path='hollywood/hollywood3' element={<Hollywood3/>} exact/>
    <Route path='hollywood/hollywood4' element={<Hollywood4/>} exact/>
    <Route path='hollywood/hollywood5' element={<Hollywood5/>} exact/>
    <Route path='hollywood/hollywood6' element={<Hollywood6/>} exact/>
    <Route path='hollywood/hollywood7' element={<Hollywood7/>} exact/>
    <Route path='fitness' element={<Fitness/>} exact/>
    <Route path='fitness/fitness1' element={<Fitness1/>} exact/>
    <Route path='fitness/fitness2' element={<Fitness2/>} exact/>
    <Route path='fitness/fitness3' element={<Fitness3/>} exact/>
    <Route path='fitness/fitness4' element={<Fitness4/>} exact/>
    <Route path='fitness/fitness5' element={<Fitness5/>} exact/>
    <Route path='fitness/fitness6' element={<Fitness6/>} exact/>
    <Route path='fitness/fitness7' element={<Fitness7/>} exact/>
    <Route path='food' element={<Food/>} exact/>
    <Route path='food/food1' element={<Food1/>} exact/>
    <Route path='food/food2' element={<Food2/>} exact/>
    <Route path='food/food3' element={<Food3/>} exact/>
    <Route path='food/food4' element={<Food4/>} exact/>
    <Route path='food/food5' element={<Food5/>} exact/>
    <Route path='food/food6' element={<Food6/>} exact/>
    <Route path='food/food7' element={<Food7/>} exact/>
  </Routes>
  </BrowserRouter>
  </>
)

export default Home