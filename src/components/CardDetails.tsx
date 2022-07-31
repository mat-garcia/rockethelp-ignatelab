import { ReactNode } from 'react';
import { IconProps } from 'phospor-react-native';

import { VStack, HStack, Text, Box, useTheme} from 'native-base';

type Props = {
    title: string;
    description?: string;
    footer?: string;
    icon: React.ElementType<IconProps>
    children?: ReactNode;
}

export function CardDetails({
    title,
    description,
    footer = null,
    icon: Icon,
    children,
}: Props) {

const { colors } = useTheme();

return (
    <VStack bg="gray.600" p={5} mt={5} rounded="sm">
        <HStack alignItems="center" mb={4}>
            <Icon color={colors.primary[700]} />
            <Text fontSize="sm" color="gray.300" ml={2} textTransform="uppercase">{title}</Text>
        </HStack>
        {
            !!description && <Text fontSize="md" color="gray.100">{description}</Text>
        }
        {children }
        {
            !!footer && <Box borderTopWidth={1} borderTopColor="gray.400" mt={3}>
                <Text fontSize="sm" mt={3} color="gray.100" textTransform="uppercase">{footer}</Text>
            </Box>
        }
        

    </VStack>
  );
}