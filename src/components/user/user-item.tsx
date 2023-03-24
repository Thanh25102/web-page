import {Button, Checkbox, TableCell, TableRow} from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {User} from "@/entity/user";
import PopupState, {bindMenu, bindTrigger} from "material-ui-popup-state";

interface UserItemProps {
    user: User;
    selected: boolean;
    onCheck: (e: React.ChangeEvent<HTMLInputElement>, id: string) => void;
    onIssue: (user: User) => void;
    onEdit: (user: User) => void;
    onDelete: (userId: string) => void;
}

export function UserItem(props: UserItemProps) {
    const {user, selected, onCheck, onIssue, onEdit, onDelete} = props;
    return (
        <TableRow hover key={user.id} selected={selected}>
            <TableCell padding="checkbox">
                <Checkbox
                    checked={selected}
                    onChange={(event) => {
                        onCheck(event, user.id);
                    }}
                />
            </TableCell>
            <TableCell align="left">{user?.code}</TableCell>
            <TableCell align="center">{user?.username}</TableCell>
            <TableCell align="left">{user?.firstName}</TableCell>
            <TableCell align="center">{user?.phone}</TableCell>
            <TableCell align="center">{new Date().toLocaleDateString()}</TableCell>
            <TableCell align="center">
                <PopupState variant="popover" popupId="popup-menu">
                    {(popupState) => (
                        <React.Fragment>
                            <Button
                                variant="contained"
                                {...bindTrigger(popupState)}
                                endIcon={<ExpandMore />}
                                sx={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    minWidth: 170,
                                    bgcolor: '#008000',
                                    ':hover': {
                                        bgcolor: '#005400',
                                        color: 'white',
                                    },
                                }}
                            >
                                Hành động
                            </Button>
                            <Menu {...bindMenu(popupState)}>
                                <MenuItem
                                    onClick={() => {
                                        popupState.close();
                                        onIssue(user);
                                    }}
                                    sx={{ alignItems: 'center', justifyContent: 'center', minWidth: 170 }}
                                >
                                    Hiển thị mã QR
                                </MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        popupState.close();
                                        onEdit(user);
                                    }}
                                    sx={{ alignItems: 'center', justifyContent: 'center', minWidth: 170 }}
                                >
                                    Sửa
                                </MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        popupState.close();
                                        onDelete(user.id);
                                    }}
                                    sx={{ alignItems: 'center', justifyContent: 'center', minWidth: 170, color: 'red' }}
                                >
                                    Xóa
                                </MenuItem>
                            </Menu>
                        </React.Fragment>
                    )}
                </PopupState>
            </TableCell>
        </TableRow>
    );
}
