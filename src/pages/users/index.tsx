/* eslint-disable react/react-in-jsx-scope */
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Text,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
  Spinner
} from '@chakra-ui/react';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import { RiAddLine } from 'react-icons/ri';
import { Pagination } from '../../components/Pagination';
import Link from 'next/link';
import { useQuery } from 'react-query';

type IUsers = {
  id: number;
  name: string;
  email: string;
  createdAt: string;
};

export default function UserList() {
  const { data, isLoading, error } = useQuery('users', async () => {//buscando dados do usuário da api mirageJs
    const response = await fetch('http://localhost:3000/users');
    const data = await response.json();

    const users = data.users.map((user: IUsers) => {//mapeando os users retornado pela api e retornando um array de users
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {//convertendo a data para o formato brasileiro
          day: '2-digit',
          month: 'long',
          year: 'numeric'
        })
      };
    });

    return users;
  }, {
    staleTime: 1000 * 5 //duração do cache
  });

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justifyContent="space-between" alignItems="center">
            <Heading size="lg" fontWeight="normal">
              Usuarios
            </Heading>
            <Link href="/users/create" passHref>
              <Button
                cursor="pointer"
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar Novo
              </Button>
            </Link>
          </Flex>
          {isLoading ? (//criando um ternario para verificar se está carregando a lista de usuarios;
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (//se ocorrer um erro no carregamento, mostra o erro
            <Flex justify="center">
              <Text>Fail to obtain data from user</Text>
            </Flex>
          ) : (//se não ocorrer erro,e terminar o carregamento mostra a lista de usuarios
            <>
              <Table colorScheme="whiteAlpha">
                <Thead>
                  <Tr>
                    <Th px={['4', '4', '6']} color="gray.300" width="8">
                      <Checkbox colorScheme="pink" />
                    </Th>
                    <Th>Usuário</Th>
                    {isWideVersion && <Th>Data de Cadastro</Th>}
                  </Tr>
                </Thead>
                <Tbody>
                  {data.map((user: IUsers) => (
                    <Tr key={user.id}>
                      <Td px={['4', '4', '6']}>
                        <Checkbox colorScheme="pink" />
                      </Td>
                      <Td>
                        <Box>
                          <Text fontWeight="bold">{user.name}</Text>
                          <Text fontSize="sm" color="gray.300">
                            {user.email}
                          </Text>
                        </Box>
                      </Td>
                      {isWideVersion && (
                        <Td>
                          <Text>{user.createdAt}</Text>
                        </Td>
                      )}
                    </Tr>
                  ))}
                </Tbody>
              </Table>
              <Pagination />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
}
