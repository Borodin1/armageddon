import styles from './Cart.module.css'
import { SendButton } from '@/shared/components/SendButton'

export const Cart:React.FC=()=>{
    return(
        <div className={styles['cart']}>
            <div className={styles['cart-title']}>
            <p>Cart</p>
            <p>2 Asteroids</p>
            </div>
            
            <SendButton/>
        </div>
    )
}