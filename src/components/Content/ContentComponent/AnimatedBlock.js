import React, { useState, useEffect, useRef } from "react";

const AnimatedBlock = React.memo(
  React.forwardRef(({ children, style, className, direction = "X", onVisible }, ref) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (onVisible) onVisible();
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.1 }
      );

      if (domRef.current) observer.observe(domRef.current);
      return () => observer.disconnect();
    }, [onVisible]);

    const transformValue =
      direction === "Y"
        ? isVisible ? "translateY(0)" : "translateY(30px)"
        : isVisible ? "translateX(0)" : "translateX(-50px)";

    return (
      <div
        ref={(node) => {
          domRef.current = node;
          if (ref) ref.current = node;
        }}
        className={className}
        style={{
          ...style,
          opacity: isVisible ? 1 : 0,
          transform: transformValue,
          transition: "all 0.8s ease-out",
        }}
      >
        {children}
      </div>
    );
  })
);

export default AnimatedBlock;