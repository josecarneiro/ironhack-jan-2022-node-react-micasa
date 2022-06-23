import ImageInput from './ImageInput';
import './MultipleImageInput.scss';

const MultipleImageInput = (props) => (
  <>
    <div className="multiple-image-list">
      {props.images.map((image, index) => (
        <div key={image} className="multiple-image-item">
          <img src={image} alt={`#${index}`} />
          <button
            type="button"
            onClick={() =>
              props.onImagesChange(props.images.filter((_, i) => i === index))
            }
          >
            X
          </button>
        </div>
      ))}
    </div>
    <ImageInput
      onImageChange={(url) => props.onImagesChange([...props.images, url])}
    />
  </>
);

export default MultipleImageInput;
