import { 
    Button,
    Text,
    Modal,
    ModalOverlay,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    CircularProgress
} from "@chakra-ui/react"

const KeywordsModel = ({keywords,loading,isOpen,closeModal}) => {

    
  return (
    <>
     <Modal isOpen={isOpen} onClose ={closeModal} >
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>
                Keywords
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody display='flex' justifyContent='center' alignItems='center'>
              {loading ? (
                <CircularProgress isIndeterminate color='blue.300'/>
              ):(
                <Text>
                    {keywords}
                </Text>
              )}
            </ModalBody>
            <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={closeModal}>
                    Close 
                </Button>
            </ModalFooter>
        </ModalContent>
        </Modal>   
    </>
  )
}

export default KeywordsModel