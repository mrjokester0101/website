import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Profile.module.css';

const UserProfile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const user = {
    name: 'MrJokester',
    roles: ['Coder', 'Designer'],
    avatar: '/profile.png',
  };

  const toggleProfile = () => setIsOpen(prev => !prev);

  return (
    <div className={styles.userProfileContainer}>
      <button className={styles.profileButton} onClick={toggleProfile}>
        {isOpen ? 'Hide Profile' : 'Show Profile'}
      </button>

      {isOpen && (
        <div className={styles.profileDetails}>
          <Image
            src={user.avatar}
            alt={`${user.name}'s Avatar`}
            width={100}
            height={100}
            className={styles.avatar}
          />

          <div className={styles.userInfo}>
            <h2 className={styles.userName}>{user.name}</h2>

            <div className={styles.userRoles}>
              {user.roles.map((role, index) => (
                <span
                  key={index}
                  className={`${styles.userRole} ${styles[`role${role}`]}`}
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
