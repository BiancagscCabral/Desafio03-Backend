// definição do modelo de produto
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

// Banco de dados:
// produtos
export let products: Product[] = [
  {
    id: '1',
    name: 'Tênis de Corrida (Backend)',
    price: 299.90,
    description: 'Tênis vindo direto da API!',
    image: 'https://img.freepik.com/fotos-gratis/um-tenis-branco-em-um-fundo-branco_181624-60197.jpg',
  },
];