import React, { useState } from 'react';
import axios from 'axios';
import { NavLink, useHistory } from 'react-router-dom';
import {
  Box, Button, Flex, FormControl, FormLabel, Heading, Icon, Input, InputGroup, InputRightElement, Text, useColorModeValue, Spinner
} from '@chakra-ui/react';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { RiEyeCloseLine } from 'react-icons/ri';
import DefaultAuth from 'layouts/auth/Default';
import { blue, orange } from '@mui/material/colors';

function SignUp() {
  const history = useHistory();
  const textColor = useColorModeValue('black', 'white');
  const btnColor = 'orange.500';
  const textColorSecondary = 'gray.400';
  const textColorDetails = useColorModeValue('navy.700', 'secondaryGray.600');
  const textColorBrand = useColorModeValue('brand.500', 'white');
  const brandStars = useColorModeValue('brand.500', 'brand.400');

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [show, setShow] = useState(false);
  const [nomComplet, setNomComplet] = useState('');
  const [email, setEmail] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const [sensorNumber, setsensorNumber] = useState('');

  const handleClick = () => setShow(!show);

  const datas = { nomComplet, email, motDePasse, sensorNumber };

  const handleSignUp = () => {
    setIsLoading(true);
    setTimeout(() => {
      axios.post('http://localhost:3001/api/signup', datas)
        .then(response => {
          console.log('Utilisateur créé avec succès', response.data);
          setIsLoading(false);
          setIsSuccess(true);
          setTimeout(() => {
            history.push('/inscr/signIn');
          }, 2000); // Redirect to sign-in page after 2 seconds
        })
        .catch(error => {
          console.error('Erreur lors de la création de l\'utilisateur!', error);
          setIsLoading(false);
        });
    }, 3000); // Simulate longer loading time by adding a 3-second delay
  };

  return (
    <DefaultAuth justifyContent='center'>
      <Flex
        maxW={{ base: '100%', md: 'max-content' }}
        w='90%'
        mx={{ base: 'auto', lg: '0px' }}
        me='auto'
        h='160vh'
        alignItems='start'
        justifyContent='center'
        padding='10px'
        borderRadius='15px'
        bg='white'
        mb={{ base: '30px', md: '60px' }}
        px={{ base: '25px', md: '0px' }}
        mt={{ base: '40px', md: '14vh' }}
        flexDirection='column'>
        <Box me='auto'>
          <Heading color={textColor} fontSize='36px' mb='8px' transform={{ base: 'translate(45%)', md: 'translate(60%)', lg: 'translate(60%)' }}>
            Inscription
          </Heading>
        </Box>
        <Flex
          zIndex='2'
          direction='column'
          w={{ base: '100%', md: '420px' }}
          maxW='100%'
          background='transparent'
          borderRadius='15px'
          mx={{ base: 'auto', lg: 'unset' }}
          me='auto'
          mb={{ base: '20px', md: 'auto' }}>
          <FormControl width='75%' transform='translate(20%)'>
            <FormLabel
              display='flex'
              ms='4px'
              fontSize='sm'
              fontWeight='500'
              color={textColor}
              mb='8px'>
              Nom complet<Text color={brandStars}>*</Text>
            </FormLabel>
            <Input
              isRequired={true}
              variant='auth'
              borderRadius='5px'
              fontSize='sm'
              ms={{ base: '0px', md: '0px' }}
              type='text'
              placeholder='Koffi Jean Yves Vianney'
              mb='24px'
              fontWeight='500'
              size='lg'
              value={nomComplet}
              onChange={(e) => setNomComplet(e.target.value)}
            />
            <FormLabel
              display='flex'
              ms='4px'
              fontSize='sm'
              fontWeight='500'
              color={textColor}
              mb='8px'>
              Email<Text color={brandStars}>*</Text>
            </FormLabel>
            <Input
              isRequired={true}
              variant='auth'
              borderRadius='5px'
              fontSize='sm'
              ms={{ base: '0px', md: '0px' }}
              type='email'
              placeholder='jeanyves@gmail.com'
              mb='24px'
              fontWeight='500'
              size='lg'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormLabel
              ms='4px'
              fontSize='sm'
              fontWeight='500'
              color={textColor}
              display='flex'>
              Mot de passe<Text color={brandStars}>*</Text>
            </FormLabel>
            <InputGroup size='md'>
              <Input
                isRequired={true}
                fontSize='sm'
                borderRadius='5px'
                placeholder='8 caractères min'
                mb='15px'
                size='lg'
                type={show ? 'text' : 'password'}
                variant='auth'
                value={motDePasse}
                onChange={(e) => setMotDePasse(e.target.value)}
              />
              <InputRightElement display='flex' alignItems='center' mt='4px'>
                <Icon
                  color={textColorSecondary}
                  _hover={{ cursor: 'pointer' }}
                  as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                  onClick={handleClick}
                />
              </InputRightElement>
            </InputGroup>
            <FormLabel
              ms='4px'
              fontSize='sm'
              fontWeight='500'
              color={textColor}
              display='flex'>
              Numéro du capteur<Text color={brandStars}>*</Text>
            </FormLabel>
            <InputGroup size='md'>
              <Input
                isRequired={true}
                fontSize='sm'
                borderRadius='5px'
                placeholder='Entrez le numéro'
                mb='15px'
                size='lg'
                type='number'
                variant='auth'
                value={sensorNumber}
                onChange={(e) => setsensorNumber(e.target.value)}
              />
            </InputGroup>
            <Button
              color='white'
              fontSize='xl-s'
              background={btnColor}
              _hover={{
                bg: '#EF7D00',
                opacity: '1',
                transition: 'all 0.3s ease-in-out'
              }}
              fontWeight='bold'
              w='100%'
              h='50px'
              mb='15px'
              onClick={handleSignUp}
              isLoading={isLoading}>
              {isLoading ? <Spinner size='sm' /> : 'Créer un compte'}
            </Button>
          </FormControl>
          {isSuccess && (
            <Box color={orange} transform='translate(40%,-1800%)'>
              <Text color='green.500' fontWeight='500' mt='10px' >
                Inscription réussie!
              </Text>
            </Box>

          )}
          <Flex
            flexDirection='column'
            justifyContent='center'
            alignItems='start'
            maxW='100%'
            transform='translate(15%)'
            mt='0px'>
            <Text color={textColorDetails} fontWeight='400' fontSize='14px'>
              Vous avez un compte?
              <NavLink to='/inscr/signIn'>
                <Text
                  color={textColorBrand}
                  as='span'
                  ms='5px'
                  fontWeight='500'>
                  Se connecter
                </Text>
              </NavLink>
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </DefaultAuth>
  );
}

export default SignUp;
