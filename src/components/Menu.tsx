import {
  Box,
  Flex,
  Text,
  Image,
  IconButton,
  useDisclosure,
  Collapse,
  VStack, Icon, 
} from "@chakra-ui/react";

import {  
  MdExitToApp,
} from "react-icons/md";
import { TfiAngleUp, TfiAngleDown } from "react-icons/tfi";

interface MenuItem {
  label: string;
  iconSrc: string; 
}

const menuItems: MenuItem[] = [
  { label: "Салаты", iconSrc: "/src/assets/eggplant.svg" },
  { label: "Закуски", iconSrc: "/src/assets/kitchen_icon_24px.svg" },
  { label: "Первые блюда", iconSrc: "/src/assets/kitchen_icon_3.svg" },
  { label: "Вторые блюда", iconSrc: "/src/assets/icons8-frying-pan-96 1.svg" },
  { label: "Десерты, выпечка", iconSrc: "/src/assets/icons8-хлеб-и-скалка-96 1.svg" },
  { label: "Блюда на гриле", iconSrc: "/src/assets/kitchen_icon_6.svg" },
  { label: "Веганская кухня", iconSrc: "/src/assets/kitchen_icon_7.svg" },
  { label: "Детские блюда", iconSrc: "/src/assets/kitchen_icon_8.svg" },
  { label: "Лечебное питание", iconSrc: "/src/assets/kitchen_icon_9.svg" },
  { label: "Национальные", iconSrc: "/src/assets/kitchen_icon_10.svg" },
  { label: "Соусы", iconSrc: "/src/assets/kitchen_icon_11.svg" },
  { label: "Напитки", iconSrc: "/src/assets/icons8-чашка-чая-96 1.svg" },
  { label: "Заготовки", iconSrc: "/src/assets/kitchen_icon_13.svg" },
];

const MenuItemComponent = ({ label, iconSrc }: MenuItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box width="100%" >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        py={2}
        px={4}
        cursor="pointer"
        onClick={onToggle}
        _hover={{ bg: "gray.100" }}
      >
        <Flex alignItems="center" w='230px'>
          <Box width="24px" height="24px" mr={2}> {/* Добавляем Box для фиксированного размера */}
            <Image src={iconSrc} alt={label} width="100%" height="100%" objectFit="contain" />
          </Box>
          <Text fontSize="16px"
      fontWeight="500"
      fontFamily="Inter">{label}</Text>
        </Flex>
        <IconButton
          aria-label={isOpen ? "Свернуть" : "Развернуть"}
          icon={isOpen ? <TfiAngleUp /> : <TfiAngleDown />}
       
          
          
          variant="ghost"
          
        />
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Box
          px={4}
          py={2}
          bg="gray.50"
          borderLeft="1px solid"
          borderColor="gray.200"
        >
          {/* Здесь будет контент выпадающего меню */}
          <Text>Содержимое для {label}</Text>
        </Box>
      </Collapse>
    </Box>
  );
};

export const Menu = () => {
  return (
    <VStack align="stretch" spacing={0} width="100%">
      {menuItems.map((item, index) => (
        <MenuItemComponent key={index} label={item.label} iconSrc={item.iconSrc} />
      ))}
      <Box
        alignItems="center"
        justifyContent="space-between"
        py={2}
        px={4}
        cursor="pointer"
        _hover={{ bg: "gray.100" }}
      >
        <Flex alignItems="center">
          {/*<Icon as={MdExitToApp} mr={2} />*/}
          <Icon as={MdExitToApp} mr={2} />
          <Text>Выйти</Text>
        </Flex>
      </Box>
    </VStack>
  );
};


