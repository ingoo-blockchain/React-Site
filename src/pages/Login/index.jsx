import React from 'react'
import { useUserContext } from '../../contexts/UserContext'
import useForm from '../../hook/useForm'
import { validate } from './validate'

const SignIn = () => {
    const userContext = useUserContext()
    const {userid,password,errors,submit,handleSubmit} = useForm({
        userid:'',
        password:'',
    }, (values)=>{
        // axios 요청후 결과값 const {userid,password} = values
        userContext.signIn({ 
            userid:'web7722@gmail.com',
            username:'ingoo'
        })
    },validate)

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type='text' name='userid'  {...userid} /> 
                {errors.userid && <span>{errors.userid}</span>}
                <br />
                <input type='password' name='password' {...password} /> 
                {errors.password && <span>{errors.password}</span>}
                <br />
                <input type='submit' value='로그인' disabled={submit} />
            </form>
        </>
    )
}

export default SignIn