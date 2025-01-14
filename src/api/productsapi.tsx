const productapi = process.env.REACT_APP_API_URL + "products/"
console.log(productapi)
export async function reqGetAllProduct() {
    try {
      const response = await fetch(productapi + "?action=selectall" , {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',         
        },
        //body: JSON.stringify(postData),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error:', error);
      throw error; // 重新抛出错误，以便调用者可以处理它
    }
};

export async function reqUploadFile(file: File) {
    try {
      const formData = new FormData();
      formData.append('file', file);
      
      const response = await fetch(process.env.REACT_APP_FILE_URL + "upload", {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
};
export async function reqGetProductbyFilter(filterParams:any) {
    try {
      const response = await fetch(productapi + "?action=selectbyfilters" , {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',         
        },
        body: JSON.stringify(filterParams),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error:', error);
      throw error; // 重新抛出错误，以便调用者可以处理它
    }
};
