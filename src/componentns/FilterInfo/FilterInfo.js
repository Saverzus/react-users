import styles from './FilterInfo.module.css'

const FilterInfo = () => {
    return (
        <div className={styles.filterInfo}>
            <div className={styles.filterShortInfoContainer}>
                <p className={styles.filterShortInfoQuantityContainer}>
                    Filter: <span className={styles.filterShortInfoQuantityValue}>2</span>
                </p>
                <button className={styles.filterShortInfoClear}>Clear all</button>
            </div>
            <div className={styles.filterInfoPickedUsersContainer}>
                <p className={styles.filterInfoPickedUsersText}>Name&nbsp;:&nbsp;</p>
                <ul className={styles.filterInfoPickedUsersList}>
                    <li className={styles.filterInfoPickedUsersItem}>
                        <p className={styles.filterInfoPickedUsersItemText}>
                            Leanne
                        </p>
                    </li>
                    <li className={styles.filterInfoPickedUsersItem}>
                        <p className={styles.filterInfoPickedUsersItemText}>
                            Leanne
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default FilterInfo