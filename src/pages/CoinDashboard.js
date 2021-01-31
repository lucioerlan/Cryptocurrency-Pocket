import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginBottom: 20,
    borderBottomColor: '#e5e5e5',
    borderBottomWidth: 3,
    padding: 20,
    fontSize: 20,
  },
  upperRow: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 15,
    fontSize: 20,
  },
  coinSymbol: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 5,
    fontWeight: 'bold',
    fontSize: 20,
  },
  coinName: {
    marginTop: 10,
    marginLeft: 5,
    marginRight: 20,
    fontSize: 20,
  },
  seperator: {
    marginTop: 10,
    fontSize: 20,
  },
  coinPrice: {
    marginTop: 10,
    marginLeft: 'auto',
    marginRight: 10,
    fontWeight: 'bold',
    fontSize: 20,
  },
  image: {
    width: 50,
    height: 50,
  },
  moneySymbol: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  statisticsContainer: {
    display: 'flex',
    borderTopColor: '#FAFAFA',
    borderTopWidth: 2,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  percentChangePlus: {
    color: '#00BFA5',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  percentChangeMinus: {
    color: '#DD2C00',
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

const {
  container,
  moneySymbol,
  upperRow,
  coinSymbol,
  coinName,
  coinPrice,
  statisticsContainer,
  seperator,
  percentChangePlus,
  percentChangeMinus,
} = styles;

const CoinDashboard = ({
  symbol,
  coin_image,
  coin_name,
  current_price,
  high_24h,
  low_24h,
}) => {
  return (
    <View style={container}>
      <View style={upperRow}>
        <Image style={styles.image} source={{ uri: coin_image }} />
        <Text style={coinSymbol}>{symbol}</Text>
        <Text style={seperator}>|</Text>
        <Text style={coinName}>{coin_name}</Text>
        <Text style={coinPrice}>
          {current_price}
          <Text style={moneySymbol}> $ </Text>
        </Text>
      </View>

      <View style={statisticsContainer}>
        <Text style={{ marginLeft: 0, fontSize: 14 }}>
          Low 24h:
          <Text style={percentChangeMinus}> {low_24h} % </Text>
        </Text>
        <Text style={{ marginLeft: 75, fontSize: 14 }}>
          High 24h:
          <Text style={percentChangePlus}> {high_24h} % </Text>
        </Text>
      </View>
    </View>
  );
};

export default CoinDashboard;
