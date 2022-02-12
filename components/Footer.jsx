import React from 'react'
import styles from "../styles/Footer.module.css";
import Image from 'next/image'


const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>

                <Image src="/img/bg.png" layout="fill" />

            </div>
            <div className={styles.item}>

                <div className={styles.card}>
                    <h2 className={styles.motto}>
                        Eat Pizza like a Queen you are, Double E; Double Z

                    </h2>


                </div>
                <div className={styles.card}></div>
                <div className={styles.card}></div>

            </div>


        </div>
    )
}

export default Footer
