import { Slot } from '@radix-ui/react-slot';
import { InputHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';

let disabled = false;

export interface TextInputRootProps {
    children: ReactNode;
    disabled?: boolean;
    error?: boolean;
}

function TextInputRoot(props: TextInputRootProps){
    disabled = Boolean(props.disabled)
    return(
        <div className={clsx(
            'flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-700 w-full hover:ring-2 focus:ring-2 ring-green-500',
            {
                'ring-2 ring-error': props.error === true,
                'cursor-not-allowed hover:ring-0': props.disabled === true
            }
        )}>
            {props.children}
        </div>
    )
}

TextInputRoot.displayName ='TextInput.Root'

export interface TextInputIconProps{
    children: ReactNode;
}
function TextInputIcon(props: TextInputIconProps) {
    return(
        <Slot className={clsx("w-6 h-6",
            {'text-gray-400': disabled === false,
             'text-gray-600': disabled === true
            })}>
            {props.children}
        </Slot>
    )
}

TextInputIcon.displayName ='TextInput.Icon'

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputInputProps) {
    return (
        <input 
            className={clsx('bg-transparent flex-1 text-xs outline-none',
            {'text-gray-200 placeholder:text-gray-400': disabled === false,
                'text-gray-600 placeholder:text-gray-600': disabled === true,})}
            {...props} 
        />
    )
}

TextInputInput.displayName ='TextInput.Input'


export const TextInput = {
    Root: TextInputRoot, 
    Input: TextInputInput,
    Icon: TextInputIcon,
}