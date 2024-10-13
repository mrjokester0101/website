import { useState } from 'react';
import styles from './styles/MenuButton.module.css';
import UserProfile from '../components/UserProfile';

export default function MenuButton() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={styles.menuWrapper}>
            <button onClick={toggleMenu} className={styles.menuButton}>
                <div className={styles.iconLine}></div>
                <div className={styles.iconLine}></div>
                <div className={styles.iconLine}></div>
            </button>

            {menuOpen && (
                <div className={styles.menuContent}>
                    <UserProfile/>
                </div>
            )}
        </div>
    );
}
