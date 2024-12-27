import React from 'react';
import {  Text, Image, TouchableOpacity } from 'react-native';
import { GLOBAL_STYLES } from '../style/AppStyles';
import { Product } from '../types/types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <TouchableOpacity style={GLOBAL_STYLES.productCard}>
      <Image source={{ uri: product.image }} style={GLOBAL_STYLES.productImage} />
      <Text style={GLOBAL_STYLES.productName}>{product.name}</Text>
      <Text style={GLOBAL_STYLES.productPrice}>${product.price}</Text>
      <TouchableOpacity style={GLOBAL_STYLES.addToCartButton}>
        <Text style={GLOBAL_STYLES.addToCartButtonText}>Agregar al Carrito</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default ProductCard;
