import Script from 'next/script';
import React from 'react';
import PropTypes from 'prop-types';

type AdsenseProps = {
  pId: string;
};

const AdSense: React.FC<AdsenseProps> = ({ pId }) => {
  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${pId}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
};

AdSense.propTypes = {
  pId: PropTypes.string.isRequired,
};

export default AdSense;
