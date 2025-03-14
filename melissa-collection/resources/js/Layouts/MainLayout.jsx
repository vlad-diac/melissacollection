import { Box, Container, Flex, Link as ChakraLink, Stack, Text } from '@chakra-ui/react';
import { Link } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';

export default function MainLayout({ children }) {
    return (
        <Box minH="100vh" bg="gray.50">
            <Flex
                as="nav"
                bg="white"
                borderBottom="1px"
                borderColor="gray.200"
                py={4}
                px={4}
                position="fixed"
                w="full"
                top={0}
                zIndex={1}
                boxShadow="sm"
            >
                <Container maxW="7xl">
                    <Flex justify="space-between" align="center">
                        <Link href="/">
                            <Box w={8} h={8}>
                                <ApplicationLogo className="w-full h-full fill-current text-brand-600" />
                            </Box>
                        </Link>
                        <Stack direction="row" spacing={6}>
                            <ChakraLink
                                as={Link}
                                href={route('login')}
                                color="gray.600"
                                _hover={{ color: 'brand.500' }}
                                fontWeight="medium"
                            >
                                Log in
                            </ChakraLink>
                            <ChakraLink
                                as={Link}
                                href={route('register')}
                                color="brand.500"
                                _hover={{ color: 'brand.600' }}
                                fontWeight="medium"
                            >
                                Register
                            </ChakraLink>
                        </Stack>
                    </Flex>
                </Container>
            </Flex>

            <Box as="main" pt="72px">
                {children}
            </Box>

            <Box as="footer" py={8} textAlign="center" borderTop="1px" borderColor="gray.200">
                <Container maxW="7xl">
                    <Text color="gray.600" fontSize="sm">
                        © {new Date().getFullYear()} Melissa Collection. All rights reserved.
                    </Text>
                </Container>
            </Box>
        </Box>
    );
} 