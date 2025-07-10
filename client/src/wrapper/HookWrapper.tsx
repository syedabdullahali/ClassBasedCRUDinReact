import { ComponentType, JSX } from "react"
import { useHookGetData } from "../services/crud"
import { UserFetchApi } from "../type/crud"

interface HookProps {
    result:UserFetchApi
}

const HookWrapper = ({Component}:{Component:ComponentType<HookProps>})=>{
    const result = useHookGetData()
    return <div>
        {<Component result={result} />}
    </div>

}
export default HookWrapper