import React, {useState, useEffect, createContext} from "react"

const MemberContext = createContext({})

const MemberProvider = ({children}) => {
    const [memberStatus, setMemberStatus] = useState('free')

    return <MemberContext.Provider value={memberStatus}>{children}</MemberContext.Provider>
}

export {MemberContext, MemberProvider}