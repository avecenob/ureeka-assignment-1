import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native'
import React, { Component } from 'react'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataPlaces: [],
      isLoading: true
    };
  }

  async getPlaces() {
    try {
      const response = await fetch('https://mustseeum.com/api/places/places_list');
      const jsonPlaces = await response.json();
      const placesList = jsonPlaces.data;
      this.setState({ dataPlaces: placesList });
      console.log(placesList);
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  componentDidMount() {
    this.getPlaces();
  }

  render() {
    const { dataPlaces, isLoading } = this.state;
    return (
      <View style={{ flex: 1, padding: 24 }}>
        {isLoading ? <ActivityIndicator /> : (
          <FlatList
            data={dataPlaces}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <><Text>{item['place-id']}.{item['place-name']}</Text>
                <Image
                  style={{ height: 300 }}
                  source={{ uri: item['place-thumb-image'] }}
                />
                <Text>Open time{'\n'}{item['open-time']}</Text>
                <Text>Close time{'\n'}{item['close-time']}</Text>
                <Text>Location{'\n'}{item['place-address']}</Text>
                <Text>Min. budget{'\n'}Rp{item['place-budget-min']}</Text>
                <Text>Max. budget{'\n'}Rp{item['place-budget-max']}</Text>
                <Text>Rating{'\n'}{item['place-rating']}</Text>
              </>
            )}
          />
        )}
      </View>
    );
  }
}

export default Home;