import { PropsWithChildren, ReactNode } from 'react';
import styles from './primaryButton.module.css';

export default function PrimaryButton(props:PropsWithChildren){
    return <button className={styles.primary}>
        {props.children}
    </button>
}