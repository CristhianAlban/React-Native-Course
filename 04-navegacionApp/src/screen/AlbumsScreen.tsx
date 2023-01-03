import React, { useContext } from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

export const AlbumsScreen = () => {
  const {authState, logout} = useContext(AuthContext);
  return (
    <View style={styles.globalMargin}>
    <Text style={styles.title}>Contact Screen</Text>
    { authState.isLoggedIn &&
      (<Button
        title="Logout"
        onPress={logout}
      />)
    }
</View>
  );
};
