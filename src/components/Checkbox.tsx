import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';
import { clsx } from 'clsx';
import { Text } from './Text';

export interface CheckboxProps {
    disabled?: boolean;
    checked?: boolean;
    label?: string;
}

export function Checkbox(props: CheckboxProps) {
  return (
    <div className={clsx('flex align-center gap-2',{'text-gray-200': props.disabled ===false, 'text-gray-600': props.disabled === true})}>
        <CheckboxPrimitive.Root aria-label='checkbox' className='w-6 h-6 p-[2px] bg-gray-700 rounded' disabled={props.disabled} defaultChecked={props.checked}>
            <CheckboxPrimitive.Indicator asChild >
                <Check weight='bold' className={clsx('h-5 w-5', {'text-green-500': props.disabled === false, 'text-gray-600': props.disabled ===true})} />
            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
        <Text size='sm' className={props.disabled ? 'text-gray-400': 'text-gray-100'}>{props.label}</Text>
    </div>
  )
}
