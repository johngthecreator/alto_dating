import { useEffect, useState } from "react"

export default function HeightInput(props:any){
    const [mh, setMh] = useState<number>(4);
    const [sh, setSh] = useState<number>(0);

    useEffect(()=>{
        props.atom((mh*12)+sh);
    },[mh,sh])

    return(
        <div className="flex text-3xl font-bold">
            <select
            className="border-solid border-b-2 border-[#333] text-3xl font-bold rounded-none"
            onChange={(e)=>setMh(Number(e.target.value))}
            >
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
            </select>
            <p className="px-3">'</p>
            <select
            className="border-solid border-b-2 border-[#333] text-3xl font-bold rounded-none"
            onChange={(e)=>setSh(Number(e.target.value))}
            >
                <option value={0}>0</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
                <option value={11}>11</option>
            </select>
            <p className="px-3">"</p>
        </div>
    )
}