import styles from "./contact.module.css"
import Button from "../Button/Button"
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useState } from "react";

export default function Contact({addData}){
    const [formData,setFormData] = useState({Name:"",email:"",textarea:""})
    const changeData = (e) => {
        setFormData((currData)=>
            {
                return {
                    ...currData,
                    [e.target.name]:e.target.value,
                }
            })
    }
    const onSubmit = (e) =>{
        e.preventDefault();
        addData(formData);
        setFormData({Name:"",email:"",textarea:""})
    }
    return(
        <div className={styles.content}>
            <div className={styles.contact_form}>
                <div className={styles.btn}>
                    <div className={styles.contact}>
                        <Button
                            text="VIA CHAT SUPPORT"
                            icon={<MdMessage fontSize="24px"/>}/>
                        <Button 
                            text="VIA CALL"
                            icon={<FaPhoneAlt fontSize="24px"/>}/>
                    </div>
                     <Button 
                        isOutline={true}
                        text="VIA EMAIL CALL"
                        icon={<HiMail fontSize="24px"/>}/>
                </div>
                <form onSubmit={onSubmit}>
                    <div className={styles.form_input}>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="Name" value={formData.Name} onChange={changeData}></input>
                    </div>
                    <div className={styles.form_input}>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={changeData}></input>
                    </div>
                    <div className={styles.form_input}>
                        <label htmlFor="text">Text-Area</label>
                        <textarea id="name" name="textarea" rows="8" value={formData.textarea} onChange={changeData}></textarea>
                    </div>
                    <div style={{display:"flex",justifyContent:"end"}}>
                        <Button text="SUBMIT"/>
                    </div>
                </form>
            </div>
            <div className="contact_img">
                <img src="./images/contact.jpg" alt="contact_image"></img>
            </div>
        </div>
    )
}
