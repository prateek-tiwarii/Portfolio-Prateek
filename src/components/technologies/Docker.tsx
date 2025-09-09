import React from "react";

export default function Docker({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className={className}
          fill="currentColor"
    >
      <path d="M253.6 109.2c-6.2-4.8-19.8-6.6-30-4.8-1.2-9-7.2-16.8-18-23.4l-6-3.6-4.2 5.4c-6.6 9-9 20.4-7.2 32.4-4.8 1.2-9.6 1.8-14.4 1.8H2.4l-1.2 6.6c-3 16.8-.6 64.2 33 95.4 21.6 20.4 52.2 30.6 90.6 30.6 83.4 0 144-38.4 164.4-108 3-10.8 1.2-25.2-5.6-32.4zM74.4 122.4h24v24h-24v-24zm0-30.6h24v24h-24v-24zm30.6 30.6H129v24h-24v-24zm0-30.6H129v24h-24v-24zm30.6 30.6h24v24h-24v-24zm0-30.6h24v24h-24v-24zm30.6 0h24v24h-24v-24zM43.8 122.4h24v24h-24v-24zM191.4 198c-13.2 0-24-10.8-24-24s10.8-24 24-24c13.2 0 24 10.8 24 24s-10.8 24-24 24z" />
    </svg>
  );
}
