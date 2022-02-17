import React from 'react'

import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


function Contact() {
    return (
        <>
            <Box>
                <Typography
                    variant="h6"
                    textAlign={"center"}
                    sx={{ fontWeight: 700, mt: 1.5 }}
                >HELP</Typography>
            </Box>
            <Box
                sx={{
                    boxShadow: 1,
                    padding: 2,
                    minWidth: 300,
                    margin: 1.5,
                }}
            >Alguma dúvida? Entre em contato conosco!</Box>
            <br />
            <Box
                sx={{
                    boxShadow: 1,
                    padding: 2,
                    minWidth: 300,
                    margin: 1.5,
                }}
            >Karen Okasaki - Desenvolvedora
                <Box>
                    <a
                        style={{ textDecoration: 'none' }}
                        target="_blank"
                        href={`https://api.whatsapp.com/send?phone=+5511981860227&text=Olá Karen, estou com problemas no ERP!`}
                        rel="noopener noreferrer"
                    >WhatsApp</a>
                    <Box
                        component={WhatsAppIcon}
                        color={'green'}>
                    </Box>
                </Box>
            </Box>

            <br />

            <Box
                sx={{
                    boxShadow: 1,
                    padding: 2,
                    minWidth: 300,
                    margin: 1.5,
                }}
            >Leonardo Santini - Desenvolvedor
                <Box>
                    <a
                        style={{ textDecoration: 'none' }}
                        target="_blank"
                        href={`https://api.whatsapp.com/send?phone=+5511986481533&text=Olá Leonardo, estou com problemas no ERP!`}
                        rel="noopener noreferrer"
                    >WhatsApp</a>
                    <Box
                        component={WhatsAppIcon}
                        color={'green'}>
                    </Box>
                </Box>
            </Box>

        </>
    );
}

export default Contact;