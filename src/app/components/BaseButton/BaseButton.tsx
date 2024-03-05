import { EventHandler, FC, MouseEvent, PropsWithChildren } from 'react';
import { BaseButtonWrapper } from './BaseButton.styled';
import { Button } from '@mui/material';

interface BaseButtonProps extends PropsWithChildren { 
   color?:'success' | 'primary' | 'error'
}

/**
 * You should not use the "BaseButton" use : "ButtonSuccess, ButtonError, ButtonPrimary"
 */
const BaseButton: FC<BaseButtonProps> = (props) => (
   <BaseButtonWrapper data-testid="BaseButton">
      <Button variant="contained" {...props}>
         {props.children}
      </Button>
   </BaseButtonWrapper>
);

interface ButtonProps extends PropsWithChildren { 
   onClick?:EventHandler<MouseEvent<HTMLElement>>
}

export const ButtonSuccess: FC<ButtonProps> = (props) => <BaseButton color="success" children={props.children}/>
export const ButtonError: FC<ButtonProps> = (props) => <BaseButton color="error" children={props.children}/>
export const ButtonPrimary: FC<ButtonProps> = (props) => <BaseButton color="primary" children={props.children} />

export default BaseButton;
