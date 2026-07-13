import {
  Image,
  ImageBackground,
  Modal,
  Pressable,
  Text,
  TextInput,
  View,
  Animated,
} from "react-native";


// STYLES 
import styles from "./styles";
import {
  Silkscreen_400Regular,
  Silkscreen_700Bold,
} from "@expo-google-fonts/silkscreen";
import { useFonts } from "expo-font";
import { useRef, useState } from "react";

export default function HomeScreen() {


  // USESTATES
  const [showLetter, setShowLetter] = useState(false);
  const [title, setTitle] = useState("");
  const [letter, setLetter] = useState("");

  const [selectedPaper, setSelectedPaper] = useState(null);
  const [selectedEnvelope, setSelectedEnvelope] = useState(null);
  const [isPacked, setIsPacked] = useState(false);

  const [sidebar, setSidebar] = useState("");

  // animation
  const [paperBehind, setPaperBehind] = useState(false);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  // bottom buttons 
  const [readyToSend, setReadyToSend] = useState(false);
  const [sent, setSent] = useState(false);


  // USEREF 
  const paperY = useRef(new Animated.Value(0)).current;
  const paperScale = useRef(new Animated.Value(1)).current;
  const paperHeight = useRef(new Animated.Value(1)).current;


  // LETTER PACKING ANIMATION 
  const packLetter = () => {
    paperY.setValue(0);
    paperScale.setValue(1);
    paperHeight.setValue(1);
    setIsPacked(false);

    Animated.sequence([
      Animated.parallel([
        Animated.timing(paperY, {
          toValue: -160,
          duration: 700,
          useNativeDriver: true,
        }),
        Animated.timing(paperScale, {
          toValue: 0.55,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(paperHeight, {
          toValue: 0.40,
          duration: 220,
          useNativeDriver: true,
        }),
      ]),
      Animated.timing(paperY, {
        toValue: -30,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setPaperBehind(true);
      setIsPacked(true);
    });
  };


  // LETTER UNPACKING ANIMATION 
  const unpackLetter = () => {
    setPaperBehind(false);
    Animated.sequence([
      Animated.timing(paperY, {
        toValue: -160,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.parallel([
        Animated.timing(paperHeight, {
          toValue: 1,
          duration: 250,
          useNativeDriver: true,
        }),
        Animated.timing(paperScale, {
          toValue: 1,
          duration: 250,
          useNativeDriver: true,
        }),
      ]),
      Animated.timing(paperY, {
        toValue: 0,
        duration: 350,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setSelectedEnvelope(null);
      setIsPacked(false);
    });
  };


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

            {/* opens/closes the paper sidebar, disabled once the letter is ready to send  */}
            <Pressable onPress={() => {
              if (!readyToSend) {
                setSidebar(sidebar === "paper" ? "" : "paper");
              }
            }}>
              {({ pressed }) => (
                <Image
                  source={
                    pressed
                      ? require("../../assets/myAPP1-assets/icons/paper-down.png")
                      : require("../../assets/myAPP1-assets/icons/paper-up.png")
                  }
                  style={styles.navbarIcon}/>
              )}
            </Pressable>

            {/* opens/closes the envelope sidebar, disabled once the letter is ready to send  */}
            <Pressable onPress={() => {
              if (!readyToSend) {
                setSidebar(sidebar === "envelope" ? "" : "envelope");
              }
            }}>
              {({ pressed }) => (
                <Image
                  source={
                    pressed
                      ? require("../../assets/myAPP1-assets/icons/envelope-down.png")
                      : require("../../assets/myAPP1-assets/icons/envelope-up.png")
                  }
                  style={styles.navbarIcon}/>
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
            {/* papers */}
            {sidebar === "paper" && (
              <>
                <Pressable
                  disabled={isPacked} // prevents changing the paper after it has been packed inside an envelope
                  onPress={() =>
                    setSelectedPaper(require("../../assets/myAPP1-assets/pages/paper-1.png"))
                  }>
                  <Image
                    source={require("../../assets/myAPP1-assets/pages/paper-1.png")}
                    style={styles.sidebarItem}/>
                </Pressable>

                <Pressable
                  disabled={isPacked}
                  onPress={() =>
                    setSelectedPaper(require("../../assets/myAPP1-assets/pages/paper-2.png"))
                  }>
                  <Image
                    source={require("../../assets/myAPP1-assets/pages/paper-2.png")}
                    style={styles.sidebarItem}/>
                </Pressable>

                <Pressable
                  disabled={isPacked}
                  onPress={() =>
                    setSelectedPaper(require("../../assets/myAPP1-assets/pages/paper-3.png"))
                  }>
                  <Image
                    source={require("../../assets/myAPP1-assets/pages/paper-3.png")}
                    style={styles.sidebarItem}/>
                </Pressable>

                <Pressable
                  disabled={isPacked}
                  onPress={() =>
                    setSelectedPaper(require("../../assets/myAPP1-assets/pages/paper-4.png"))
                  }>
                  <Image
                    source={require("../../assets/myAPP1-assets/pages/paper-4.png")}
                    style={styles.sidebarItem}/>
                </Pressable>
                
                <Pressable
                  disabled={isPacked}
                  onPress={() =>
                    setSelectedPaper(require("../../assets/myAPP1-assets/pages/paper-5.png"))
                  }>
                  <Image
                    source={require("../../assets/myAPP1-assets/pages/paper-5.png")}
                    style={styles.sidebarItem}/>
                </Pressable>
              </>
            )}


            {/* envelopes  */}
            {/* selecting an envelope starts the packing animation, clicking the same packed envelope again unpacks the letter */}
            {sidebar === "envelope" && (
              <>
                <Pressable
                  onPress={() => {
                    const envelope = require("../../assets/myAPP1-assets/envelopes/envelope-1.png");

                    // if this envelope is already selected and packed, clicking it again will unpack the letter
                    if (selectedEnvelope === envelope && isPacked) {
                      unpackLetter();
                    }

                    // select the new envelope and play the packing animation
                    else {
                      setSelectedEnvelope(envelope);
                      packLetter();
                    }
                  }}>
                  <Image
                    source={require("../../assets/myAPP1-assets/envelopes/envelope-1.png")}
                    style={styles.sidebarItem}
                  />
                </Pressable>

                <Pressable
                  onPress={() => {
                    const envelope = require("../../assets/myAPP1-assets/envelopes/envelope-2.png");
                    if (selectedEnvelope === envelope && isPacked) {
                      unpackLetter();
                    } 
                    else {
                      setSelectedEnvelope(envelope);
                      packLetter();
                    }
                  }}>
                  <Image
                    source={require("../../assets/myAPP1-assets/envelopes/envelope-2.png")}
                    style={styles.sidebarItem}/>
                </Pressable>

                <Pressable
                  onPress={() => {
                    const envelope = require("../../assets/myAPP1-assets/envelopes/envelope-3.png");
                    if (selectedEnvelope === envelope && isPacked) {
                      unpackLetter();
                    }
                    else {
                      setSelectedEnvelope(envelope);
                      packLetter();
                    }
                  }}>
                  <Image
                    source={require("../../assets/myAPP1-assets/envelopes/envelope-3.png")}
                    style={styles.sidebarItem}/>
                </Pressable>

                <Pressable
                  onPress={() => {
                    const envelope = require("../../assets/myAPP1-assets/envelopes/envelope-4.png");
                    if (selectedEnvelope === envelope && isPacked) {
                      unpackLetter();
                    }
                    else {
                      setSelectedEnvelope(envelope);
                      packLetter();
                    }
                  }}>
                  <Image
                    source={require("../../assets/myAPP1-assets/envelopes/envelope-4.png")}
                    style={styles.sidebarItem}/>
                </Pressable>

                <Pressable
                  onPress={() => {
                    const envelope = require("../../assets/myAPP1-assets/envelopes/envelope-5.png");
                    if (selectedEnvelope === envelope && isPacked) {
                      unpackLetter();
                    }
                    else {
                      setSelectedEnvelope(envelope);
                      packLetter();
                    }
                  }}>
                  <Image
                    source={require("../../assets/myAPP1-assets/envelopes/envelope-5.png")}
                    style={styles.sidebarItem}/>
                </Pressable>
              </>
            )}
          </View>
        )}


        {/* PAPER  */}
        <Animated.View
          style={[
            styles.center,
            {
              marginLeft: sidebar ? 120 : 0,
              opacity: fadeAnim,
            },
          ]}>

          {/* opens the writing popup. disabled once the letter is packed or ready to send */}
          <Pressable
            disabled={isPacked || readyToSend}
            onPress={() => {
              if (!readyToSend) {
                setShowLetter(true);
              }
            }}>
            {selectedEnvelope && (
              <Image
                source={selectedEnvelope}
                style={[styles.envelope, { zIndex: 1 }]}
                resizeMode="contain" />
            )}

            {/* animated paper that changes position and size during packing */}
            <Animated.View
              style={{
                zIndex: paperBehind ? 0 : 2,

                // apply all packing animations together
                transform: [
                  { translateY: paperY },
                  { scale: paperScale },
                  { scaleY: paperHeight },
                ],
              }}>
              <Image

                // use the selected paper or set it to the default paper
                source={
                  selectedPaper
                    ? selectedPaper
                    : require("../../assets/myAPP1-assets/pages/vintage-paper.png")
                }
                style={styles.paper}
                resizeMode="contain" />

              <View style={styles.paperContent}>

                {/* show the entered title and letter, otherwise display a placeholder message */}
                {title || letter ? (
                  <>
                    <Text
                      style={styles.paperTitle}
                      numberOfLines={1}
                      ellipsizeMode="tail">
                      {title}
                    </Text>
                    <Text
                      style={styles.paperPreview}
                      numberOfLines={3}
                      ellipsizeMode="tail">
                      {letter}
                    </Text>
                  </>
                ) : (
                  <Text style={styles.paperText}>
                    Type here...
                  </Text>
                )}
              </View>
            </Animated.View>
          </Pressable>


          {/* BOTTOM BUTTONS  */}
          {/* display different buttons depending on the current workflow */}
          {
            !readyToSend ? (
              <Pressable
                style={styles.prepareButton}

                // lock editing mode and hide the sidebar
                onPress={() => {
                  setReadyToSend(true);
                  setSidebar("");
                }}>
                <Text style={styles.prepareText}>
                  Prepare to Send
                </Text>
              </Pressable>
            ) : (
              <View style={styles.bottomButtons}>

                <Pressable
                  style={styles.editButton}
                  onPress={() => {

                    // return to editing mode
                    setReadyToSend(false);

                    // automatically unpack the letter so it can be edited again
                    if (isPacked) {
                      unpackLetter();
                    }
                  }}>
                  <Text style={styles.editText}>
                    Edit
                  </Text>
                </Pressable>

                <Pressable
                  style={styles.sendButton}
                  onPress={() => {

                    // fade out everything before showing the 'sent' text
                    Animated.timing(fadeAnim, {
                      toValue: 0,
                      duration: 600,
                      useNativeDriver: true,
                    }).start(() => {
                      setSent(true);

                      // reset the app display after sending the letter
                      setTimeout(() => {
                        setTitle("");
                        setLetter("");
                        setSelectedPaper(null);
                        setSelectedEnvelope(null);
                        setIsPacked(false);
                        setReadyToSend(false);
                        setPaperBehind(false);

                        paperY.setValue(0);
                        paperScale.setValue(1);
                        paperHeight.setValue(1);
                        fadeAnim.setValue(1);

                        setSent(false);
                      }, 1500);
                    });
                  }}>
                  <Text style={styles.sendText}>
                    Send
                  </Text>
                </Pressable>
              </View>
            )
          }
        </Animated.View>

        {/* display 'sent' text after the user clicks send button */}
        {sent && (
          <View style={styles.sentContainer}>
            <Text style={styles.sentText}>
              ✓ SENT
            </Text>
          </View>
        )}
      </View>


      {/* POPUP */}
      {/* full-screen letter paper popup */}
      <Modal
        visible={showLetter}
        animationType="slide"
        transparent={true} >

        <View style={styles.overlay}>

          {/* use the selected paper as the popup  */}
          <ImageBackground
            source={
              selectedPaper
                ? selectedPaper
                : require("../../assets/myAPP1-assets/pages/vintage-paper.png")
            }
            style={styles.letterPaper}
            resizeMode="contain">

              {/* letter title  */}
            <TextInput
              placeholder="Title"
              placeholderTextColor="#2A1F19"
              value={title}
              onChangeText={setTitle}
              style={styles.titleInput}/>

            {/* letter body  */}
            <TextInput
              placeholder="Type your letter here..."
              placeholderTextColor="#2A1F19"
              multiline
              value={letter}
              onChangeText={setLetter}
              style={styles.input}/>

            {/* save the letter and close the popup  */}
            <Pressable
              style={styles.plusButton}
              onPress={() => {
                setShowLetter(false);
              }}>
              <Text style={styles.plus}> ✓ </Text>
            </Pressable>

          </ImageBackground>
        </View>
      </Modal>
    </>
  );
}
