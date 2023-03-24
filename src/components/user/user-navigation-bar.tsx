import {useUserContext} from '../../hooks/useUserContext';
import {Box, Button, Card, CardContent, InputAdornment, SvgIcon, TextField, Typography} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export const UserNavigationBar = () => {
    return (
        <Box>
            <Box
                sx={{
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    m: -1,
                }}
            >
                <Typography sx={{m: 1}} variant="h4">
                    Quản lý người dùng
                </Typography>
                <Box sx={{m: 1}}>
                    <Button
                        color="primary"
                        variant="contained"
                        sx={{
                            marginRight: 1,
                            bgcolor: '#008000',
                            ':hover': {
                                bgcolor: '#005400',
                                color: 'white',
                            },
                        }}
                    >
                        Thêm người dùng
                    </Button>
                </Box>
            </Box>
            <Box sx={{mt: 3}}>
                <Card>
                    <CardContent>
                        <Box sx={{maxWidth: 500}}>
                            <TextField
                                fullWidth
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SvgIcon color="action" fontSize="small">
                                                <SearchIcon/>
                                            </SvgIcon>
                                        </InputAdornment>
                                    ),
                                }}
                                placeholder="Tìm kiếm người dùng"
                                variant="outlined"
                            />
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    );
};
