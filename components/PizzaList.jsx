import React from 'react'
import styles from "../styles/PizzaList.module.css";
import PizzaCard from './PizzaCard';

const PizzaList = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                CALABAR BEST TOPPINGS
            </h1>

            <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Porro maiores, ducimus
                reprehenderit dolorum nihil laborum vero! Doloribus
                iure ab, error earum deleniti perferendis inventore,
                quaerat, esse unde excepturi facilis dolorem.
            </p>

            <div className={styles.wrapper}>

                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
         
            </div>
        </div>
    );
};

export default PizzaList
