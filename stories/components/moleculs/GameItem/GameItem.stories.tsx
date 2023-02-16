import { Meta } from "@storybook/react";
import GameItem, {
  GameItemProps,
} from "../../../../components/moleculs/GameItem";

export default {
  title: "Components/Moleculs/GameItem",
  component: GameItem,
} as Meta;

const Template = (args: GameItemProps) => <GameItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Nama Lengkap",
  category: "Mobile",
  thumbnail: "/img/Thumbnail-1.png",
};
