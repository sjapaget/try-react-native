import React, { useState } from 'react';
import { View } from 'react-native';

import NewCat from './components/newCat'
import Cat from './components/cat'

const App = () => {

  const [catNames, setCatNames] = useState(['Chuck'])

  const displayCats = () => catNames.map(cat => <Cat catName={cat} />)

  const addCat = e => setCatNames([e.target.value, ...catNames])

  return (
    <View style={appStyles.mainView}>
      <NewCat makeCat={addCat} />
      {displayCats()}
    </View>
  );
};

const appStyles = {
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
}

export default App;
