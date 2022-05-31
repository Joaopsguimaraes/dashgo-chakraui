/* eslint-disable react/react-in-jsx-scope */
import { Flex, Box, Avatar, Text } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Joao Guimaraes</Text>
        <Text color="gray.300">psjoaovictor@gmail.com</Text>
      </Box>
      <Avatar size="md" name="Joao Guimaraes" src="https://github.com/Joaopsguimaraes.png" />
    </Flex>
  );
}
