import { useState } from "react";
import LocationIcon from "../constants/icons";

const LocationAccess = () => {
  const [locationData, setLocationData] = useState(null);
  const [error, setError] = useState(null);
  const [isTracking, setIsTracking] = useState(false);

  const handleLocationRequest = () => {
    // Initialize LocationManager
    window.Telegram.WebApp.LocationManager.init(() => {
      if (window.Telegram.WebApp.LocationManager.isInited) {
        console.log("LocationManager initialized successfully.");

        // Request location access
        window.Telegram.WebApp.LocationManager.requestLocationAccess((granted) => {
          if (granted) {
            console.log("Location access granted.");
            setIsTracking(true);

            // Start live location sharing
            window.Telegram.WebApp.LocationManager.startLiveLocationSharing((success) => {
              if (success) {
                console.log("Live location sharing started.");

                // Listen for location updates
                window.Telegram.WebApp.LocationManager.onLocationChanged = (locationData) => {
                  console.log("Location data received:", locationData);
                  setLocationData(locationData); // Update state with new location data
                };
              } else {
                setError("Failed to start live location sharing.");
              }
            });
          } else {
            setError("Location access denied.");
          }
        });
      } else {
        setError("Failed to initialize LocationManager.");
      }
    });
  };

  const stopLocationSharing = () => {
    // Stop live location sharing
    window.Telegram.WebApp.LocationManager.stopLiveLocationSharing(() => {
      console.log("Live location sharing stopped.");
      setIsTracking(false);
      setLocationData(null);
    });
  };

  return (
    <div className="h-screen w-full flex items-center justify-center flex-col gap-10 px-4">
      <div className="p-3 bg-green-950 rounded-full">
        <LocationIcon className="text-yellow-50" width={50} height={50} />
      </div>
      <div className="text-center">
        <h1 className="text-xl mb-3 font-medium">
          Precise Weather at Your Location
        </h1>
        <p className="text-sm text-[#214d4b] font-medium">
          Enable location access to get accurate weather for...
        </p>
      </div>

      {/* Display location data */}
      {locationData && (
        <div className="w-full text-center">
          <h2 className="text-lg font-medium mb-2">Location Updates</h2>
          <p>Latitude: {locationData.latitude}</p>
          <p>Longitude: {locationData.longitude}</p>
          <p>Accuracy: {locationData.accuracy} meters</p>
          <p>Last Updated: {new Date().toLocaleString('en-US', { timeZone: 'Asia/Dhaka' })}</p>
        </div>
      )}

      {/* Display error message */}
      {error && (
        <div className="w-full text-center text-red-500">
          <p>{error}</p>
        </div>
      )}

      {/* Button to request location access */}
      {!isTracking ? (
        <div
          onClick={handleLocationRequest}
          className="w-full flex items-center justify-center py-2 cursor-pointer hover:bg-green-950 bg-[#0f1818] border-2 border-white/10 rounded-xl"
        >
          <LocationIcon className="size-6" width={24} height={24} />
          <span>Allow Location Access</span>
        </div>
      ) : (
        <div
          onClick={stopLocationSharing}
          className="w-full flex items-center justify-center py-2 cursor-pointer hover:bg-red-950 bg-[#0f1818] border-2 border-white/10 rounded-xl"
        >
          <span>Stop Location Sharing</span>
        </div>
      )}
    </div>
  );
};

export default LocationAccess;