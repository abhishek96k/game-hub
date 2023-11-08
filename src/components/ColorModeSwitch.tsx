import { HStack, Text, Switch, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const displayMode = colorMode === "dark" ? "Light Mode" : "Dark Mode";

  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text>{displayMode}</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
