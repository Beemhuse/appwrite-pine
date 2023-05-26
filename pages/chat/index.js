import ImageUpload from '@/components/chat/imageUpload';
import React from 'react'

function Index() {
  function generateRandomCode() {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let code = '';
  
    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      const randomChar = characters.charAt(randomIndex);
      code += randomChar;
    }
  
    return code;
  }
  
  const randomCode = generateRandomCode();
  console.log(randomCode);
  return (
    <>
<ImageUpload />

    </>
  )
}

export default Index