import * as actionTypes from './Shopping-types';

import product1 from '../../Assents/img/pizzas/TENTACION.jpeg';
import product2 from '../../Assents/img/pizzas/NEVADA.jpeg';
import product3 from '../../Assents/img/pizzas/MELOCOCHUDA.jpeg';
import product4 from '../../Assents/img/pizzas/BANBERRY.jpeg';
import product5 from '../../Assents/img/pizzas/DINAMITA.jpeg';
import product6 from '../../Assents/img/pizzas/MACEDONIA.jpeg';
import product7 from '../../Assents/img/pizzas/OROPRETO.jpeg';


//picture of the tortillas

import product8 from '../../Assents/img/tortillas hacks/totinella.jpeg';
import product9 from '../../Assents/img/tortillas hacks/totimelo.jpeg';
import product10 from '../../Assents/img//tortillas hacks/tortufruta.jpeg';
import product11 from '../../Assents/img/tortillas hacks/tortibrown.jpeg';
const initialState = {
  products: [

    {
      id: '1',

      img: product1,
      alt: 'Pizza',
      name: 'TENTACION',
      desc: 'AREQUIPE,BROWNIE,ALMENDRA,MANI Y LLUVIA DORADA',
      price: 11000,
      button: 'Add to Cart',
    },


    {
      id: '2',
      img: product2,
      alt: 'Pizza',
      name: 'NEVADA',
      desc: 'NUTELLA,FRESAS Y AZUCAR PULVERIZADA',
      price: 11000,
      button: 'Add to Cart'

    },
    {
      id: '3',
      img: product3,
      alt: 'Pizza',
      name: 'MELCOCHUDA',
      desc: 'NUTELLA,MASMELO,GALLETAS,Y SALSA HERSHERYŚ',
      price: 11500,
      button: 'Add to Cart'

    },
    {
      id: '4',
      img: product4,
      alt: 'Pizza',
      name: 'BANBERRY',
      desc: 'NUTELLA,FRESAS,BANANO.SALSA HERSHERYŚ Y AZUCAR PULVERIZADA',
      price: 12000,
      button: 'Add to Cart'

    },

    {
      id: '5',
      img: product5,
      alt: 'Pizza',
      name: 'DINAMITA',
      desc: 'NUTELLA,M&M,MANI Y QUIPITO',
      price: 12000,
      button: 'Add to Cart'
    },
    {
      id: '6',
      img: product6,
      alt: 'Pizza',
      name: 'MACENONIA',
      desc: 'NETULLA,FRESAS,ARANDANOS DESHIDRATADOS,DURAZNO,KIWI Y MERMELADA DE MORA  ',
      price: 15000,

    },

    {
      id: '7',
      img: product7,
      alt: 'Pizza',
      name: 'ORO PRETO',
      desc: 'NUTELLA,MANI,MILKY WAY,AREQUIPE Y LLUVIA DORADA ',
      price: 14000,

    },

    {
      id: '8',
      img: product8,
      alt: 'Tortillas',
      name: 'TORTINELLA',
      desc:
        'NUTELLA,FRESAS,BANANO,AZUCAR PULVERIZADA Y TORTILLA ',
      price: 6500,
      button: 'Add to Cart'

    },
    {
      id: '9',
      img: product9,
      alt: 'Tortillas',
      name: 'TORTIMELO',
      desc: 'NUTELLA,MASMELO,CREMA DE MANI,BANANO Y TORTILLA ',
      price: 6500,
      button: 'Add to Cart'

    },

    {
      id: '10',
      img: product10,
      alt: 'Tortillas',
      name: 'TORTIFRUTA',
      desc: 'MERMELADA DE MORA,DURAZNO,CREMA DE MANI,KIWI Y TORTILLA. ',
      price: 6500,
      button: 'Add to Cart'

    },
    {
      id: '11',
      img: product11,
      alt: 'Tortillas',
      name: 'TORTIBROW',
      desc: 'AREQUIPE,BROWNIE,ALMENDRA,MANI T TORTILLA',
      price: 6500,
      button: 'Add to Cart'

    },

  ],



  cart: [],
}

const shopReducer = (state = initialState, action) => {

  switch (action.type) {
    case actionTypes.ADD_TO_CART:

      const item = state.products.find(prod => prod.id === action.payload.id);
      const inCart = state.cart.find(item => item.id === action.payload.id ? true : false)
      return {
        ...state,
        cart: inCart ? state.cart.map(
          item => item.id === action.payload.id ?
            { ...item, qty: item.qty + 1 } : item)
          : [...state.cart, { ...item, qty: 1 }],
      }
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id)
      }
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) => item.id === action.payload.id ? { ...item, qty: +action.payload.qty } : item)
      }
    default:
      return state;
  }
}
export default shopReducer;