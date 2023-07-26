import { StyleSheet } from 'react-native';

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
  },

  responsiveImage: {
    width: '80%',
    // Without height undefined it won't work
    height: undefined,
    // figure out your image aspect ratio
    aspectRatio: 135 / 76,
  },

  welcomeText: {
    color: "#202041",
    fontWeight: "bold",
    fontSize: "45",
    marginTop: 70,
    textAlign: "center",
  },
  secondaryWelcomeText: {
    color: "#615F79",
    fontWeight: "700",
    fontSize: "15",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#2D2B4D",
    marginTop: 30,
    // width: "fit-content",
    paddingVertical: 15,
    paddingHorizontal: 60,
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 100,
  },
  buttonLabel: {
    fontWeight: "700",
    fontSize: 20,
    color: "#F1CD72"
  }
});