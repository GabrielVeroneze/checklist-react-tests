import styles from './todo-item.module.css'

export const mergeClass = (isItemCompleted: boolean = false) => {
    const itemStyles = [styles['todo-item']]

    if (isItemCompleted) {
        itemStyles.push(styles.completed)
    }

    return itemStyles.join(' ')
}
