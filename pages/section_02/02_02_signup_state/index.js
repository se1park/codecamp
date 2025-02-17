import {useState} from "react";

export default function SignupStatePage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [emailError, setEmailError] = useState("아직 에러 없음")

    function onChangEmail(event) {
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)

        setEmail(event.target.value)
    }
    function onChangePassword(event) {
        setPassword(event.target.value)
    }

    function onClickSignup(event) {
        console.log(email)
        console.log(password)

        //1. 검증하기
        if(email.includes("@") === false){
            // document.getElementById("error").innerText = "이메일이 올바르지 않습니다(@미포함)"
            setEmailError("이메일이 올바르지 않습니다(@미포함)")
        }else{
            //2. 백엔드 컴퓨터에 보내주기(빅엔드 개발자가 만든 api)

            //3. 성공알람 보여주가
            alert("회원가입을 축합니다")
        }

    }

    return(
        <div>
            이메일: <input type="text" onChange={onChangEmail}/>
            {/*<div id="error"></div>*/}
            <div>{emailError}</div>
            비밀번호: <input type="password" onChange={onChangePassword}/>
            <button onClick={onClickSignup}>회원가입</button>
        </div>
    )

}
