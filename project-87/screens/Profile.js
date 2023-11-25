import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Profile extends Component {
    render() {
        return (
          <View style={this.state.light_theme ? styles.containerLight : styles.container}>
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Profile</Text>
            </View>
              <View style={styles.appTitleTextContainer}>
              <Text style={this.state.light_theme ? styles.appTitleTextLight : styles.ppTitleText}>Spectagram appspot
              </Text>
            </View>
            </View>
        )
    }
}