import { Link, useLocation } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Text,Box
} from '@chakra-ui/react';

interface BreadcrumbItemType {
  path: string;
  label: string;
}
interface MenuItem {
    label: string;
    parent?: string; // parent может быть undefined
  }
  
  const menuStructure: { [key: string]: MenuItem } = {
    '/': { label: 'Главная' },
    '/vegan-cuisine': { label: 'Веганская кухня' },
    //'/vegan-cuisine/main-courses': { label: 'Вторые блюда', parent: '/vegan-cuisine' },
     
  };
  
export const Breadcrumbs = () => {
    const location = useLocation();
  const currentPath = location.pathname;

  const buildBreadcrumbs = (path: string): BreadcrumbItemType[] => {
    const breadcrumbs: BreadcrumbItemType[] = [];
    let current = path;

    while (menuStructure[current]) {
      const menuItem = menuStructure[current];
      if (menuItem) {
        breadcrumbs.unshift({ path: current, label: menuItem.label });
        current = menuItem.parent || ''; // Важно: присваиваем пустую строку, если нет родителя

        if (current === '') {
          // Останавливаемся, когда достигли вершины и нет родителя
          break;
        }
      } else {
        console.warn(`Путь ${current} не найден в menuStructure`);
        break;
      }
    }

    return breadcrumbs;
  };

  const breadcrumbs = buildBreadcrumbs(currentPath);

  return (
    <Box as="header" py={4} px={6} bg="transparent">
      <Breadcrumb separator=">">
        {breadcrumbs.map((crumb, index) => (
          <BreadcrumbItem key={index} isCurrentPage={index === breadcrumbs.length - 1}>
            {index === breadcrumbs.length - 1 ? (
              <Text>{crumb.label}</Text>
            ) : (
              <BreadcrumbLink as={Link} to={crumb.path}>
                {crumb.label}
              </BreadcrumbLink>
            )}
            {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
    </Box>
  );
};



