import React, {useState, useEffect} from 'react'
import GetImages from '../../hooks/GetImages'
import { FlatList, Image } from 'react-native'

export const Carrucel = () => {
    const [imageUrls, setImageUrls] = useState([]);
    
    useEffect (() => {
        const fetchData = async () => {
            //En un futuro se cambiara el casa1 por el id de la propiedad  actual 
            const urls = await GetImages('casa1');
            setImageUrls(urls);
        };  

       fetchData();
    }, []);
  return (
    <FlatList
        data={imageUrls}
        pagingEnabled={true}
        horizontal={true}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item})=> (
        <Image source ={{uri: item}} style={{width:350,height:200,padding:5,margin:15,borderRadius:15}}/> 
        )}
    />
  )
}
