import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import AboutImg from '/public/images/about-img.jpg'
import Button from '@/components/Button/Button'

export default function About() {
  return (
    <div className={styles.container}>About
      <div className={styles.imgContainer}>
        <Image className={styles.img} src={AboutImg} alt='' fill={true}/>
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>Handcrafting award winning digital experience</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title} >Who We Are ?</h1>
          <p className={styles.desc}>It is a long established fact that a reader will be distracted 
            by the readable content of a page when looking at its layout. 
            The point of using Lorem Ipsum is that it has a more-or-less normal 
            <br/>
            <br/>
            distribution of letters, as opposed to using Content here, content here,
            making it look like readable English. Many desktop publishing packages and web page 
            editors now use Lorem Ipsum as their default model text,
            and a search will uncover many web sites still in their infancy.</p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title} >Who We Do ?</h1>
          <p>
            distribution of letters, as opposed to using Content here, content here,
            making it look like readable English. Many desktop publishing packages and web page 
            editors now use Lorem Ipsum as their default model text,
            and a search 
            <br/>
            <br/>- will uncover many 
            <br/>- web sites still 
            <br/>- in their infancy
          </p>
          <Button  url="/contact" text="Contact"/>
        </div>
      </div>
    </div>
  )
}
