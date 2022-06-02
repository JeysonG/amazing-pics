import { FC } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

import { Icon, Input, Label, Switch } from './ToggleElements';

interface ToggleProps {
  checked: boolean;
  toggleTheme: () => void;
}

const Toggle: FC<ToggleProps> = ({ checked, toggleTheme }) => {
  return (
    <Label>
      <Input type="checkbox" checked={checked} onChange={toggleTheme} />
      <Switch>
        <Icon checked={checked}>{checked ? <FaSun /> : <FaMoon />}</Icon>
      </Switch>
    </Label>
  );
};

export default Toggle;
