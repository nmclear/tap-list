import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

class AccountBar extends Component {
    constructor(props){
        super(props)
        // update active code once redux added.
        this.state = {active: 'swipe'}
    }

    viewSwipe = () => {
        const { active } = this.state;
        if(active !== 'swipe'){
            this.setState({active: 'swipe'})
            // Actions.reset('swipe')
            Actions.swipe();
        }
    }

    viewTapList = taplist => {
        const { active } = this.state;
        if(active !== 'taplist'){
            this.setState({active: 'taplist'})
            Actions.taplist({taplist});
        }
    }

    render(){
        const { container, tabStyle, activeStyle, tabContainerStyle } = styles;
        let { active } = this.state;

        return (
            <View style={container}>
                <View style={tabContainerStyle}>
                    <TouchableOpacity style={tabStyle} onPress={() => this.viewSwipe()}>
                        <View style={active === 'swipe' ? activeStyle: ''}>
                            <Icon
                                name='home'
                            />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={tabContainerStyle}>
                    <TouchableOpacity style={tabStyle} onPress={() => this.viewTapList()}>
                        <View style={active === 'taplist' ? activeStyle : ''}>
                            <Icon
                                name='beer'
                                type='material-community'
                            />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={tabContainerStyle}>
                    <TouchableOpacity style={tabStyle}>
                        <View style={active === 'account' ? activeStyle : ''}>
                            <Icon
                                name='account-circle'
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 40,
        backgroundColor: 'white',
    },
    tabStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    tabContainerStyle: {
        flex: 1,
        flexDirection: 'row',
        borderRightColor: '#C8C8C8',
        borderStyle: 'solid',
        borderRightWidth: 1
    },
    activeStyle: {
        borderBottomColor: 'black',
        borderStyle: 'solid',
        borderBottomWidth: 2,
    }
});

export default AccountBar;