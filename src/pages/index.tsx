import Head from 'next/head'
import { Inter } from 'next/font/google'
import {Container} from "@mui/system";

const inter = Inter({ subsets: ['latin'] })
const Page = () => {
  return (
    <>
      <Head>
        <title>WebPage NextJS</title>
      </Head>
      <main>
          <Container>
              Test Container
          </Container>
      </main>
    </>
  )
}
export default Page