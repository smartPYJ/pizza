import React from 'react'
import styles from "../styles/Navbar.module.css";
import Image from 'next/image';

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>

                <div className={styles.callButton}>
                    <Image src="/image/telephone.png" width="32" height="32" />

                </div>

                <div className={styles.texts}>
                    <div className={styles.text}> ORDER NOW!</div>
                    <div className={styles.text}> 091 918 987 12</div>

                </div>

            </div>
            <div className={styles.item}>

                <ul className={styles.list}>
                    <li className={styles.listItem}>Home page </li>
                    <li className={styles.listItem}>About </li>
                    <li className={styles.listItem}>Contact Us</li>

                    <Image src="/image/logo1.png" width="68px" height="106px" />
                    <li className={styles.listItem}>Menu </li>
                    <li className={styles.listItem}>Products</li>
                    <li className={styles.listItem}>Event</li>


                </ul>
            </div>
            <div className={styles.item}> 
            

            <div className={styles.cart}> 
            <Image src="/image/cart.png" width="30px" height="30px"/>

            <div className={styles.counter}> 
            2
            </div>
            </div>
             </div>

        </div>
    )
}

export default Navbar
