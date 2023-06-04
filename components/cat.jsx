import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

export default function Cat(props) {
  const { catName } = props;

  const [isHungry, setIsHungry] = useState(true)

  const handlePress = () => {
    setIsHungry(false)
  }

  return (
    <>
      <Text>Hello, I am {catName}, and I'm feeling {isHungry ? 'hungry' : 'full'}</Text>
      <Button
        onPress={handlePress}
        disabled={!isHungry}
        title={isHungry ? 'Feed me please' : 'Thanks!'}
      />
    </>
  )

}
