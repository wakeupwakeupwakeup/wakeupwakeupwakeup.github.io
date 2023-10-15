"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './ChipsAnimation.module.css';


const ChipAnimation = () => {
    const firstStripe = ["shield", "dollar", "ball", "logo"]
    const secondStripe = ["logo", "timer", "crown", "world"]
    const thirdStripe = ["crown", "logo", "shield", "ball", "shield"]
    const chipsNumber = 10

    const stripe = [firstStripe, secondStripe, thirdStripe]

    return (
      <div>
          {
              stripe.map((stripe, index) => {
                  return (
                      <div className={styles.animationContainer} key={index}>
                          {
                              stripe.map((item, index) => {
                                  return (
                                      <div className={styles.chip} key={index}>
                                          <Image src={`/chip_${item}.svg`} alt={item} width={100} height={100}/>
                                      </div>
                                  )
                              })
                          }
                      </div>
                  )
              })
          }
      </div>
    )
}

export default ChipAnimation;