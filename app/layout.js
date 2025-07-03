import "./globals.css";

import { GlobalStateProvider } from "./GlobalStateContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
	<GlobalStateProvider>
	  {children}
	</GlobalStateProvider>
      </body>
    </html>
  );
}
