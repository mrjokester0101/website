import { useState, CopyToClipboard } from 'react';
import { CopyTextStyle } from 'components/CopyTextButton.module.css';

const CopyTextButton = ({ text }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <CopyToClipboard text={text} onCopy={handleCopy}>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        {isCopied ? 'Copied' : 'Copy'}
      </button>
    </CopyToClipboard>
  );
};

export default CopyTextButton;
