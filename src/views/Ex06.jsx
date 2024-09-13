//import 라이브러리
import React, {useState} from 'react';
// usestate는 화면에 글씨를 출력하고 싶을때 넣어줘야함

//import 컴포넌트

//import css


const Ex06 = () => {

    // let no = 0;

    // 화면에 글씨 출력하고싶을때
    /*---상태관리 변수들(값이 변화면 화면 랜더링) ----------*/
    //       메소드            no를 0으로 초기값 잡는다는뜻
    let [no, setNo] = useState(0);
    //                      초기값
    let [name, setName] = useState("");

    // let sum = plus(3, 5);

    /*---일반 메소드 --------------------------------------------*/


    /*---생명주기 + 이벤트 관련 메소드 ----------------------*/
    const handlePlus =() => {
        /*
        이렇게 하면 값은 변경되지만 화면에는 반영안됨
        no = no + 1;
        console.log(no);
        */
        
        // setNo(no+1); // no값이 이전값이 아닐수도 있다 
        setNo( (preNo) => {        // 이전값을 뜻하는 (function 생략해준거임)
            return preNo + 1;
        } );

    };

    const handleNamePrint = ()=> {
        console.log("정우성-콘솔");
        setName("정우성-화면");
    };

    return (
        <>
            {/* 화면에 띄우고싶을때 (랜더링)는 이방법으로 해야함 */}
            {no}
            <br />
            <button type="button" onClick={handlePlus}>숫자 증가</button>
            <br />
            <button type="button" onClick={handleNamePrint}>이름 출력</button>
            <br />
            {name}
        </>
    );
}

export default Ex06;