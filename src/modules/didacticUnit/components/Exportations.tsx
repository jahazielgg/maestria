// Opción 1: Importaciones estáticas (RECOMENDADO)
import { saveAs } from 'file-saver'
import html2pdf from 'html2pdf.js'
import { marked } from 'marked'

export const exportToPDFAdvanced = async (markdownText: string) => {
  // Configurar marked con extensiones
  marked.setOptions({
    gfm: true, // GitHub Flavored Markdown
    breaks: false,
    pedantic: false,
  })

  const html = marked.parse(markdownText)

  const styledHtml = `
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; margin: 40px; }
          h1 { color: #1976d2; border-bottom: 2px solid #1976d2; padding-bottom: 8px; }
          h2 { color: #1976d2; border-bottom: 1px solid #ddd; padding-bottom: 4px; }
          h3 { color: #1976d2; margin-top: 24px; }
          table { width: 100%; border-collapse: collapse; margin: 20px 0; }
          th { background-color: #f5f5f5; padding: 12px; border: 1px solid #ddd; font-weight: bold; text-align: left; }
          td { padding: 12px; border: 1px solid #ddd; vertical-align: top; }
          code { background-color: #f5f5f5; padding: 2px 6px; border-radius: 4px; font-family: 'Courier New', monospace; }
          pre { background-color: #f5f5f5; padding: 16px; border-radius: 4px; overflow-x: auto; }
          pre code { background: none; padding: 0; }
          blockquote { border-left: 4px solid #1976d2; padding-left: 16px; margin: 16px 0; font-style: italic; color: #555; }
          ul, ol { margin: 16px 0; padding-left: 24px; }
          li { margin: 4px 0; }
        </style>
      </head>
      <body>${html}</body>
    </html>
  `

  const element = document.createElement('div')
  element.innerHTML = styledHtml

  return html2pdf()
    .from(element)
    .set({
      filename: 'unidad-didactica.pdf',
      margin: [20, 20, 20, 20],
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        letterRendering: true,
        allowTaint: false
      },
      jsPDF: {
        unit: 'mm',
        format: 'a4',
        orientation: 'landscape',
        compress: true
      }
    })
    .save()
}

// Para Word - Opción simplificada sin importación dinámica
export const exportToWordAdvanced = (markdownText: string) => {
  try {
    // Configurar marked
    marked.setOptions({
      gfm: true,
      breaks: false,
      pedantic: false,
    })

    const html = marked.parse(markdownText)

const wordHtml = `
  <html xmlns:o="urn:schemas-microsoft-com:office:office" 
        xmlns:w="urn:schemas-microsoft-com:office:word" 
        xmlns="http://www.w3.org/TR/REC-html40">
    <head>
      <meta charset="utf-8">
      <meta name="ProgId" content="Word.Document">
      <meta name="Generator" content="Microsoft Word">
      <meta name="Originator" content="Microsoft Word">
      <style>
        @page {
          size: 29.7cm 21cm; /* A4 horizontal */
          margin: 2cm;
        }
        body { font-family: Arial, sans-serif; line-height: 1.6; margin: 0; }
        h1 { color: #1976d2; font-size: 24px; margin-bottom: 16px; }
        h2 { color: #1976d2; font-size: 20px; margin-bottom: 12px; }
        h3 { color: #1976d2; font-size: 16px; margin-bottom: 8px; }
        table { width: 100%; border-collapse: collapse; margin: 20px 0; }
        th { background-color: #f5f5f5; padding: 8px; border: 1px solid #000; font-weight: bold; }
        td { padding: 8px; border: 1px solid #000; }
        p { margin: 12px 0; }
        ul, ol { margin: 16px 0; padding-left: 24px; }
        li { margin: 4px 0; }
      </style>
    </head>
    <body>${html}</body>
  </html>
`


    const blob = new Blob([wordHtml], {
      type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    })

    saveAs(blob, 'unidad-didactica.doc')

  } catch (error) {
    console.error('Error al exportar a Word:', error)
    throw new Error('Error al generar el archivo Word')
  }
}