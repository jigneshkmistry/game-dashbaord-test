import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import { GradientBorder } from '../ui/gradient-border';
import { JSX } from 'react';

interface DropDownProps {
  label: string;
  items: string[];
  icon?: JSX.Element;
  startIcon?: JSX.Element;
}

export function DropDownComponent({ label, items, icon,startIcon }: DropDownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <GradientBorder className='p-0'>
          <Button
            variant='outline'
            className='bg-[#4a3a7a]/50 border-none text-white'
          >
            {startIcon && startIcon} {label} {icon && icon}
          </Button>
        </GradientBorder>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {items.map((item, index) => (
          <DropdownMenuItem key={index}>{item}</DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
