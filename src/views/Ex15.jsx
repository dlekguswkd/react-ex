//import 라이브러리
import React, {useState, useEffect} from 'react';

//import 컴포넌트

//import css


const Ex14 = () => {

	/*---일반 변수 --------------------------------------------*/
    // let no = 0;


	/*---상태관리 변수들(값이 변화면 화면 랜더링) ----------*/
    const [no, setNo] = useState(0);


	/*---일반 메소드 -----------------------------------------*/

	/*---생명주기 + 이벤트 관련 메소드 ----------------------*/
    // [] 마운트(로딩)될때 (화면 켜졌을때) -> 마운트는 딱 끼워졌을때? 연결됐을때?
    useEffect(()=>{
        console.log("no가 변할때");      //     console.log("마운트될때");
    }, [no]);                           // }, []);   
    
    // 버튼 클릭했을때
    const handlePlus = ()=> {
        //console.log("숫자증가");

        // no = no + 1;
        // setNo(no+1);
        //    내가정한이름
        setNo((prevNo)=>{
            return prevNo + 1;
        });

        console.log(no);
    };


    return (
        <>
            {no}
            <br />
            <button type="button" onClick={handlePlus}>버튼</button>
        </>
    );
}

export default Ex14;