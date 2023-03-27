import { useEffect } from 'react';

const GA_MEASUREMENT_ID = "G-HM2FM6GR4D";
const GA_API_SECRET = "mFkdbP-ASvui5bsDCxnc3A";
const GEOLOCATION_API_KEY = "AIzaSyDOaQwn6SSAxvLkuh0OR5yaNucBcSb1d3c";

const GoogleAnalytics = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_MEASUREMENT_ID;
    script.async = true;
    document.body.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID);

    const geocodeLocation = (latitude, longitude) => {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ 'location': { lat: latitude, lng: longitude } }, function(results, status) {
        if (status === 'OK') {
          if (results[0]) {
            var address = results[0].formatted_address;
            var addressName = address.split(',')[0];
            sendLocationToGA(addressName);
          } else {
            console.log('No results found');
          }
        } else {
          console.log('Geocoder failed due to: ' + status);
        }
      });
    }

    const sendLocationToGA = (location) => {
      var xhr = new XMLHttpRequest();
      var url = "https://www.google-analytics.com/mp/collect?measurement_id=" + GA_MEASUREMENT_ID + "&api_secret=" + GA_API_SECRET;
      xhr.open("POST", url, true);
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.send("geoid=" + location);
    }

    const getGeolocation = () => {
      fetch("https://www.googleapis.com/geolocation/v1/geolocate?key=" + GEOLOCATION_API_KEY, {
        method: "POST",
        body: JSON.stringify({})
      })
      .then(response => response.json())
      .then(data => {
        const { latitude, longitude } = data.location;
        geocodeLocation(latitude, longitude);
      })
      .catch(error => console.log(error));
    }

    getGeolocation();
  }, []);

  return null;
};

export default GoogleAnalytics;
