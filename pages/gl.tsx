import styled from "@emotion/styled";
import { Group, MediaQuery, Stack, Text } from "@mantine/core";
import { motion } from "framer-motion";
const containerVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.7,
    },
  },
  leave: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};
const GlHelpPage = () => {
  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      exit="leave"
    >
      <Stack
        align={"center"}
        justify="center"
        spacing={"lg"}
        style={{ height: "60vh" }}
      >
        <Group>
          <MediaQuery
            query="(max-height:340px)"
            styles={{ fontSize: "2rem", paddingTop: "70%" }}
          >
            <MediaQuery
              query="(max-height:500px)"
              styles={{ fontSize: "2rem", paddingTop: "50%" }}
            >
              <MediaQuery
                query="(max-width:540px) "
                styles={{ fontSize: "2rem", paddingTop: "25%" }}
              >
                <Text align="center" size={50} weight={"Bold"}>
                  What Exactly is GL?
                </Text>
              </MediaQuery>
            </MediaQuery>
          </MediaQuery>
        </Group>
        <Text align="center">
          Without getting too technical, it&apos;s the place where you will turn
          in all your code.
          <br /> Dr Lupoli explains the general workflow of how this all works
          in the video below.
        </Text>
        <MediaQuery
          query="(max-width: 500px), (max-height:500px)"
          styles={{ width: 250, height: 455, paddingBottom: "10%" }}
        >
          <MediaQuery
            query="(max-width: 650px)"
            styles={{ width: 500, height: 455 }}
          >
            <iframe
              width="600"
              height="355"
              src="https://www.youtube.com/embed/Aq3OSIelixo"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </MediaQuery>
        </MediaQuery>
      </Stack>
    </motion.div>
  );
};

export default GlHelpPage;
