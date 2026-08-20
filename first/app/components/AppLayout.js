import styles from './AppLayout.module.css';

export default function AppLayout({ children }) {
    return (
        <div className={styles.home}>
            <div className={styles.homeContent}>
                {children}
            </div>
        </div>
    );
}