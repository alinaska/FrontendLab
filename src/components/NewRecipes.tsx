import { useRef } from 'react';
import {
  Box,  
  Image,
  Text,
  useBreakpointValue,
  IconButton, Flex
  
} from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/swiper-bundle.css';
import { MdOutlineWest, MdOutlineEast } from "react-icons/md";

SwiperCore.use([Navigation, Pagination, Autoplay]);

export interface Recipe {
  image: string;
  title: string;
  description: string;
  category: string;
}

const recipes: Recipe[] = [
  {
    image: 'src/assets/images/Image.png',
    title: 'Солянка с грибами',
    description: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку...',
    category: 'Первые блюда',
  },
  {
    image: 'src/assets/images/Image (1).png',
    title: 'Капустные котлеты',
    description: 'Капустные котлеты по этому рецепту получаются необычайно пышными и  невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных  блюд..',
    category: 'Веганские блюда',
  },
  {
    image: 'src/assets/images/Image (2).png',
    title: 'Оладьи на кефире "Пышные"',
    description: 'Очень вкусные и нежные оладьи на кефире. Настоятельно рекомендую пышные кефирные оладьи на завтрак.',
    category: 'Десерты, выпечка',
  },
  {
    image: 'src/assets/images/Image (3).png',
    title: 'Салат "Здоровье"',
    description: 'Сельдерей очень полезен для здоровья, пора набираться витаминов. Не  салат, а сплошное удовольствие:) Вкусный, необычный, а главное быстрый.',
    category: 'Салаты',
  },
  {
    image: 'src/assets/images/Image (2).png',
    title: 'Оладьи на кефире "Пыши..."',
    description: 'Очень вкусные и нежные оладьи...',
    category: 'Десерты, выпечка',
  },
];



export const NewRecipes = () => {
  const slidesToShow = useBreakpointValue({ base: 1, md: 3, lg: 4 }) || 4;
  const swiperRef = useRef<any>(null);

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const cutText = (text: string, maxLength: number): string => {
    if (text.length > maxLength) {
        return text.substring(0, maxLength) + "...";
    }
    return text;

  };

  return (
    <Box as="section" py={8} >
      <Text fontSize="48px"
            fontWeight="500"
            fontFamily="Inter" 
            textAlign='left'>
        Новые рецепты
      </Text>

      <Box position="relative" zIndex={1}>
        <Swiper
          spaceBetween={24}
          slidesPerView={slidesToShow}
          navigation={false}          
          breakpoints={{
            sm: { slidesPerView: 2, spaceBetween: 12 },
            md: {
                slidesPerView: useBreakpointValue({ base: 1, md: 4 }) || 2,
                spaceBetween: 12,
              },
              xl: {
                slidesPerView: useBreakpointValue({ base: 2, xl: 3 }) || 3,
                spaceBetween: 12,
              },
              '2xl': { slidesPerView: slidesToShow, spaceBetween: 24 },
            }}
            loop={false}
            modules={[Navigation, Autoplay]}
            ref={swiperRef}
          >
            {recipes.map((recipe, index) => (
              <SwiperSlide key={index}>
                <Box
                width="322px"
                height="414px"
                  borderWidth="1px"
                  borderRadius="md"
                  overflow="hidden"
                  boxShadow="sm"
                  bg="white"
                >
                  <Image
                    src={recipe.image}
                    alt={recipe.title}
                    h="230px"
                    w="100%"
                    objectFit="cover"
                  />
                  <Box p='24px' >
                    <Text fontSize="20px"
      fontWeight="500"
      fontFamily="Inter" textAlign='left'>
                      {cutText(recipe.title, 21)}
                    </Text>
                    <Text fontSize="14px"
                        fontWeight="400"
                        fontFamily="Inter" 
                        textAlign='left'>
                      {cutText(recipe.description, 100)}
                    </Text>
                    </Box>
                    <Flex px='24px'>
                    <Text fontSize="14px"
                        fontWeight="400"
                        fontFamily="Inter" >
                      {recipe.category}
                    </Text>
                  </Flex>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
  
          <IconButton
          
            aria-label="Previous Slide"
            icon={<MdOutlineWest />}
            position="absolute"
            left={0}
            top="45%"            
            bg="blackAlpha.900"
            color="white"            
            borderRadius="md"
            onClick={handlePrev}
            size="lg"
            zIndex={10}
          />
          <IconButton
            aria-label="Next Slide"
            icon={<MdOutlineEast />}
            position="absolute"
            right={0}
            top="45%"            
            bg="blackAlpha.900"
            color="white"            
            borderRadius="md"
            onClick={handleNext}
            size="lg"
            zIndex={10}
          />
        </Box>
      </Box>
    );
  };
  
  export default NewRecipes;
  