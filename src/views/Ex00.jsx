//import 라이브러리
import React from 'react';


//import 컴포넌트


//import css



// function의 다른 모양
const Ex00 = () => {

    let str = "";
    str += '<ul>';
    str += '    <li>사과</>';
    str += '    <li>오렌지</>';
    str += '    <li>바나나</>';
    str += '</ul>';
    console.log(str);
    // 선언하고 안쓰면 경고문자뜸

    const element = '<h1>안녕하세요</h1>';
    console.log(element);

    //html을 쉽게 작성할 수 있다
    const element2 = <h1>안녕하세요</h1>;
    console.log(element2);

    // return 안에는 태그가 한명의 자식이여야함
    return (
        <>
            <p>안녕하세요</p>
        </>
    );

}

export default Ex00;