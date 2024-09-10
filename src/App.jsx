
import {Button , TextField, Box, Typography} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';

const Login = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = () => {
    console.log('helo');
  
  };

  return (
      <div style={{margin : 'auto'}}>
    <Box>
      <Typography>Đăng Nhập</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
       
        <div>
          <Typography htmlFor="username">Tên đăng nhập:</Typography>
          <Controller
            name="username"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                id="username"
                type="text"
              />
            )}
          />
        </div>
        <div>
          <Typography htmlFor="password">Mật khẩu:</Typography>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                id="password"
                type="password"              
              />
            )}
          />
        </div>   

        <Button type="submit">Đăng Nhập</Button>
      </form>
    </Box>

      </div>
  );
};

export default Login;
