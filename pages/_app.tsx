import { AppProps } from "next/app";
import Head from "next/head";
import {
  ButtonStylesParams,
  MantineProvider,
  Overlay,
  useMantineTheme,
} from "@mantine/core";
import { AnimatePresence } from "framer-motion";
import { useId, useScrollLock } from "@mantine/hooks";
import CustomOverlay from "../components/CustomOverlay";
import { TbBrandPython } from "react-icons/tb";
import { useTheme } from "@emotion/react";

export default function App(props: AppProps) {
  const { Component, pageProps, router } = props;
  const theme = useMantineTheme();
  return (
    <>
      <Head>
        <title>CMSC 201 Lab</title>

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/image/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/image/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/image/favicon-16x16.png"
        />
        <link rel="manifest" href="/image/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "dark",
          components: {
            Button: {
              // Subscribe to theme and component params
              styles: (theme, params: ButtonStylesParams) => ({
                root: {
                  "&:active": { transform: "none" },
                },
              }),
            },
          },
        }}
      >
        <AnimatePresence mode="wait">
          {router.pathname !== "/" && (
            <CustomOverlay>
              <AnimatePresence mode="wait">
                <Component {...pageProps} key={router.pathname} />
              </AnimatePresence>
            </CustomOverlay>
          )}
          {router.pathname === "/" && (
            <Component {...pageProps} key={router.pathname} />
          )}
        </AnimatePresence>
      </MantineProvider>
    </>
  );
}
