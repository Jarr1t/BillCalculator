import {StyleSheet} from 'react-native';

export const camStyles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonContainer: {
      backgroundColor: '#fff',
      alignSelf: 'flex-end'
    },
    preview: {
      alignSelf: 'stretch',
      flex: 1
    }
});

export const appStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
      }
});

export const homeStyles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }
});