import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import arteludovica from './imagenes/arteludovica/arteludovica.webp'
import obras from './imagenes/arteludovica/obras.webp'
import disco from './imagenes/arteludovica/disco.webp'
import fantasmas from './imagenes/arteludovica/fantasmas.webp'
import banquete from './imagenes/arteludovica/banquete.webp'
import nanu from './imagenes/arteludovica/nanu.webp'
import igon from './imagenes/arteludovica/igon.webp'
import socrates from './imagenes/arteludovica/socrates.webp'
import viqui from './imagenes/arteludovica/viqui.webp'
import nicoDiego from './imagenes/arteludovica/nico-diego.webp'
import vino from './imagenes/arteludovica/vino.webp'
import radio from './imagenes/arteludovica/radio.webp'


function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
  };
}



export default function QuiltedImageList() {
  return (
    <ImageList
      // sx={{ width: 500, height: 450 }}
      sx={{ width: 325, height: 400 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: arteludovica,
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: radio,
    title: 'Burger',
  },
  {
    img: nanu,
    title: 'Camera',
  },
  {
    img: obras,
    title: 'Coffee',
    cols: 2,
  },
  {
    img: disco,
    title: 'Hats',
    cols: 2,
  },
  {
    img: fantasmas,
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: viqui,
    title: 'Basketball',
  },
  {
    img: igon,
    title: 'Fern',
  },
  {
    img: banquete,
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
    img: vino,
    title: 'Tomato basil',
  },
  {
    img: nicoDiego,
    title: 'Sea star',
  },
  {
    img: socrates,
    title: 'Bike',
    cols: 2,
  },
];
