import { type GetServerSideProps, type NextPage } from "next";
import { type Provider } from "next-auth/providers";
import { getProviders, signIn } from "next-auth/react";

import { Google } from "public/icons";
import Button from "~/components/Button";

type SignInProps = {
  providers: Record<string, Provider>;
};

const Signin: NextPage<SignInProps> = ({ providers }) => {
  const handleClick = () => {
    void signIn(providers.google?.id, {
      callbackUrl: `/`,
    });
    return;
  };
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-gray-900">
      <div className="w-full max-w-sm border-y border-gray-700 bg-gray-800 px-4 py-6 shadow sm:rounded-lg sm:border-x sm:px-8">
        <div className="animate-fade-in flex flex-col justify-center text-center">
          <span className="text-sm font-medium text-gray-300">
            Sign in with
          </span>
          <div className="mt-6">
            <Button onClick={handleClick} Icon={Google} title="google" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;

export const getServerSideProps: GetServerSideProps = async () => {
  const providers = await getProviders();
  return {
    props: { providers },
  };
};
