import Head from "next/head"
import { useRouter } from "next/router";
import { FC, ReactElement } from "react";
import { Navbar } from "../ui/Navbar"


interface Props {
  title?: string;
  pageDescription?: string;
  imageFullUrl?: string;
  children: ReactElement | ReactElement[];
}


export const PrincipalLayout: FC<Props> = ({ children }) => {

  const { pathname } = useRouter();

  return (
    <>
      <Head>
        <title>MNB</title>
      </Head>

      <nav>
        <Navbar />
      </nav>
      <main style={
        {
          margin: '80px auto',
          maxWidth: '1440px',
          padding: '0px 30px',
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center',
          flexDirection: 'column'
        }}>
        {children}
      </main>
    </>
  )
}
