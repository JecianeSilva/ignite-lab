import { Meta, StoryObj} from '@storybook/react'
import { Envelope, LockKey } from 'phosphor-react';
import { TextInput, TextInputRootProps } from "./TextInput";

export default {
    title: 'Components/TextInput',
    component: TextInput.Root,
    args: {
        disabled: false,
        error: false,
        children: ([
            <TextInput.Icon>
                <Envelope />
            </TextInput.Icon>,
            <TextInput.Input placeholder='Digite seu e-mail'/>
        ]),
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            },
        },
        disabled: {
            table: {
                disable: true,
            },
        },
        error: {
            table: {
                disable: true,
            },
        },       
    }
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {}
export const Email: StoryObj<TextInputRootProps> = {
    args:{
        children: ([
            <TextInput.Icon>
                <Envelope />
            </TextInput.Icon>,
            <TextInput.Input placeholder='Digite seu e-mail' type='email' defaultValue={'exemplo@exemplo.com.br'} />
        ]),
    }
}
export const Password: StoryObj<TextInputRootProps> = {
    args:{
        children: ([
            <TextInput.Icon>
                <LockKey />
            </TextInput.Icon>,
            <TextInput.Input placeholder='Digite sua senha' type='password' defaultValue={'123456'} />
        ]),
    }
}
export const Error: StoryObj<TextInputRootProps> = {
    args: {
        error: true,
        children: ([
            <TextInput.Icon>
                <Envelope />
            </TextInput.Icon>,
            <TextInput.Input  placeholder='Digite seu e-mail' defaultValue={'exemplo'} />
        ]),
    }
}

export const Disabled: StoryObj<TextInputRootProps> = {
    args: {
        children: ([
            <TextInput.Icon>
                <Envelope />
            </TextInput.Icon>,
            <TextInput.Input  disabled placeholder='Digite seu e-mail' value={'exemplo@exemplo.com.br'} />
        ]),
        disabled: true,
    },
}

export const SemIcone: StoryObj<TextInputRootProps> = {
    args: {
        children: ([
            <TextInput.Input  placeholder='Digite seu e-mail' defaultValue={'exemplo@exemplo.com.br'} />
        ]),
    },
}

