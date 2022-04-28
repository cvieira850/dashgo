import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData =true} : ProfileProps) {
  return (
    <Flex alignItems="center">
      { showProfileData && (
        <Box marginRight="4" textAlign="right">
          <Text>Caio Vieira</Text>
          <Text color="gray.300" fontSize="small">contato@caiovieira.com.br</Text>
        </Box>
      )}
        <Avatar size="md" name="Caio Vieira" src="https://github.com/cvieira850.png"/>
    </Flex>
  );
}