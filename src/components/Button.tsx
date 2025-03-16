import clsx from 'clsx';
import styles from './button.module.css';

interface ButtonProps {
  buttonText: string;
  type?: string;
  variant?: string;
  onClick?: () => void
}

function Button({ buttonText, type = 'button', variant = 'primary', ...restProps }: ButtonProps) {
  return (
    <button 
      {...restProps}
      // className={`
      //   text-20 items-center justfy-center 
      //   ${type === 'submit' ? styles['btn-primary'] : ' ' }
      // `}
      type={type}
      className={clsx(
        `text-20 items-center justfy-center`,
        type === 'submit' && styles['btn-primary'],
        variant === 'primary' && 'text-primary',
        variant === 'secondary' && 'text-secondary',
        variant === 'terinary' && 'text-terinary',
        variant === 'black' && 'text-black'
      )}
    >
      {buttonText}
    </button>
  )
}

export default Button;