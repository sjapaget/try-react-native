import React, { useState } from 'react';
import { Text, TextInput } from 'react-native';


export default function NewCat(props) {
  const { makeCat } = props

  const [text, setText] = useState('');

  return (
    <>
      <Text>Add a cat:</Text>
      <TextInput
        style={catStyles.textInput}
        placeHolder='Name goes here!'
        onChangeText={newText => setText(newText)}
        onSubmitEditing={nameText => makeCat(nameText)}
        defaultValue={text}
      />
    </>
  );
}

const catStyles = {
  textInput: {
    height: '2.5rem',
    borderColor: 'green',
    borderWidth: '2px',
    borderRadius: '25px',
    padding: '.5rem',
  }
};
