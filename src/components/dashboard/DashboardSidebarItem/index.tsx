import { Badge, Box, Icon, Collapse, Flex, Text, useDisclosure } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { DashboardSidebarItemProps } from 'ts/DashboardSidebar';

const DashboardSidebarItem = ({ item, pathname }: DashboardSidebarItemProps) => {
   const isActive = item.sub
      ? item.sub.some((subItem) => subItem.path === pathname)
      : item.path === pathname;
   const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: isActive });

   if (item.sub)
      return (
         <>
            <Flex
               align="stretch"
               alignItems="center"
               borderLeftColor={isActive ? 'grey' : 'transparent'}
               borderLeftWidth={4}
               p="3"
               bg={isActive ? 'white' : undefined}
               color="black"
               onClick={onToggle}
               cursor="pointer"
               transitionProperty="common"
               transitionDuration="normal"
            >
               <Box ml="2" mr="4">
                  <Icon as={item.icon} />
               </Box>
               <Text size="button-regular" fontSize="md">
                  {item.name}
                  {item.badge && (
                     <Badge as="sup" ml="1" display="inline" rounded="lg">
                        {item.badge}
                     </Badge>
                  )}
               </Text>
               <Box ml="auto">{isOpen ? <FaAngleUp /> : <FaAngleDown />}</Box>
            </Flex>
            <Collapse in={isOpen} animateOpacity>
               {item.sub.map((subItem) => (
                  <Link to={subItem.path} key={subItem.path}>
                     <Text
                        as="a"
                        display="block"
                        p="2"
                        size="button-regular"
                        bg={isActive ? 'white' : undefined}
                        color={subItem.path === pathname ? 'black' : 'black'}
                        pl="14"
                        transitionProperty="common"
                        transitionDuration="normal"
                        _hover={{ bg: 'white' }}
                     >
                        {subItem.name}
                        {subItem.badge && (
                           <Badge as="sup" ml="1" display="inline" rounded="lg">
                              {subItem.badge}
                           </Badge>
                        )}
                     </Text>
                  </Link>
               ))}
            </Collapse>
         </>
      );

   return (
      <Link to={item.path}>
         <Flex
            as="a"
            align="stretch"
            alignItems="center"
            borderLeftColor={isActive ? 'black' : 'transparent'}
            borderLeftWidth={4}
            p="3"
            bg={isActive ? 'white' : undefined}
            color="black"
            transitionProperty="common"
            transitionDuration="normal"
            _hover={{ bg: 'white' }}
         >
            <Box ml="2" mr="4" color={isActive ? 'black' : 'black'}>
               <Icon as={item.icon} />
            </Box>
            <Text size="button-regular" fontSize="md">
               {item.name}
               {item.badge && (
                  <Badge as="sup" ml="1" display="inline" rounded="lg">
                     {item.badge}
                  </Badge>
               )}
            </Text>
         </Flex>
      </Link>
   );
};

export default DashboardSidebarItem;
