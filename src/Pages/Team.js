import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, Heading, Text, Button, Image, Center } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react';
const TeamMembers = [
    { title: 'Mark', id: 1, desc: 'Director', Imag: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80' },
    { title: 'Gainna', id: 2, desc: "Manager", Imag: 'https://images.unsplash.com/photo-1648412868424-9bee5023a257?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' },

    { title: 'Ricky', id: 4, desc: "helebfjb", Imag: 'https://images.unsplash.com/photo-1529421308418-eab98863cee4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80' },
    { title: 'Adam', id: 5, desc: "Employee", Imag: 'https://images.unsplash.com/photo-1554774853-719586f82d77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' },
    { title: 'Cendra', id: 6, desc: "Employee", Imag: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' },
    { title: 'Sizune', id: 7, desc: "Employee", Imag: 'https://images.unsplash.com/photo-1517677129300-07b130802f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' },
];

function Team() {
    const carditems = TeamMembers.map(TeamMembers =>
        <Card key={TeamMembers.id}>
            <CardHeader>
                <Image
                    mb={4}
                    objectFit='cover'
                    maxH={52}
                    w='100%'
                    maxW={{ base: '100%', sm: '100%' }}
                    src={TeamMembers.Imag}
                    alt='Caffe Latte' />
                <Heading size='md'> {TeamMembers.title}</Heading>
            </CardHeader>
            <CardBody p="4" py="0">
                <Text>{TeamMembers.desc}</Text>
            </CardBody>
            <CardFooter>
                {/* <Button>Know More</Button> */}
            </CardFooter>
        </Card>
    );
    return (
        <>

            <Container maxW='container.xl' p={10}>
                <Heading as={'h3'} fontSize={'40'}>
                    <Center  h='100px' pt={0}>
                        Our Team
                    </Center>
                </Heading>
                <SimpleGrid spacing={10} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
                    {carditems}
                </SimpleGrid>
            </Container>
        </>
    );

}

export default Team;