// 라우터 (주소개념)

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Ex00 from './views/Ex00';
import Ex01 from './views/Ex01';
import Ex02 from './views/Ex02';
import Ex03 from './views/Ex03';
import Ex04 from './views/Ex04';
import Ex05 from './views/Ex05';
import Ex06 from './views/Ex06';
import Ex07 from './views/Ex07';
import Ex08 from './views/Ex08';
import Ex09 from './views/Ex09';
import Ex10 from './views/Ex10';
import Ex11 from './views/Ex11';
import Ex12 from './views/Ex12';
import Ex13 from './views/Ex13';
import Ex14 from './views/Ex14';
import Ex15 from './views/Ex15';
import Ex16 from './views/Ex16';
import Ex17 from './views/Ex17';
import Ex18 from './views/Ex18';
import Ex19 from './views/Ex19';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* 어디부터 어디까지가 여기다 하는 곳 (여러 페이지인척하지만 사실은 한페이지에 쫘라락) */}
          <Route path='/ex00' element={<Ex00 />} />
          <Route path='/ex01' element={<Ex01 />} />
          <Route path='/ex02' element={<Ex02 />} />
          <Route path='/ex03' element={<Ex03 />} />
          <Route path='/ex04' element={<Ex04 />} />
          <Route path='/ex05' element={<Ex05 />} />
          <Route path='/ex06' element={<Ex06 />} />
          <Route path='/ex07' element={<Ex07 />} />
          <Route path='/ex08' element={<Ex08 />} />
          <Route path='/ex09' element={<Ex09 />} />
          <Route path='/ex10' element={<Ex10 />} />
          <Route path='/ex11' element={<Ex11 />} />
          <Route path='/ex12' element={<Ex12 />} />
          <Route path='/ex13' element={<Ex13 />} />
          <Route path='/ex14' element={<Ex14 />} />
          <Route path='/ex15' element={<Ex15 />} />
          <Route path='/ex16' element={<Ex16 />} />
          <Route path='/ex17' element={<Ex17 />} />
          <Route path='/ex18' element={<Ex18 />} />
          <Route path='/ex19' element={<Ex19 />} />
        </Routes>
      </BrowserRouter>
    </div>
);
}

export default App;