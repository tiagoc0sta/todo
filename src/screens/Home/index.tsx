import { Text, TextInput, View } from 'react-native';

import { styles } from './styles';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.todo}>ToDo</Text>

      <View>
        <TextInput style={styles.input} />
      </View>
    </View>
  );
}
