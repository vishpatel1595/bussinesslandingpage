// import React from 'react';

// import {
//   Box,
//   IconButton,
//   useBreakpointValue,
//   Stack,
//   Heading,
//   Text,
//   Container,
// } from '@chakra-ui/react';
// // Here we have used react-icons package for the icons
// import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// // And react-slick as our Carousel Lib
// import Slider from 'react-slick';

// // Settings for the slider
// const settings = {
//   dots: true,
//   arrows: false,
//   fade: true,
//   infinite: true,
//   autoplay: true,
//   speed: 500,
//   autoplaySpeed: 5000,
//   slidesToShow: 1,
//   slidesToScroll: 1,
// };

// function CaptionCarousel() {
//   // As we have used custom buttons, we need a reference variable to
//   // change the state
//   const [slider, setSlider] = React.useState(null);

//   // These are the breakpoints which changes the position of the
//   // buttons as the screen size changes
//   const top = useBreakpointValue({ base: '90%', md: '50%' });
//   const side = useBreakpointValue({ base: '30%', md: '40px' });

//   // This list contains all the data for carousels
//   // This can be static or loaded from a server
//   const cards = [
//     {
//       title: 'Global Innovation Center',
//       text:
//         "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
//       image:
//         'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
//     },
//     {
//       title: 'Our Solution Can Change Your Life',
//       text:
//         "Simple Solutions for Hacktic Work.",
//       image:
//         'https://images.unsplash.com/photo-1577017040065-650ee4d43339?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
//     },
//     {
//       title: 'Your Growth is Our Growth',
//       text:
//         "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
//       image:
//         'https://images.unsplash.com/photo-1462826303086-329426d1aef5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
//     },
//   ];

//   return (
//     <Box
//       position={'relative'}
//       height={'100vh'}
//       width={'full'}
//       overflow={'hidden'}>
//       {/* CSS files for react-slick */}
//       <link
//         rel="stylesheet"
//         type="text/css"
//         charSet="UTF-8"
//         href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
//       />
//       <link
//         rel="stylesheet"
//         type="text/css"
//         href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
//       />
//       {/* Left Icon */}
//       <IconButton
//         aria-label="left-arrow"
//         variant="ghost"
//         position="absolute"
//         left={side}
//         top={top}
//         transform={'translate(0%, -50%)'}
//         zIndex={2}
//         onClick={() => slider?.slickPrev()}>
//         <BiLeftArrowAlt size="40px" />
//       </IconButton>
//       {/* Right Icon */}
//       <IconButton
//         aria-label="right-arrow"
//         variant="ghost"
//         position="absolute"
//         right={side}
//         top={top}
//         transform={'translate(0%, -50%)'}
//         zIndex={2}
//         onClick={() => slider?.slickNext()}>
//         <BiRightArrowAlt size="40px" />
//       </IconButton>
//       {/* Slider */}
//       <Slider {...settings} ref={(slider) => setSlider(slider)}>
//         {cards.map((card, index) => (
//           <Box
//             key={index}
//             height={'6xl'}
//             position="relative"
//             boxSize="100%"
           
//             backdropFilter='blur(10px)'
//              backgroundPosition="center"
//             backgroundRepeat="no-repeat"
//             backgroundSize="cover"
//             // backgroundImage={`url(${card.image})`}
//             >
//             {/* This is the block you need to change, to customize the caption */}
//             <Container size="container.lg" height="600px" position="relative" >
//               <Stack
//                 spacing={6}
//                 w={'full'}
//                 maxW={'lg'}
//                 position="absolute"
//                 top="50%"
//                 transform="translate(0, -50%)">
//                 <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
//                   {card.title}
//                 </Heading>
//                 <Text fontSize={{ base: 'md', lg: 'lg' }} color="GrayText">
//                   {card.text}
//                 </Text>
//               </Stack>
//             </Container>
//           </Box>
//         ))}
//       </Slider>
//     </Box>
//   );
// }
// export default CaptionCarousel;

import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';

export default function WithBackgroundImage() {
  return (
    <Flex
      w={'full'}
      h={'100vh'}
      backgroundImage={
        'url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
            Our Solution Can Change Your Life
          </Text>
          <Stack direction={'row'}>
            <Button
              bg={'blue.400'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'blue.500' }}>
              Show me more
            </Button>
            <Button
              bg={'whiteAlpha.300'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'whiteAlpha.500' }}>
              Show me more
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}