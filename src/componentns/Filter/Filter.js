import React, { useState } from 'react';
import FilterInfo from '../FilterInfo/FilterInfo';
import styles from './Filter.module.css';

const Filter = ({ users, setFilteredUsers }) => {
    const [searchName, setsearchName] = useState('');

    const handleFilterSearch = (event) => {
        const filteredUsers = users.filter(user => user.name.toLowerCase().includes(event.target.value.toLowerCase()));
        setFilteredUsers(filteredUsers);
        setsearchName(event.target.value);
    };

    return (
        <div className={styles.filter}>
            <input
                className={styles.filter__input}
                type="text"
                placeholder='Select name'
                value={searchName}
                onChange={handleFilterSearch}
            />
            <FilterInfo />
        </div>
    );
}

export default Filter;