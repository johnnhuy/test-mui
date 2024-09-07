// Login.jsx

import { useForm, Controller } from 'react-hook-form';

const Login = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log('Form Data:', data);
  
  };

  return (
    <div>
      <h2>Đăng Nhập</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
       
        <div>
          <label htmlFor="username">Tên đăng nhập:</label>
          <Controller
            name="username"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                id="username"
                type="text"
               
                required
              />
            )}
          />
        </div>

       
        <div>
          <label htmlFor="password">Mật khẩu:</label>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                id="password"
                type="password"
               
                required
              />
            )}
          />
        </div>

       
        <button type="submit">Đăng Nhập</button>
      </form>
    </div>
  );
};

export default Login;
