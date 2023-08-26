import firestore from '@react-native-firebase/firestore'; 

const GetImages = async (idValue)=>{
    const documentSnapshot = await firestore()
    .collection('images')
    .where('id', '==', idValue)
    .limit(1)
    .get();
    if(!documentSnapshot.empty){
        const documentData = documentSnapshot.docs[0].data();
        return documentData.url;
    }
    return [];
}
export default GetImages