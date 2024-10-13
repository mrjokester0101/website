import { useState } from 'react';
import styles from './MenuButton.module.css'; // Import CSS Module

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
                    {/* Add any content you want when the menu is open */}
                </div>
            )}
        </div>
    );
}
