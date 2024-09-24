//import 라이브러리
import React, {useState, useEffect} from 'react';

//import 컴포넌트

//import css

// 불러오는쪽
const Ex19 = () => {

	/*---일반 변수 --------------------------------------------*/

	/*---라우터 관련------------------------------------------*/

	/*---상태관리 변수들(값이 변화면 화면 랜더링) ----------*/
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [desc, setDesc] = useState('');
    const [blood, setBlood] = useState('');
    const [telecom, setTelecom] = useState('');
    const [hobbys, setHobbys] = useState([]);


	/*---일반 메소드 -----------------------------------------*/

	/*---생명주기 + 이벤트 관련 메소드 ----------------------*/
    // 적용버튼 클릭했을때
    const handleClick = ()=> {
        console.log("클릭");

        const userVo = {
            id: 'clz2024.sun',
            pw: '1234abc',
            blood: 'ab',
            hobbys: ['book', 'movie'],
            telecom: 'kt',
            desc: '정우성입니다'
        }

        setId(userVo.id);
        setPw(userVo.pw);
        setDesc(userVo.desc);
        setBlood(userVo.blood);
        setTelecom(userVo.telecom);
        setHobbys(userVo.hobbys);

    }


    // id 값이 변경될때  -> onchange id 값 바꾸는
    const handleId = (e)=> {
        setId(e.target.value);
    };


    // 마운트 되었을때
    useEffect(()=> {

        const userVo = {
            id: 'clz2024.sun',
            pw: '1234abc',
            blood: 'o',
            hobbys: ['trip', 'movie'],
            telecom: 'skt',
            desc: '황일영입니다'
        }

        setId(userVo.id);
        setPw(userVo.pw);
        setDesc(userVo.desc);
        setBlood(userVo.blood);
        setTelecom(userVo.telecom);
        setHobbys(userVo.hobbys);

    }, []);

    // -----------------------------------------------------------
      // 아이디
    // const handleId = (e)=> {
    //     // console.log(e.target.value);
    //     setId(e.target.value);
    // }

    // 비번
    const handlePw = (e)=>{
        setPw(e.target.value);
    }

    // 혈액형 (묶어서 가능) -> 라디오버튼은 1개만 
    const handleBlood = (e)=> {
        // console.log(e.target.value);
        setBlood(e.target.value);
    }

    // 취미 checkbox -> 얘만 정보가 한개이상이 가야함
    const handleHobby = (e)=> {
        // console.log(e.target.value);    // 내가 지금 클릭한거 딱 알려주는
        const thisValue = e.target.value;
        console.log("이번에 선택한" , thisValue);          // 내가 지금 클릭한거 딱 알려주는 (위에꺼랑 똑같음 담아둔거뿐)

        /*
        새로운배열 만들어서 바꿔치기해주기
                        앞에있는배열에, 지금누른거 추가해주기
        const newHobbys = [...hobbys, thisValue];
        setHobbys(newHobbys);
        console.log(newHobbys);

        let result = hobbys.includes(thisValue);
        console.log(result);
        */

        if(hobbys.includes(thisValue)) {    // 배열에 있으면 삭제
            console.log("배열에서 삭제");
            // 방금 선택된 값이 제거된 배열
            const newHobbys = hobbys.filter((hobby)=>{
                return hobby !== thisValue
            });
            setHobbys(newHobbys);

        }else {
            console.log("배열에서 추가");    // 배열에 없으면 추가
            // 방금 선택된 값이 추가된 배열
            //                앞에 있는배열에, 지금누른거 추가  -> ...은 다 꺼내서 풀어달라는거 ex) [1,2,3] -> 1,2,3
            const newHobbys = [...hobbys, thisValue];
            setHobbys(newHobbys);
        }
    }


    // 통신사 (묶어서 가능) -> slect도 1개만 
    const handleTelecom = (e)=> {
        // console.log(e.target.value);
        setTelecom(e.target.value);
    }


    // 자기소개 (묶어서 가능) -> textarea도 1개만
    const handleDesc = (e) => {
        setDesc(e.target.value);
    }

    // 전송버튼 클릭했을때
    const handleJoin = (e)=> {
        e.preventDefault();
        // 선택한거 보기
        const userVo ={
            id: id,
            pw: pw,
            blood: blood,
            telecom: telecom,
            hobby: hobbys,       // 배열로 와야함
            desc: desc
        }
        console.log(userVo);
    };



    return (
        <>
            <button type="button" onClick={handleClick}>적용</button>


            <form action="" method="" onSubmit={handleJoin}>
                <div>
                    <label htmlFor="txt-id">아이디</label>
                    <input id="txt-id" type="text" name="" value={id} onChange={handleId}/>
                </div>
                <div>
                    <label htmlFor="txt-pw">패스워드</label>
                    <input id="txt-pw" type="password" name="" value={pw} onChange={handlePw} />
                </div>
                <div>
                    <span>혈액형: </span>
                    <label htmlFor="rdo-a">A형</label>                      {/* true이면 체크됨 */}
                    <input id="rdo-a" type="radio" name="blood" value="a" checked={blood === 'a'} onChange={handleBlood}/>
                    <label htmlFor="rdo-b">B형</label>
                    <input id="rdo-b" type="radio" name="blood" value="b" checked={blood === 'b'} onChange={handleBlood}/>
                    <label htmlFor="rdo-o">O형</label>
                    <input id="rdo-o" type="radio" name="blood" value="o" checked={blood === 'o'} onChange={handleBlood}/>
                    <label htmlFor="rdo-ab">AB형</label>
                    <input id="rdo-ab" type="radio" name="blood" value="ab" checked={blood === 'ab'} onChange={handleBlood}/>
                </div>
                <div>
                    <span>취미: </span>
                    <label htmlFor="chk-book">독서</label>
                    <input id="chk-book" type="checkbox" name="" value="book" checked={hobbys.includes('book')} onChange={handleHobby}/>
                    <label htmlFor="chk-trip">여행</label>
                    <input id="chk-trip" type="checkbox" name="" value="trip" checked={hobbys.includes('trip')} onChange={handleHobby}/>
                    <label htmlFor="chk-movie">영화</label>
                    <input id="chk-movie" type="checkbox" name="" value="movie" checked={hobbys.includes('movie')} onChange={handleHobby}/>
                </div>
                <div>
                    <label htmlFor="sel-telecom">이동통신사</label>
                    {/* 이방식으로도 가능 
                    <select id="sel-telecom" name="" >
                        <option value="">선택하세요</option>
                        <option value="skt" selected={telecom === 'skt'}>SKT</option>
                        <option value="kt" selected={telecom === 'kt'}>KT</option>
                        <option value="lg" selected={telecom === 'lg'}>LGU+</option>
                        <option value="etc" selected={telecom === 'etc'}>알뜰통신</option>
                    </select> */}
                    <select id="sel-telecom" name="" value={telecom} onChange={handleTelecom}>
                        <option value="">선택하세요</option>
                        <option value="skt" >SKT</option>
                        <option value="kt" >KT</option>
                        <option value="lg" >LGU+</option>
                        <option value="etc" >알뜰통신</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="txt-desc">자기소개</label> <br />
                    <textarea id="txt-desc" name="" value={desc} onChange={handleDesc}></textarea>
                </div>
                <button type="submit">제출</button>
            </form>
        </>
    );
}

export default Ex19;