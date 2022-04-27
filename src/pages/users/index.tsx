import { Box,Button,Checkbox,Flex, Heading, HStack, Icon, Table, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import { RiAddLine, RiDeleteBinLine, RiPencilLine } from 'react-icons/ri'
import { Header } from '../../components/Header'
import { Pagination } from '../../components/Pagination'
import { Sidebar } from '../../components/Sidebar'

export default function UserList() {
  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">Usuários</Heading>

            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} fontSize="20" />}
            >
              Criar novo usuário
            </Button>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="6" color="gray.300" width="8">
                  <Checkbox colorScheme="pink"/>
                </Th>
                <Th>Usuário</Th>
                <Th>Data de cadastro</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink"/>
                </Td>
                <Td>
                    <Box>
                      <Text fontWeight="bold">Caio Vieira</Text>
                      <Text fontSize="small" color="gray.300">contato@caiovieira.com.br</Text>
                    </Box>
                </Td>
                <Td>
                  <Text fontSize="sm" color="gray.300">04 de Abril de 2021</Text>
                </Td>
                <Td paddingRight="0">
                  <HStack spacing={4} flex="1" justify="flex-end">
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon as={RiPencilLine} fontSize="20" />}
                    >
                      Editar
                    </Button>
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="red"
                      leftIcon={<Icon as={RiDeleteBinLine}  fontSize="20" />}
                    >
                      Deletar
                    </Button>
                  </HStack>
                </Td>
              </Tr>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink"/>
                </Td>
                <Td>
                    <Box>
                      <Text fontWeight="bold">Caio Vieira</Text>
                      <Text fontSize="small" color="gray.300">contato@caiovieira.com.br</Text>
                    </Box>
                </Td>
                <Td>
                  <Text fontSize="sm" color="gray.300">04 de Abril de 2021</Text>
                </Td>
                <Td paddingRight="0">
                  <HStack spacing={4} flex="1" justify="flex-end">
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon as={RiPencilLine} fontSize="20" />}
                    >
                      Editar
                    </Button>
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="red"
                      leftIcon={<Icon as={RiDeleteBinLine}  fontSize="20" />}
                    >
                      Deletar
                    </Button>
                  </HStack>
                </Td>
              </Tr>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink"/>
                </Td>
                <Td>
                    <Box>
                      <Text fontWeight="bold">Caio Vieira</Text>
                      <Text fontSize="small" color="gray.300">contato@caiovieira.com.br</Text>
                    </Box>
                </Td>
                <Td>
                  <Text fontSize="sm" color="gray.300">04 de Abril de 2021</Text>
                </Td>
                <Td paddingRight="0">
                  <HStack spacing={4} flex="1" justify="flex-end">
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon as={RiPencilLine} fontSize="20" />}
                    >
                      Editar
                    </Button>
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="red"
                      leftIcon={<Icon as={RiDeleteBinLine}  fontSize="20" />}
                    >
                      Deletar
                    </Button>
                  </HStack>
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}