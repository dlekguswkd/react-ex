//import 라이브러리
import React from 'react';
// a 링크 쓰기위해서 이걸 import해줘야함
import { Link } from 'react-router-dom';

// ex01.jsx에서 시작 위로 ../  (css불러오는 역할 import)
import '../css/ex01.css';

//import 컴포넌트

//import css

// 주석
/*
주석
*/

// 자바 스크립트 객체
// let personVo = {
//     name: '정우성',
//     hp: '010'
// }
// 자바 스크립트 객체 밑에서 불러다 씀
let cssex = {
    width: '20px'
}

let name = "황일영";

let cssex2 = {
    fontSize: '40px',
    fontWeight: 'bold'
}



const Ex01 = () => {

/*---상태관리 변수들(값이 변화면 화면 랜더링) ----------*/

/*---일반 메소드 --------------------------------------------*/

/*---생명주기 + 이벤트 관련 메소드 ----------------------*/

    return (
        <>
            {/* 주석 */}
            {/* 여기에선 class가 아닌 className이라고 해줘야함 */}
            <h1 className="title">정우성 홈페이지</h1>
            {/* 원래는 <h1 style="font-size: 40px;"> 이렇게 표현했었음 여기선 객체로 써야함*/}
            <h1 style={{fontSize: '40px'}}>{name} 홈페이지</h1>         {/* 변수로 불러온거 */}
            {/* <h1 style="font-size: 40px; font-weight: bold;"> 이렇게 표현했었음 */}
            <h1 style={{fontSize: '40px', fontWeight: 'bold'}}>{name} 홈페이지</h1> 
            <h1 style={cssex2}>{name} 홈페이지</h1> 

            {/* index.html에서 시작 경로        alt 안쓰면 경고문고뜸 */}
            <img src="./images/JungWooSung.jpg" alt="정우성 사진" />
            {/* <input type="text" name="id" value="" />
            <br /> */}
            <br />
            <a href="http://localhost:3000/ex00">정우성 위키피이아 바로가기</a>
            <br />
            {/* 위에 import 해줘야 사용가능 */}
            <Link to="http://localhost:3000/ex00" rel="noreferrer noopener">정우성의 위키백과 바로가기2</Link>

            <table border="1">
                <colgroup>
                    {/* 원래는 이렇게 표현했었는데 "width: 100px;" -> {width: '100px'} 객체로 표시 
                        겉에 있는 {}는 자바스크립트로 해석해 라는 뜻 */}
                    <col style={{width: '100px'}} />
                    <col style={{width: '100px'}} />
                    <col style={{width: '100px'}} />
                    <col style={cssex} />       {/* 변수로 불러온거 */}
                </colgroup>
                
                <tbody>
                    <tr>
                        <td>1,1</td>
                        <td>1,2</td>
                        <td>1,3</td>
                        <td>1,4</td>
                    </tr>
                    <tr>
                        {/* rowSpan, colSpan 카멜표시 s가 대문자여야함 */}
                        <td rowSpan="2">2,1</td>    {/* 세로 */}
                        <td colSpan="2">2,2</td>    {/* 가로 */}
                        <td>2,4</td>
                    </tr>
                    <tr>
                        <td>3,2</td>
                        <td>3,3</td>
                        <td>3,4</td>
                    </tr>
                </tbody>
            </table>

            <br />
            <br />
            <br />

            <div>
                {/* 자바스크립트에서는 그냥 for인데 여기선 htmlFor */}
                <label htmlFor="txt-name">이름</label>
                <input id="txt-name" type="text" name="" value="" />
            </div>
            <div>
                <label htmlFor='rdo-dog'>강아지</label>
                <input id="rdo-dog" type="radio" name="pet" value="" />
                <br />
                <label htmlFor='rdo-cat'>고양이</label>
                <input id="rdo-cat" type="radio" name="pet" value="" />
            </div>

        </>
    );
}

export default Ex01;