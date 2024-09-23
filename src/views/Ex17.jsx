//import 라이브러리
import React from 'react';

//import 컴포넌트

//import css


const Ex17 = () => {

	/*---일반 변수 --------------------------------------------*/

	/*---라우터 관련------------------------------------------*/

	/*---상태관리 변수들(값이 변화면 화면 랜더링) ----------*/

	/*---일반 메소드 -----------------------------------------*/

	/*---생명주기 + 이벤트 관련 메소드 ----------------------*/


    const strArray = ["정우성", "이효리", "유재석"];

    // 배열은 보통 하나씩 비교해봄 한꺼번에 비교 x

    // 포함되는지
    /* --- includes() --- */
    let result = strArray.includes('이효리');       
    console.log(result);        // true
    
    let result2 = strArray.includes('황일영');
    console.log(result2);       // false

    // 필터
    /* --- filter() --- */
    let newArray = strArray.filter((name)=> {
        // 정우성이 아닌 사람들만
        return name !== '정우성';      // true면 새로운 배열에 추가
    });
    console.log(newArray);            // ['이효리', '유재석']




    
    return (
        <>
            <p>안녕하세요</p>
        </>
    );
}

export default Ex17;