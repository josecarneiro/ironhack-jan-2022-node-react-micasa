import ImageInput from './ImageInput';

const AuthenticationForm = (props) => {
  const handleSubmission = (event) => {
    event.preventDefault();
    props.onAuthenticationSubmit();
  };

  return (
    <form onSubmit={handleSubmission}>
      {props.displayInputs.includes('name') && (
        <>
          <label htmlFor="input-name">Name</label>
          <input
            id="input-name"
            type="text"
            placeholder="Name"
            value={props.user.name}
            onChange={(event) =>
              props.onUserChange({ ...props.user, name: event.target.value })
            }
          />
        </>
      )}

      {props.displayInputs.includes('email') && (
        <>
          <label htmlFor="input-email">Email</label>
          <input
            id="input-email"
            type="email"
            placeholder="Email"
            value={props.user.email}
            onChange={(event) =>
              props.onUserChange({ ...props.user, email: event.target.value })
            }
          />
        </>
      )}

      {props.displayInputs.includes('picture') && (
        <>
          {/* <label htmlFor="input-picture">Picture</label>
          <input
            id="input-picture"
            type="text"
            placeholder="Picture"
            value={props.user.picture}
            onChange={(event) =>
              props.onUserChange({ ...props.user, picture: event.target.value })
            }
          /> */}
          <ImageInput
            image={props.user.picture}
            onImageChange={(picture) =>
              props.onUserChange({ ...props.user, picture })
            }
          />
        </>
      )}

      {props.displayInputs.includes('password') && (
        <>
          <label htmlFor="input-password">Password</label>
          <input
            id="input-password"
            type="password"
            placeholder="Password"
            value={props.user.password}
            onChange={(event) =>
              props.onUserChange({
                ...props.user,
                password: event.target.value
              })
            }
          />
        </>
      )}

      <button>{props.buttonLabel}</button>
    </form>
  );
};

export default AuthenticationForm;
