import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex alignItems="center">
        <Box marginRight="4" textAlign="right">
          <Text>Caio Vieira</Text>
          <Text color="gray.300" fontSize="small">contato@caiovieira.com.br</Text>
        </Box>
        <Avatar size="md" name="Caio Vieira" src="https://github.com/cvieira850.png"/>
    </Flex>
  );
}