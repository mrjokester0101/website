import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Profile.module.css';

const UserProfile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleProfile = () => setIsOpen(prev => !prev);

  return (
    <div className={styles.userProfileContainer}>
      <button className={styles.profileButton} onClick={toggleProfile}>
        <img
          className={styles.discordIcon}
          src="/discord_label.png"
          alt={isOpen ? 'Hide Profile' : 'Show Profile'}
        />
      </button>

      <div className={`${styles.profileDetails} ${isOpen ? styles.show : styles.hide}`}>
        <Image
          src="/profile.png"
          alt="Profile Avatar"
          width={100}
          height={100}
          className={styles.avatar}
        />
        <div className={styles.userInfo}>
          <h2 className={styles.userName}>MrJokester</h2>
          <div className={styles.userRoles}>
            <span className={`${styles.userRole} ${styles.roleCoder}`}>Coder</span>
            <span className={`${styles.userRole} ${styles.roleDesigner}`}>Designer</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
