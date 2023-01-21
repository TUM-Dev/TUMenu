import { createContext } from 'react'

interface SidebarContextProps {
    triggerSidebarMobile: boolean;
    setTriggerSidebarMobile: React.Dispatch<React.SetStateAction<boolean>>;
}

const CanteenContext = createContext<SidebarContextProps>({
    triggerSidebarMobile: false,
    setTriggerSidebarMobile: () => { },
})


export default CanteenContext