import React, { useState } from 'react';
import styles from './FilterInfo.module.css'

const FilterInfo = ({ selectedUsers, selectedUsersCount, setSelectedUsers }) => {
    return (
        <div className={styles.filterInfo}>
            <div className={styles.filterShortInfoContainer}>
                <p className={styles.filterShortInfoQuantityContainer}>
                    Filter: <span className={styles.filterShortInfoQuantityValue}>{selectedUsersCount}</span>
                </p>
                <button className={styles.filterShortInfoClear} onClick={() => setSelectedUsers([])}>Clear all</button>
            </div>
            <div className={styles.filterInfoPickedUsersContainer}>
                <p className={styles.filterInfoPickedUsersText}>Name&nbsp;:&nbsp;</p>
                <ul className={styles.filterInfoPickedUsersList}>
                    {selectedUsers.map((user, index) => (
                        <li key={index} className={styles.filterInfoPickedUsersItem}>
                            <p className={styles.filterInfoPickedUsersItemText}>
                                {user.name}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default FilterInfo