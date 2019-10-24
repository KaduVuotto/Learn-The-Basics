/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Text, View, Image, ScrollView, SafeAreaView, StyleSheet, KeyboardAvoidingView, TouchableOpacity, TextInput, Button, Alert } from 'react-native';
import { Title } from "native-base";



class Gretting extends Component {
  render() {
    return (
      <View style={{ alignItems: 'center' }}>
        <Text>Hello {this.props.name}!</Text>
      </View>
    )
  }
}


class Blink extends Component {
  componentDidMount() {
    //Alterna o estado a cada segundo
    setInterval(() => (
      this.setState(previousState => ({ isShowingText: !previousState.isShowingText }
      ))
    ), 1000);
  }


  //Estado do objeto
  state = { isShowingText: true };

  render() {
    if (!this.state.isShowingText) {
      return null;
    }

    return (
      <Text>{this.props.text}</Text>
    );
  }
}

const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  painel: {
    flex: 1,
    //alignItems:'stretch',
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: '#A6ABAB',
    borderBottomWidth: 1,
    shadowColor: '#A6ABAB',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 25,
    shadowRadius: 2,
    padding: 50,
    paddingTop: 10,
    backgroundColor: 'white',
    elevation: 5,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    marginBottom: 5,
  },
  painelFlex: {
    flex: 1,
    alignItems: 'stretch',
    paddingTop: 5,
    padding: 50,
    backgroundColor: 'white',
    elevation: 5,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
    height: 400,
  },
  onPainel: {
    flex: 1,
    padding: 50,
    paddingTop: 10,
    backgroundColor: 'white',
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    justifyContent: 'center',
    marginBottom: 10,
  },
  subTilte: {
    fontSize: 16,
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonContainer: {
    margin: 20,
  },
  alternativeLayoutButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

export default class Basico extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  _onPressButton() {
    alert('Você pressionou o botão!')
  }


  render() {
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 0 : -370;

    let pic = {
      uri: 'https://res.cloudinary.com/practicaldev/image/fetch/s--DsRi1C7P--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/8m2htjjpp31idwz8wnrz.jpg'
    };
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView style={styles.container} keyboardVerticalOffset={keyboardVerticalOffset} behavior="padding" enabled>
          <ScrollView keyboardShouldPersistTaps="always" contentContainerStyle={{ flexGrow: 1 }}>

            <View>
              {/*Aprendendo o Básico*/}
              <View style={styles.painel}>
                <Title style={styles.title} >Aprendendo o Básico</Title>
                <TouchableOpacity>
                  <View style={styles.OnPainel}>
                    <Text style={{ marginTop: 20, alignSelf: 'center' }}>Hello, World!</Text>
                  </View>
                </TouchableOpacity>
              </View>

              {/*Props*/}
              <View style={styles.painel}>
                <Title style={styles.title} >Props</Title>
                <TouchableOpacity>
                  <View style={styles.onPainel}>
                    <Title style={styles.subTilte}>Imagem</Title>
                    <Image source={pic} style={{ width: 193, height: 110 }} />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity>
                  <View style={styles.onPainel}>
                    <Title style={styles.subTilte}>Texto</Title>
                    <Gretting name='Walter' />
                    <Gretting name='Carlos' />
                    <Gretting name='Felipe' />
                  </View>
                </TouchableOpacity>
              </View>

              {/*State*/}
              <View style={styles.painel}>
                <View style={{ height: 90 }}>
                  <Title style={styles.title}>State</Title>
                  <TouchableOpacity>
                    <Blink text='I love to blink' />
                    <Blink text='Yes blink is so great' />
                    <Blink text='Why did they ever take this out of HTML' />
                    <Blink text='Look at me, look at me, look at me!' />
                  </TouchableOpacity>
                </View>
              </View>

              {/*Style*/}
              <View style={styles.painel}>
                <Title style={styles.title}>Style</Title>
                <TouchableOpacity>
                  <View style={styles.onPainel}>
                    <Text style={styles.red}>just red</Text>
                    <Text style={styles.bigBlue}>just bigBlue</Text>
                    <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
                    <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
                  </View>
                </TouchableOpacity>
              </View>

              {/*Height and Width*/}
              <View style={styles.painel}>
                <Title style={styles.title}>Height and Width</Title>
                <View style={styles.onPainel}>
                  <TouchableOpacity>
                    <Title style={styles.subTilte}>Fixed Dimensions</Title>
                    <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
                    <View style={{ width: 100, height: 100, backgroundColor: 'skyblue' }} />
                    <View style={{ width: 150, height: 150, backgroundColor: 'steelblue' }} />
                  </TouchableOpacity>
                </View>

                <TouchableOpacity>
                  <View style={styles.painelFlex}>
                    <Title style={styles.subTilte}>Flex Dimensions</Title>
                    <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
                    <View style={{ flex: 2, backgroundColor: 'skyblue' }} />
                    <View style={{ flex: 3, backgroundColor: 'steelblue' }} />
                  </View>
                </TouchableOpacity>
              </View>

              {/*Layout with Flexbox*/}
              <View style={styles.painel}>
                <Title style={styles.title}>Layout with Flexbox</Title>

                <TouchableOpacity>
                  <View style={styles.onPainel}>
                    <Title style={styles.subTilte}>Flex Dimensions</Title>
                    <View style={{ flex: 1, flexDirection: 'row', width: 200, }}>
                      <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
                      <View style={{ width: 50, height: 50, backgroundColor: 'skyblue', }} />
                      <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
                    </View>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity>
                  <View style={styles.onPainel}>
                    <Title style={styles.subTilte}>Layout Direction</Title>
                    <View style={{ fex: 1, flexDirection: 'column', justifyContent: 'space-between', }} />
                    <View style={{ width: 50, height: 50, backgroundColor: 'powderblue', }} />
                    <View style={{ width: 50, height: 50, backgroundColor: 'skyblue', }} />
                    <View style={{ width: 50, height: 50, backgroundColor: 'steelblue', }} />
                  </View>
                </TouchableOpacity>
              </View>

              {/*Handling Text Input*/}
              <View style={styles.painel}>
                <Title style={styles.title}>Handling Text Input</Title>

                <View style={{ padding: 10, }}>
                  <Text style={styles.subTilte}>Digite: Hello there Bob</Text>
                  <TextInput style={{ height: 40, }} placeholder='Clique aqui e digite para tradução' onChangeText={(text) => this.setState({ text })} value={this.state.text} />
                  <Text style={{ padding: 10, fontSize: 42 }}>{this.state.text.split(' ').map((word) => word && '🍕').join(' ')}</Text>
                </View>
                <Button title='Clique aqui para saber mais' />
              </View>

              {/*Handling Touches*/}
              <View style={styles.painel}>
                <Title style={styles.title}>Handling Touches</Title>


                <View style={styles.onPainel}>
                  <Title style={styles.subTilte}>Displaying a basic button</Title>

                  <View style={styles.buttonContainer}>
                    <Button onPress={this._onPressButton} title='Me Aperte' />
                  </View>
                  <View style={styles.buttonContainer}>
                    <Button onPress={this._onPressButton} title='Me Aperte' color='#841584' />
                  </View>
                  <View style={styles.alternativeLayoutButtonContainer}>
                    <Button onPress={this._onPressButton} title='Isso parece ótimo!' />
                    <Button onPress={this._onPressButton} title='OK!' color='#841584' />
                  </View>

                </View>

              </View>

            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    )
  }
}
