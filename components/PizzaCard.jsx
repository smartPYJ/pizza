import React from 'react'
import styles from "../styles/PizzaCard.module.css";
import Image from 'next/image';


const PizzaCard = () => {
    return (
        <div className={styles.container}>
          <Image src="/image/pizza.png" alt='' width="500"  height="500"/>
          <h1 className={styles.title}>
              Big Girls
          </h1>
          <span className={styles.price}> $19.88</span>

          <p className={styles.desc}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, quod.</p>
        </div>
    )
}

export default PizzaCard