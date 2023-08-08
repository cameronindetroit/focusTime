import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../utils/colors';
import { RoundedButton } from '../components/RoundedButton';
import { spacing, fontSizes } from '../utils/sizes';

export const Focus = (props) => {
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          label="What would you like to focus on?"
          value={subject}
          onChangeText={setSubject}
        />
        <View style={styles.button}>
          <RoundedButton
            style={styles.button}
            title="+"
            size={50}
            onPress={() => props.addSubject(subject)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
 
    
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  },
  button: {
    justifyContent: 'center',
  },
  inputContainer: {
    padding: spacing.lg,
    justifyContent: 'top',
    flexDirection: 'row',
  },
  text: {
    color: colors.white,
  },
});
