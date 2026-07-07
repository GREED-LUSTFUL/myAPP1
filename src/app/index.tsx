import { View, Text, Pressable, StyleSheet } from "react-native";

export default function HomeScreen() {

  // STYLES
  const COLORS = {
    background: "#222222",
    box: "#573b1e",
    mainFont: "#dfd2d2",
  };

  const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: COLORS.background,
      padding: 30,
    },
    
    topRow: {
      flexDirection: "row",
      justifyContent: "flex-start",
      gap: 20,
      marginTop: 20,
    },
    
    box: {
      backgroundColor: COLORS.box,
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 3,
      width: 100,
    },
    boxText: {
      fontSize: 16,
      fontWeight: "600",
      color: COLORS.mainFont,
    },

    center: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },

    paper: {
      width: 220,
      height: 320,
      backgroundColor: COLORS.mainFont,
      borderRadius: 3,
      justifyContent: "center",
      alignItems: "center",
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
    },
  });


  // STRUCTURE
  return (
    <View style={styles.container}>

      {/* boxes */}
      <View style={styles.topRow}>
        <Pressable style={styles.box}>
          <Text style={styles.boxText}> Box 1 </Text>
        </Pressable>
        <Pressable style={styles.box}>
          <Text style={styles.boxText}> Box 2 </Text>
        </Pressable>
      </View>

      {/* paper */}
      <View style={styles.center}>
        <View style={styles.paper}>
          <Pressable style={styles.plusButton}>
            <Text style={styles.plus}> + </Text>
          </Pressable>
          <Text style={styles.paperText}> Write a Letter </Text>
        </View>
      </View>

    </View>
  );
}

// shreya