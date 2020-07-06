import React, { useCallback, useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';

import { faImage, faEdit } from '@fortawesome/free-solid-svg-icons';

import { DropZone as StyledDropZone, ImagePreview, Overlay, Icon } from './styles';

const DropZone = ({ defaultFile, onFileUploaded }) => {
    const [selectedFileUrl, setSelectedFileUrl] = useState();

    const onDrop = useCallback((acceptedFiles) => {
        const file = acceptedFiles[0];

        const fileUrl = getFileUrl(file);
        
        onFileUploaded(file);
        setSelectedFileUrl(fileUrl);
    }, [onFileUploaded]);

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: 'image/*'
    });

    const getFileUrl = (file) => URL.createObjectURL(file);

    useEffect(() => {
        const getFile = async () => {
            const file = await fetch(defaultFile)
                .then(file => file.blob());

            const fileUrl = getFileUrl(file);

            setSelectedFileUrl(fileUrl);
        };
        if(defaultFile) getFile();
    }, [defaultFile]);

    return (
        <StyledDropZone {...getRootProps()}>
            <input {...getInputProps()} accept="image/*" />
            {
                selectedFileUrl 
                    ? (
                        <>
                            <Overlay>
                                <Icon icon={faEdit} size="3x" />
                                <br />
                                <br />
                                <p>
                                    Clique aqui para trocar a imagem                              
                                </p>
                            </Overlay>
                            <ImagePreview src={selectedFileUrl} alt="Imagem da pizza" />
                        </>
                    )
                    : (
                        <p>
                            <Icon icon={faImage} size="3x"/>
                            <br />
                            <br />
                            Arraste ou clique para adicionar uma imagem
                        </p>
                    )
            }
        </StyledDropZone>
    );
};

export default DropZone;
