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

export const DatacommSignUp = () => {
  return (
    <Card className="w-[497px] px-10 py-3 rounded-none h-fit flex-col justify-between">
      <CardHeader className="flex justify-start">
        <Image
          src={"/assets/images/mock-logo.svg"}
          alt="logo"
          width={70}
          height={70}
          className="mr-2"
        />
      </CardHeader>
      <CardContent className="flex-col gap-5">
        <CardTitle className="text-2xl text-[#1D1F2C]">
          Welcome DataComm!
        </CardTitle>
        <CardDescription className="text-sm text-[#1D1F2C]">
          Sign up to Datacomm to start building personalized outreach <br /> for
          your clients
        </CardDescription>
        <div className="grid grid-cols-1 gap-5 mt-5">
          <DatacommInput type={InputTypes.FULLNAME} />
          <DatacommInput type={InputTypes.EMAIL} />
          <DatacommInput type={InputTypes.PASSWORD} />
          <DatacommButton
            iconType={ButtonIconTypes.NONE}
            type={ButtonTypes.PRIMARY}
            title={"Sign Up"}
          />
        </div>
        <span className="flex gap-5 my-4 justify-center items-center">
          <Separator className="w-[53px] h-[2px]" />
          <p className="text-[#A5A5AB]">or</p>
          <Separator className="w-[53px] h-[2px]" />
        </span>

        <div className="grid grid-cols-1 gap-2">
          <DatacommButton
            type={ButtonTypes.SECONDARY}
            iconType={ButtonIconTypes.PASSKEY}
            title={"Continue with SSO"}
          />

          <DatacommButton
            type={ButtonTypes.SECONDARY}
            iconType={ButtonIconTypes.GOOGLE}
            title={"Continue with Google"}
          />
          <span className="flex gap-1 mt-2">
            <p className="text-sm">Already have an account?</p>
            <DatacommLink type={LinkTypes.STANDARD} url={"#"} title={"Login"} />
          </span>
        </div>
      </CardContent>
      <CardFooter className="w-[264px grid grid-cols-1">
        <p className="text-xs text-[#777980]">
          By signing up for a DataComm account, you agree to our
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
