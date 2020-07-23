import React ,{FC,useState,useEffect} from 'react'
import { SafeAreaView, Text,Button ,View,Image,TextInput,StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

import {historySelectors,historyAction} from '../../core/index'
interface SearchScreen {
  
}

const SearchScreen:FC<SearchScreen>=(props)=>{
    const navigation = useNavigation();
    const [Textsearch, setTextsearch] = useState<string>('')
    const dispatch =useDispatch()
    const data = useSelector(historySelectors.getHistory)
 
    useEffect(() => {
      navigation.setOptions({
        title: '',
        headerRight: () => {
          return (
            <View>
              <Button
                title="Favourite"
                onPress={() => navigation.navigate('FavouriteScreen')}
              />
            </View>
          );
        },
      });
    }, []);
    
    return(
        <SafeAreaView>
              <View style={styles.search}>
        <Image
          style={styles.icon}
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Vector_search_icon.svg/1200px-Vector_search_icon.svg.png',
          }}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Search"
          onChangeText={(text:string) => setTextsearch(text)}
          value={Textsearch}
          autoCapitalize="none"
          autoCorrect={false}
          onEndEditing={() => {
            
            navigation.navigate('MovieListScreen',{textSearch:Textsearch})
              dispatch(historyAction.Addhistory(Textsearch)),
              setTextsearch('');
          }}
        />
      </View>
     
      <FlatList
        data={data}
        keyExtractor={(item) => item.search}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.Boxhistory}
            onPress={() =>
              navigation.navigate('MovieListScreen', {textSearch: item.search})
            }>
            <Text style={styles.fontHistory}>{item.search}</Text>
          </TouchableOpacity>
        )}
      />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {flex: 1},
    search: {
      flexDirection: 'row',
      height: 65,
      padding: '2%',
      backgroundColor: '#c9c9ce',
    },
    icon: {
      flex: 1,
      backgroundColor: 'white',
      borderBottomLeftRadius: 5,
      borderTopLeftRadius: 5,
    },
    textInput: {
      flex: 8,
      backgroundColor: 'white',
      fontSize: 18,
      paddingLeft: '3%',
    },
    Boxhistory: {
      width: '100%',
      marginLeft: '2%',
      height: 40,
      justifyContent: 'center',
      borderBottomWidth: 1,
      borderColor: '#c9c9ce',
    },
    fontHistory: {fontSize: 18},
  });
export default SearchScreen