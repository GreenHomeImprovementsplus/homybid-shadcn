import LoginForm from "./components/LoginForm";

const LoginPage = () => {
  return (
    <div className={"h-screen w-screen bg-[#F4F4F5]"}>
      <div
        className={"h-full container mx-auto flex items-center justify-center"}
      >
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
