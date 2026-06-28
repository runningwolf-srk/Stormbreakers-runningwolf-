// Add this inside the component, after const relic = RELICS;
  const speakPage = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const text = `${relic.title}. ${relic.scripture}. ${relic.prophecy}`;
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 0.8;
      window.speechSynthesis.speak(utterance);
    }
  };
