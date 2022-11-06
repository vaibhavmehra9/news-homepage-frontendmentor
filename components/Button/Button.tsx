import { ButtonT } from 'uitls/types';
import styles from './Button.module.css';

function Button({ type, children, ...rest }: ButtonT) {
  return (
    <button {...rest} type={type} className={styles['button-primary']}>
      {children}
    </button>
  );
}

export default Button;
