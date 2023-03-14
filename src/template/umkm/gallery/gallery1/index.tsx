import {
   Heading,
   Container,
   Image,
   Box,
   Flex,
   BoxProps,
   Link,
   useColorModeValue,
} from '@chakra-ui/react';
import { motion, Variants } from 'framer-motion';

const data = [
   {
      id: 1,
      name: 'The Storm on the Sea of Galilee',
      year: 1633,
      description:
         "The painting, in vertical format, shows a close-up view of Christ's disciples struggling frantically against the heavy storm to regain control of their fishing boat. A huge wave beats the bow and rips the sail. One of the disciples is seen vomiting over the side. Another one, looking directly out at the viewer, is a self-portrait of the artist. Only Christ, depicted on the right, remains calm.",
      source: 'https://en.wikipedia.org/wiki/The_Storm_on_the_Sea_of_Galilee',
      artist: {
         image: '/assets/the-storm-on-the-sea-of-galilee/artist.jpg',
         name: 'Rembrandt',
      },
      images: {
         thumbnail:
            'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
         hero: {
            small: '/assets/the-storm-on-the-sea-of-galilee/hero-small.jpg',
            large: '/assets/the-storm-on-the-sea-of-galilee/hero-large.jpg',
         },
         gallery: '/assets/the-storm-on-the-sea-of-galilee/gallery.jpg',
      },
   },
   {
      id: 2,
      name: 'Lady with an Ermine',
      year: 1489,
      description:
         'The Lady with an Ermine (Italian: Dama con l\'ermellino [ˈdaːma kon lermelˈliːno]; Polish: Dama z gronostajem) is a portrait painting widely attributed to the Italian Renaissance artist Leonardo da Vinci. Dated to c. 1489–1491, the work is painted in oils on a panel of walnut wood. Its subject is Cecilia Gallerani, a mistress of Ludovico Sforza ("Il Moro"), Duke of Milan; Leonardo was painter to the Sforza court at the time of its execution. It is one of only four surviving portraits of women painted by Leonardo, the others being Ginevra de\' Benci, La Belle Ferronnière and the Mona Lisa',
      source: 'https://en.wikipedia.org/wiki/Lady_with_an_Ermine',
      artist: {
         image: '/assets/lady-with-an-ermine/artist.jpg',
         name: 'Leonardo da Vinci',
      },
      images: {
         thumbnail:
            'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
         hero: {
            small: '/assets/lady-with-an-ermine/hero-small.jpg',
            large: '/assets/lady-with-an-ermine/hero-large.jpg',
         },
         gallery: '/assets/lady-with-an-ermine/gallery.jpg',
      },
   },
   {
      id: 3,
      name: 'The Boy in the Red Vest',
      year: 1889,
      description:
         'Cézanne painted four oil portraits of this Italian boy in the red vest, all in different poses, which allowed him to study the relationship between the figure and space. The most famous of the four, and the one commonly referred to by this title, is the one which depicts the boy in a melancholic seated pose with his elbow on a table and his head cradled in his hand. It is currently held in Zürich, Switzerland. The other three portraits, of different poses, are in museums in the US',
      source: 'https://en.wikipedia.org/wiki/The_Boy_in_the_Red_Vest',
      artist: {
         image: '/assets/the-boy-in-the-red-vest/artist.jpg',
         name: 'Paul Cézanne',
      },
      images: {
         thumbnail:
            'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
         hero: {
            small: '/assets/the-boy-in-the-red-vest/hero-small.jpg',
            large: '/assets/the-boy-in-the-red-vest/hero-large.jpg',
         },
         gallery: '/assets/the-boy-in-the-red-vest/gallery.jpg',
      },
   },
   {
      id: 4,
      name: 'Girl with a Pearl Earring',
      year: 1665,
      description:
         "The painting is a tronie, the Dutch 17th-century description of a 'head' that was not meant to be a portrait. It depicts a European girl wearing an exotic dress, an oriental turban, and what was thought to be a very large pearl as an earring. In 2014, Dutch astrophysicist Vincent Icke raised doubts about the material of the earring and argued that it looks more like polished tin than pearl on the grounds of the specular reflection, the pear shape and the large size of the earring.",
      source: 'https://en.wikipedia.org/wiki/Girl_with_a_Pearl_Earring',
      artist: {
         image: '/assets/girl-with-pearl-earring/artist.jpg',
         name: 'Johannes Vermeer',
      },
      images: {
         thumbnail:
            'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
         hero: {
            small: '/assets/girl-with-pearl-earring/hero-small.jpg',
            large: '/assets/girl-with-pearl-earring/hero-large.jpg',
         },
         gallery: './assets/girl-with-pearl-earring/gallery.jpg',
      },
   },
   {
      id: 5,
      name: 'The Great Wave off Kanagawa',
      year: 1831,
      description:
         'The Great Wave off Kanagawa (Japanese: 神奈川沖浪裏, Hepburn: Kanagawa-oki Nami Ura, lit. "Under the Wave off Kanagawa"), also known as The Great Wave or simply The Wave, is a woodblock print by the Japanese ukiyo-e artist Hokusai. It was published sometime between 1829 and 1833 in the late Edo period as the first print in Hokusai\'s series Thirty-six Views of Mount Fuji. The image depicts an enormous wave threatening three boats off the coast in the Sagami Bay (Kanagawa Prefecture) while Mount Fuji rises in the background.',
      source: 'https://en.wikipedia.org/wiki/The_Great_Wave_off_Kanagawa',
      artist: {
         image: '/assets/the-great-wave-off-kanagawa/artist.jpg',
         name: 'Hokusai',
      },
      images: {
         thumbnail:
            'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
         hero: {
            small: '/assets/the-great-wave-off-kanagawa/hero-small.jpg',
            large: '/assets/the-great-wave-off-kanagawa/hero-large.jpg',
         },
         gallery: '/assets/the-great-wave-off-kanagawa/gallery.jpg',
      },
   },
   {
      id: 6,
      name: 'The Night Café',
      year: 1888,
      description:
         "The Night Café (French: Le Café de nuit) is an oil painting created by Dutch artist Vincent van Gogh in September 1888 in Arles. Its title is inscribed lower right beneath the signature. The painting is owned by Yale University and is currently held at the Yale University Art Gallery in New Haven, Connecticut. The interior depicted is the Café de la Gare, 30 Place Lamartine, run by Joseph-Michel Ginoux and his wife Marie, who in November 1888 posed for Van Gogh's and Gauguin's Arlésienne; a bit later, Joseph Ginoux evidently posed for both artists, too.",
      source: 'https://en.wikipedia.org/wiki/The_Night_Caf%C3%A9',
      artist: {
         image: '/assets/the-night-cafe/artist.jpg',
         name: 'Vincent Van Gogh',
      },
      images: {
         thumbnail:
            'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
         hero: {
            small: '/assets/the-night-cafe/hero-small.jpg',
            large: '/assets/the-night-cafe/hero-large.jpg',
         },
         gallery: '/assets/the-night-cafe/gallery.jpg',
      },
   },
   {
      id: 7,
      name: 'Arnolfini Portrait',
      year: 1434,
      description:
         'It is considered one of the most original and complex paintings in Western art, because of its beauty, complex iconography, geometric orthogonal perspective, and expansion of the picture space with the use of a mirror. According to Ernst Gombrich "in its own way it was as new and revolutionary as Donatello\'s or Masaccio\'s work in Italy. A simple corner of the real world had suddenly been fixed on to a panel as if by magic ... For the first time in history the artist became the perfect eye-witness in the truest sense of the term".',
      source: 'https://en.wikipedia.org/wiki/Arnolfini_Portrait',
      artist: {
         image: '/assets/arnolfini-portrait/artist.jpg',
         name: 'Jan van Eyck',
      },
      images: {
         thumbnail:
            'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
         hero: {
            small: '/assets/arnolfini-portrait/hero-small.jpg',
            large: '/assets/arnolfini-portrait/hero-large.jpg',
         },
         gallery: '/assets/arnolfini-portrait/gallery.jpg',
      },
   },
   {
      id: 8,
      name: 'Guernica',
      year: 1937,
      description:
         'The scene occurs within a room where, on the left, a wide-eyed bull stands over a grieving woman holding a dead child in her arms. In the center of the room a horse falls in agony with a large gaping hole in its side, as if it had just been run through by a spear or javelin. The horse appears to be wearing chain mail armor, decorated with vertical tally marks arranged in rows. A dead and dismembered soldier lies under the horse. The hand of his severed right arm grasps a shattered sword, from which a flower grows.',
      source: 'https://en.wikipedia.org/wiki/Guernica_(Picasso)',
      artist: {
         image: '/assets/guernica/artist.jpg',
         name: 'Pablo Picasso',
      },
      images: {
         thumbnail:
            'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
         hero: {
            small: '/assets/guernica/hero-small.jpg',
            large: '/assets/guernica/hero-large.jpg',
         },
         gallery: '/assets/guernica/gallery.jpg',
      },
   },
   {
      id: 9,
      name: 'Van Gogh Self-portrait',
      year: 1889,
      description:
         'This self-portrait was one of about 32 produced over a 10-year period, and these were an important part of his work as a painter; he painted himself because he often lacked the money to pay for models. He took the painting with him to Auvers-sur-Oise, near Paris, where he showed it to Dr. Paul Gachet, who thought it was "absolutely fanatical". Art historians are divided as to whether this painting or Self-portrait without beard is Van Gogh\'s final self-portrait. The art historians Ingo F. Walther and Jan Hulsker consider this to be the last.',
      source: 'https://en.wikipedia.org/wiki/Van_Gogh_self-portrait_(1889)',
      artist: {
         image: '/assets/van-gogh-self-portrait/artist.jpg',
         name: 'Vincent Van Gogh',
      },
      images: {
         thumbnail:
            'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
         hero: {
            small: '/assets/van-gogh-self-portrait/hero-small.jpg',
            large: '/assets/van-gogh-self-portrait/hero-large.jpg',
         },
         gallery: '/assets/van-gogh-self-portrait/gallery.jpg',
      },
   },
   {
      id: 10,
      name: 'Mona Lisa',
      year: 1503,
      description:
         'The Mona Lisa (/ˌmoʊnə ˈliːsə/; italian: La Gioconda [la dʒoˈkonda] or Monna Lisa [ˈmɔnna ˈliːza]) is a half-length portrait painting by Italian artist Leonardo da Vinci. Considered an archetypal masterpiece of the Italian Renaissance, it has been described as "the best known, the most visited, the most written about, the most sung about, the most parodied work of art in the world". The painting\'s novel qualities include the subject\'s enigmatic expression, the monumentality of the composition, the subtle modelling of forms, and the atmospheric illusionism.',
      source: 'https://en.wikipedia.org/wiki/Mona_Lisa',
      artist: {
         image: '/assets/mona-lisa/artist.jpg',
         name: 'Leonardo da Vinci',
      },
      images: {
         thumbnail:
            'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
         hero: {
            small: '/assets/mona-lisa/hero-small.jpg',
            large: '/assets/mona-lisa/hero-large.jpg',
         },
         gallery: '/assets/mona-lisa/gallery.jpg',
      },
   },
];

export default function Gallery1() {
   const MotionBox = motion<BoxProps>(Box);

   return (
      <>
         <Container bg="white" minH="100" maxW="1440" p="20px 40px 30px 40px">
            <Heading
               fontFamily={'Work Sans'}
               fontWeight={'bold'}
               color={useColorModeValue('gray.700', 'gray.50')}
               textAlign="center"
               my={6}
            >
               Gallery
            </Heading>
            <Box py="20px" w="100%" maxW="100%" mx="auto" bg="white">
               <Box display="flex" flexWrap="wrap">
                  {data.map((id: any) => (
                     <Box key={id.id} w="50%" p={{ base: 1, md: 2 }} cursor="pointer">
                        <Image
                           // pb={{ base: '5.5vw', ts: '4.5vw', sm: '2vw' }}
                           w="100%"
                           // minW={150}
                           // maxW={150}
                           src={id.images.thumbnail}
                           alt="sdfsdf"
                        />
                     </Box>
                  ))}
               </Box>
            </Box>
         </Container>
      </>
   );
}

const variants: Variants = {
   hidden: {
      opacity: 0,
      y: -30,
   },
   visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { delay: Math.random() * (1 - 0.5 + 1) + 0.1, duration: 2 },
   }),
};
