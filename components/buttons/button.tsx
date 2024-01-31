'use client';
import './button.css';

interface ButtonProps {
 primary?: boolean;
 label?: string;
 size?: 'small' | 'regular';
 onClick?(): () => void;
}

export const Button = ({
 primary = true,
 label,
 size,
 ...props
}: ButtonProps) => {
 const _styles = primary ? 'dt-button-primary' : 'dt-button-secondary';
 const styles = _styles.concat(`-${size}`);

 return (
  <button onClick={props.onClick} className={`dt-button ${styles}`}>
   {label}
  </button>
 );
};
