import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { Component } from 'react';


// https://vite.dev/config/
export default defineConfig({
  plugins: [react() , tailwindcss()],
  resolve: {
    alias:{
      components: "/src/components",
      pages: "/src/pages",
      assets: "/src/assets",
      layout: "/src/layout",
      Redux: "/src/Redux",
      config: "/src/config",
      helpers: "/src/helpers",
      routes: "/src/routes",
    }
  }  
})
