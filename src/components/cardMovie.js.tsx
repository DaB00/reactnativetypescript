import React,{FC} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface Cardmovie{
  ImageUrl:string
  title:string
  release_date:string
  overview:string
  navigation:()=>void
}


const  CardMovie:FC<Cardmovie>=({ImageUrl, title, release_date, overview,navigation}) =>{
  return (
    <TouchableOpacity style={styles.Boxmoviecard} onPress={navigation}>
      <View style={styles.Boxmovie}>
        <Image style={styles.styleImage} source={{uri: `${ImageUrl}`}} />
      </View>

      <View style={styles.styleTextBox}>
        <Text style={styles.styleFonttitle}>{title}</Text>
        <Text style={styles.styleFontDate}>{release_date}</Text>
        <Text
          style={styles.styleFontOverView}
          ellipsizeMode="tail"
          numberOfLines={4}>
          {overview}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default CardMovie
const styles = StyleSheet.create({
  Boxmoviecard: {
    flexDirection: 'row',
    height: 125,
    margin: '1%',
    backgroundColor: 'white',
  },
  styleImage: {
    width: 80,
    alignItems: 'center',
    height: '100%',
    backgroundColor:'gray'
  },
  styleTextBox: {
    flex: 7,
    paddingLeft: '2%',
  },
  styleFonttitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  styleFontDate: {
    fontSize: 18,
    color: '#9c9b9bfa',
  },
  styleFontOverView: {
    fontSize: 17,
  },
  Boxmovie: {
    alignItems: 'center',
    flex: 3.5,
    backgroundColor: 'white',
  },
});
