import React, { useEffect } from 'react';

const AdSense = ({ client = 'ca-pub-7048667845437782' }) => {
  useEffect(() => {
    const id = 'adsbygoogle-js';
    if (!document.getElementById(id)) {
      const s = document.createElement('script');
      s.async = true;
      s.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`;
      s.crossOrigin = 'anonymous';
      s.id = id;
      document.head.appendChild(s);
    }

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      // ignore errors when ad slots are not present yet
    }
  }, [client]);

  return null;
};

export default AdSense;
