import styles from '@/styles/Home.module.css'
import { Inter } from 'next/font/google'
import Link from "next/link"


const inter = Inter({ subsets: ['latin'] })

export default ()=>{
    return <main  className={`${styles.main} ${inter.className}`}>
        
        <div>Bahman</div>

        <Link href={'/'}>{'<-'} Home</Link>

    </main>
}