import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import arteludovica from './imagenes/arteludovica.png'
import obras from './imagenes/obras.png'
import disco from './imagenes/disco.png'
import fantasmas from './imagenes/fantasmas.png'
import banquete from './imagenes/banquete.png'
import nanu from './imagenes/nanu.png'
import igon from './imagenes/igon.png'
import socrates from './imagenes/socrates.png'
import viqui from './imagenes/viqui.png'
import nicoDiego from './imagenes/nico-diego.png'
import vino from './imagenes/vino.png'
import radio from './imagenes/radio.png'


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
