import React, { HTMLAttributes } from "react";
import Icon, { IconsT } from "../Icon";

import { ButtonContainer } from "./styles";
type NavButtonProps = HTMLAttributes<HTMLButtonElement> & {
  active: boolean;
  name: IconsT;
};
const NavButton: React.FC<NavButtonProps> = ({ active, name, ...props }) => {
  return (
    <ButtonContainer {...props}>
      <Icon name={name} />
    </ButtonContainer>
  );
};

export default NavButton;
