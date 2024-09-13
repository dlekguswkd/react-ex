//import 라이브러리
import React from 'react';

//import 컴포넌트

//import css


const Ex05 = () => {

    let no = 0;

    /*---상태관리 변수들(값이 변화면 화면 랜더링) ----------*/

    /*---일반 메소드 --------------------------------------------*/


    /*---생명주기 + 이벤트 관련 메소드 ----------------------*/
    const handlePlus =()=> {
        no = no + 1;
        console.log(no);
    }

    const handleMinus =()=> {
        no = no - 1;
        console.log(no);
    }

    const handleReset =()=> {
        no = 0;
        console.log(no);
    }


    return (
        <>
            <h1>리엑트 공부</h1>

            <button type="button" onClick={handlePlus}>더하기</button>
            <br />
            <button type="button" onClick={handleMinus}>빼기</button>
            <br />
            <button type="button" onClick={handleReset}>초기화</button>
        </>
    );
}

export default Ex05;