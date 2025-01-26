import { VelocityScroll } from "../ui/scroll-based-velocity";

import React from 'react'

export default function ScrollText() {
  return (
    <VelocityScroll className="bg-black">
      We build something <span className="">amazing</span> for
      <span className=""> your dream</span>.
    </VelocityScroll>
  );
}
