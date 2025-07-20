export async function downloadFileFromPublic(
  filePath?: string,
  downloadName?: string
) {
  if (!filePath || !downloadName) {
    console.warn("No hay archivo o nombre de descarga especificado.");
    return;
  }
  try {
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error("No se pudo descargar el archivo.");
    }
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = downloadName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Error descargando el archivo:", error);
  }
}
