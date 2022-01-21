import LayoutUI from '../UI/LayoutUI';
import styles from './loinPage.less';

function LoginPage(props) {

    const headerUI = () => {
        return (
            <header className={styles.hd}>login page
                <button onClick={() => props.switchTheme()}>Theme</button>&ensp;
                <button onClick={() => props.swichLanguage()}>Language</button>
            </header>
        )
    }
    const bodyUI = () => {
        return (
            <div>login body</div>
        )
    }
    const footerUI = () => {
        return (
            <div>login footer</div>
        )
    }

    return (
        <div>
            {headerUI()}
            {bodyUI()}
            {footerUI()}
        </div>
    )
}

export default LoginPage;
