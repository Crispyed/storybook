import './button.css';

interface ButtonProps {
    type: 'default' | 'primary' | 'danger' | 'warning' | 'success';
    size: 'small' | 'medium' | 'large';
    label: string;
    isBordered?: boolean;
    onClick?: () => void;
}

export const Button = ({
    type = 'default',
    size = 'medium',
    label,
    isBordered = false,
    ...props
}: ButtonProps) => {
    return (
        <button
            type="button"
            className={`crispy-button crispy-button--${type} crispy-button--${size} crispy-button--border-${isBordered}`}
            {...props}
        >
            {label}
        </button>
    );
};
