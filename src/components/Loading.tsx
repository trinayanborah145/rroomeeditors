import { useEffect, useState } from 'react';

const Loading = () => {
  const [showCursor, setShowCursor] = useState(true);
  const [displayText, setDisplayText] = useState<{char: string, isRoom: boolean}[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const roomText = "ROOM";
  const editorsText = " EDITORS";
  const fullText = roomText + editorsText;

  // Cursor blink effect - runs continuously
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => clearInterval(cursorInterval);
  }, []);

  // Typing effect
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        // Check if we're still typing "ROOM" or moved to "EDITORS"
        const isRoom = currentIndex < roomText.length;
        setDisplayText(prev => [
          ...prev, 
          { char: fullText[currentIndex], isRoom }
        ]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText, roomText.length]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <div className="relative">
        <div className="text-5xl font-bold tracking-wider">
          {displayText.map((item, index) => (
            <span 
              key={index} 
              className={item.isRoom ? 'text-white' : 'text-yellow-400'}
            >
              {item.char}
            </span>
          ))}
          <span 
            className={`inline-block h-14 w-3 bg-white ml-2 transition-opacity duration-300 ${showCursor ? 'opacity-100' : 'opacity-0'}`}
            style={{ 
              animation: 'blink 1s step-end infinite',
              verticalAlign: 'middle',
              marginBottom: '0.2em',
              backgroundColor: 'white'
            }}
          />
        </div>
      </div>
      <style>
        {`
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
        `}
      </style>
    </div>
  );
};

export default Loading;
