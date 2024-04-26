import React, { useState, useEffect } from 'react';
import styles from './Main.module.css';
import Filter from '../Filter/Filter.js';
import UsersList from '../UsersList/UsersList.js';

const Main = () => {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const jsonData = await response.json();
                setUsers(jsonData);
                setFilteredUsers(jsonData);
            } catch (error) {
                console.error('Ошибка при получении данных: c https://jsonplaceholder.typicode.com/users', error);
            }
        };

        fetchData();
    }, []);

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <Filter users={users} setFilteredUsers={setFilteredUsers} />
                <UsersList users={filteredUsers} />
            </div>
        </main>
    );
}

export default Main;