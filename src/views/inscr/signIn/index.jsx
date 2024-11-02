import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  Link,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
  Spinner,
} from "@chakra-ui/react";
import { RiEyeCloseLine } from "react-icons/ri";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import axios from "axios";
import DefaultAuth from "layouts/auth/Default";

function SignUp() {
  const textColor = useColorModeValue("black", "white");
  const btnColor = "orange.500";
  const textColorSecondary = "gray.400";
  const textColorBrand = useColorModeValue("brand.500", "white");
  const brandStars = useColorModeValue("brand.500", "brand.400");

  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [isLoading, setIsLoading] = useState(false); // State for loading spinner
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const history = useHistory();

  const handleClick = () => setShow(!show);

  const handleLogin = async () => {
    setIsLoading(true); // Start the spinner
    setErrorMessage(""); // Clear previous errors
    setSuccessMessage(""); // Clear previous success messages

    // Simulate 2-second loading
    setTimeout(async () => {
      try {
        // Simulated login request
        const response = await axios.post("http://localhost:3001/api/signin", {
          email,
          motDePasse,
        });

        console.log(response.data);
        setIsLoggedIn(true);
        setErrorMessage("");
        setSuccessMessage("Connexion réussie!");

      } catch (error) {
        console.error("Erreur lors de la connexion!", error);
        setErrorMessage("Email ou mot de passe incorrect!");
        setIsLoggedIn(false);
        setSuccessMessage("");
      }

      setIsLoading(false); // Stop the spinner after 2 seconds
    }, 2000); // Delay for 2 seconds
  };

  useEffect(() => {
    if (isLoggedIn) {
      setTimeout(() => {
        history.push("/admin/home");
      }, 2000);
    }
  }, [isLoggedIn, history]);

  return (
    <DefaultAuth justifyContent="center">
      <Box
        maxW={{ base: "100%", md: "max-content", lg: "90%" }}
        w={{ base: "100%", md: "100%", lg: "70%" }}
        mx={{ base: "auto", lg: "0px" }}
        me="auto"
        h={{ base: "160vh", md: "90vh", lg: "160vh" }}
        alignItems="start"
        justifyContent="center"
        padding="10px"
        borderRadius="15px"
        boxShadow="0px 0px 10px rgba(0, 0, 0, 0.2)"
        bg="white"
        zIndex="1"
        mb={{ base: "30px", md: "60px" }}
        px={{ base: "25px", md: "0px" }}
        mt={{ base: "40px", md: "14vh" }}
        flexDirection="column"
      >
        {successMessage && (
          <Text
            color="green.500"
            mb="20px"
            textAlign="center"
            fontSize="lg"
            fontWeight="bold"
          >
            {successMessage}
          </Text>
        )}
        <Box>
          <Heading
            color={textColor}
            fontSize="36px"
            mb="40px"
            transform="translate(30%,5%)"
          >
            Connexion
          </Heading>
        </Box>
        <Flex
          zIndex="2"
          direction="column"
          gap="20px"
          w={{ base: "100%", md: "420px" }}
          maxW="100%"
          background="transparent"
          borderRadius="15px"
          transform={{ base: "translate(0%,0%)", md: "translate(0%)", lg: "translate(7%,2%)" }}
          mx={{ base: "auto", lg: "unset" }}
          me="auto"
          mb={{ base: "20px", md: "auto" }}
        >
          <FormControl width="75%" transform="translate(20%)">
            <FormLabel
              display="flex"
              ms="4px"
              fontSize="sm"
              fontWeight="500"
              color={textColor}
              mb="8px"
            >
              Email<Text color={brandStars}>*</Text>
            </FormLabel>
            <Input
              isRequired={true}
              variant="auth"
              borderRadius="5px"
              fontSize="sm"
              ms={{ base: "0px", md: "0px" }}
              type="email"
              placeholder="jeanyves@gmail.com"
              mb="24px"
              fontWeight="500"
              size="lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormLabel
              ms="4px"
              fontSize="sm"
              fontWeight="500"
              color={textColor}
              display="flex"
            >
              Mot de passe<Text color={brandStars}>*</Text>
            </FormLabel>
            <InputGroup size="md">
              <Input
                isRequired={true}
                fontSize="sm"
                borderRadius="5px"
                placeholder="8 caractères min"
                mb="15px"
                size="lg"
                type={show ? "text" : "password"}
                variant="auth"
                value={motDePasse}
                onChange={(e) => setMotDePasse(e.target.value)}
              />
              <InputRightElement display="flex" alignItems="center" mt="4px">
                <Icon
                  color={textColorSecondary}
                  _hover={{ cursor: "pointer" }}
                  as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                  onClick={handleClick}
                />
              </InputRightElement>
            </InputGroup>
            <Flex gap="60px" mb="30px">
              <Checkbox colorScheme="green" defaultChecked>
                Enregistrer
              </Checkbox>
              <Link color="blue">Mot de passe oublié?</Link>
            </Flex>

            {errorMessage && <Text color="red.500" mb="15px">{errorMessage}</Text>}

            <Button
              color="white"
              fontSize="xl-s"
              background={btnColor}
              boxShadow="0px 0px 10px rgba(0, 0, 0, 0.3)"
              _hover={{
                bg: "#EF7D00",
                transform: "scale(1.1)",
                opacity: "1",
                transition: "all 0.3s ease-in-out",
              }}
              fontWeight="bold"
              w="100%"
              h="50px"
              mb="15px"
              onClick={handleLogin}
              isLoading={isLoading}
              loadingText="Connexion en cours..."
            >
              {isLoading ? <Spinner size="sm" /> : 'Se connecter'}
            </Button>
          </FormControl>
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="start"
            maxW="100%"
            transform="translate(15%)"
            mt="0px"
          >
            <Text color={textColor} fontWeight="400" fontSize="14px">
              Vous avez un compte?
              <NavLink to="/inscr">
                <Text color={textColorBrand} as="span" ms="5px" fontWeight="500">
                  S'inscrire
                </Text>
              </NavLink>
            </Text>
          </Flex>
        </Flex>
      </Box>
    </DefaultAuth>
  );
}

export default SignUp;
