// 라우터 (주소개념)

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Ex00 from './views/Ex00';
import Ex01 from './views/Ex01';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* 어디부터 어디까지가 여기다 하는 곳 (여러 페이지인척하지만 사실은 한페이지에 쫘라락) */}
          <Route path='/ex00' element={<Ex00 />} />
          <Route path='/ex01' element={<Ex01 />} />
        </Routes>
      </BrowserRouter>
    </div>
);
}

export default App;