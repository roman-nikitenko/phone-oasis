import React from 'react';
import { Title } from './Title.tsx';

const ABOUT_PRODUCT_DATA = [
  {
    title: 'And then there was Pro',
    text: 'A transformative triple‑camera system that adds tons of capability without complexity. An unprecedented leap in battery life. And a mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
  },
  {
    title: 'Camera',
    text: 'Meet the first triple‑camera system to combine cutting‑edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest‑quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
  },
  {
    title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
    text: 'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
  },
];

const TECH_SPECS_DATA = [
  { techspec: 'Screeen', value: '6.5” OLED' },
  { techspec: 'Resolution', value: '2688x1242' },
  { techspec: 'Processor', value: 'Apple A12 Bionic' },
  { techspec: 'RAM', value: '3 GB' },
  { techspec: 'Built in memory', value: '64 GB' },
  { techspec: 'Camera', value: '12 Mp + 12 Mp + 12 Mp (Triple)' },
  { techspec: 'Zoom', value: 'Optical, 2x' },
  { techspec: 'Cell', value: 'GSM, LTE, UMTS' },
];

export const AboutProduct: React.FC = () => {
  return (
    <div className="flex justify-between">
      <div className="max-w-[560px]">
        <Title titleText="About" />
        {ABOUT_PRODUCT_DATA.map((productInfo) => (
          <>
            <h3 className="mb-[16px] mt-[32px]">{productInfo.title}</h3>
            <p className="text-Secondary">{productInfo.text}</p>
          </>
        ))}
      </div>
      <div className="w-[512px]">
        <Title titleText="Tech specs" />
        <div>
          {TECH_SPECS_DATA.map((data) => (
            <p className="flex justify-between mb-[8px]">
              <span className="text-Secondary">{data.techspec}</span>
              <span>{data.value}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
