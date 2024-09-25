import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"; // Import icon từ thư viện

const App = () => {
  // State cho background color của component cha, mặc định là màu trắng
  const [bgColor, setBgColor] = useState("white");

  // Hàm thay đổi màu nền
  const changeBackgroundColor = (color) => {
    setBgColor(color);
  };

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "green" }]}
        onPress={() => changeBackgroundColor("green")}
      >
        <Text style={styles.text}>GREEN</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "blue" }]}
        onPress={() => changeBackgroundColor("blue")}
      >
        <Text style={styles.text}>BLUE</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "brown" }]}
        onPress={() => changeBackgroundColor("brown")}
      >
        <Text style={styles.text}>BROWN</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "yellow" }]}
        onPress={() => changeBackgroundColor("yellow")}
      >
        {/* Đổi màu chữ thành màu đen nếu nền là vàng */}
        <Text style={[styles.text, { color: "black" }]}>YELLOW</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "red" }]}
        onPress={() => changeBackgroundColor("red")}
      >
        <Text style={styles.text}>RED</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "black" }]}
        onPress={() => changeBackgroundColor("black")}
      >
        <Text style={styles.text}>BLACK</Text>
      </TouchableOpacity>

      {/* Nút RESET thành icon refresh */}
      <TouchableOpacity
        style={styles.resetButton}
        onPress={() => changeBackgroundColor("white")}
      >
        <Icon name="refresh" size={30} color="gray" />
      </TouchableOpacity>
    </View>
  );
};

// StyleSheet cho các thành phần
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "80%",
    padding: 20,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  resetButton: {
    marginTop: 20, // Thêm khoảng cách cho icon reset
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default App;
