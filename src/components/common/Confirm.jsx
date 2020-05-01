import React from 'react';
import { View, Text, StyleSheet, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

function Confirm({ children, visible, onAccept, onDecline }) {
  return (
    <View>
      <Modal
        animationType="fade"
        onRequestClose={() => {}}
        visible={visible}
        transparent
      >
        <View style={styles.container}>
          <CardSection>
            <Text style={styles.text}>{children}</Text>
          </CardSection>
          <CardSection>
            <Button onPress={onAccept} newStyles={{ width: '50%' }}>
              You're fired!
            </Button>
            <Button
              onPress={onDecline}
              newStyles={{
                width: '50%',
                backgroundColor: 'transparent',
              }}
            >
              Cancel
            </Button>
          </CardSection>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40,
    color: '#fff',
  },
  container: {
    backgroundColor: 'rgba(0,0,0,.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
  },
});

export { Confirm };
