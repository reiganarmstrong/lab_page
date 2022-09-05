import { Button, MediaQuery, Stack, Title } from "@mantine/core";
import { NextPage } from "next";
import { motion } from "framer-motion";
import { Text } from "@mantine/core";
import { useRouter } from "next/router";

const subVariants = {
  hidden: {
    y: "30vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.35,
      duration: 1.75,
      ease: "easeInOut",
    },
  },
};

const containerVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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
const Home: NextPage = () => {
  const router = useRouter();
  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    router.push("/gl");
  };
  return (
    <motion.div
      variants={containerVariant}
      exit={containerVariant.leave}
      initial="hidden"
      animate="visible"
    >
      <MediaQuery
        query="(max-width: 650px)"
        styles={{ paddingTop: "40vh !important" }}
      >
        <Stack
          align={"center"}
          style={{ paddingTop: "30vh", textAlign: "center" }}
          spacing="xl"
        >
          <motion.div variants={subVariants}>
            <MediaQuery query="(max-width: 650px)" styles={{ fontSize: 60 }}>
              <Title color="white" size={100} order={1} weight={700}>
                CMSC 201 Lab
                <Text size={20}>with Reagan Armstrong</Text>
              </Title>
            </MediaQuery>
          </motion.div>
          <motion.div
            variants={subVariants}
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            <Button
              radius="xs"
              size="lg"
              color="yellow"
              onClick={onClickHandler}
            >
              Continue
            </Button>
          </motion.div>
        </Stack>
      </MediaQuery>
    </motion.div>
  );
};
export default Home;
