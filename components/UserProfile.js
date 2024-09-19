import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Profile.module.css';

const UserProfile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleProfile = () => setIsOpen(prev => !prev);

  return (
    <div className={styles.userProfileContainer}>
      <button className={styles.profileButton} onClick={toggleProfile}>
        <Image
          src="/discord_label.png"
          alt={isOpen ? 'Hide Profile' : 'Show Profile'}
          className={styles.discordIcon}
        />
      </button>

      <div className={`${styles.profileDetails} ${isOpen ? styles.show : styles.hide}`}>
        <h2 className={styles.avatarBackground}>‎ 
        </h2>
        <Image
          src="/profile.png"
          alt="Profile Avatar"
          className={styles.avatar}
        />
        <div className={styles.userInfo}>
          <h2 className={styles.userName}>MrJokester</h2>
          <p>mrjokester0101</p>
          <p>He/Him</p>
          <div className={styles.roleBackground}>
          <div className={styles.userRoles}>
            <span className={`${styles.userRole} ${styles.roleCoder}`}>Coder</span>
            <span className={`${styles.userRole} ${styles.roleDesigner}`}>Designer</span>
          </div>
          </div>
          <p>Member Since: Jun 15, 2024</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
