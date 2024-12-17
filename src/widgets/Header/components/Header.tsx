import styles from './Header.module.css'

export const Header:React.FC=()=>{
return(
    <div className={styles['header']}>
        <h3>ARMAGEDDON 2023</h3>
        <p>"Team named after B. Willis".<br/>
        Blowing up asteroids since 1998.</p>
    </div>
)
}