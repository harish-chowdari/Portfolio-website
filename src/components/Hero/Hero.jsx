import React from 'react'
import { getImageUrl } from "../../utils"
import Styles from "./Hero.module.css"

export const Hero = () => {
  return (
    <section className={Styles.container}>
    <div className={Styles.content}>
        <h1 className={Styles.title}>Hi, I am Harish</h1>
        <p className={Styles.description}>
        I did some projects on web development
        using HTML, CSS, JavaScript and ReactJS
        </p>
        <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=DmwnWtDtZDchTbnRCcNpsxhCHRfhqHvDzwmVlFXnxsldVFcLRMvdGTltpVgFwvJpRQpZMKSGjKKG" 
        className={Styles.contactBtn}>Contact Me
        </a>
    </div>
    <img className={Styles.heroImg} src={getImageUrl("hero/heroImage.png")} />
    <div className={Styles.topBlur}> </div>
    <div className={Styles.bottomBlur}> </div>
    </section>
  )
}

