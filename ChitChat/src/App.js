import {useEffect, useState , useRef} from "react";
import {Box, Container, VStack, Button, HStack, Input} from "@chakra-ui/react"
// Here we are importing all these things to make our work easier and these are some components which are already provided by this frontend library where a container is basically a div with responsive website property and v stack and h stack are vertical adn horizontal divs with all the flex properties to make things easier for us
import Message from "./Components/Message"
import {app} from "./firebase"
import {onAuthStateChanged,getAuth, GoogleAuthProvider, signInWithPopup, signOut} from "firebase/auth"
import {addDoc, collection, getFirestore, serverTimestamp, onSnapshot, query, orderBy} from "firebase/firestore"


const auth = getAuth(app);
const db = getFirestore(app);

const signInHandler = () => {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
}

const signOutHandler = () => {
  signOut(auth)
}
 

function App() {

  const [user, setUser] = useState(false)
  const [message,setMessage] = useState("")
  const [messages, showMessages] = useState([])

  const divForScroll = useRef(null) 

  const submitHandler = async (e) => {
    e.preventDefault();
    
    try{
      setMessage("")
      await addDoc(collection(db,"Messages"),{
        text:message,
        uid: user.uid,
        uri: user.photoURL,
        createdAt: serverTimestamp()
      });

      divForScroll.current.scrollIntoView({behaviour: "smooth"})

    } catch(error){
      alert(error)
    }
}

  useEffect(() => {
  const q = query(collection(db,"Messages"), orderBy("createdAt", "asc"))

    const unsubscribe = onAuthStateChanged(auth, (data) => {
      setUser(data)
    })

    const unsubscribeForMessages = onSnapshot(q,(snap) => {
      showMessages(snap.docs.map(item =>{
        const id = item.id
        return {id, ...item.data()}
      }))
    })

    return () => {
      unsubscribe()
      unsubscribeForMessages()
    }
  }, [])


  return (
    <Box bg={"red.100"} w="full">

    {
      user ? (<Container h={"100vh"} bg={"white"} w="full">

      <VStack h="full"paddingY={2} css={{"&::-webkit-scrollbar":{
        display: "none"
      }}}>

        <Button onClick={signOutHandler} colorScheme="red" w={"full"}>Logout</Button>

        <VStack h="full" w="full" overflowY='auto'>
        {
          messages.map(item =>(
            <Message key={item.id} user={item.uid === user.uid ? "me":"other"} text = {item.text} uri={item.uri} uid={item.uid}/>
          ))
        }

        <div ref={divForScroll}></div>

        </VStack>

        <form onSubmit={submitHandler} style={{ width:"100%"}}>

          <HStack>
            
            <Input w="full" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Enter a message..." />

            <Button colorScheme="purple" type="submit">Send</Button>

          </HStack>

        </form>

      </VStack>

    </Container>) 
    : <VStack bg={"white"} justifyContent={"center"} h="100vh">
      <Button onClick={signInHandler} colorScheme={"purple"}>Sign in with Google</Button>

    </VStack>
    }

    </Box>
  );
}

export default App;
