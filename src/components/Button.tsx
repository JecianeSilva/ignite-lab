import { ButtonHTMLAttributes ,ReactNode } from 'react';
import FadeLoader from "react-spinners/FadeLoader";
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
children: ReactNode;
disabled?: boolean;
loading?: boolean;
asChild?: boolean;
className?: string;
}

export function Button({disabled = false, loading = false, children, className, asChild, ...props}: ButtonProps) {
    const Components = asChild ? Slot : 'button';

    return (
        <Components aria-label='button' className={clsx(
            'py-4 px-3 rounded font-semibold text-sm w-full h-14', 
            {
                'bg-green-500 text-black hover:bg-green-300 active:bg-green-700': disabled === false,
                'bg-gray-600 text-gray-200 cursor-not-allowed disabled': disabled === true,
            },
            {
                'py-1 cursor-not-allowed hover:bg-green-500 active:bg-green-500': loading === true && disabled === false,
                'py-1 cursor-not-allowed': loading === true && disabled === true,
            },
            className
        )}
        >
            {loading ? 
                <FadeLoader  
                    color={disabled ? 'grey':'black'}
                    height={10}
                    width={3.4} 
                    margin={-4} 
                    speedMultiplier={0.7} 
                    cssOverride={{top: 24, bottom:0}} 
                /> : 
                children
            }
        </Components>
    )
}