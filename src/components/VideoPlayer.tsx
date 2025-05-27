import React, { useState, useEffect, useRef } from 'react';

interface VideoPlayerProps {
  videoUrl: string;
  className?: string;
  autoPlay?: boolean;
  controls?: boolean;
  loop?: boolean;
  muted?: boolean;
  lazyLoad?: boolean;
  quality?: 'auto' | 'sd' | 'hd' | 'full';
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoUrl,
  className = '',
  autoPlay = false,
  controls = true,
  loop = false,
  muted = true,
  lazyLoad = true,
  quality = 'auto',
}) => {
  const videoRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isInView, setIsInView] = useState(!lazyLoad);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Check if device is mobile
    const checkIfMobile = () => {
      setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    // Set up intersection observer for lazy loading
    if (lazyLoad && videoRef.current) {
      const options = {
        root: null,
        rootMargin: '200px',
        threshold: 0.1,
      };
      
      observerRef.current = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observerRef.current?.disconnect();
          }
        });
      }, options);
      
      observerRef.current.observe(videoRef.current);
    }
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [lazyLoad]);

  // Generate optimized video URL based on device and quality settings
  const getOptimizedVideoUrl = (url: string) => {
    if (!url) return '';
    
    const isCloudinary = url.includes('cloudinary.com');
    
    if (!isCloudinary) return url;
    
    // Remove any existing transformations
    let baseUrl = url.split('/upload/')[0] + '/upload/';
    const publicId = url.split('/upload/')[1] || '';
    
    // Add transformations based on quality
    let transformations = [];
    
    if (isMobile) {
      transformations.push('q_auto:eco');
      transformations.push('f_auto');
      transformations.push('w_800'); // Limit width for mobile
    } else {
      switch (quality) {
        case 'sd':
          transformations.push('q_auto:good');
          transformations.push('w_1280');
          break;
        case 'hd':
          transformations.push('q_auto:best');
          transformations.push('w_1920');
          break;
        case 'full':
          // No size restrictions for full quality
          break;
        case 'auto':
        default:
          transformations.push('q_auto:eco');
          transformations.push('w_auto');
      }
    }
    
    // Add autoplay if needed
    if (autoPlay) {
      transformations.push('autoplay');
    }
    
    return `${baseUrl}${transformations.join(',')}/${publicId}`;
  };

  const optimizedUrl = isInView ? getOptimizedVideoUrl(videoUrl) : '';
  
  return (
    <div 
      ref={videoRef}
      className={`relative w-full h-full ${className} video-container`}
      style={{
        backgroundColor: '#f0f0f0',
        overflow: 'hidden',
      }}
    >
      {isInView && optimizedUrl ? (
        <>
          <video
            className="w-full h-full object-cover"
            autoPlay={autoPlay}
            playsInline
            muted={muted || autoPlay} // Always mute if autoplay
            loop={loop}
            controls={controls}
            preload={lazyLoad ? 'none' : 'metadata'}
            disablePictureInPicture
            disableRemotePlayback
            aria-label="Video player"
          >
            <source src={optimizedUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {autoPlay && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
              <div className="text-white text-center p-4">
                <p>Tap to play video</p>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-100">
          <div className="animate-pulse">Loading video...</div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
