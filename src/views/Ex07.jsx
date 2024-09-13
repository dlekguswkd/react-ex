//import 라이브러리
import React, { useState } from 'react';

//import 컴포넌트

//import css


const Ex07 = () => {

    /*---상태관리 변수들(값이 변화면 화면 랜더링) ----------*/
    let [no, setNo] = useState(0);

    /*---일반 메소드 --------------------------------------------*/



    /*---생명주기 + 이벤트 관련 메소드 ----------------------*/
    const handlePlus = () => {
        // setNo(function(preNo){
        setNo( (preNo) => {
            return preNo +1;
        } );
        console.log(no+1);
    };

    const handleMinus = () => {
        setNo( (preNo) => {
            return preNo -1;
        } );
        console.log(no-1);
    };

    const handleReset = () => {
        setNo(0);
        no=0;
        console.log(no);
    };


    return (
        <>
            <h1>리엑트 공부</h1>
            <br />
            {no}
            <br />
            <button type="button" onClick={handlePlus}>더하기</button>
            <br />
            <button type="button" onClick={handleMinus}>빼기</button>
            <br />
            <button type="button" onClick={handleReset}>초기화</button> 
            <br />
        </>
    );
}

export default Ex07;