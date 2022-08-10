import { ActivityIndicator, FlatList, Text, View } from 'react-native'
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
      <View style={{flex: 1, padding: 24}}>
      <Text>Hello</Text>
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
            data={dataPlaces}
            keyExtractor={({id}, index) => id}
            renderItem={({item}) => (
              <Text>{item['place-id']}. {item['place-name']}, {item['place-address']}</Text>
            )}
          />
        )}
      </View>
    );
  }
}

export default Home;