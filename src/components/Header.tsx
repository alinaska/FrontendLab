import {    
    useDisclosure,
    Image,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,    
    IconButton,
    Flex, Box   
  } from '@chakra-ui/react';
  import { HamburgerIcon} from '@chakra-ui/icons';
  import { Menu } from './Menu';
  import { Breadcrumbs } from './Breadcrumbs';

  export const Header = () =>{
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
<>   
<Flex    
    as="header"
    position='fixed'
    zIndex={5}
    left={0}
    alignItems="center"
    justifyContent="space-between"
    px={4}
    backgroundColor=' #ffffd3'
    h={20}    
    w='100%'
    >
    <Flex width="135px" height="32px" mr={2} > {/* Добавляем Box для фиксированного размера */}
      <Image src='/src/assets/Group.svg' alt='logo'  height="100%" objectFit="contain" />
      <Image src='/src/assets/yee-daa.svg' alt='yee-daa' width="71%" height="100%" objectFit="contain" />
    </Flex>
    <Box display={{ base: 'none', lg: 'block' }}> {/* Скрываем на мобильных, отображаем на lg и больше */}
      <Breadcrumbs />
    </Box>

    <IconButton
            aria-label="Open Menu"
            icon={<HamburgerIcon />}
            onClick={onOpen}
            display={{ sm: 'block', lg: 'none' }}
            size="lg"
            background='transparent'
        />
</Flex> 

{/* Drawer (Mobile Menu) */}
<Drawer isOpen={isOpen} placement="left" onClose={onClose}>
<DrawerOverlay />
<DrawerContent>
    <DrawerCloseButton />
    <Menu />
</DrawerContent>
</Drawer>
</>
 )
  }