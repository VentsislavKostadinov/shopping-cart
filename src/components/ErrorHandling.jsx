import styles from "../style/ErrorHandling.module.scss";
import dummy from "../dummy/dummy.json";

const ErrorHandling = () => {

    const errorTitles = dummy?.errorHandling;
    const refreshPage = () => window.location.reload(false);
    
    return (
        <div className={styles.errorMessage}><br/>
            <h2>{errorTitles.errorHandlingTitle}</h2><br/>
            <button type="button" onClick={refreshPage}>{errorTitles.errorButtonTitle}</button>
        </div>
    )
}

export default ErrorHandling;