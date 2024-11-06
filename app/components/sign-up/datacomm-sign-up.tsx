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

type DatacommSignUpTypes = {
  title: string;
  description: string;
  logo: string;
  companyName: string;
  width: string;
  height: string;
  onSignUp: (email: string, password: string, fullName: string) => void;
  onContinueSSO: () => void;
  onContinueGoogle: () => void;
};

export const DatacommSignUp: React.FC<DatacommSignUpTypes> = ({
  title,
  description,
  logo,
  companyName,
  onSignUp,
  onContinueSSO,
  onContinueGoogle,
  width,
  height,
}) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);

  const validateEmail = (value: string) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);

  const isEmailInvalid = useMemo(() => {
    return email !== "" && !validateEmail(email);
  }, [email]);

  const handleSignUp = () => {
    setError("");
    setIsEmpty(false);

    if (!fullName || !email || !password) {
      setIsEmpty(true);
      setError("All fields are required.");
      return;
    }

    if (isEmailInvalid) {
      setError("Please enter a valid email address.");
      return;
    }

    onSignUp(email, password, fullName);
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
        <CardTitle className="text-2xl text-[#1D1F2C]">
          {title} {companyName}
        </CardTitle>
        <CardDescription className="text-sm w-[357px] text-[#1D1F2C]">
          {description}
        </CardDescription>
        {error && <p className="text-red-500 text-xs">{error}</p>}
        <div className="grid grid-cols-1 mt-3 gap-5">
          <DatacommInput
            type={InputTypes.FULLNAME}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className={isEmpty && !fullName ? "border-red-500" : ""}
          />
          <DatacommInput
            type={InputTypes.EMAIL}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={
              (isEmpty && !email) || isEmailInvalid ? "border-red-500" : ""
            }
          />
          <DatacommInput
            type={InputTypes.PASSWORD}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={isEmpty && !password ? "border-red-500" : ""}
          />

          <DatacommButton
            iconType={ButtonIconTypes.NONE}
            type={ButtonTypes.PRIMARY}
            title={"Sign Up"}
            onClick={handleSignUp}
          />
        </div>
        <span className="flex gap-5 my-2 w-[357px] justify-center items-center">
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
            <p className="text-sm">Already have an account?</p>
            <DatacommLink type={LinkTypes.STANDARD} url={"#"} title={"Login"} />
          </span>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col  items-start w-[357px] mt-14 pl-0">
        <p className="text-xs text-[#777980] w-full">
          By signing up for a {companyName} account, you agree to our
        </p>
        <span className="flex items-center">
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
