import Image from 'next/image'
import styles from './page.module.css'
import Webdevsimage from '/public/images/webdevs.jpg'
import Button from '@/components/Button/Button'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
      <h1 className={styles.title}>Better Design for your digital products with us</h1>
        <p className={styles.desc}>Turning your Idea Into Reality. Web bring together the team from 
          the global tech industry</p>
          <Button  url="/portfolio" text="See Our Works"/>
      </div>

      <div className={styles.item}>
      <Image src={Webdevsimage} alt='' className={styles.img} />
      </div>
    </div>
  )
}
