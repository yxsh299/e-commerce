'use client'
import React, { useEffect, useState } from 'react'

import classes from './index.module.scss'

const Promotion = () => {
    const [time, settime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,

    })
    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 7)

    useEffect(() => {
      const timerInterval = setInterval(() => {
        const currentDate = new Date();
        const timeDifference = Math.max(Number(targetDate) - Number(currentDate), 0 )
  
          // Calculate remaining time in seconds, minutes, hours, and days
          const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)
          const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
          const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
          const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
  
          
          settime({ days, hours, minutes, seconds })

            if (timeDifference === 0) {
             clearInterval(timerInterval)

            }
        }, 1000) 
        return () => {
          clearInterval(timerInterval)
        }
    }, [])



    return (
        <section className={classes.promotion}>
            <div className={classes.textBox}>
                <h3 className={classes.title}>Deals of the Month</h3>
                <p>
                    Hey there! Get excited for Shoply's Deals of the Month! We've got some fantastic savings waiting just for you. This month, you can snag awesome discounts on clothing, shoes, gadgets, and beauty products. Whether you're after a fresh new look, the latest tech, or some self-care goodies, we've got it all.
                    <br/>You won't want to miss these amazing deals. Shop now and enjoy up to 50% off on selected items. And guess what? For all orders over $50, the shipping's on us! But hurry, these deals won't stick around forever. It's time to treat yourself and make the most of the best prices of the month. Happy shopping!
                </p>
                <ul className={classes.stats}>
                   <StatBox Label="Days" vaLue={time.days} />
                   <StatBox Label="Hours" vaLue={time.hours} />
                   <StatBox Label="Minutes" vaLue={time.minutes} />
                   <StatBox Label="Seconds" vaLue={time.seconds} />
                    
                </ul>
            </div>
        </section>

    )
}

const StatBox= ({ Label, vaLue}: {Label: string; vaLue: number}) => (
                   <li className={classes.statBox}>
                        <h4>{vaLue}</h4>
                        <p>{Label}</p>
                    </li>
)

export default Promotion