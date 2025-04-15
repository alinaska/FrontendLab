import { Icon } from '@chakra-ui/react';
interface IconProps {
    [key: string]: any;  //  Разрешаем любые пропсы для Icon
  }

export const ArrowLeftIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
    />
  </Icon>
);

export const ArrowRightIcon = (props: IconProps) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <path
            fill="currentColor"
            d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"
        />
    </Icon>
);