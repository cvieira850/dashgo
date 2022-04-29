/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { QueryClient, useQuery } from "react-query";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { api } from "../../services/api";
import { getUser, useUser } from "../../services/hooks/useUser";
import { queryClient } from "../../services/queryClient";

// export const queryClient = new QueryClient()
export const getServerSideProps: GetServerSideProps = async({ params }) => {
  const { id } = params;
  const { user } = await getUser(Number(id))
  // const {data, isLoading, isFetching, error } = useUser(id)
  // console.log("laalla", data)
  // // Pass post data to the page via props
  // return { props: { user: data } }
  return {
    props: {
      user
    }
  }
}

interface UserProps {
  user: {
    id: number;
    name: string;
    email: string;
    createdAt: string;
  }

}
export default function User({user}: UserProps) {
  const {data:UserProps, isLoading, isFetching, error } =  useUser(user.id, {
    initialData: user,
  })
  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box
          as="form"
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p={["6","8"]}
        >
          <Heading size="lg" fontWeight="normal">Criar usuário</Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
              <Input  name="name" label="Nome completo" value={data.user.name}/>
              <Input  name="email" label="E-mail" type="email" value={data.user.email} />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
              <Input  name="password" label="Senha" type="password" />
              <Input  name="passwordConfirmation" label="Confirmação da senha" type="password" />
            </SimpleGrid>
          </VStack>
          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              {/* <Link href="/users" passHref>
                <Button colorScheme="whiteAlpha">Cancelar</Button>
              </Link>
              <Button
                type="submit"
                colorScheme="pink"
                isLoading={formState.isSubmitting}
              >
                Salvar
              </Button> */}
            </HStack>

          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}