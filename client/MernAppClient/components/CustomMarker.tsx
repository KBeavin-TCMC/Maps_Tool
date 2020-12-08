import React, { useState } from "react";
import { View, Text } from "react-native";
import { Marker } from "react-native-maps";

const CustomMarker = () => (
    <View
      style={{
        paddingVertical: 10,
        paddingHorizontal: 30,
        backgroundColor: "#007bff",
        borderColor: "#eee",
        borderRadius: 5,
        elevation: 10
      }}
    >
      <Text style={{ color: "#fff" }}>Lucas Oil</Text>
    </View>
  );

  export default CustomMarker;