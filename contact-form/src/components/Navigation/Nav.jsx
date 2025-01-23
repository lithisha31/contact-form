import styles from "./Nav.module.css";

export default function Nav(){
    return(
        <nav className={`${styles.nav} container`}>
             <div>
                <img src="/images/logo.jpg" alt="logo"></img>
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
       
    )
}
