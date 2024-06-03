import React from 'react'
import {HStack,Text, Avatar} from "@chakra-ui/react"

const Message = ({text,uri, user="other"}) => {
  return (
      <HStack alignSelf={user=== "me" ? "flex-end":"flex-start"} borderRadius={"base"} bg={user === "me" ? 'blue.100' : 'gray.100'}  padding={2} maxW="80%" spacing={3}>
        {
            user === "other" && <Avatar src={uri}/>   
        }
        <Text>{text}</Text>
        {
            user === "me" && <Avatar src={uri}/>   
        }
      </HStack>
  )
}

export default Message
