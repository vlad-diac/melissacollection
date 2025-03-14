import { Box, Button, Container, Heading, Stack, Text } from '@chakra-ui/react';
import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function Welcome({ auth }) {
    return (
        <MainLayout>
            <Head title="Welcome" />
            
            <Box bg="gray.50" px={4}>
                <Container maxW="7xl" py={20}>
                    <Stack
                        textAlign="center"
                        align="center"
                        spacing={{ base: 8, md: 10 }}
                        py={{ base: 20, md: 28 }}
                    >
                        <Heading
                            fontWeight={600}
                            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                            lineHeight="110%"
                        >
                            Welcome to{' '}
                            <Text as="span" color="brand.500">
                                Melissa Collection
                            </Text>
                        </Heading>
                        <Text color="gray.600" maxW="3xl">
                            Start building something amazing with Laravel and React. This template
                            includes everything you need to get started, including authentication,
                            routing, and a modern UI with Chakra UI.
                        </Text>
                        <Stack spacing={6} direction="row">
                            <Button
                                rounded="full"
                                px={6}
                                colorScheme="brand"
                                size="lg"
                            >
                                Get started
                            </Button>
                            <Button 
                                rounded="full" 
                                px={6}
                                size="lg"
                                variant="outline"
                                colorScheme="brand"
                            >
                                Learn more
                            </Button>
                        </Stack>
                    </Stack>
                </Container>
            </Box>
        </MainLayout>
    );
}
