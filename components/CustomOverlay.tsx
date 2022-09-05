import {
  AppShell,
  Group,
  Header,
  Navbar,
  Text,
  useMantineTheme,
  Tabs,
  Stack,
  Grid,
  Button,
  ActionIcon,
  MediaQuery,
  Burger,
  Drawer,
  createStyles,
  ScrollArea,
} from "@mantine/core";
import styled, { CSSObject } from "@emotion/styled";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";
import { Component, FC, PropsWithChildren, useEffect, useState } from "react";
import { TbBrandPython } from "react-icons/tb";
import { SiDiscord, SiGmail } from "react-icons/si";
import {
  RiContactsLine,
  RiFileTextLine,
  RiTerminalBoxLine,
} from "react-icons/ri";
import { useRouter } from "next/router";
import { useToggle } from "@mantine/hooks";

const headerVariant = {
  hidden: {
    y: "-10vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
const StyledGroup = styled(Group)`
  &:hover {
    cursor: pointer;
  }
`;
const useStyles = createStyles((theme) => ({
  overlay: {
    fontSize: "4rem",
    fontWeight: "bold",
  },
  closeButton: {
    transform: " scale(3, 3) !important",
    marginRight: "5%",
  },
  pagesGroup: {
    marginTop: "5%",
  },
}));
const CustomOverlay: FC<PropsWithChildren> = (props) => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const router = useRouter();
  const initialTab = router.asPath.slice(1);
  const [activeTab, setActiveTab] = useState<string | null>(initialTab);
  const homePageRouteHandler = () => {
    router.push("/");
  };
  const [opened, toggle] = useToggle([false, true]);
  useEffect(() => {
    router.push(`/${activeTab}`);
  }, [activeTab]);

  return (
    <motion.div
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <AppShell
        padding="md"
        header={
          <motion.div
            variants={headerVariant}
            initial="hidden"
            animate="visible"
          >
            <Header style={{ fontSize: "2rem" }} height={59} p="xs">
              <Group position="apart" style={{ width: "99.5%" }}>
                <MediaQuery
                  query="(min-width: 1300px)"
                  styles={{ display: "none" }}
                >
                  <Burger
                    opened={opened}
                    onClick={() => toggle()}
                    title={opened ? "Open Menu" : "Close Menu"}
                  />
                </MediaQuery>
                <StyledGroup onClick={homePageRouteHandler}>
                  <TbBrandPython
                    color={theme.colors.yellow[9]}
                    size={"2.5rem"}
                  />
                  <Text color="white" weight={"bold"}>
                    CMSC 201 Lab Section __
                  </Text>
                </StyledGroup>
                <MediaQuery
                  query="(max-width: 1300px)"
                  styles={{ display: "none" }}
                >
                  <Tabs
                    variant="pills"
                    color="gray"
                    value={activeTab}
                    onTabChange={setActiveTab}
                  >
                    <Tabs.List>
                      <Group>
                        <Tabs.Tab
                          value="gl"
                          style={{ fontSize: ".6em" }}
                          icon={<RiTerminalBoxLine />}
                        >
                          Connect to GL
                        </Tabs.Tab>
                        <Tabs.Tab
                          value="labs"
                          style={{ fontSize: ".6em" }}
                          icon={<RiFileTextLine />}
                        >
                          Lab Documents
                        </Tabs.Tab>
                      </Group>
                    </Tabs.List>
                  </Tabs>
                </MediaQuery>
                <MediaQuery
                  query="(max-width: 1300px)"
                  styles={{ display: "none" }}
                >
                  <Group>
                    <motion.div
                      whileHover={{
                        scale: 1.07,
                        transition: { duration: 0.5 },
                      }}
                      whileTap={{ scale: 1 }}
                    >
                      <Button variant="white">
                        <Group spacing="xs">
                          <SiGmail color="red" size={"1.5rem"} />
                          <Text color={"red"}>Email Me!</Text>
                        </Group>
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{
                        scale: 1.07,
                        transition: { duration: 0.5 },
                      }}
                      whileTap={{ scale: 1 }}
                    >
                      <Button style={{ backgroundColor: "#5864f6" }}>
                        <SiDiscord size={"1.5rem"} />
                        <Text style={{ marginLeft: ".8em" }}>
                          Join The Discord!
                        </Text>
                      </Button>
                    </motion.div>
                  </Group>
                </MediaQuery>
                <MediaQuery
                  query="(min-width: 1300px)"
                  styles={{ display: "none" }}
                >
                  <div></div>
                </MediaQuery>
              </Group>
            </Header>
          </motion.div>
        }
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        })}
      >
        <Drawer
          opened={opened}
          onClose={() => toggle()}
          title="Pages"
          padding="xl"
          size="xl"
          transition={"pop-top-left"}
          transitionDuration={250}
          transitionTimingFunction="ease"
          classNames={{
            root: classes.overlay,
            closeButton: classes.closeButton,
          }}
        >
          <Stack justify={"space-between"}>
            <Tabs
              variant="pills"
              color="gray"
              value={activeTab}
              onTabChange={async (tab) => {
                setActiveTab(tab);
                toggle();
              }}
              className={classes.pagesGroup}
            >
              <Tabs.List>
                <Group>
                  <Tabs.Tab
                    value="gl"
                    style={{ fontSize: ".55em" }}
                    icon={<RiTerminalBoxLine />}
                  >
                    Connect to GL
                  </Tabs.Tab>
                  <Tabs.Tab
                    value="labs"
                    style={{ fontSize: ".55em" }}
                    icon={<RiFileTextLine />}
                  >
                    Lab Documents
                  </Tabs.Tab>
                </Group>
              </Tabs.List>
            </Tabs>
            <Group spacing={10}>
              <motion.div
                whileHover={{
                  scale: 1.07,
                  transition: { duration: 0.5 },
                }}
                whileTap={{ scale: 1 }}
              >
                <Button variant="white" style={{ height: 50 }}>
                  <Group spacing="xs">
                    <SiGmail color="red" size={"1.6rem"} />
                    <Text color={"red"} style={{ fontSize: "1.6em" }}>
                      Email Me!
                    </Text>
                  </Group>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.07,
                  transition: { duration: 0.5 },
                }}
                whileTap={{ scale: 1 }}
              >
                <Button style={{ backgroundColor: "#5864f6", height: 50 }}>
                  <SiDiscord size={"1.6rem"} />
                  <Text style={{ fontSize: "1.6em", marginLeft: ".8em" }}>
                    Join The Discord!
                  </Text>
                </Button>
              </motion.div>
            </Group>
          </Stack>
        </Drawer>
        {props.children}
      </AppShell>
    </motion.div>
  );
};

export default CustomOverlay;
