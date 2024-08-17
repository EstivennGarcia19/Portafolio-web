import { createContext, useContext, useState } from "react";


// Nombre del contexto
const MobileNavContext = createContext();

export const MobileNavProvider = ({children}) => {

    const [isActiveNavMobile, setIsActiveNavMobile] = useState(false)

    const toggleNavMobile = () => {

        setIsActiveNavMobile(!isActiveNavMobile)
    }

    return (
        <MobileNavContext.Provider value={{isActiveNavMobile, toggleNavMobile}}>
            {children}
        </MobileNavContext.Provider>
    )

}

export const useMobileNav = () => useContext(MobileNavContext)