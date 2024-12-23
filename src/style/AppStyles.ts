import {StyleSheet} from 'react-native';
import {GlobalStyles as GlobalStylesType} from './TypesStyles';

export const COLORS = {
  primary: '#FF6F61',
  secondary: '#FFFFFF',
  background: '#F9F9F9',
  text: '#333',
  textSecondary: '#777',
  accent: '#FFD700',
};

export const GLOBAL_STYLES = StyleSheet.create<GlobalStylesType>({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: COLORS.primary,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.secondary,
  },
  banner: {
    marginVertical: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },
  bannerImage: {
    width: '100%',
    height: 150,
  },
  bannerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.secondary,
    textAlign: 'center',
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.text,
    marginVertical: 10,
  },
  categoryList: {
    marginVertical: 10,
  },
  categoryCard: {
    alignItems: 'center',
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 8,
    backgroundColor: COLORS.secondary,
    shadowColor: COLORS.text,
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  categoryText: {
    marginTop: 5,
    fontSize: 14,
    color: COLORS.text,
  },
  productCard: {
    flex: 1,
    margin: 10,
    padding: 10,
    borderRadius: 8,
    backgroundColor: COLORS.secondary,
    shadowColor: COLORS.text,
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    alignItems: 'center',
  },
  productImage: {
    width: 120,
    height: 120,
    marginBottom: 10,
    borderRadius: 8,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  productPrice: {
    fontSize: 14,
    color: COLORS.textSecondary,
  },
  addToCartButton: {
    backgroundColor: COLORS.accent,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginTop: 5,
  },
  addToCartButtonText: {
    color: COLORS.text,
    fontSize: 14,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'normal',
    color: COLORS.textSecondary,
    textAlign: 'center',
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: 12,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 14,
    color: COLORS.secondary,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonSecondary: {
    backgroundColor: COLORS.secondary,
    padding: 12,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  buttonTextSecondary: {
    fontSize: 14,
    color: COLORS.primary,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
