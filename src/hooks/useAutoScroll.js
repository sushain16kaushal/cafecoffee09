import { useEffect,useRef} from "react";

const useAutoscroll = (ref,speed=2) =>{
    const isHovered =useRef(false);
    const directionRef = useRef(1);
    const frame=useRef(null);
    useEffect(()=>{
        const motion=()=>{
             const container=ref.current;
        if(!container){
        return;
    }
    if(isHovered.current){
            const maxScroll=container.scrollWidth-container.clientWidth;

            if(container.scrollLeft >= maxScroll){
                directionRef.current =-1;
            }
            if(container.scrollLeft<=0){
                directionRef.current= 1;
            }
            container.scrollLeft += speed*directionRef.current;
         } frame.current =requestAnimationFrame(motion);
        };
        frame.current =requestAnimationFrame(motion);
             return ()=>{

             cancelAnimationFrame(frame.current)
        }
    },[ref,speed]);
          const onMouseEnter = () => {
    isHovered.current = true;
  };

  const onMouseLeave = () => {
    isHovered.current = false;
  };
  return{onMouseEnter,onMouseLeave};
    }


export default useAutoscroll;