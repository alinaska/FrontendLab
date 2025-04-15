import { Box, Icon, Text, VStack, HStack } from '@chakra-ui/react';
import { BsBookmarkHeart, BsPeopleFill, BsEmojiHeartEyes } from 'react-icons/bs';

export const ProfileNotifications = () => {
  return (
    <Box position="absolute" top="100px" right="50px"  bg="white" p={4} >
      <VStack align="start" spacing={4}>
        <HStack spacing={2}>
          <Icon as={BsBookmarkHeart} w="16px" h="16px"  />
          <Text fontSize="sm" color="green.500">185</Text>
        </HStack>

        <HStack spacing={2}>
          <Icon as={BsPeopleFill} w="16px" h="16px"  />
          <Text fontSize="sm" color="green.500">589</Text>
        </HStack>

        <HStack spacing={2}>
          <Icon as={BsEmojiHeartEyes} w="16px" h="16px"  />
          <Text fontSize="sm" color="green.500">587</Text>
        </HStack>
      </VStack>
    </Box>
  );
};



