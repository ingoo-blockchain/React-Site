import React from 'react'
import {useUserContext} from '../../contexts/UserContext'

const Welcome = () => {
    const userContext = useUserContext()

    const handleSignOut = () => {
        userContext.signOut()
    }

    return (
        <>
            <p>{userContext.user.username} 님 환영합니다.</p>
            <button onClick={handleSignOut}>로그아웃</button>
        </>
    )
}

export default Welcome

// https://velog.io/@0307kwon/JWT%EB%8A%94-%EC%96%B4%EB%94%94%EC%97%90-%EC%A0%80%EC%9E%A5%ED%95%B4%EC%95%BC%ED%95%A0%EA%B9%8C-localStorage-vs-cookie
// 토큰의 저장위치 cookie vs localStore