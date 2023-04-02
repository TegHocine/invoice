import { type GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";

type isAuthenticatedProps = {
  context: GetServerSidePropsContext;
  callback: (arg: unknown) => object;
};

export const isAuthenticated = async ({
  context,
  callback,
}: isAuthenticatedProps) => {
  const session = await getSession(context);

  if (!session)
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false,
      },
    };

  return callback(session);
};
