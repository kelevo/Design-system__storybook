import './button.css';

export interface ButtonProps {
  style: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const createButton = ({
  style = 'filled',
  size = 'small',
  label,
  onClick
}: ButtonProps) => {

  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label;
  btn.role = 'button';

  if (onClick) btn.addEventListener('click', onClick);

  btn.className = [
    'button',
    `button--${size}`,
    `button--${style}`
  ].join(' ');

  return btn;

};