import { Meta, StoryObj } from '@storybook/react'
import { Checkbox, CheckboxProps } from "./Checkbox";
import { Text } from './Text';

export default {
    title: "Components/Checkbox",
    component: Checkbox,
    args: {
        disabled: false,
        checked: false,
        label: "label",
    },
    argTypes: {
        checked:{
            table:{
                disable: true,
            }
        }
    },
    
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}
export const Disabled: StoryObj<CheckboxProps> = {
    args: {
        disabled: true,
        checked: true,
    },
}