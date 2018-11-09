import React from 'react';
import {StyleSheet, Text, View, Animated} from 'react-native';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fetOpacity: new Animated.Value(0)
        };
    }

    componentDidMount() {
        Animated.timing(this.state.fetOpacity,
            {
                toValue: 1,
                duration: 5000
            }
        ).start()
    }

    render() {

        return (
            <View style={styles.container}>
                <Animated.View style={{
                    width: 300,
                    height: 300,
                    backgroundColor: '#2132ff',
                    justifyContent: 'center',
                    alignItems: 'center',
                    opacity:this.state.fetOpacity
                }}>
                    <Text style={{color: '#fff'}}>Animation đơn giản</Text>
                </Animated.View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
