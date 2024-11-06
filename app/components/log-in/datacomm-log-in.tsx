import { useState, useMemo } from "react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import { Separator } from "@/components/ui/separator";

import {
  ButtonTypes,
  DatacommButton,
  ButtonIconTypes,
} from "../buttons/datacomm-button";

import { DatacommLink, LinkTypes } from "../links/datacomm-links";

import { DatacommInput, InputTypes } from "../inputs/datacomm-input";

import Image from "next/image";

type DatacommLogInTypes = {
  title: string;
  width: string;
  height: string;
  description: string;
  logo: string;
  onLogIn: (email: string, password: string) => void;
  onContinueSSO: () => void;
  onContinueGoogle: () => void;
};

export const DatacommLogIn: React.FC<DatacommLogInTypes> = ({
  title,
  description,
  logo,
  onLogIn,
  onContinueSSO,
  onContinueGoogle,
  width,
  height,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);

  const validateEmail = (value: string) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);

  const isEmailInvalid = useMemo(() => {
    return email !== "" && !validateEmail(email);
  }, [email]);

  const handleLogIn = () => {
    setError("");
    setIsEmpty(false);

    if (!email && !password) {
      setIsEmpty(true);
      return;
    }

    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }

    if (isEmailInvalid) {
      setError("Please enter a valid email address.");
      return;
    }

    onLogIn(email, password);
  };

  return (
    <Card
      style={{ width, height }}
      className="px-10 py-3 rounded-none h-fit flex flex-col items-center justify-center"
    >
      <CardHeader className="pl-0 w-[357px] ">
        <Image src={logo} alt="logo" width={70} height={70} className="mr-2" />
      </CardHeader>
      <CardContent className="grid gap-2 justify-center">
        <CardTitle className="text-2xl text-[#1D1F2C]">{title}</CardTitle>
        <CardDescription className="text-sm text-[#1D1F2C] w-[357px]">
          {description}
        </CardDescription>
        {error && <p className="text-red-500 text-xs">{error}</p>}
        <div className="grid grid-cols-1 mt-3 gap-5">
          <DatacommInput
            type={InputTypes.EMAIL}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={isEmpty ? "border-red-500" : ""}
          />
          <span className="flex flex-col gap-2">
            <DatacommInput
              type={InputTypes.PASSWORD}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={isEmpty ? "border-red-500" : ""}
            />
            <DatacommLink
              type={LinkTypes.SMALL}
              url={"#"}
              title={"Forgot Password?"}
            />
          </span>
          <DatacommButton
            iconType={ButtonIconTypes.NONE}
            type={ButtonTypes.PRIMARY}
            title={"Login"}
            onClick={handleLogIn}
          />
        </div>
        <span className="flex gap-4 my-2 justify-center items-center w-full">
          <Separator className="w-[53px] h-[1px]" />
          <p className="text-[#A5A5AB]">or</p>
          <Separator className="w-[53px] h-[1px]" />
        </span>
        <div className="grid grid-cols-1 gap-2">
          <DatacommButton
            type={ButtonTypes.SECONDARY}
            iconType={ButtonIconTypes.PASSKEY}
            title={"Continue with SSO"}
            onClick={onContinueSSO}
          />
          <DatacommButton
            type={ButtonTypes.SECONDARY}
            iconType={ButtonIconTypes.GOOGLE}
            title={"Continue with Google"}
            onClick={onContinueGoogle}
          />
          <span className="flex gap-1 mt-2">
            <p className="text-sm">Don't have an account?</p>
            <DatacommLink
              type={LinkTypes.STANDARD}
              url={"#"}
              title={"Sign Up"}
            />
          </span>
        </div>
      </CardContent>
      <CardFooter className="grid grid-cols-1 mt-14 ">
        <span className="flex items-center text-center justify-center w-[357px]">
          <DatacommLink
            type={LinkTypes.UNDERLINED}
            url={"#"}
            title={"Privacy Policy"}
          />
          <p className="mx-1 text-xs text-[#777980]">and</p>
          <DatacommLink
            type={LinkTypes.UNDERLINED}
            url={"#"}
            title={"Terms of Service"}
          />
        </span>
      </CardFooter>
    </Card>
  );
};
