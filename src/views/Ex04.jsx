//import 라이브러리
import React from 'react';


const Ex04 = () => {

    // no는 계속 숫자가 바뀌어야함 const아니고 let
    let no = 0;

    
    /*---상태관리 변수들(값이 변화면 화면 랜더링) ----------*/

    /*---일반 메소드 --------------------------------------------*/


    /*---생명주기 + 이벤트 관련 메소드 ----------------------*/ 
    // // 정의 (실행되는게 아님)
    // (기명함수) -> 이름있는함수 
    // function handleNamePrint() {
    //     console.log("정우성");
    // }

    // (익명함수) -> 이름없는함수를 변수에 담아서 사용 
    // const handleNamePrint = function() {
    //     console.log("정우성");
    // }
    // 간추려서 이렇게 표현하기도함(주로 이걸로 사용)  const는 한번 정의하면 안바뀌는  이름지을때 앞에 보통 handle (이벤트사용)
    const handleNamePrint = ()=> {
        console.log("정우성");
    }

    const handlePlus = ()=> {
        no = no + 1;
        console.log(no);
    }

    return (
        <>
            {/*                   클릭이벤트를 이렇게 표기함 여기서 실행 (얘는 바로옆에사용하기때문에 잡아올필요가 X) */}
            <button type="button" onClick={handleNamePrint}>이름 출력</button>
            <br />
            <button type="button" onClick={handlePlus}>숫자증가</button>
        </>
    );
}

export default Ex04;