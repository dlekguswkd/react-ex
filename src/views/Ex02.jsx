//import 라이브러리
import React from 'react';
import { Link } from 'react-router-dom';

// import css
import '../css/reset.css';
import '../css/ex02.css';



const Ex02 = () => {

    const lastMovie = "2023년 영화 [서울의 봄]";

    return (
        <>
            <h1>정우성 프로필</h1>
            <br />

            <h2>최근작품</h2>
            {lastMovie}

            <h2>프로필 사진</h2>
            <img src="./images/jung.jpg" alt="정우성 프로필 사진" />
            <br />
            <a href="https://ko.wikipedia.org/wiki/%EC%A0%95%EC%9A%B0%EC%84%B1">위키백과 정우성(a요소 사용하지말것)</a><br />
            <Link to="https://ko.wikipedia.org/wiki/%EC%A0%95%EC%9A%B0%EC%84%B1" rel="noreferrer noopener">위키백과 정우성</Link>
            
            <h2>정보</h2>
            <table>
                {/* 가로폭 */}
                <colgroup>
                    <col style={{width: "100px"}} />
                    <col style={{width: "120px"}} />
                    <col style={{width: "100px"}} />
                    <col style={{width: "140px"}} />
                </colgroup>
                <thead>
                    <tr>
                        <th>이름</th>
                        <th>소속사</th>
                        <th>생년월일</th>
                        <th>데뷔작</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>정우성</td>
                        <td>아티스트컴포니</td>
                        <td>1973/03/20</td>
                        <td>1994년 영화 구미호</td>
                    </tr>
                    <tr>
                        <td colSpan="4">
                            <ol>
                                <li>2023년 영화 [서울의 봄] </li>
                                <li>2023년 영화 [보호자]</li>
                                <li>2023년 영화 [헌트]</li>
                                <li>2023년 영화 [강철비 2: 정상회담]</li>
                                <li>2023년 영화 [지푸라기라도 잡고 싶은 짐승들]</li>
                            </ol>
                        </td>
                    </tr>
                </tbody>
            </table>

            <br />
            <label htmlFor='txt-email'>당신의 이메일주소는?</label>
            <input id="txt-email" type="text" name="" value="" placeholder="이메일" />

        </>
    );
}

export default Ex02;