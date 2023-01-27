import { useForm, SubmitHandler } from "react-hook-form";
import LoginLogo from "../../components/icons/LoginWokeloLogo";
import LogoBetaIcon from "../../components/icons/Wokelo Beta Logo";
import { performLogin } from "../../store/slices/authSlice";
import { useAppDispatch } from "../../store/store";
import "./Login.css";

type Inputs = {
  username: string;
  password: string;
};

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = ({ username, password }) => {
    dispatch(performLogin({ username, password, redirect: "/dashboard" }));
  };

  return (
    <div className="flex flex-col h-100 w-full overflow-hidden">
      <p className="flex">
        <LoginLogo />
      </p>
      <div className="flex items-center content-center" style={{ display:"flex", justifyContent:"center" }}>
        
        <div className="flex ">
          <div className=" w-[90%] p-[30px] shadow-lg h-auto rounded-[30px] border ">
            <div className="">
              <span className="font-bold hello text-[40px] leading-10 lg:text-[55px]">
                Hello,
              </span>
              <br />
              <span className="font-bold welcome text-[40px] leading-[50px] mt-[3vh] lg:text-[55px]">
                Welcome
              </span>
              <p className=" font-extralight mt-[11px] text-[2.5vh] leading-10 p_login">
                Login to get started{" "}
              </p>
              <img
                className="h-[10.89px] w-[178.92px] bg-transparent"
                src="https://i.ibb.co/8M9wYy2/under-img.png"
                alt=""
              />
              <form onSubmit={handleSubmit(onSubmit)}>
                <p
                  className="mt-[22px] text-[2.5vh] p-[5px] username"
                  style={{ color: "#5e6269" }}
                >
                  Username
                </p>
                <input
                  className="mt-[5px] w-full decoration-black  h-[5vh] p-[5px] text-[2vh] bg-transparent border-2 rounded-[5px] "
                  style={{ color: "black" }}
                  {...register("username", { required: true })}
                />
                {errors.username && (
                  <span className="text-sm text-red-500">
                    Username is required
                  </span>
                )}
                <p
                  className="mt-[20px]  font-normal text-[2.5vh] password decoration-[#5e6269] "
                  style={{ color: "#5e6269" }}
                >
                  Password
                </p>
                <input
                  className="mt-[5px] w-full decoration-black h-[5vh] p-[5px] text-[2vh] bg-transparent border-2 rounded-[5px] "
                  type="password"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    Password is required
                  </span>
                )}
                <br />
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    marginTop: "2em",
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                  }}
                >
                  <button
                    style={{ cursor: "pointer", color: "white" }}
                    className="w-[120px] h-[45px] bg-[#6a67ef] submit decoration-white rounded-md font-lg text-[2.3vh] m-[5px]  "
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
              <div
                className="flex items-center form_footer"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <p
                  className="mt-[5px] mb-[2px] "
                  style={{ width: "90%", color: "black" }}
                >
                  Don't have credentials? <br />{" "}
                  <a
                    href="http://forms.gle/bRaidaCh3NEo2Zx3A/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "blue" }}
                  >
                    Get Access
                  </a>
                </p>
                <p style={{ marginLeft: "5px" }}>
                  Having Trouble? Contact us at{" "}
                  <a href="mailto:support@wokelo.ai" style={{ color: "blue" }}>
                    support@wokelo.ai
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="w-[50%]  items-center content-center right_login_img">
          <img
            className="w-[70%] h-auto"
            src="https://i.ibb.co/WnL7gry/login.png"
            alt=""
          />
        </div> */}
      </div>
    </div>
  );
};

export default LoginPage;
