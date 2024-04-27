import React, { useState } from 'react';
import FilterInfo from '../FilterInfo/FilterInfo';
import styles from './Filter.module.css';
import arrow from '../../images/filter/arrow.svg';
import check from '../../images/filter/check.svg';


const Filter = ({ users, setFilteredUsers }) => {
    const [searchName, setsearchName] = useState([]);

    const handleFilterSearch = (event) => {
        const filteredUsers = users.filter(user => user.name.toLowerCase().includes(event.target.value.toLowerCase()));
        setFilteredUsers(filteredUsers);
        setsearchName(event.target.value);
    };

    return (
        <div className={styles.filter}>
            <div className={styles.filterContainer}>
                <div className={styles.selectedUserNameContainer}>
                    <p className={styles.selectedUserName}>Select name</p>
                </div>
                <input
                    className={styles.filter__input}
                    type="text"
                    placeholder='Select name'
                    value={searchName}
                    onChange={handleFilterSearch}
                />
                <button className={styles.flterArrow}>
                    <img className={styles.flterArrowImage} src={arrow} alt="Arrow" title="Arrow" />
                </button>
            </div>

            <div className={styles.filteredUsersContainer}>
                <ul className={styles.filteredUsersList}>
                    <li className={styles.filteredUsersItem}>
                        <span className={styles.filteredUsersCheckbox}>
                            <img className={styles.filteredUsersCheckboxImage} width="8" src={check} alt="checkbox" title="" />
                        </span>
                        <p className={styles.filteredUsersName}>Leanne Robert</p>
                    </li>

                </ul>
            </div>

            <FilterInfo />
        </div>
    );
}

export default Filter;