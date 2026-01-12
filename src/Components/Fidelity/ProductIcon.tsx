interface ProductIconProps {
    size?: number;
    color?: string;
}

export default function ProductIcon({ size = 40, color = "#FFBB28" }: ProductIconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={color}
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect x="4" y="4" width="16" height="16" rx="3" ry="3" />
            <circle cx="12" cy="12" r="4" fill="white" />
            <line x1="12" y1="8" x2="12" y2="16" stroke={color} strokeWidth="2" />
            <line x1="8" y1="12" x2="16" y2="12" stroke={color} strokeWidth="2" />
        </svg>
    );
}
