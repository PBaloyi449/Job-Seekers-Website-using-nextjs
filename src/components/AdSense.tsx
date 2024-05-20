import Script from 'next/script';
import React from 'react'

type AdsenseTypes = {
    pId: string;
}

const AdSense = ({ pId }: AdsenseTypes) => {
  return (
    <script 
    async 
    src={"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${pId}"}
     crossOrigin="anonymous">
     </script>
  )
}

export default AdSense