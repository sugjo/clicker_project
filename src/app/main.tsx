import "virtual:svg-icons-register";
import './css/index.css'

import { MantineProvider } from "@mantine/core";
import React from 'react'
import ReactDOM from 'react-dom/client'

import { Router } from "@/pages";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      withCSSVariables
      theme={{ colorScheme: "dark" }}
    >
      <Router />
    </MantineProvider>
  </React.StrictMode>,
)
