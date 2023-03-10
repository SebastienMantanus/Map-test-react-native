import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function App() {
  const longitude = 48.856614;
  const latitude = 2.3522219;
  return (
    <SafeAreaView>
      <MapView
        style={styles.map}
        initialRegion={{
          longitude: 2.3522219,
          latitude: 48.856614,
          latitudeDelta: 0.2,
          longitudeDelta: 0.2,
        }}
      >
        <Marker
          coordinate={{
            longitude: longitude,
            latitude: latitude,
          }}
        />
      </MapView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});
