import HighLightReact from "./highlight-react"

type Prop = {
    title: string
    fun: Function
}
export default function Card(props:Prop){
    return (
        <div>
            <div style={{
                display:"flex"
            }} >
                <h4 style={{flex:"1"}} >{props.title}</h4>
                <button onClick={()=>props.fun()} >触发</button>
            </div>
            <HighLightReact>{props.fun.toString()}</HighLightReact>
        </div>
    )
}