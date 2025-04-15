import {    
    Input,
    InputGroup,
    InputRightElement,   
    Switch,
    Select,
    IconButton,
    Flex,   
    Box, Text
  } from '@chakra-ui/react';
  import { BsFilter, BsSearch } from "react-icons/bs";

  export const HeaderContainer = () =>{
   
    return (
        <Box width='898px' textAlign="center" mx='auto' px='190px' py='32px' >
      <Text      
      fontSize="48px"
      fontWeight="700"
      fontFamily="Inter"
      >
        Приятного аппетита!</Text>
    <Flex alignItems="center" justifyContent="center" w="100%" py='32px' gap='12px'>
    <IconButton 
            aria-label="Search"            
            icon={<BsFilter/>}     
            size="lg"            
            bg="transparent"
            border='1px solid gray'
        /> 
       <InputGroup size="lg" w="100%">
       
       <Input 
            placeholder="Название или ингредиент..."    textColor='#134B00'    
            border='1px solid gray'
            size="lg"            
            px='20px'
            

            />
        
        <InputRightElement>
          <IconButton
            aria-label="Search"
            icon={<BsSearch />}
            bg="transparent"             
            size="lg"             
            border="none"       
            onClick={() => {
              
              alert('Поиск!');
            }}
          />        
        </InputRightElement>
    </InputGroup>
       
    </Flex>
    <Flex justifyContent="space-between" alignItems='center'>
    <Text fontSize="16px"
      fontWeight="500"
      fontFamily="Inter">Исключить мои аллергены</Text>
    <Switch />
    <Select placeholder="Выберите из списка..." w='45%'>
      {/* Опции */}
    </Select>
  </Flex>
    </Box>
    )
}