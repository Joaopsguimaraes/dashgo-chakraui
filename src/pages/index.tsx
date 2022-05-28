/* eslint-disable react/react-in-jsx-scope */

import { Button, Flex, Stack } from '@chakra-ui/react';
import { Input } from '../components/Form/Input';

function SignIn() {
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
          <Input type="email" name="email" label="Email" />
          <Input type="password" name="password" label="Password" />
          <Button type="submit" marginTop="6" colorScheme="pink" size="lg">
            Entrar
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
}

export default SignIn;
