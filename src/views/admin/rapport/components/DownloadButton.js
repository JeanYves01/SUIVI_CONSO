import React, { useState } from 'react';
import { Button, Spinner, useToast } from '@chakra-ui/react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default function DownloadButton(props) {
    const [downloading, setDownloading] = useState(false);
    const toast = useToast();

    const handleDownload = async () => {
        setDownloading(true);

        const input = document.getElementById('table-to-download');
        const canvas = await html2canvas(input);
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        const imgWidth = 190;
        const pageHeight = 290;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;
        let position = 0;

        pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
        }

        const pdfBlob = pdf.output('blob');
        const url = URL.createObjectURL(pdfBlob);
        window.open(url);

        setDownloading(false);
        toast({
            title: 'Téléchargement terminé.',
            description: "Inscription réussie.",
            status: 'success',
            duration: 3000,
            isClosable: true,
        });
    };

    return (
        <div>
            <Button
                height='4vh'
                transform='translate(0%,0%)'
                borderRadius='5px'
                bg='#008F75'
                color='white'
                fontWeight='bold'
                onClick={handleDownload}
                disabled={downloading}
            >
                {downloading ? (
                    <Spinner size="sm" />
                ) : (
                    'Télécharger'
                )}
            </Button>
            {downloading && <p style={{ fontWeight: 'bold' }}>En cours...</p>}
        </div>
    );
}
