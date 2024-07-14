import React, { useState } from "react";
import styles from '../layouts/menudropdown.module.css'
import { AiOutlineMenu } from 'react-icons/ai'
import NavList from "./NavList";

export default function MenuDropDown() {
    const [show, setShow] = useState(false)
    const handleClick = event => {
        // 👇️ toggle shown state
        setShow(current => !current);
    };

    return (
        <div>
            <AiOutlineMenu className={styles.menudrop}
            onClick={handleClick}/>
            {show && (
                <div>     
                </div>
            )}
            <div className={styles.menudropshow}>
            {show && <NavList />}
            </div>
        </div>
    )
}