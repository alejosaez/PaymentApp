import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {GLOBAL_STYLES} from '../style/AppStyles';
import {Category, Product} from '../types/types';
import ProductCard from '../components/ProductCard';

const HomeScreen = () => {
  const categories: Category[] = [
    {id: '1', name: 'Proteínas', image: 'https://via.placeholder.com/100'},
    {id: '2', name: 'Vitaminas', image: 'https://via.placeholder.com/100'},
    {id: '3', name: 'Energizantes', image: 'https://via.placeholder.com/100'},
  ];

  const products: Product[] = [
    {
      id: '1',
      name: 'Whey Protein',
      price: 1500,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: '2',
      name: 'Creatina',
      price: 1200,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: '3',
      name: 'Multivitaminas',
      price: 800,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: '4',
      name: 'Pre-Workout',
      price: 1400,
      image: 'https://via.placeholder.com/150',
    },
  ];

  const renderCategory = ({item}: {item: Category}) => (
    <TouchableOpacity style={GLOBAL_STYLES.categoryCard}>
      <Image source={{uri: item.image}} style={GLOBAL_STYLES.categoryImage} />
      <Text style={GLOBAL_STYLES.categoryText}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderProduct = ({item}: {item: Product}) => (
    <ProductCard product={item} />
  );

  return (
    <ScrollView style={GLOBAL_STYLES.container}>
      <View style={GLOBAL_STYLES.header}>
        <Text style={GLOBAL_STYLES.logo}>Suplementos</Text>
      </View>

      <View style={GLOBAL_STYLES.banner}>
        <Image
          source={{uri: 'https://via.placeholder.com/600x300'}}
          style={GLOBAL_STYLES.bannerImage}
        />
      </View>

      <Text style={GLOBAL_STYLES.sectionTitle}>Categorías</Text>
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      <Text style={GLOBAL_STYLES.sectionTitle}>Productos Destacados</Text>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </ScrollView>
  );
};

export default HomeScreen;
