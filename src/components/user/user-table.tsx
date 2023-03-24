import {ChangeEvent, useRef, useState} from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
    Box,
    Button,
    Card,
    Checkbox,
    Modal,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material';
import Delete from '@mui/icons-material/Delete';
import {useUserContext} from "@/hooks/useUserContext";
import {UserItem} from "@/components/user/user-item";
import {User} from "@/entity/user";
import {userService} from "@/services/user.service";

export const UserTable = () => {
    const [selectedUserIds, setSelectedUserIds] = useState<string[]>([]);
    const [openModalQR, setOpenModalQR] = useState(false);

    const {
        state: { users, openModal, loading, userSelected },
        setUsers,
        setLoading,
        setOpenModal,
        setUserSelected,
    } = useUserContext();

    const canvasRef = useRef();


    const handleSelectAll = (event:ChangeEvent<HTMLInputElement>) => {
        let newSelectedUserIds:string[] = [];
        if (event.target.checked) newSelectedUserIds = users.map((user) => user.id);
        setSelectedUserIds(newSelectedUserIds);
    };

    const handleSelectOne = (event:ChangeEvent<HTMLInputElement>, id: any) => {
        if (event.target.checked) return setSelectedUserIds([...selectedUserIds, id]);
        setSelectedUserIds(selectedUserIds.filter((x) => x != id));
    };

    const handleIssue = async (user:User) => {
        setOpenModalQR(true);
    };

    const handleEdit = (user: User) => {
        const { password, ...userinfo } = user;
        setUserSelected(user);
        setOpenModal(true);
    };

    const handleRemoveManyUser = () => {
        setLoading(true);
        userService.deleteMany(selectedUserIds);
        let usersTemp = users;
        for (const userId of selectedUserIds) {
            usersTemp = usersTemp.filter((user) => user.id !== userId);
        }
        setSelectedUserIds([]);
        setUsers(usersTemp);
        setLoading(false);
    };

    const handleRemoveOneUser = async (userId:string) => {
        setLoading(true);
        await userService.delete(userId);
        const custom = users.filter((cur) => cur.id !== userId);
        setUsers(custom);
        setLoading(false);
    };

    function NameColum() {
        return (
            <TableRow sx={{ backgroundColor: '#f55145' }}>
                <TableCell padding="checkbox">
                    <Checkbox
                        checked={selectedUserIds.length === users.length}
                        color="primary"
                        indeterminate={selectedUserIds.length > 0 && selectedUserIds.length < users.length}
                        onChange={(event) => {
                            handleSelectAll(event);
                        }}
                    />
                </TableCell>
                <TableCell align="center">
                    <Typography
                        sx={{
                            color: '#ffff00',
                            fontSize: 12,
                            fontWeight: 600,
                            letterSpacing: 0.5,
                            fontFamily:
                                '"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
                        }}
                    >
                        Mã cán bộ
                    </Typography>
                </TableCell>
                <TableCell align="center">
                    <Typography
                        sx={{
                            color: '#ffff00',
                            fontSize: 12,
                            fontWeight: 600,
                            letterSpacing: 0.5,
                            fontFamily:
                                '"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
                        }}
                    >
                        Tên đăng nhập
                    </Typography>
                </TableCell>
                <TableCell align="center">
                    <Typography
                        sx={{
                            color: '#ffff00',
                            fontSize: 12,
                            fontWeight: 600,
                            letterSpacing: 0.5,
                            fontFamily:
                                '"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
                        }}
                    >
                        Họ và tên
                    </Typography>
                </TableCell>
                <TableCell align="center">
                    <Typography
                        sx={{
                            color: '#ffff00',
                            fontSize: 12,
                            fontWeight: 600,
                            letterSpacing: 0.5,
                            fontFamily:
                                '"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
                        }}
                    >
                        SDT
                    </Typography>
                </TableCell>
                <TableCell align="center">
                    <Typography
                        sx={{
                            color: '#ffff00',
                            fontSize: 12,
                            fontWeight: 600,
                            letterSpacing: 0.5,
                            fontFamily:
                                '"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
                        }}
                    >
                        Thời gian tạo
                    </Typography>
                </TableCell>
                <TableCell align="center">
                    <Typography
                        sx={{
                            color: '#ffff00',
                            fontSize: 12,
                            fontWeight: 600,
                            letterSpacing: 0.5,
                            fontFamily:
                                '"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
                        }}
                    >
                        Thao tác
                    </Typography>
                </TableCell>
            </TableRow>
        );
    }

    function NameColumDelete() {
        return (
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        checked={selectedUserIds.length === users.length}
                        color="primary"
                        indeterminate={selectedUserIds.length > 0 && selectedUserIds.length < users.length}
                        onChange={(event) => {
                            handleSelectAll(event);
                        }}
                    />
                </TableCell>
                <TableCell>Select item: {selectedUserIds.length}</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell align="right">
                    <Button size="small" variant="contained" startIcon={<Delete />} color="error" onClick={handleRemoveManyUser}>
                        Xóa
                    </Button>
                </TableCell>
            </TableRow>
        );
    }


    return (
        <Card sx={{ mt: 3 }}>
            <PerfectScrollbar>
                <Box sx={{ minWidth: 1050 }}>
                    <Table>
                        <TableHead>{selectedUserIds.length > 0 ? <NameColumDelete /> : <NameColum />}</TableHead>
                        <TableBody>
                            {users.map((user) => {
                                return (
                                    <UserItem
                                        key={user.id}
                                        user={user}
                                        selected={selectedUserIds.indexOf(user.id) !== -1}
                                        onCheck={handleSelectOne}
                                        onIssue={handleIssue}
                                        onEdit={handleEdit}
                                        onDelete={handleRemoveOneUser}
                                    />
                                );
                            })}
                        </TableBody>
                    </Table>
                </Box>
            </PerfectScrollbar>

            <Modal
                open={openModalQR}
                onClose={() => setOpenModalQR(false)}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Box
                    sx={{
                        backgroundColor: '#fff',
                        padding: 2,
                        borderRadius: 1,
                    }}
                >
                    <Typography
                        sx={{
                            textAlign: 'center',
                        }}
                    >
                        Quét QR code
                    </Typography>
                    <canvas></canvas>
                </Box>
            </Modal>
        </Card>
    );
};
