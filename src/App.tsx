import { Envelope, LockKey } from 'phosphor-react';
import { Button } from './components/Button';
import { Checkbox } from './components/Checkbox';
import { Heading } from './components/Heading';
import { Text } from './components/Text';
import { TextInput } from './components/TextInput';
import { Logo } from './Logo';
import './styles/global.css';

export function App() {
  return (
    <div className="w-screen h-screen bg-image bg-center bg-no-repeat bg-cover relative flex justify-center items-center">
      <div className='absolute flex flex-col justify-center max-w-lg w-full max-h-[90vh] overflow-y-auto py-12 px-12 drop-shadow-[1px_1px_10px_rgba(0,255,181,0.18)] rounded-2xl bg-gray-800 text-gray-100 '>
        <header className='flex flex-col items-center'>
          <Logo />
          <Heading size='lg' className='mt-4'> Ignite Lab </Heading>
          <Text size='lg' className='text-gray-400 mt-1'>Faça login e comece a usar</Text>
        </header>

          <form className='flex flex-col my-9'>
            <label htmlFor='email' className='flex  flex-col gap-2 mb-4'>
              <Text size='md' className='font-semibold'>Endereço de e-mail</Text>
              <TextInput.Root>
                <TextInput.Icon><Envelope /></TextInput.Icon>
                <TextInput.Input
                  id='email'
                  type='email'
                  placeholder='Digite seu e-mail'
                >
                </TextInput.Input>
              </TextInput.Root>
            </label>  
            <label htmlFor='password' className='flex  flex-col gap-2 mb-4'>
              <Text size='md' className='font-semibold'>Sua senha</Text>
              <TextInput.Root>
                <TextInput.Icon><LockKey /></TextInput.Icon>
                <TextInput.Input
                  id='email'
                  type='password'
                  placeholder='********'
                >
                </TextInput.Input>
              </TextInput.Root>
            </label>
            <Checkbox checked label='Lembrar de mim'/>

            <Button type='submit' className='mt-9'>Entrar</Button>
          </form>

        <footer className='flex flex-col items-center gap-4'>
          <Text asChild size='sm' className='text-gray-400'>
            <a  className="underline" href="">Esqueceu sua senha?</a>
          </Text>
          <Text asChild size='sm' className='text-gray-400'>
            <p>Não possui conta? <a className="underline" href=''>Crie uma agora!</a></p>
          </Text>
        </footer>
      </div>
    </div>
  )
}
