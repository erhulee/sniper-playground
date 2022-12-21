import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage("javascript", javascript)
import "highlight.js/styles/vs2015.css"
import { PropsWithChildren, useEffect, useRef } from 'react';
// hljs.registerLanguage('javascript', javascript);
type HighLightReactProps = {

}
export default function HighLightReact(props:PropsWithChildren<HighLightReactProps>){
    const content = props.children as string;

    const ref = useRef<any>(null);
    useEffect(()=>{
        const result = hljs.highlight("javascript", content);
        ref.current.innerHTML = result.value
    })
    return (
        <pre style={{textAlign:"start", backgroundColor:"black", padding:"2rem", borderRadius:"20px"}}  >
            <div ref={ref}></div>
        </pre>
    )
}