import { useState } from "react"
import Contact from "./Contact"

export default function ContactList(){
    const [data,setData]=useState([{Name:"",email:"",textarea:""}])
    const addData = (data)=>{
        setData((currData)=>{
            return[...currData,
                   {...data}
                ]
            })
        }
    return(
        <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
            <Contact addData={addData} />
            {data.map((i)=>{
                return(
                    <div>
                        {i.Name}
                        {i.email}
                        {i.textarea}
                    </div>
                )     
            })}          
        </div>
    )
}