import React, {useState} from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import {Chip} from 'react-native-paper';
import styles from '../../styles/TagFormStyle';
import Icon from 'react-native-vector-icons/FontAwesome';

const TagForm = ({addTag, tags, removeTag}) => {
  const [tag, setTag] = useState('');
  return (
    <View>
      <View style={styles.contenedor}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter a tag"
          value={tag}
          onChangeText={setTag}
        />

        <View style={styles.PlusContainer}>
          <TouchableOpacity style={styles.button} onPress={addTag}>
            <Icon name="plus" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 10}}>
        {tags.map((tag, index) => (
          <Chip
            key={index}
            style={styles.Chip}
            onClose={() => removeTag(index)}>
            {tag}
          </Chip>
        ))}
      </View>
    </View>
  );
};

export default TagForm;
