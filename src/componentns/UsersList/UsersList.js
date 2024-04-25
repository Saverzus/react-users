import styles from './UsersList.module.css'
import emailImage from '../../images/user/email.svg'
import website from '../../images/user/website.svg'
import phone from '../../images/user/phone.svg'


const UsersList = () => {
    return (
        <section className={styles.users}>
            <ul className={styles.usersList}>
                <li className={styles.usersListItem}>
                    <div className={styles.avatarContainer}>
                        <div className={styles.avatar}>
                            <p className={styles.avatarText}>
                                la
                            </p>
                            {/* или тут картинку выводить picture */}
                        </div>
                        <ul className={styles.namesList}>
                            <li className={styles.namesItem}>
                                <p className={styles.name}>
                                    name
                                </p>
                                <p className={styles.username}>
                                    username
                                </p>
                            </li>
                        </ul>
                    </div>
                    <ul className={styles.communicationList}>
                        <li className={styles.communicationItem}>
                            <picture className={styles.communicationPicture}>
                                <img className={styles.communicationImage} src={emailImage} width="16.67" alt="Email Icon" title="Email Icon" />
                            </picture>
                            <a className={styles.communicationLink} href="mailto:dasads@gmail.com">
                                email:<span className={styles.communicationValue}>dasads@gmail.com</span>
                            </a>
                        </li>
                        <li className={styles.communicationItem}>
                            <picture className={styles.communicationPicture}>
                                <img className={styles.communicationImage} src={website} width="16.67" alt="Website Icon" title="Website Icon" />
                            </picture>
                            <a className={styles.communicationLink} target="blank_" href="google.com">
                                website:<span className={styles.communicationValue}>google.com</span>
                            </a>
                        </li>
                        <li className={styles.communicationItem}>
                            <picture className={styles.communicationPicture}>
                                <img className={styles.communicationImage} src={phone} width="14.97" alt="Email Icon" title="Email Icon" />
                            </picture>
                            <a className={styles.communicationLink} target="blank_" href="tel:+79999999999">
                                phone:<span className={styles.communicationValue}>+7-999-999-99-99</span>
                            </a>
                        </li>
                    </ul>
                </li>

            </ul>
        </section>

    )
}

export default UsersList