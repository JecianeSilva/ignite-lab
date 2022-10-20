import { Meta, StoryObj} from '@storybook/react'
import { Button, ButtonProps } from "./Button";

export default {
    title: 'Components/Button',
    component: Button,
    args: {
        disabled: false,
        loading: false,
        children: 'Button component',
    },
    argTypes: {
        asChild: {
            table:{
                disable: true,
            }
        }       
      },
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}
export const Disabled: StoryObj<ButtonProps> = {
    args: {
        disabled: true, 
        loading: false,
    },
    argTypes: {
        disabled: {
            table:{
                disable: true,
            }
        }
    }
}

export const Loading: StoryObj<ButtonProps> = {
    args: {
        loading: true,
        disabled: true,
    },
    argTypes: {
        loading: {
            table:{
                disable: true,
            }
        }
    }
}
