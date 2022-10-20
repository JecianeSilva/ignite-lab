import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ReactNode } from 'react';

export interface TextProps {
size?:  'sm' | 'md' | 'lg';
color?: string;
children: ReactNode;
asChild?: boolean;
}

export function Text({size = 'md', color ='text-gray-100', children, asChild, ...props}: TextProps) {
    const Components = asChild ? Slot : 'span';

    return (
        <Components className={clsx(
            'font-sans',
            {
                'text-xs': size ==='sm',
                'text-sm': size ==='md',
                'text-md': size ==='lg',
            },
            color
        )}
        {...props}
    >
        {children}
    </Components>
    )
}