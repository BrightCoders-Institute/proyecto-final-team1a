import React, {useState} from 'react';
import {View, Modal} from 'react-native';
import {Card, FAB, Button, TextInput} from 'react-native-paper';
import CommentsFormListStyle from '../../styles/CommentsFormListStyle';
import Colors from '../../styles/Colors';
import {Formik} from 'formik';

const CommentModalForm = ({addComment}) => {
  const [visible, setVisible] = useState(false);
  return (
    <View>
      <FAB small icon="plus" onPress={() => setVisible(true)} />
      <Modal transparent={true} visible={visible} animationType="slide">
        <View style={CommentsFormListStyle.modal}>
          <Formik
            initialValues={{comment: ''}}
            onSubmit={(values, actions) => {
              addComment(values.comment);
              actions.resetForm();
            }}
            onReset={() => setVisible(false)}>
            {({handleChange, handleSubmit, handleReset, values, errors}) => (
              <Card>
                <Card.Title title="Add comment" />
                <Card.Content>
                  <TextInput
                    style={CommentsFormListStyle.input}
                    multiline
                    value={values.comment}
                    onChangeText={handleChange('comment')}
                    mode="outlined"
                    outlineColor={Colors.Malachite}
                    activeOutlineColor={Colors.Malachite}
                  />
                </Card.Content>
                <Card.Actions style={CommentsFormListStyle.cardActions}>
                  <Button
                    style={CommentsFormListStyle.cardButtons}
                    color={Colors.Red}
                    onPress={handleReset}
                    mode="contained">
                    Cancel
                  </Button>
                  <Button
                    style={CommentsFormListStyle.cardButtons}
                    color={Colors.Malachite}
                    mode="contained"
                    onPress={handleSubmit}>
                    Add
                  </Button>
                </Card.Actions>
              </Card>
            )}
          </Formik>
        </View>
      </Modal>
    </View>
  );
};

export default CommentModalForm;
