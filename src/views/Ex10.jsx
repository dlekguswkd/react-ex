//import 라이브러리
import React, {useState} from 'react';

//import 컴포넌트

//import css


const Ex10 = () => {

    /*---일반 변수 --------------------------------------------*/
    // true false 바뀌어야하니까 const가 아닌 let으로 해줘야함
    //let isLogin = false;

	/*---상태관리 변수들(값이 변화면 화면 랜더링) ----------*/
    // 여기는 const가 되는 이유가 값이 바뀌는건 괜찮고 여기는 []배열안에 뭐가 추가되거나 그런게 불가
    const [isLogin, setIsLogin] = useState(false);

	/*---일반 메소드 --------------------------------------------*/



	/*---생명주기 + 이벤트 관련 메소드 ----------------------*/
    // 버튼클릭했을때
    const handleLoginChange = ()=> {
        console.log("로그인 상태 변화 버튼 클릭")
        // isLogin = true;

        // 현재값의 반대
        setIsLogin(!isLogin);

        // if(isLogin===true) {
        //     setIsLogin(false);
        // }else{
        //     setIsLogin(true);
        // }

    };


    return (
        <>
            <button type="button" onClick={handleLoginChange}>로그인 상태 변화</button>
            <br /><br />
            { isLogin===true? "*로그인된화면" : "*로그인안된화면" }

            <br /><br /><br /><br />

            {
                (isLogin===true)?(
                    <ul>
                        <li>로그인된 화면</li>
                        <li>로그아웃버튼</li>
                        <li>회원정보 수정화면이동</li>
                    </ul>
                ) : (
                    <ul>
                        <li>로그인안된 화면</li>
                        <li>로그인버튼</li>
                        <li>회원가입 화면이동</li>
                    </ul>  
                )
            }
        </>
    );
}

export default Ex10;