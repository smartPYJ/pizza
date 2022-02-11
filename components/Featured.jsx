
import React from "react";

import styles from "../styles/Featured.module.css";
import Image from "next/image";


const Featured = () => {

    const images = [
        "/image/featured.png",
        "/image/featured2.png",
        "/image/featured3.png"
    ];
    return (
        <div className={styles.container}>

            <div className={styles.arrowContainer} style={{left:0}} >
                <Image src="/image/arrowl.png" layout="fill" />
            </div>
            <div className={styles.wrapper}>
                <div className={styles.imgContainer}>
                    {images.map((img, i) => (
                        <Image src="/image/featured.png" key={i} layout="fill" />
                    ))}

                </div>
            </div>
            <div className={styles.arrowContainer} style={{right:0}} >


                <Image src="/image/arrowr.png" layout="fill" />
            </div>

        </div>
    );
};

export default Featured