import React, { useEffect, useRef } from 'react';
import Navbar from '../component/Navbar';

const Connect = () => {
  const videoRef = useRef(null);

  // You can implement logic here to connect to the video stream (WebRTC, MJPEG, etc.)
  useEffect(() => {
    // Example: If you are using a direct video feed URL
    if (videoRef.current) {
      videoRef.current.src = 'http://your-jetson-nano-stream-url';
      videoRef.current.play();
    }
  }, []);

  return (
    <div className="relative bg-cover md:w-screen pb-15 bg-center bg-[url('/assets/dark-grad.jpg')] h-screen">
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.75)]"></div>

      <div className="container mx-auto relative z-10 text-center text-white">
        <Navbar />

        {/* Video Stream Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">Live AI Model Stream</h2>
          
          {/* Video Container */}
          <div className="flex justify-center">
            <video 
              ref={videoRef} 
              className="w-full md:w-2/3 lg:w-1/2 border-4 border-white rounded-lg shadow-lg"
              controls
              autoPlay
              muted
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Connect;
