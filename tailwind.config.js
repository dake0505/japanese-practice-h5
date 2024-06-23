import daisyui from "daisyui";
import { fontFamily as _fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'], // 正确的 content 配置
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ..._fontFamily.sans],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
  },
};
