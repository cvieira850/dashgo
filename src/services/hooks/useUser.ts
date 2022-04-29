import { useQuery, UseQueryOptions } from "react-query";
import { api } from "../api";

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

type GetUserResponse = {
  user: User;
}

export async function getUser(id: number): Promise<GetUserResponse> {

  // const {data} = await api.get(`users/${id}}`)

  // const users = data.users.map(user => {
  //   return {
  //     id: user.id,
  //     name: user.name,
  //     email: user.email,
  //     createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
  //       day: '2-digit',
  //       month: 'long',
  //       year: 'numeric',
  //     }),
  //   }
  // });
  return {
    user: {
      id: '2',
      name: 'lslsls',
      email: 'lslsls',
      createdAt: 'lslsls',
    }
  }
}

export function useUser (id: number, options?: UseQueryOptions)  {
  return useQuery(['user', id], () => getUser(id), {
    staleTime: 1000 * 60 * 10,
    ...options
  })
}