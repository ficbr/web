import { ApolloProvider } from "@apollo/client";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter } from "react-router-dom";

import { apolloClient } from "_configs/apollo/client";
import { axeCoreAccessibilityReport } from "_configs/axe-core/axeCoreAccessibilityReport";
import { i18next } from "_configs/i18n";

import { Router } from "./router";

import "_styles/global/index.css";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<I18nextProvider i18n={i18next}>
			<ApolloProvider client={apolloClient}>
				<NextUIProvider>
					<ThemeProvider attribute="class">
						<BrowserRouter>
							<Router />

							<Toaster
								reverseOrder={false}
								position="bottom-right"
								toastOptions={{
									className: "bg-gray-800 text-white dark:bg-white dark:text-gray-800",
								}}
							/>
						</BrowserRouter>
					</ThemeProvider>
				</NextUIProvider>
			</ApolloProvider>
		</I18nextProvider>
	</StrictMode>,
);

axeCoreAccessibilityReport();
