import {
  Box,
  Container,
  Grid,
  Heading,
  Image,
  Text,  
  Flex,
  Wrap,
  WrapItem, HStack,VStack, 
  Link, Icon
} from '@chakra-ui/react'; 
import { Menu } from './Menu';
import { HeaderContainer } from './HeaderContainer';
import { NewRecipes, Recipe } from './NewRecipes';
import { BsEmojiHeartEyes, BsPeopleFill, BsBookmarkHeart } from "react-icons/bs";
import { ProfileNotifications } from './ProfileNotifications';

interface Blog {
  id: number;
  authorName: string;
  authorImageUrl: string;
  blogUrl: string;
}

const mockRecipes: Recipe[] = [
  { title: 'Grilled Tomatoes', image: 'https://via.placeholder.com/346x244', description: 'Tomatoes with grilled seasoning', category:'' },
  {  title: 'Sweet Pancakes', image: 'https://via.placeholder.com/346x244', description: 'Pancakes with sweet flavor', category:'' },
  { title: 'Backed Dough', image: 'https://via.placeholder.com/346x244', description: 'Dough from the oven', category:'' },
  { title: 'Tomato and Cranberry', image: 'https://via.placeholder.com/346x244', description: 'The most exotic recipe', category:'' },
];

const mockBlogs: Blog[] = [
  { id: 1, authorName: 'Eva Stark', authorImageUrl: 'https://via.placeholder.com/50x50', blogUrl: '#' },
  { id: 2, authorName: 'Jonh Doe', authorImageUrl: 'https://via.placeholder.com/50x50', blogUrl: '#' },
  { id: 3, authorName: 'Katarina Smith', authorImageUrl: 'https://via.placeholder.com/50x50', blogUrl: '#' },
];

const HomePage = () => {
  
  return (
  <Container maxW="container.2xl" px='280px'>
    <ProfileNotifications />
  
      
          {/* Sidebar (Hidden on Mobile) */}
        <Box position='fixed' top='80px' left='0' pt='24px'
            width={{ base: '100%', lg: '256px' }}
            display={{ base: 'none', lg: 'block' }}            
        >
          <Menu />
        </Box>
        

          {/* Content Area */}
        <Flex as="main" direction={{ base: 'column', lg: 'column' }}  w='1360px'pt='80px'>
        <HeaderContainer />
            <NewRecipes />

            <ContentSection title="Самое сочное">
                <RecipeGrid recipes={mockRecipes.slice(0, 2)} />
            </ContentSection>

            <ContentSection title="Кулинарные блоги">
                <BlogList blogs={mockBlogs} />
            </ContentSection>

            <ContentSection title="Веганская кухня">
                <RecipeGrid recipes={mockRecipes.slice(2)} />
            </ContentSection>
        
      </Flex>

      {/* Footer */}
      <Box as="footer" py={4} textAlign="center" mt={8} borderTop="1px solid" borderColor="gray.200">
          <Text fontSize="sm">&copy; 2023 Your Website</Text>
      </Box>
  </Container>
  );
}


interface RecipeGridProps {
recipes: Recipe[];
}

function RecipeGrid({ recipes }: RecipeGridProps) {
return (
<Grid
    templateColumns={{
        base: '1fr',
        md: 'repeat(2, 1fr)',
        lg: 'repeat(3, 1fr)',
        xl: 'repeat(4, 1fr)',
    }}
    gap={6}
>
    {recipes.map((recipe) => (
        <Box key={recipe.title} borderWidth="1px" borderRadius="md" overflow="hidden">
            <Image src={recipe.image} alt={recipe.title} width="100%" height="244px" objectFit="cover" />
            <Box p={4}>
                <Heading size="md" mb={2}>
                    {recipe.title}
                </Heading>
                <Text fontSize="sm">{recipe.description}</Text>
            </Box>
        </Box>
    ))}
</Grid>
);
}

interface BlogListProps {
blogs: Blog[];
}

function BlogList({ blogs }: BlogListProps) {
return (
<Wrap spacing={4}>
{blogs.map((blog) => (
                <WrapItem key={blog.id}>
                    <Link href={blog.blogUrl} _hover={{ textDecoration: 'none' }}>
                        <Flex alignItems="center">
                            <Image
                                src={blog.authorImageUrl}
                                alt={blog.authorName}
                                borderRadius="full"
                                boxSize="50px"
                                marginRight={2}
                            />
                            <Text fontSize="sm">{blog.authorName}</Text>
                        </Flex>
                    </Link>
                </WrapItem>
            ))}
        </Wrap>
    );
}

interface ContentSectionProps {
    title: string;
    children: React.ReactNode;
}

function ContentSection({ title, children }: ContentSectionProps) {
    return (
        <Box mb={8}>
            <Heading as="h2" size="lg" mb={4} fontWeight="semibold">
                {title}
            </Heading>
            {children}
        </Box>
    );
}

export default HomePage;