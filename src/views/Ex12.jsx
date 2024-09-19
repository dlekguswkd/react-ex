//import 라이브러리
import React from 'react';


//import 컴포넌트

//import css


const Ex12 = () => {

	/*---일반 변수 --------------------------------------------*/
    const fruitList = ['사과', '바나나', '체리', '포도'];


	/*---상태관리 변수들(값이 변화면 화면 랜더링) ----------*/

	/*---일반 메소드 -----------------------------------------*/

	/*---생명주기 + 이벤트 관련 메소드 ----------------------*/


    return (
        <>
            <ul>
                {
                            // 배열을 돌아(map) 함수넣어줘야함
                    fruitList.map((fruit, index)=>{
                        // console.log("과일이름출력")
                        console.log(fruit);
                        console.log(index);
                        return (
                            <li key={index}>{fruit}</li>
                        )
                    })
                }
                {/* <li>과일이름</li> */}
            </ul>
        </>
    );
}

export default Ex12;