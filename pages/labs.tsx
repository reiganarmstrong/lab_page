import styled from "@emotion/styled";
import {
  useMantineTheme,
  Text,
  Stack,
  Card,
  Badge,
  Center,
  Grid,
  createStyles,
  CSSObject,
} from "@mantine/core";
import { motion } from "framer-motion";
import { NextPage } from "next";
import { HiDocumentText } from "react-icons/hi";
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

const useStyles = createStyles((theme) => ({
  openCard: {
    "&:hover": {
      cursor: "pointer",
    },
  },
  closedCard: {
    "&:hover": {
      cursor: "not-allowed",
    },
  },
}));
let i = 4;
const openLabs: string[] = [];
const closedLabs: string[] = [];
for (let j = 1; j < i; j++) {
  openLabs.push(`Lab ${j}`);
}
for (let j = i; j < 20; j++) {
  closedLabs.push(`Lab ${j}`);
}
const Labs: NextPage = () => {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  return (
    <motion.div
      variants={containerVariant}
      animate="visible"
      initial="hidden"
      exit={"leave"}
    >
      <Grid justify="center" gutter={"xl"} columns={12} style={{ padding: 15 }}>
        {openLabs.map((lab) => {
          return (
            <Grid.Col md={3} lg={2}>
              <motion.div
                whileHover={{
                  scale: 1.07,
                  transition: {
                    type: "spring",
                    duration: 0.5,
                  },
                }}
                whileTap={{
                  scale: 1.0,
                  transition: {
                    type: "spring",
                    duration: 0.5,
                  },
                }}
              >
                <Card className={classes.openCard}>
                  <Card.Section inheritPadding style={{ paddingBottom: 5 }}>
                    <Center>
                      <HiDocumentText size={"6rem"} color={"#4285f4"} />
                    </Center>
                  </Card.Section>
                  <Stack spacing={5} align="center">
                    <Badge color="green" variant="light">
                      open
                    </Badge>
                    <Text align="center">{lab}</Text>
                  </Stack>
                </Card>
              </motion.div>
            </Grid.Col>
          );
        })}
        {closedLabs.map((lab) => {
          return (
            <Grid.Col md={3} lg={2}>
              <Card className={classes.closedCard}>
                <Card.Section inheritPadding style={{ paddingBottom: 5 }}>
                  <Center>
                    <HiDocumentText size={"6rem"} color={"#4285f4"} />
                  </Center>
                </Card.Section>
                <Stack spacing={5} align="center">
                  <Badge color="red" variant="light">
                    Closed
                  </Badge>
                  <Text align="center">{lab}</Text>
                </Stack>
              </Card>
            </Grid.Col>
          );
        })}
      </Grid>
    </motion.div>
  );
};
export default Labs;
