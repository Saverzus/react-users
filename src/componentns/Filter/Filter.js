import React, { useState } from 'react';
import FilterInfo from '../FilterInfo/FilterInfo';
import styles from './Filter.module.css';
import arrow from '../../images/filter/arrow.svg';
import check from '../../images/filter/check.svg';

const Filter = ({ users, selectedUsers, setSelectedUsers }) => {
    const [filteredUsers, setFilteredUsers] = useState(users);
    const [showFilteredUsers, setShowFilteredUsers] = useState(false);

    const handleFilterSearch = (event) => {
        const searchTerm = event.target.value.toLowerCase();
        const filteredResults = users.filter(user => user.name.toLowerCase().includes(searchTerm));
        setFilteredUsers(filteredResults);
        setShowFilteredUsers(searchTerm.length > 0);
    };


    const handleUserClick = (user) => {
        if (selectedUsers.includes(user)) {
            setSelectedUsers(selectedUsers.filter(selectedUser => selectedUser !== user));
        } else {
            setSelectedUsers([...selectedUsers, user]);
        }
    };

    return (
        <div className={styles.filter}>
            <div className={styles.filterContainer}>
                {selectedUsers.map((user, index) => (
                    <p key={index} className={styles.selectedUserName}>{user.name}</p>
                ))}
                <input
                    className={styles.filter__input}
                    type="text"
                    placeholder='Select name'
                    onChange={handleFilterSearch}
                    onFocus={() => setShowFilteredUsers(true)}
                />
                <button className={styles.flterArrow}>
                    <img className={styles.flterArrowImage} src={arrow} alt="Arrow" title="Arrow" />
                </button>
            </div>

            {showFilteredUsers && filteredUsers.length > 0 && (
                <div className={styles.filteredUsersContainer}>
                    <ul className={styles.filteredUsersList}>
                        {filteredUsers.map(user => (
                            <li
                                key={user.id}
                                className={styles.filteredUsersItem}
                                onClick={() => handleUserClick(user)}
                            >
                                <span className={styles.filteredUsersCheckbox}>
                                    {selectedUsers.includes(user) && (
                                        <img
                                            className={styles.filteredUsersCheckboxImage}
                                            width="8"
                                            src={check}
                                            alt="checkbox"
                                            title="checkbox"
                                        />
                                    )}
                                </span>
                                <p className={styles.filteredUsersName}>{user.name}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <FilterInfo />
        </div>
    );
}

export default Filter;
