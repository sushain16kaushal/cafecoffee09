import {useState} from "react";

function useActiveCard() {
  const [activeId, setActiveId] = useState(null);

  const toggleCard = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return { activeId, toggleCard };
}

export default useActiveCard;