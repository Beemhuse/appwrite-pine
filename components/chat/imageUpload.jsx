import { useState } from 'react';
import { account } from "@/appwrite/config";
import api from '@/pages/api/hello';
const ImageUpload = () => {

    const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    
    setSelectedImage(file);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
  console.log(selectedImage)
    // try {
    //  api.createDocument(formData)

    //   if (response.ok) {
    //     const data = await response.json();
    //     console.log(data);
    //     // Handle the response from the server
    //   } else {
    //     throw new Error('Error occurred during upload');
    //   }
    // } catch (error) {
    //   console.error(error);
    //   // Handle any errors that occurred during the upload
    // }
  };

  return (
    <div>
      <h1>Image Upload</h1>
      <form id="uploadForm" encType="multipart/form-data" onSubmit={handleSubmit}>
        <input type="file" name="image" id="imageInput" onChange={handleImageChange}/>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default ImageUpload;
