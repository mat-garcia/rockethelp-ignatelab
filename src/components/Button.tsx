import { Button as ButtonNativeBase, IButtonProps, Heading} from 'native-base';

//cria o type pra definir  o textp do botao quando passar title="nome do botao" no Button declarado
type Props = IButtonProps & {
    title: string;
}

export function Button({title, ...rest} : Props) {
  return (
    <ButtonNativeBase {...rest}
    bg="green.700"
    h={14}
    fontSize='sm'
    rounded='sm'
    _pressed={{ bg: "green.500"}}
    >
        <Heading color="white" fontSize="sm">{title}</Heading>

    </ButtonNativeBase>
  );
}