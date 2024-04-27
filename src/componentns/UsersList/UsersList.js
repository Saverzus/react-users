import React, { useState } from 'react';
import styles from './UsersList.module.css';
import emailImage from '../../images/user/email.svg';
import website from '../../images/user/website.svg';
import phone from '../../images/user/phone.svg';
import street from '../../images/user/street.svg';
import suite from '../../images/user/suite.svg';
import city from '../../images/user/city.svg';
import zipcode from '../../images/user/zipcode.svg';
import company from '../../images/user/company.svg';
import catchPhrase from '../../images/user/catchPhrase.svg';
import bs from '../../images/user/bs.svg';


const UsersList = ({ users }) => {
    const [clickedUser, setClickedUser] = useState();

    const handleUserClick = (userId) => {
        if (clickedUser === userId) {
            setClickedUser(null);
        } else {
            setClickedUser(userId);
        }
    }

    console.log(users)


    return (
        <section className={styles.users}>
            <ul className={styles.usersList}>
                {users.map((user) => (
                    <li
                        key={user.id}
                        className={clickedUser === user.id ? styles.usersListItemActive : styles.usersListItem}
                        onClick={() => handleUserClick(user.id)}
                    >
                        <div className={styles.avatarContainer}>
                            <div className={styles.avatar}>
                                <p className={styles.avatarText}>
                                    {user.name.at(0)}
                                    {user.name.split(' ')[1].at(0)}
                                </p>
                            </div>
                            <ul className={styles.namesList}>
                                <li className={styles.namesItem}>
                                    <p className={styles.name}>
                                        {user.name}
                                    </p>
                                    <p className={styles.username}>
                                        {user.username}
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <ul className={styles.communicationList}>
                            <li className={styles.communicationItem}>
                                <picture className={styles.communicationPicture}>
                                    <img className={styles.communicationImage} src={emailImage} width="16.67" alt="Email Icon" title="Email" />
                                </picture>
                                <a className={styles.communicationLink} href={`mailto:${user.email}`}>
                                    email:<span className={styles.communicationValue}>{user.email}</span>
                                </a>
                            </li>
                            <li className={styles.communicationItem}>
                                <picture className={styles.communicationPicture}>
                                    <img className={styles.communicationImage} src={website} width="16.67" alt="Website Icon" title="Website" />
                                </picture>
                                <a className={styles.communicationLink} target="_blank" href={`http://${user.website}`} rel="noreferrer">
                                    website:<span className={styles.communicationValue}>{user.website}</span>
                                </a>
                            </li>
                            <li className={styles.communicationItem}>
                                <picture className={styles.communicationPicture}>
                                    <img className={styles.communicationImage} src={phone} width="14.97" alt="Phone Icon" title="Phone" />
                                </picture>
                                <a className={styles.communicationLink} href={`tel:${user.phone}`}>
                                    phone:<span className={styles.communicationValue}>{user.phone}</span>
                                </a>
                            </li>
                        </ul>
                        <ul className={clickedUser === user.id ? styles.hiddenUserListActive : styles.hiddenUserList}>
                            <li className={styles.hiddenUserItem}>
                                <picture className={styles.hiddenUserPicture}>
                                    <img loading="lazy" className={styles.hiddenUserImage} src={street} width="14.4" alt="Street Icon" title="Street" />
                                </picture>
                                <p className={styles.communicationText}>
                                    street:<span className={styles.communicationValue}>{user.address.street}</span>
                                </p>
                            </li>
                            <li className={styles.hiddenUserItem}>
                                <picture className={styles.hiddenUserPicture}>
                                    <img loading="lazy" className={styles.hiddenUserImage} src={suite} width="14.4" alt="Suite Icon" title="Suite" />
                                </picture>
                                <p className={styles.communicationText}>
                                    suite:<span className={styles.communicationValue}>{user.address.suite}</span>
                                </p>
                            </li>
                            <li className={styles.hiddenUserItem}>
                                <picture className={styles.hiddenUserPicture}>
                                    <img loading="lazy" className={styles.hiddenUserImage} src={city} width="15.2" alt="City Icon" title="City" />
                                </picture>
                                <p className={styles.communicationText}>
                                    city:<span className={styles.communicationValue}>{user.address.city}</span>
                                </p>
                            </li>
                            <li className={styles.hiddenUserItem}>
                                <picture className={styles.hiddenUserPicture}>
                                    <img loading="lazy" className={styles.hiddenUserImage} src={zipcode} width="15.2" alt="Zipcode Icon" title="Zipcode" />
                                </picture>
                                <p className={styles.communicationText}>
                                    zipcode:<span className={styles.communicationValue}>{user.address.zipcode}</span>
                                </p>
                            </li>
                            <li className={styles.hiddenUserItem}>
                                <picture className={styles.hiddenUserPicture}>
                                    <img loading="lazy" className={styles.hiddenUserImage} src={company} width="14.4" alt="Company Icon" title="Company" />
                                </picture>
                                <p className={styles.communicationText}>
                                    company:<span className={styles.communicationValue}>{user.company.name}</span>
                                </p>
                            </li>
                            <li className={styles.hiddenUserItem}>
                                <picture className={styles.hiddenUserPicture}>
                                    <img loading="lazy" className={styles.hiddenUserImage} src={catchPhrase} width="14.4" alt="Catch Phrase Icon" title="Catch Phrase" />
                                </picture>
                                <p className={styles.communicationText}>
                                    catchPhrase:<span className={styles.communicationValue}>{user.company.catchPhrase}</span>
                                </p>
                            </li>
                            <li className={styles.hiddenUserItem}>
                                <picture className={styles.hiddenUserPicture}>
                                    <img loading="lazy" className={styles.hiddenUserImage} src={bs} width="14.4" alt="bs Phrase Icon" title="bs" />
                                </picture>
                                <p className={styles.communicationText}>
                                    bs:<span className={styles.communicationValue}>{user.company.bs}</span>
                                </p>
                            </li>
                        </ul>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default UsersList;
