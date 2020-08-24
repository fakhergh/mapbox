import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';

import MapboxGL from '@react-native-mapbox-gl/maps';

const publicKey =
  'pk.eyJ1IjoiZmVraGVyZ2giLCJhIjoiY2tlMnFhcDI3MGMwMjJzbWhidmJid3J0diJ9.6xU4_mJYv1Fb8T92e726hQ';

const secretKey =
  'sk.eyJ1IjoiZmVraGVyZ2giLCJhIjoiY2tlMnFkNWphMGJxMDMwb2JycWpqdGlkZyJ9.7hEZSsfPP9oY-ZqRBePa8w';

MapboxGL.setAccessToken(secretKey);
MapboxGL.setConnected(true);

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

const App = () => {
  useEffect(() => {
    MapboxGL.setTelemetryEnabled(false);
  }, []);

  return (
    <View style={styles.page}>
      <MapboxGL.MapView
        style={styles.map}
        zoomEnabled
        compassEnabled
        rotateEnabled
        scrollEnabled
        pitchEnabled
        attributionEnabled
        logoEnabled={false}>
        <MapboxGL.Camera zoomLevel={5} ne={[45, 9]} />
      </MapboxGL.MapView>
    </View>
  );
};

export default App;
