import { type GetServerSideProps, type NextPage } from "next";
import { type Provider } from "next-auth/providers";
import { getProviders, signIn } from "next-auth/react";

import { AiOutlineGoogle } from "react-icons/ai";
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
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-neutral-900">
      <div className="w-full max-w-sm border-y border-neutral-700 bg-neutral-800 px-4 py-6 shadow sm:rounded-lg sm:border-x sm:px-8">
        <div className="flex flex-col justify-center text-center">
          <span className="text-sm font-medium text-neutral-300">
            Sign in with
          </span>
          <div className="mt-6">
            <Button
              onClick={handleClick}
              icon={<AiOutlineGoogle className="h-6 w-6" />}
              title="google"
            />
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
