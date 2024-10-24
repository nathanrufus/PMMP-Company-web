import React, { useEffect, useState } from 'react';

const Typewriter = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const messages = ['PMMP', 'Company'];

  useEffect(() => {
    const handleTyping = () => {
      const currentIndex = loopNum % messages.length;
      const fullText = messages[currentIndex];

      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

      if (!isDeleting && text === fullText) {
        setIsDeleting(true);
        setTypingSpeed(100);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(200);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, typingSpeed, loopNum, messages]);

  return (
    <div className="text-white text-2xl font-bold">
      {text}
      <span className="text-yellow-300">{isDeleting ? '|' : '|'}</span>
    </div>
  );
};

export default Typewriter;
