import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SafeAreaView, View, ScrollView } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import FetchCoinData from '../actions/FetchCoinData';
import CoinDashboard from '../pages/CoinDashboard';

class CryptoContainer extends Component {
  componentDidMount() {
    this.props.FetchCoinData();
  }

  renderCoinDashboards() {
    const { crypto } = this.props;
    return crypto.data.map((coin) => (
      <CoinDashboard
        key={coin.id}
        coin_image={coin.image}
        coin_name={coin.name}
        symbol={coin.symbol}
        current_price={coin.current_price}
        high_24h={coin.high_24h}
        low_24h={coin.low_24h}
      />
    ));
  }

  render() {
    const { crypto } = this.props;
    const { contentContainer } = styles;

    if (crypto.isFetching) {
      return (
        <SafeAreaView>
          {Array.from({ length: 20 }).map((_, index) => (
            <View
              key={index}
              style={{ marginTop: 75, marginLeft: 25, marginBottom: -9 }}
            >
              <SkeletonPlaceholder highlightColor="#e8f7ff">
                <View style={{ flexDirection: 'row' }}>
                  <View style={{ width: 45, height: 45, borderRadius: 50 }} />
                  <View
                    style={{
                      justifyContent: 'space-between',
                      marginLeft: 5,
                      flex: 1,
                    }}
                  >
                    <View
                      style={{
                        marginTop: 18,
                        marginLeft: 30,
                        width: '30%',
                        height: 13,
                      }}
                    />
                    <View
                      style={{
                        marginTop: -15,
                        marginLeft: 200,
                        width: '30%',
                        height: 15,
                      }}
                    />
                    <View
                      style={{
                        marginTop: 40,
                        marginLeft: -30,
                        width: '100%',
                        height: 10,
                      }}
                    />
                    <View
                      style={{
                        marginTop: 20,
                        marginLeft: -100,
                        width: '250%',
                        height: 4,
                      }}
                    />
                  </View>
                </View>
              </SkeletonPlaceholder>
            </View>
          ))}
        </SafeAreaView>
      );
    }

    return (
      <ScrollView contentContainerStyle={contentContainer}>
        {this.renderCoinDashboards()}
      </ScrollView>
    );
  }
}

const styles = {
  contentContainer: {
    paddingBottom: 100,
    paddingTop: 55,
  },
};

function mapStateToProps(state) {
  return {
    crypto: state.crypto,
  };
}

export default connect(mapStateToProps, { FetchCoinData })(CryptoContainer);
