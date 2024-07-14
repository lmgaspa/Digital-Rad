import styles from '../layouts/prenavbar.module.css';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

export default function PreNavBar() {
  return (
    <div className={styles.prenavbar}>
      <div className={styles.prenavbaricons}>
      <BsFillTelephoneFill />
      </div>
      <p>(47)99934-2060</p>
      <div className={styles.prenavbaricons1}>
      <AiOutlineMail />
      </div>
      <p>digital.rad@outlook.com</p>
    </div>
  )
}