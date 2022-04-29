import {createContext, useContext} from 'react'
import usePersistedState from '../hook/usePersistedState'

export const UserContext = createContext()

const UserProvider = ({ children }) => {
    const initialState = {
        userid:'',
        password:'',
        username:'',
    }
    const [user,setUser] = usePersistedState('user',null)

    const contextValue = {
        user,
        signIn: (obj) => { setUser(obj) }, 
        signOut: () => { setUser(null) }
    }

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider
export const useUserContext = () => useContext(UserContext)