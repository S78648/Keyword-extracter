import logo from '../assets/openai.png'
import { Box , Flex , Image , Text  } from "@chakra-ui/react"

const Footer = () => {
  return (
    <Box marginTop={30}>
     <Flex justifyContent='center' alignItems='center'>
      <Image src={logo} alt='logo' marginRight={1}/>
      <Text>
        Powered By OpenAi
      </Text>
     </Flex>
    </Box>
  )
}

export default Footer