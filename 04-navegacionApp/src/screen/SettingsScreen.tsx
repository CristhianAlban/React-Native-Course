import React, {useContext} from 'react';
import { Text, View } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { colors, styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';



export const SettingsScreen = () => {
  const { authState } = useContext(AuthContext);
  return (
    <View>
        <Text style={styles.title}>Sttings Screen</Text>
        <Text> {JSON.stringify( authState, null, 4)}</Text>
        {
          authState.favoriteIcon && (
            <Icon name={authState.favoriteIcon} size={150} color={colors.primary} />
          )
        }
    </View>
  );
};
