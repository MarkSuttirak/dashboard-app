import React, {useState, useEffect, createContext} from "react"

const MemberContext = createContext({})

const MemberProvider = ({children}) => {
    const [status, setStatus] = useState('pending')

    const changeStatus = (val) => {
        switch (val){
            case 'pro':
                setStatus('pro')
                break;
            case 'pending':
                setStatus('pending')
                break;
            default:
                setStatus('free')
                break;
        }
    }

    const memberStatus = {
        status:status,
        change:changeStatus
    }

    return <MemberContext.Provider value={memberStatus}>{children}</MemberContext.Provider>
}

export {MemberContext, MemberProvider}