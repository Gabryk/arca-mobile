const types = {
  'order-delivered': '',
  'delivery-day': 'Entrega de order',
  'order-processed': '',
  'order-locked': '',
  'order-stock': '',
}

export default {
  notifications: [
    {
      id: '-LJuhNJn689',
      type: 'delivery-day',
      orderId: '-ORKDkks50',
      message: 'Hoy te entregamos la order #484',
      created_at: '2018-01-07T23:40:16.234Z',
      readed: false,
    },
    {
      id: '-LJuhNJn685',
      type: 'order-processed',
      orderId: '-ORKDkks50',
      message: 'Orden #484, procesada',
      created_at: '2018-01-06T23:40:16.234Z',
      readed: false,
    },
    {
      id: '-LJuhNJn680',
      type: 'order-locked',
      orderId: '-ORKDkks50',
      message: 'Orden #484, requiere que confirmes la ubicación',
      created_at: '2018-01-04T23:40:16.234Z',
      readed: false,
    },
    {
      id: '-LJuhNJn671',
      type: 'order-locked',
      orderId: '-ORKDkks50',
      message: 'Orden #484, requiere que confirmes la ubicación',
      created_at: '2018-01-04T23:40:16.234Z',
      readed: true,
    },
  ],
  products: [
    {
      id: '15-ac-ca',
      name: 'Aceite',
      brand: 'Capullo',
      description: 'Vegetal De soya',
      unitType: 10,
      unitAmount: 1000,
      price: 1133,
      section: 'F-001',
      avatar_url: 'https://www.superama.com.mx/Content/images/products/img_large/0750222377095L1.jpg'
    },
    {
      id: '15-ar-im',
      name: 'Arróz',
      brand: 'Imperio',
      description: 'Blanco 80/20 Crudo limpio 80% grano entero, enriquecido',
      unitType: 10,
      unitAmount: 1800,
      price: 1125,
      section: 'F-001' ,
      avatar_url: 'http://distribuidoramundialcr.com/wp-content/uploads/2017/09/IMPERIO-arroz-99-grano-premium-18kg.png'
    },
    {
      id: '15-ar-tí',
      name: 'Arróz',
      brand: 'Tío Felipe',
      description: 'Blanco 80/20 Crudo limpio 80% grano entero, enriquecido',
      unitType: 10,
      unitAmount: 2000,
      price: 1355,
      section: 'F-001' ,
      avatar_url: 'https://www.3ases.com/imgs/.....arroz%20tio%20pelon%201.8%20kgrs%2080%20grano.png'
    },
    {
      id: '15-ar-sa',
      name: 'Arróz',
      brand: 'Sabemás',
      description: 'Blanco 80/20 Crudo limpio 80% grano entero, enriquecido',
      unitType: 10,
      unitAmount: 1800,
      price: 1000,
      section: 'F-001' ,
      avatar_url: 'https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s480x480/e35/20478875_183123178893645_5615870920083111936_n.jpg?ig_cache_key=MTU2OTA3MzU2MDg2MDA4MDI1MQ%3D%3D.2'
    },
    {
      id: '15-at-sa',
      name: 'Atún',
      brand: 'Sabemás',
      description: 'En trocitos, enlatado en aceite, peso escurrido',
      unitType: 10,
      unitAmount: 120,
      price: 880,
      section: 'F-001',
      avatar_url: 'https://voycomprando.com/158-large_default/atun-enlatado-chicken-of-the-sea.jpg'
    },
    {
      id: '15-az-do',
      name: 'Azúcar',
      brand: 'Doña María',
      description: 'Blanco, en bolsa',
      unitType: 10,
      unitAmount: 2000,
      price: 1045,
      section: 'F-001' ,
      avatar_url: 'http://cmsolucionescr.com/pedidos/images/azucar%202k.jpg'
    },
    {
      id: '15-az-ju',
      name: 'Azúcar',
      brand: 'Juan Viñas',
      description: 'Blanco, en bolsa',
      unitType: 10,
      unitAmount: 2000,
      price: 1195,
      section: 'F-001' ,
      avatar_url: 'https://cdn.shopify.com/s/files/1/1479/5948/products/003858_grande.png?v=1473773927'
    },
    {
      id: '15-bb-pe',
      name: 'Bebida Carbonatada',
      brand: 'Pepsi',
      description: 'Bebida Carbonatada, negra presentación de 2 a 3.1Lts',
      unitType: 10,
      unitAmount: 2000,
      price: 895,
      section: 'F-001' ,
      avatar_url: 'http://ginaskokopelli.com/wp-content/uploads/2013/01/coupon43.jpg'
    }
  ],
  orders: [
    {
      id: 'ORKDkks52',
      created_at: '2018-01-06T23:40:16.234Z',
      status: 'open',
      items: [
        { productId: '15-ac-ca', quantity: 1 },
        //{ productId: '15-ar-im', quantity: 2 },
        { productId: '15-ar-tí', quantity: 3 },
        //{ productId: '15-ar-sa', quantity: 2 },
        { productId: '15-at-sa', quantity: 2 },
        //{ productId: '15-az-do', quantity: 1 },
        { productId: '15-az-ju', quantity: 4 }
      ]
    },
    {
      id: 'ORKDkks50',
      created_at: '2018-01-04T23:40:16.234Z',
      status: 'close',
      items: [
        //{ productId: '15-ac-ca', quantity: 1 },
        { productId: '15-ar-im', quantity: 2 },
        { productId: '15-ar-tí', quantity: 3 },
        { productId: '15-ar-sa', quantity: 2 },
        { productId: '15-at-sa', quantity: 2 },
        { productId: '15-az-do', quantity: 1 },
        //{ productId: '15-az-ju', quantity: 4 }
      ]
    }
  ],
  address_book: [
    {
      id: '-ADRdj9770',
      name: 'Casa',
      address: 'Unnamed Road, Tronadora, Costa Rica',
      location: {
        latitude: 10.4948477,
        longitude: -84.9245144,
      }
    }
  ]
}