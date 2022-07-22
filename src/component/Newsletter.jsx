import React from 'react';
import {Send} from '@material-ui/icons'
function Newsletter(){
    return(
        <div className = "flex items-center justify-center flex-col w-[100%] h-[350px] bg-[#c4a4f9]">
        <h1 className = "text-[50px] font-bold"> NEWSLETTERS</h1>
        <h2 className ="text-[20px] mt-2">Always in touch with us for your favourite products</h2>
        <div className ="flex items-center justify-between min-w-[30rem] min-h-[2rem] mt-[3rem] bg-white rounded-[5px] overflow-hidden border-[#cccccc]">
        <input className="border-none pl-[20px] flex-[7] outline-none" type ="email" placeholder ="email"/>
        <button className ="flex-1 bg-[#4caf50] h-[100%]">
        <Send className = "text-white"/>
        </button>
        </div>
        </div>
    )
}
export default Newsletter