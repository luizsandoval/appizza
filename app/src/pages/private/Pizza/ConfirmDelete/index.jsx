import React from 'react';

import { Overlay, Container, Card, CardActions, Button } from './styles';

const ConfirmDelete = ({ handleDelete, hideConfirmDelete }) => (
    <Overlay>
        <Container>
            <Card>
                <h2>Excluir pizza?</h2>
                <p>Uma vez excluída, não será possível restaurá-la!</p>
                <CardActions>
                    <Button onClick={(e) => hideConfirmDelete(e)}>Cancelar</Button>
                    <Button primary onClick={(e) => handleDelete(e)}>
                        Excluir
                    </Button>
                </CardActions>
            </Card>
        </Container>
    </Overlay>
);

export default ConfirmDelete;
