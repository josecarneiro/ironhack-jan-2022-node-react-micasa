import ImageInput from './ImageInput';

const MultipleImageInput = (props) => {
  const handleImageAddition = () => {
    props.onImagesChange([...props.images, '']);
  };

  return (
    <>
      {props.images.map((image, index) => {
        return (
          <ImageInput
            key={image}
            image={image}
            onImageChange={(url) => {
              props.onImagesChange(
                props.images.map((item, existingImagesIndex) =>
                  existingImagesIndex === index ? url : item
                )
              );
            }}
          />
        );
      })}
      <button onClick={handleImageAddition} type="button">
        +
      </button>
    </>
  );
};

export default MultipleImageInput;
