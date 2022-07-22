//center manter tudo no centro , spinner efeito de loading
import { Center, Spinner } from "native-base";

export function Loading(){
    return (
        <Center flex={1} bg="gray.700">
            <Spinner color="secondary.700"/>
        </Center>

    );
}