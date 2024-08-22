import styles from './addInput.module.css'

function AddItemInput({handlonKeyDown}) {


    return (
        <input type="text" placeholder="Enter Food here"
            className={styles.foodInput}
            onKeyDown={handlonKeyDown}
        />
    )
}

export default AddItemInput