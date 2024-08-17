import { createContext, useContext, useState } from "react";

const ModeContext = createContext();


export const ModeProvider = ({children}) => {

    const [modeSelected, setModeSelected] = useState(false)

    const changeMode = () => {

        setModeSelected(!modeSelected)
    }
    

    return (
        <ModeContext.Provider value={{modeSelected, changeMode}}>
            {children}
        </ModeContext.Provider>
    )

}

export const useMode = () => useContext(ModeContext);