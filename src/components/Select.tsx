import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { string } from "yargs";
import Result from "./Result";

const Select = () => {
    let history = useHistory()

    const [start, setStart] = useState("")
    const [end, setEnd] = useState("")
    const clicked = (start: string, end:string) => {
        let Start = new Date(start)
        let End = new Date(end)
        if(start === " " || end === " " || End < Start){
            alert("Please select start date and date correctly")
        }else{
            history.push("result?start="+start+"&end="+ end);
            <Result/>
        }
    }

    return (
        <div className="text-center space-y-3 space-x-3">
            <p className="text-2xl font-semibold">Slect historical range</p>
            <span>From date</span>
            <input type="date" onChange={e => setStart(e.target.value)}/>
            <span>To date</span>
            <input type="date" onChange={e => setEnd(e.target.value)} />
            <br />
            <button onClick={() => clicked(start,end)}>Get data</button>
        </div>
    )
}

export default Select