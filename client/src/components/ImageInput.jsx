import { IKContext, IKUpload } from 'imagekitio-react';

const ImageInput = (props) => {
  const handleSuccess = (result) => {
    const { url } = result;
    props.onImageChange(url);
  };

  const handleError = (error) => {
    console.log(error);
    props.onImageChange('');
  };

  return (
    <>
      {props.image && (
        <img style={{ maxWidth: '20em' }} src={props.image} alt="Selected" />
      )}
      <IKContext
        publicKey={process.env.REACT_APP_IMAGEKIT_PUBLIC_API_KEY}
        authenticationEndpoint={process.env.REACT_APP_IMAGEKIT_AUTH_ENDPOINT}
        urlEndpoint={process.env.REACT_APP_IMAGEKIT_URL_ENDPOINT}
      >
        <IKUpload onSuccess={handleSuccess} onError={handleError} />
      </IKContext>
    </>
  );
};

export default ImageInput;
