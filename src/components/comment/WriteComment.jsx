import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Textarea } from '@nextui-org/react'
import { BiCommentAdd } from "react-icons/bi";
import { BsFillSendFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from '@apollo/client';
import { SEND_COMMENT } from '../../graphql/mutations';
import toast, { Toaster } from 'react-hot-toast';




//------------------------------------------------------------------------
function WriteComment({slug}) {
//---------------states---------------//
      const [name, setName] = useState("")
      const [email, setEmail] = useState("")
      const [text, setText] = useState("")
//--------------------------------------------------//

  const [sendComment, {loading, data, errors}] = useMutation(SEND_COMMENT, {variables: {name, email, text, slug}})

  const sendHandler = () => {
    if (name && email && text) {
      sendComment();
      console.log(data)
    } else {
      toast.error('There was a problem sending the comment !');
    }
  };
  useEffect(() => {
    if(data) {
      toast.success('Your Comment sent. Please Wait for its Confirmation !');
    }
  },[data])

  

//--------------------------------------------------//
    const {isOpen, onOpen, onClose} = useDisclosure();
//------------------------------------------------------------------------
  return (
    <div className=' w-4/5 py-4 flex justify-center'>
        <Toaster
        position="top-center"
        reverseOrder={false}
        />
        <Button onPress={() => onOpen()} color="success" variant="faded" className='font-bold'>Write a comment <BiCommentAdd className='text-xl'/></Button>
        <Modal 
        size='xl' 
        isOpen={isOpen} 
        onClose={onClose} 
        className=' relative top-[-80px] sm:top-0'
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col">Write a comment</ModalHeader>
                <ModalBody>
                  <Input 
                  isRequired 
                  type="text" 
                  variant="bordered" 
                  label="User Name" 
                  labelPlacement='outside' 
                  placeholder="Enter your email" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                   />

                  <Input 
                  isRequired 
                  type="email" 
                  variant="bordered" 
                  label="Email" 
                  labelPlacement='outside' 
                  placeholder="Enter your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                   />

                  <Textarea
                  isRequired
                  label="Description"
                  labelPlacement="outside"
                  placeholder="Enter your description"
                  size='lg'
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Cancel
                  </Button>

                  {!loading && 
                    <Button color="primary" onPress={sendHandler}>
                    Send <BsFillSendFill />
                  </Button>
                  }

                  {loading &&
                    <Button color="primary" isLoading>
                    Sending
                  </Button>
                  }
                </ModalFooter>
              </>
            )}
          </ModalContent>
      </Modal>
    </div>
  )
}

export default WriteComment