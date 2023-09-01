import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import {Chip} from 'react-native-paper';
import styles from '../../styles/TagForm';
import Icon from 'react-native-vector-icons/FontAwesome';

const TagForm = () => {
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState('');

  const handleTagInput = text => {
    setTagInput(text);
  };

  const addTag = () => {
    if (tagInput.trim() !== '') {
      setTags([...tags, tagInput.trim()]);
      setTagInput('');
    }
  };

  const removeTag = index => {
    const updatedTags = tags.filter((_, i) => i !== index);
    setTags(updatedTags);
  };

  return (
    <View>
      <View style={styles.contenedor}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter a tag"
          value={tagInput}
          onChangeText={handleTagInput}
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
