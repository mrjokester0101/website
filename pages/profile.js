import Image from 'next/image';
import styles from '../styles/Profile.module.css';

export default function UserProfile() {
  const user = {
    name: 'MrJokester',
    roles: ['Coder', 'Designer'],
    avatar: '/profile.png',
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.profileContainer}>
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
              <span key={index} className={styles.userRole}>
                {role}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
