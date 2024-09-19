//import 라이브러리
import React, {useState} from 'react';

//import 컴포넌트

//import css


const Ex08 = () => {

	/*---상태관리 변수들(값이 변화면 화면 랜더링) ----------*/
    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");


	/*---일반 메소드 --------------------------------------------*/


	/*---생명주기 + 이벤트 관련 메소드 ----------------------*/
    // 이메일 입력할때
    const handleEmailChange = (event)=> {
        console.log("이메일입력");
        // 현재 text 창의 value 값을 setEmail(화면반영)을 통해서 변수에 반영
        console.log(event.target.value);
        // email 변수의 값을 읽어서 value에 반영
        setEmail(event.target.value);
    };

    // 패스워드 입력할때
    const handlePasswordChange = (e) => {   // 꼭 event로 해야하는건 아님 
        console.log("패스워드입력");
        console.log(e.target.value);
        setPassword(e.target.value);
    };

    // 로그인할때 (전송하는 이벤트)
    const handleLogin = (e)=> {

        // 이벤트 잡는다
        console.log("전송버튼 클릭");
        e.preventDefault();     // 전송이되면 안됨 이걸로 막는거임 submit은 무조건 막고시작
        console.log("e.preventDefault() 기본기능 못하게함");
        console.log(e.target);

        // 데이터 수집 + 객체로 묶기
        // console.log(email, password);
        const formvalue = {
            email,           // email: email,       이름이 같으면 생략가능
            password        // password: password
        };
        console.log(formvalue);

        // 전송
        // axios


    };


    return (
        <>
            {/*                               리액트는 데이터만 받음 (화면 안받음) */}
            <form action="/ex01" method="get" onSubmit={handleLogin}>
                <div>
                    <label htmlFor="txt-email">이메일</label>
                                                                {/* 값이 변경됐을때를 의미함 */}
                    <input id="txt-email" type="text" name="email" value={email} onChange={handleEmailChange} />
                </div>

                <div>
                    <label htmlFor="txt-pw">패스워드</label>
                    <input id="txt-pw" type="password" name="password" value={password} onChange={handlePasswordChange} />
                </div>
                
                <button type="submit">로그인</button>
                
            </form>
        </>
    );
}

export default Ex08;