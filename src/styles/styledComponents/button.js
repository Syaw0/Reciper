import { styled } from '../@stitches.config';

const Button = styled('button', {
  border: 'none',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  '&:focus': {
    outline: 'none',
  },
  '&:hover': {
  },
  headline6:"500",
  color:"$onBg700",
  variants:{
    type:{
        shadow:{
            "&:hover":{
                color:"$onBg"
            }
        }
    }
  }


});

export default Button;
