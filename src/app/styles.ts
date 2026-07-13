import { StyleSheet } from "react-native";

// STYLES
const COLORS = {
  background: "#4A382D",
  backgroundDarker: "#2A1F19",
  backgroundLighter: "#6C5647",
  mainFont: "#dfd2d2",
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },


  // NAVBAR 
  navbar: {
    height: 64,
    backgroundColor: COLORS.background,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 4,
    borderBottomColor: COLORS.backgroundDarker,
  },
  logoText: {
    fontFamily: "Silkscreen_700Bold",
    fontSize: 18,
    color: COLORS.mainFont,
  },
  navbarRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  navbarIcon: {
    width: 48,
    height: 48,
    resizeMode: "contain",
  },


  // SIDEBAR 
  sidebar: {
    position: "absolute",
    top: 64,
    width: 120,
    height: "100%",
    bottom: 30,
    zIndex: 100,
    elevation: 100,
    backgroundColor: COLORS.background,
    borderRightWidth: 4,
    borderBottomWidth: 4,
    borderRightColor: COLORS.backgroundDarker,
    borderBottomColor: COLORS.backgroundDarker,
    padding: 10,
  },
  sidebarTitle: {
    fontFamily: "Silkscreen_700Bold",
    fontSize: 12,
    color: COLORS.mainFont,
  },
  sidebarLine: {
    height: 2,
    backgroundColor: COLORS.backgroundDarker,
    marginVertical: 20,
  },
  sidebarItem: {
    width: 70,
    height: 70,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 10,
  },


  // MAIN PAPER
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  paper: {
    width: 220,
    height: 340,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedPaper: {
    width: 260,
    height: 340,
  },
  paperText: {
    fontSize: 15,
    color: COLORS.background,
    fontFamily: "Silkscreen_700Bold",
  },
  
  
  // POPUP 
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  // popup button
  plusButton: {
    width: 100,
    height: 35,
    backgroundColor: COLORS.background,
    justifyContent: "center",
    marginBottom: 30,
    alignItems: "center",
    borderWidth: 4,
    borderBottomColor: COLORS.backgroundDarker,
    borderRightColor: COLORS.backgroundDarker,
    borderTopColor: COLORS.backgroundLighter,
    borderLeftColor: COLORS.backgroundLighter,
  },
  plus: {
    fontSize: 34,
    color: COLORS.mainFont,
    fontWeight: "bold",
  },

  // popup paper text 
  letterPaper: {
    width: 300,
    height: 500,
    padding: 30,
  },
  titleInput: {
    fontFamily: "Silkscreen_700Bold",
    borderWidth: 0,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    paddingBlock: 15,
  },
  input: {
    flex: 1,
    textAlignVertical: "top",
    fontSize: 14,
    fontFamily: "Silkscreen_700Bold",
    borderWidth: 0,
  },


  // LETTER PREVIEW (after closing the letter) 
  paperContent: {
    position: "absolute",
    top: 70,
    left: 40,
    right: 40,
  },
  paperTitle: {
    fontSize: 20,
    fontFamily: "Silkscreen_700Bold",
  },
  paperPreview: {
    marginTop: 12,
    fontSize: 14,
    fontFamily: "Silkscreen_400Regular",
  },


  // SELECTED ENVELOPE 
  envelope: {
    position: "absolute",
    width: 250,
    height: 250,
  },



  // BOTTOM BUTTONS
  bottomButtons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
    marginTop: 25,
  },
  prepareButton: {
    marginTop: 20,
    width: 190,
    height: 30,
    backgroundColor: "transparent",
    borderWidth: 4,
    borderTopColor: COLORS.backgroundLighter,
    borderLeftColor: COLORS.backgroundLighter,
    borderRightColor: COLORS.backgroundDarker,
    borderBottomColor: COLORS.backgroundDarker,
    justifyContent: "center",
    alignItems: "center",
  },
  editButton: {
    marginTop: 20,
    width: 100,
    height: 30,
    backgroundColor: "transparent",
    borderWidth: 4,
    borderTopColor: COLORS.backgroundLighter,
    borderLeftColor: COLORS.backgroundLighter,
    borderRightColor: COLORS.backgroundDarker,
    borderBottomColor: COLORS.backgroundDarker,
    justifyContent: "center",
    alignItems: "center",
  },
  sendButton: {
    marginTop: 20,
    width: 100,
    height: 30,
    backgroundColor: "transparent",
    borderWidth: 4,
    borderTopColor: COLORS.backgroundLighter,
    borderLeftColor: COLORS.backgroundLighter,
    borderRightColor: COLORS.backgroundDarker,
    borderBottomColor: COLORS.backgroundDarker,
    justifyContent: "center",
    alignItems: "center",
  },

  prepareText: {
    fontFamily: "Silkscreen_400Regular",
    color: COLORS.mainFont,
  },
  editText: {
    fontSize: 16,
    fontFamily: "Silkscreen_400Regular",
    color: COLORS.mainFont,
  },
  sendText: {
    fontSize: 16,
    fontFamily: "Silkscreen_400Regular",
    color: COLORS.mainFont,
  },
  sentText: {
    position: "absolute",
    bottom: 90,
    alignSelf: "center",
    fontFamily: "Silkscreen_400Regular",
    fontSize: 30,
    color: COLORS.mainFont,
  },
  sentContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});




export default styles;
// shreya