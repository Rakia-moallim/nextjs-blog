import styles from './alert.module.css';
import {clsx} from 'clsx';

export default function Alert({chirldren, type}){
    return(
        <div className={clsx({
            [styles.success]: type === 'success',
            [styles.error]: type === 'error',
        })}
        >
        {chirldren}
        </div>
    );
}