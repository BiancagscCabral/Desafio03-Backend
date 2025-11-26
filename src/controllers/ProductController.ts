import type { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid'; // Gera IDs únicos
import { products } from '../models/product';
import type { Product } from '../models/product';

export const ProductController = {
  // lista todos os produtos (get)
  index: (req: Request, res: Response) => {
    return res.json(products);
  },

  // criar novo produto (post)
  create: (req: Request, res: Response) => {
    const { name, price, description, image } = req.body;

    // validação simples
    if (!name || !price) {
      return res.status(400).json({ error: 'Nome e preço são obrigatórios!' });
    }

    const newProduct: Product = {
      id: uuidv4(), //gera um id aleatorio e unico
      name,
      price,
      description: description || '',
      image: image || ''
    };

    products.push(newProduct); // Salva no array

    return res.status(201).json(newProduct);
  },
  
  // deletar produto (delete)
  delete: (req: Request, res: Response) => {
    const { id } = req.params;

    const productIndex = products.findIndex((p: Product) => p.id === id);

    if (productIndex < 0) {
      return res.status(404).json({ error: 'Produto não encontrado.' });
    }

    products.splice(productIndex, 1); // Remove do array

    return res.status(204).send(); // 204 = Sucesso sem conteúdo
  }
};

export default ProductController;