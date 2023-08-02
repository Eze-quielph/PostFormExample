 import { useState } from 'react'
 import axios from 'axios'


/* function App() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    if (!selectedFile) {
      alert('Por favor, seleccione un archivo de música.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('musicFile', selectedFile); // Asegúrate de que el campo coincida con el nombre en el servidor Express

      const response = await axios.post('http://localhost:3001/musica/upload', formData);

      console.log('URL del archivo cargado:', response.data.fileUrl);
    } catch (error) {
      console.error('Error al subir el archivo:', error.message);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Subir archivo</button>
    </div>
  );
}
 */



// export default App

function App() {
  const [selectedFile, setSelectedFile] = useState(null);

 const handleFileChange = (event) => {
   setSelectedFile(event.target.files[0]);
 };

 const handleFileUpload = async () => {
   if (!selectedFile) {
     alert('Por favor, seleccione un archivo de música.');
     return;
   }

   try {
     const formData = new FormData();
     formData.append('multipartFile', selectedFile); // 

     const response = await axios.post('https://postimagemicroservice-production.up.railway.app/cloudinary/upload', formData);

    console.log(response.data)
     console.log('URL del archivo cargado:', response.data.secure_url);
   } catch (error) {
     console.error('Error al subir el archivo:', error.message);
   }
 };

 return (
   <div>
     <h1>Subir archivo de música</h1>
     <input type="file" name="musicFile" onChange={handleFileChange} />
     <button onClick={handleFileUpload}>Subir</button>
   </div>
 );
};

export default App;
