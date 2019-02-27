
import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Tts from 'react-native-tts';
import Parser from '../classes/Parser';


export default class Main extends Component {


  constructor(props){

    super(props);
    this.state ={ 
      page:[]
    }
  }
   
  componentDidMount(){
    //https://www.npmjs.com/package/react-native-tts
    // Tts.getInitStatus().then(() => {
    //   Tts.setDucking(true);
    //   Tts.setDefaultLanguage('nb-NO');
    //   Tts.speak('god morgen!');
    // });
    return fetch('http://lexin.udir.no/?search=bes%C3%B8k&dict=nbo-ara-maxi&ui-lang=NBO&startingfrom=&count=10&search-type=search-both&checked-languages=E&checked-languages=N&checked-languages=ARA&checked-languages=B.github.io/react-native/movies.json')
      .then (  
              (resp) => {  return resp.text() }   
            )
      .then (
              (text)=>{
                        var root = Parser.parse(text)
                        this.setState({page: root  }) 
                      }
            )
      
      .catch((error) =>{
        console.error(error);
      });
      
  }

  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.welcome}>{this.state.page}</Text> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
