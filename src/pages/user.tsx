import Head from "next/head";
import {Box} from "@mui/material";
import {Container} from "@mui/system";
import {UserProvider} from "@/context/user.provider";
import {User} from "@/components/user";

const Page = () => {
    return (
        <>
            <Head>
                <title>Quản lý người dùng</title>
            </Head>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    py: 8,
                }}
            >
                <Container maxWidth={false}>
                    <UserProvider>
                        <User/>
                    </UserProvider>
                </Container>
            </Box>
        </>)
}
export default Page;