import styles from './container.module.css'
function Container({children}) {
    // console.log("children = ",children)
  return (
    <div className={styles.container}>{children}</div>
  )
}

export default Container