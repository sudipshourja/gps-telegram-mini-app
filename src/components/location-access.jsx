import LocationIcon from "../constants/icons";

const LocationAccess = ({ setLocationData }) => {
  const handleLocationRequest = () => {
    // Handle location data
    // console.log(window.Telegram.WebApp.LocationManager);

    window.Telegram.WebApp.LocationManager.init(() => {
      if (window.Telegram.WebApp.LocationManager.isInited) {
        console.log("LocationManager initialized successfully.");

        // Now you can use location-related features
        window.Telegram.WebApp.LocationManager.requestLocationAccess();
      } else {
        console.log("Failed to initialize LocationManager.");
      }
    });
    const interval = setInterval(async () => {
      window.Telegram.WebApp.LocationManager.getLocation((locationData) => {
        if (locationData) {
          console.log(new Date(Date.now()));
          // setLocationData(locationData);
          // console.log("Location data received:", locationData);
          // console.log("Latitude:", locationData.latitude);
          // console.log("Longitude:", locationData.longitude);
          // console.log("Accuracy:", locationData.accuracy, "meters");

        } else {
          console.log("Access to location was not granted.");
        }
      });
    }, 5000);
  };

  return (
    <div className="h-screen w-full flex items-center justify-center flex-col gap-10 px-4">
      <div className=" p-3 bg-green-950 rounded-full">
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
      <div
        onClick={handleLocationRequest}
        className="w-full flex items-center justify-center py-2 cursor-pointer hover:bg-green-950 bg-[#0f1818] border-2 border-white/10 rounded-xl"
      >
        <LocationIcon className="size-6" width={24} height={24} />
        <span>Allow Location Access</span>
      </div>
    </div>
  );
};

export default LocationAccess;
