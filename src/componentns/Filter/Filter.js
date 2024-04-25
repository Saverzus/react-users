import FilterInfo from '../FilterInfo/FilterInfo'
import styles from './Filter.module.css'

const Filter = () => {
    return (
        <div className={styles.filter}>
            <input className={styles.filter__input} type="text" placeholder='Select name'></input>
            <FilterInfo />
        </div>
    )
}

export default Filter