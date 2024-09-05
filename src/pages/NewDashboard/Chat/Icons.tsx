/* eslint-disable @typescript-eslint/no-explicit-any */
import EmojiPicker from "emoji-picker-react";
import { useRef, useEffect } from "react";
const Icons = ({ setShowIcons }: any) => {
  const modalRef = useRef(null);

  // const handleClickOutside = (event: any) => {
  //   if (modalRef.current && !modalRef.current.contains(event.target)) {
  //     setShowIcons(false);
  //   }
  // };

  const handleClickOutside = (event: any) => {
    const node = modalRef.current as HTMLElement | null;
    if (node && !node.contains(event.target)) {
      setShowIcons(false);
      false;
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div
      ref={modalRef}
      className={`mx-0 py-2 absolute bottom-16 left-2 w-[160px]  bg-white   rounded-md shadow  h-auto   flex-col  items-center`}
    >
      <EmojiPicker
        width={250}
        skinTonesDisabled={true}
        onEmojiClick={(value) => console.log(value)}
      />
    </div>
  );
};

export default Icons;
