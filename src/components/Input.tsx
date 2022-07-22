
//import input do native base , renomeiando para nao conflitar
import { Input as NativeBaseInput, IInputProps } from 'native-base';
//IInputProps ativa o intelicente listando todas as props - ctrl + space
// {}...rest} traz todas as props unicas que passarmos no input inportado no arquivo ex: signin
export function Input({...rest}: IInputProps) {
  return (
   <NativeBaseInput
   bg="gray.700" 
   h={14} 
   size="md"
   borderWidth={0}
   fontSize="md"
   fontFamily="body"
   color="white"
   placeholderTextColor="gray.300"
   _focus={
    {borderWidth: 1,
      borderColor: "purple.500",
      bg: "gray.700"
    
    }
   }
   {...rest}/>
  );
}