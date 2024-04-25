import React from 'react';
import { useState, useEffect } from 'react';
import Filter from '../Filter/Filter.js'
import UsersList from '../UsersList/UsersList.js'
import styles from './Main.module.css'

const Main = () => {

    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <Filter />
                <UsersList />
            </div>

        </main >
    )
}

export default Main