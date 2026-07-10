import {
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";

import {
  Silkscreen_400Regular,
  Silkscreen_700Bold,
} from "@expo-google-fonts/silkscreen";
import { useFonts } from "expo-font";
import { useState } from "react";

export default function HomeScreen() {
   // ON PRESS 
  const [showLetter, setShowLetter] = useState(false);
  const [selectedPaper, setSelectedPaper] = useState(null);
  const [sidebar, setSidebar] = useState("");
  
  // FONT
  const [fontsLoaded] = useFonts({
    Silkscreen_400Regular,
    Silkscreen_700Bold,
  });
  if (!fontsLoaded) {
    return null;
  }

  

  // STRUCTURE
  return (
    <>
      <View style={styles.container}>


        {/* NAVBAR */}
        <View style={styles.navbar}>
          <Text style={styles.logoText}> LetterBox </Text>


          {/*  NAVBAR ICONS  */}
          <View style={styles.navbarRight}>
            <Pressable onPress={() =>
              setSidebar(sidebar === "paper" ? "" : "paper")
            }>
              {({ pressed }) => (
                <Image
                  source={
                    pressed
                      ? require("../../assets/myAPP1-assets/icons/paper-down.png")
                      : require("../../assets/myAPP1-assets/icons/paper-up.png")
                  }
                  style={styles.navbarIcon}
                />
              )}
            </Pressable>
            <Pressable onPress={() =>
              setSidebar(sidebar === "envelope" ? "" : "envelope")
            }>
              {({ pressed }) => (
                <Image
                  source={
                    pressed
                      ? require("../../assets/myAPP1-assets/icons/envelope-down.png")
                      : require("../../assets/myAPP1-assets/icons/envelope-up.png")
                  }
                  style={styles.navbarIcon}
                />
              )}
            </Pressable>
          </View>

        </View>


        {/* SIDEBAR  */}
        {sidebar !== "" && (
          <View style={styles.sidebar}>
            <Text style={styles.sidebarTitle}>
              {sidebar === "paper" ? "PAPERS" : "ENVELOPES"}
            </Text>

            <View style={styles.sidebarLine} />

            {/* SIDEBAR CONTENT  */}
            {sidebar === "paper" && (
              <>
                <Pressable
                  onPress={() =>
                    setSelectedPaper(require("../../assets/myAPP1-assets/pages/paper-1.png"))
                  }>
                  <Image
                    source={require("../../assets/myAPP1-assets/pages/paper-1.png")}
                    style={styles.sidebarItem}
                  />
                </Pressable>
                <Pressable
                  onPress={() =>
                    setSelectedPaper(require("../../assets/myAPP1-assets/pages/paper-2.png"))
                  }>
                  <Image
                    source={require("../../assets/myAPP1-assets/pages/paper-2.png")}
                    style={styles.sidebarItem}
                  />
                </Pressable>
                <Pressable
                  onPress={() =>
                    setSelectedPaper(require("../../assets/myAPP1-assets/pages/paper-3.png"))
                  }>
                  <Image
                    source={require("../../assets/myAPP1-assets/pages/paper-3.png")}
                    style={styles.sidebarItem}
                  />
                </Pressable>
                <Pressable
                  onPress={() =>
                    setSelectedPaper(require("../../assets/myAPP1-assets/pages/paper-4.png"))
                  }>
                  <Image
                    source={require("../../assets/myAPP1-assets/pages/paper-4.png")}
                    style={styles.sidebarItem}
                  />
                </Pressable>
                <Pressable
                  onPress={() =>
                    setSelectedPaper(require("../../assets/myAPP1-assets/pages/paper-5.png"))
                  }>
                  <Image
                    source={require("../../assets/myAPP1-assets/pages/paper-5.png")}
                    style={styles.sidebarItem}
                  />
                </Pressable>
              </>
            )}

            {sidebar === "envelope" && (
              <>
                <Pressable
                  onPress={() =>
                    setSelectedPaper(require("../../assets/myAPP1-assets/envelopes/envelope-1.png"))
                  }>
                  <Image
                    source={require("../../assets/myAPP1-assets/envelopes/envelope-1.png")}
                    style={styles.sidebarItem}
                  />
                </Pressable>
                <Pressable
                  onPress={() =>
                    setSelectedPaper(require("../../assets/myAPP1-assets/envelopes/envelope-2.png"))
                  }>
                  <Image
                    source={require("../../assets/myAPP1-assets/envelopes/envelope-2.png")}
                    style={styles.sidebarItem}
                  />
                </Pressable>
                <Pressable
                  onPress={() =>
                    setSelectedPaper(require("../../assets/myAPP1-assets/envelopes/envelope-3.png"))
                  }>
                  <Image
                    source={require("../../assets/myAPP1-assets/envelopes/envelope-3.png")}
                    style={styles.sidebarItem}
                  />
                </Pressable>
                <Pressable
                  onPress={() =>
                    setSelectedPaper(require("../../assets/myAPP1-assets/envelopes/envelope-4.png"))
                  }>
                  <Image
                    source={require("../../assets/myAPP1-assets/envelopes/envelope-4.png")}
                    style={styles.sidebarItem}
                  />
                </Pressable>
                <Pressable
                  onPress={() =>
                    setSelectedPaper(require("../../assets/myAPP1-assets/envelopes/envelope-5.png"))
                  }>
                  <Image
                    source={require("../../assets/myAPP1-assets/envelopes/envelope-5.png")}
                    style={styles.sidebarItem}
                  />
                </Pressable>
              </>
            )}

          </View>
        )}


        {/* paper */}
        <View
          style={[
            styles.center, { marginLeft: sidebar ? 120 : 0, },
          ]}>

          <Pressable>
            <Image
              source={
                selectedPaper
                  ? selectedPaper
                  : require("../../assets/myAPP1-assets/pages/vintage-paper.png")
              }
              style={styles.paper}
              resizeMode="contain"/>

            <Text style={styles.paperText}>
              Write a Letter
            </Text>
          </Pressable>
        </View>

      </View>


      {/* POPUP */}
      <Modal
        visible={showLetter}
        animationType="slide"
        transparent={true}>

        <View style={styles.overlay}>
          <View style={styles.letterPaper}>
            <TextInput
              placeholder="Title"
              style={styles.titleInput} />
            <TextInput
              placeholder="Start writing..."
              multiline
              style={styles.input} />
            <Pressable
              style={styles.plusButton}
              onPress={() => setShowLetter(false)}>
              <Text style={styles.plus}> × </Text>
            </Pressable>
          </View>
        </View>

      </Modal>

    </>
  );
}

// STYLES
const COLORS = {
  background: "#4A382D",
  bottomColor: "#2A1F19",
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
    borderBottomColor: COLORS.bottomColor,
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
    borderRightColor: COLORS.bottomColor,
    borderBottomColor: COLORS.bottomColor,
    padding: 10,
  },
  sidebarTitle: {
    fontFamily: "Silkscreen_700Bold",
    fontSize: 12,
    color: COLORS.mainFont,
  },
  sidebarLine: {
    height: 2,
    backgroundColor: COLORS.bottomColor,
    marginVertical: 20,
  },
  sidebarItem: {
    width: 70,
    height: 70,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 10,
  },


  // MAIN 
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
  plusButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#9d8077",
    justifyContent: "center",
    alignItems: "center",
  },
  plus: {
    fontSize: 34,
    color: COLORS.mainFont,
    fontWeight: "bold",
  },
  paperText: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "Silkscreen_700Bold",
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
  },

  letterPaper: {
    width: 300,
    height: 500,
    backgroundColor: COLORS.mainFont,
    borderRadius: 8,
    padding: 20,
  },
  titleInput: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  input: {
    flex: 1,
    textAlignVertical: "top",
    fontSize: 18,
  },
});
// shreya