"use client";

import React, { useEffect } from "react";

type AdBannerTypes = {
  dataAdSlot: string;
  dataAdFormat: string;
  dataFullWidthResponsive: boolean;
};

const AdBanner = ({
  dataAdSlot,
  dataAdFormat,
  dataFullWidthResponsive,
}: AdBannerTypes) => {
  useEffect(() => {
    try {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
        {}
      );
    } catch (error: any) {
      console.log(error.message);
    }
  }, []);

  return (
    <ins
     className="adsbygoogle"
     style={{display:"block"}}
     data-ad-client="ca-pub-5428303296729283"
     data-ad-slot="9928664512"
     data-ad-format="auto"
     data-full-width-responsive="true">
     </ins>
  );
};

export default AdBanner;