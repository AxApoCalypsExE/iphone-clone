import { Html } from "@react-three/drei";
import { Loader2 } from "lucide-react";
import React from "react";

const Loader = () => {
  return (
    <Html>
      <div className="absolute top-0 left-0 w-full h-full flex-center">
        <div className="w-[10vw] h-[10vw] rounded-full">
          <Loader2 className="animate-spin" />
        </div>
      </div>
    </Html>
  );
};

export default Loader;
