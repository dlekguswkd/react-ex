//import 라이브러리
import React from 'react';
// 파라미터값사용하는 라우터
import { useSearchParams } from 'react-router-dom';

//import 컴포넌트

//import css


const Ex11 = () => {

	/*---상태관리 변수들(값이 변화면 화면 랜더링) ----------*/
    const [searchParams] = useSearchParams();
    

    /*---일반 변수 --------------------------------------------*/
    const strNo = searchParams.get('no');      // String
    const intNo = Number(strNo);               // String -> number  자료형 바꿔주기
    // console.log(no);


	/*---일반 메소드 -----------------------------------------*/
    const getImgTag = (no)=> {
        if (no === 1) {                 // === -> == 또는 1 -> '1'
            console.log("l번 그림");
            return <img src="./images/01.png" alt="숫자1" />;

        }else if (no === 2) {
            console.log("2번 그림");
            return <img src="./images/02.png" alt="숫자2" />;

        }else if (no === 3) {
            console.log("3번 그림");
            return <img src="./images/03.png" alt="숫자3" />;

        }else if (no === 4) {
            console.log("4번 그림");
            return <img src="./images/04.png" alt="숫자4" />;

        }else {
            console.log("그림 없음");
            return <p>그림 없음</p>;
        }

    };

	/*---생명주기 + 이벤트 관련 메소드 ----------------------*/


    return (
        <>
            {/* index.html에서 시작 */}
            {/* <img src="./images/01.png" /> */}

            {/* 우리가 만든 함수 이름 */}
            {getImgTag(intNo)}
        </>
    );
}

export default Ex11;