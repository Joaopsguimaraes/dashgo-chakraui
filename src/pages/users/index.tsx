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
  useBreakpointValue
} from '@chakra-ui/react';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import { RiAddLine } from 'react-icons/ri';
import { Pagination } from '../../components/Pagination';
import Link from 'next/link';

export default function UserList() {
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
              <Tr>
                <Td px={['4', '4', '6']}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Joao Guimaraes</Text>
                    <Text fontSize="sm" color="gray.300">
                      psjoaovictor@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && (
                  <Td>
                    <Text>28 de maio de 2022</Text>
                  </Td>
                )}
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
