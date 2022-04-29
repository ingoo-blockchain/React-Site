import {useState, useEffect} from 'react'

const usePersistedState = (key, initialState) => {
    const [state, setState] = useState(() => {
        const storagedState = localStorage.getItem(key);
        return storagedState ? JSON.parse(storagedState) : initialState
    })

    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(state))
    },[key,state])

    return [state, setState]
}

export default usePersistedState