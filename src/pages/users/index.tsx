import { Box,Button,ButtonGroup,Checkbox,Flex, Heading, HStack, Icon, IconButton, Link, Spinner, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useState } from 'react'
import { RiAddLine, RiDeleteBinLine, RiPencilLine } from 'react-icons/ri'
import { QueryClient } from 'react-query'

import { Header } from '../../components/Header'
import { Pagination } from '../../components/Pagination'
import { Sidebar } from '../../components/Sidebar'
import { api } from '../../services/api'
import { useUsers } from '../../services/hooks/useUsers'
import { queryClient } from '../../services/queryClient'

export default function UserList() {
  const [page, setPage] = useState(1)
  const {data, isLoading, isFetching, error } = useUsers(page)

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  async function handlePrefetchUser(userId: number) {
    await queryClient.prefetchQuery(['user', userId], async () => {
      const response = await api.get(`users/${userId}`)

      return response.data;
    }, {
      staleTime: 1000 * 60 * 10
    })
  }
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
            <NextLink href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar novo usuário
              </Button>
            </NextLink>
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
                { data.users.map(user => {
                  return (
                    <Tr key={user.id}>
                      <Td px={["0","4","6"]}>
                        <Checkbox colorScheme="pink"/>
                      </Td>
                      <Td>
                          <Box>
                            <Link color="purple.400" onMouseEnter={() => handlePrefetchUser(Number(user.id))}>
                              <Text fontWeight="bold">{user.name}</Text>
                            </Link>
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

              <Pagination 
                totalCountOfRegisters={data.totalCount}
                currentPage={page}
                onPageChange={setPage}
              />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  )
}