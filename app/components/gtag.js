import { useEffect } from 'react';

const GTag = ({ measurementId, transportUrl, firstPartyCollection }) => {
  useEffect(() => {
    if (measurementId) {
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', measurementId, {
        'transport_url': transportUrl,
        'first_party_collection': firstPartyCollection,
      });
    }
  }, [measurementId, transportUrl, firstPartyCollection]);

  return null;
};

export default GTag;



