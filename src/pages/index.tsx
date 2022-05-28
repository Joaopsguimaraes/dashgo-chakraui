/* eslint-disable react/react-in-jsx-scope */

import { Button, Flex, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';

function Home() {
  return (
    <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing="4">
          <FormControl>
            <FormLabel htmlFor="email">E-mail</FormLabel>
            <Input
              name="email"
              id="email"
              type="email"
              focusBorderColor="pink.500"
              variant="filled"
              bgColor="gray.900"
              _hover={{ bgColor: 'gray.900' }}
              size="lg"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              name="password"
              id="password"
              type="password"
              focusBorderColor="pink.500"
              variant="filled"
              bgColor="gray.900"
              _hover={{ bgColor: 'gray.900' }}
              size="lg"
            />
          </FormControl>

          <Button type="submit" marginTop="6" colorScheme="pink" size="lg">
            Entrar
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
}

export default Home;
