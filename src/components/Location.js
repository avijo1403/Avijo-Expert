import React, { useEffect, useState } from 'react';
import { View, Text, Button, PermissionsAndroid, Platform, Alert } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

const Location = () => {
    const [location, setLocation] = useState(null);
    const [pincode, setPincode] = useState('');

    const fetchAddressFromCoords = async (latitude, longitude) => {
        const apiKey = 'YOUR_GOOGLE_MAPS_API_KEY';
        const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data.results.length > 0) {
                const address = data.results[0];
                const postalCode = address.address_components.find(component =>
                    component.types.includes('postal_code')
                )?.long_name;

                setPincode(postalCode || 'Pincode not found');
            } else {
                Alert.alert('Error', 'Unable to fetch address');
            }
        } catch (error) {
            Alert.alert('Error', 'Something went wrong');
        }
    };

    const getLocation = async () => {
        if (Platform.OS === 'android') {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
            );
            if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
                Alert.alert('Permission Denied', 'Location permission is required');
                return;
            }
        }

        Geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude } = position.coords;
                setLocation({ latitude, longitude });
                fetchAddressFromCoords(latitude, longitude);
            },
            error => {
                Alert.alert('Error', error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title="Get Location and Pincode" onPress={getLocation} />
            {location && (
                <Text>
                    Latitude: {location.latitude}, Longitude: {location.longitude}
                </Text>
            )}
            {pincode && <Text>Pincode: {pincode}</Text>}
        </View>
    );
};

export default Location;
