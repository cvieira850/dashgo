import { Box,Button,ButtonGroup,Checkbox,Flex, Heading, HStack, Icon, IconButton, Spinner, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from '@chakra-ui/react'
import Link from 'next/link'
import { RiAddLine, RiDeleteBinLine, RiPencilLine } from 'react-icons/ri'
import { useQuery } from 'react-query'

import { Header } from '../../components/Header'
import { Pagination } from '../../components/Pagination'
import { Sidebar } from '../../components/Sidebar'
import { api } from '../../services/api'

export default function UserList() {
  const {data, isLoading, isFetching, error } = useQuery('users', async () => {
    const { data } = await api.get('users')

    return data.users.map(user => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        }),
      }
    });
  }, {
    staleTime: 1000 * 5,
  })

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
              {!isLoading && isFetching && <Spinner size="sm" color="gray.500" ml="4" />}
            </Heading>
            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar novo usuário
              </Button>
            </Link>
          </Flex>

          { isLoading ? (
            <Flex justify="center">
              <Spinner/>
            </Flex>
          ): error ? ( 
            <Flex justify="center">
              <Text>Falha ao obter dados do usuário</Text>
            </Flex>
          ) : (
            <>
              <Table colorScheme="whiteAlpha">
              <Thead>
                <Tr>
                  <Th px={["0","4","6"]} color="gray.300" width="8">
                    <Checkbox colorScheme="pink"/>
                  </Th>
                  <Th>Usuário</Th>
                  { isWideVersion && <Th>Data de cadastro</Th> }
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                { data.map(user => {
                  return (
                    <Tr key={user.id}>
                      <Td px={["0","4","6"]}>
                        <Checkbox colorScheme="pink"/>
                      </Td>
                      <Td>
                          <Box>
                            <Text fontWeight="bold">{user.name}</Text>
                            <Text fontSize="small" color="gray.300">{user.email}</Text>
                          </Box>
                      </Td>
                      { isWideVersion && <Td>
                        <Text fontSize="sm" color="gray.300">{user.createdAt}</Text>
                      </Td> }
                      <Td paddingRight="0">
                        <HStack spacing={4} flex="1" justify="flex-end">
                          <ButtonGroup size='sm'>
                            { isWideVersion && (
                              <Button 
                                mr="-5"
                                as="a" 
                                size="sm"
                                fontSize="sm" 
                                colorScheme="purple"
                                >
                                Editar
                              </Button>
                            )}
                            <IconButton aria-label='Editar' colorScheme="purple" icon={<Icon as={RiPencilLine} fontSize="16" />} />
                          </ButtonGroup>
                          {/* <ButtonGroup size='sm'>
                            { isWideVersion && (
                              <Button
                                mr="-5"
                                as="a"
                                size="sm"
                                fontSize="sm"
                                colorScheme="red"
                              >
                                Deletar
                              </Button>
                            )}
                            <IconButton aria-label='Deletar' colorScheme="red" icon={<Icon as={RiDeleteBinLine} fontSize="16" />} />
                          </ButtonGroup> */}
                        </HStack>
                      </Td>
                    </Tr>
                  )
                })}
              </Tbody>
              </Table>

              <Pagination />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  )
}