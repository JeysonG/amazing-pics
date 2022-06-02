import { FC } from 'react';

import { IconChat, Label, Link } from './HoverLinkElements';

interface LinkProps {
  label: string;
}

const HoverLink: FC<LinkProps> = ({ label }) => {
  return (
    <Link href="#">
      <IconChat />
      <Label>{label}</Label>
    </Link>
  );
};

export default HoverLink;
