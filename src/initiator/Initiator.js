import React, { Component } from "react";
import {
    View,
    StatusBar,
    StyleSheet,
    AsyncStorage,
    ActivityIndicator,
} from "react-native";
import { NavigationActions, StackActions } from "react-navigation";

export default class Initiator extends Component {
    constructor(props) {
        super(props);
        this._bootstrap();
    }

    _bootstrap = async () => {
        const user = await AsyncStorage.getItem("CURRENT_USER");
        this.props.navigation.navigate(user ? "Home" : "SignIn");
    };

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" />
                <StatusBar />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
