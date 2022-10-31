import React, { useContext, useState } from "react";


export const PAGES = {
    WORK: "work",
    ABOUT: "about",
    SERVICES: "services",
    CONTACT: "contact",
    HOME: "home"
}


const NavContext = React.createContext({
    currentPage: PAGES.HOME,
    goToPage: (nextPage) => { }
})

export const useNavContext = () => useContext(NavContext);

const ContextProvider = ({ children }) => {

    const [page, setPage] = useState(PAGES.HOME)

    const goToPage = (nextPage) => {
        setPage(nextPage);
    }

    return (

        <NavContext.Provider value={{
            currentPage: page,
            goToPage
        }}>
            {children}
        </NavContext.Provider>

    )
}
export default ContextProvider;