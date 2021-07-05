import { useContext, useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';

// Components
import FloatingIconBtnBack from '../../Components/actions/FloatingIconBtnBack';
import EdgedCard from '../../Components/layouts/EdgedCard';
import RoundedCard from '../../Components/layouts/RoundedCard';
import Footer from '../../Components/layouts/Footer';
import MobileLogo from '../../Components/layouts/MobileLogo';
import Hr from '../../Components/layouts/Hr';
import FloatingIconOutlinedBtn from '../../Components/actions/FloatingIconOutlinedBtn';
import MobileBaseLayout from '../../Components/layouts/MobileBaseLayout';
// =====

// Animations
import FadeAnimation from './../../Animations/FadeAnimation';
// =====

// Utils
import {
  isSigninFormValid,
  isSignupFormValid,
  validatePassword,
  validateUsername,
} from '../../lib/validation';
// =====

import { CircularProgress } from '@material-ui/core';

// Context
import AuthContext from './../../Context/Auth/AuthContext';
import ToastContext from './../../Context/Toast/ToastContext';

const Join = () => {
  const location = useLocation();

  const [authMenu, setAuthMenu] = useState(() => {
    const menu = new URLSearchParams(location.search).get('menu');
    if (menu) return menu;
    return 'signin';
  });

  const [signupFields, setSignupFields] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });
  const [signinFields, setSigninFields] = useState({
    username: '',
    password: '',
  });

  const [validationErrors, setValidationErrors] = useState({
    usernameError: '',
    passwordError: '',
    confirmPasswordError: '',
  });

  // Context
  const { signup, signin, loading } = useContext(AuthContext);
  const { setToast } = useContext(ToastContext);

  const handleAuthMenuSwitch = e => {
    e.preventDefault();
    setAuthMenu(e.target.id);
  };

  const handleSignupFormChange = ({ target }) => {
    const { value, name } = target;
    validateField(name, value);
    setSignupFields({ ...signupFields, [name]: value });
  };
  const handleSigninFormChange = ({ target }) => {
    const { value, name } = target;
    validateField(name, value);
    setSigninFields({ ...signinFields, [name]: value });
  };

  const validateField = (field, value) => {
    let usernameError = '';
    let passwordError = '';

    if (field === 'username') {
      usernameError = validateUsername(value);
    }
    if (field === 'password') {
      passwordError = validatePassword(value);
    }

    if (usernameError)
      return setValidationErrors({
        ...validationErrors,
        usernameError: usernameError,
      });
    if (passwordError)
      return setValidationErrors({
        ...validationErrors,
        passwordError: passwordError,
      });

    setValidationErrors({
      usernameError: '',
      passwordError: '',
    });
  };

  const handleFormSubmit = async e => {
    e.preventDefault();

    const signupUser = {
      username: signupFields.username.trim(),
      password: signupFields.password.trim(),
    };
    const signinUser = {
      username: signinFields.username.trim(),
      password: signinFields.password.trim(),
    };

    if (authMenu === 'signup') {
      const isNotValid = await isSignupFormValid(signupUser);

      if (isNotValid)
        return setToast({
          variant: 'error',
          message: `Error signing-up, empty/wrong pattern fields. ${isNotValid
            .replace('"', '')
            .replace('"', '')}`,
        });
      return signup(signupUser);
    } else if (authMenu === 'signin') {
      const isNotValid = await isSigninFormValid(signinUser);

      if (isNotValid)
        return setToast({
          variant: 'error',
          message: `Error signing-in, empty/wrong pattern fields. ${isNotValid
            .replace('"', '')
            .replace('"', '')}`,
        });

      return signin(signinUser);
    }
  };

  useEffect(() => {
    if (signupFields.confirmPassword !== signupFields.password)
      return setValidationErrors({
        ...validationErrors,
        confirmPasswordError: 'Passwords are not matching',
      });

    setValidationErrors({
      ...validationErrors,
      confirmPasswordError: '',
    });
  }, [signupFields.password, signupFields.confirmPassword]);

  return (
    <MobileBaseLayout header={<JoinPageHeader />}>
      <main className='self-center h-2/6'>
        <MobileLogo />
      </main>

      <div className='h-3/4 flex flex-col justify-end items-center'>
        <div className='w-full h-full'>
          <EdgedCard className='relative dark:bg-dark-backgroundDark h-full pb-7 w-full flex flex-col space-y-8 items-center'>
            {authMenu === 'signup' ? (
              <RoundedCard className='absolute transform origin-center w-9/12 h-auto top-5 -translate-y-1/4 dark:bg-dark-background'>
                <div className='flex flex-col h-full px-6 items-center space-y-4 pt-4 pb-8'>
                  <div className='text-xl tracking-widest font-light flex flex-col items-center dark:text-whites-dark'>
                    <h1>sign-up</h1>
                    <Hr className='dark:border-secondary-dark opacity-20 w-8 self-end' />
                  </div>
                  <form
                    onSubmit={e => {
                      handleFormSubmit(e);
                    }}
                    className='text-whites-dark text-sm font-light w-full flex flex-col space-y-2 items-center'
                    autoComplete='off'
                  >
                    <label
                      className='w-full self-start pl-2'
                      htmlFor='username'
                    >
                      username
                    </label>
                    <input
                      type='text'
                      className='w-full text-xs dark:focus:ring-transparent dark:bg-dark-backgroundDark h-7 rounded-2xl dark:focus:ring-offset-transparent-dark border-transparent dark:focus:border-opacity-25 dark:focus:border-secondary-dark placeholder-whites-dark placeholder-opacity-20 '
                      name='username'
                      id='username'
                      value={signupFields.username}
                      onChange={e => {
                        handleSignupFormChange(e);
                      }}
                    />
                    {validationErrors.usernameError && (
                      <span className='text-xs text-primary-light tracking-tighter'>
                        {validationErrors.usernameError}
                      </span>
                    )}
                    <label
                      className='w-full self-start pl-2'
                      htmlFor='password'
                    >
                      password
                    </label>
                    <input
                      type='text'
                      className='w-full text-xs dark:focus:ring-transparent dark:bg-dark-backgroundDark h-7 rounded-2xl dark:focus:ring-offset-transparent-dark border-transparent dark:focus:border-opacity-25 dark:focus:border-secondary-dark placeholder-whites-dark placeholder-opacity-20 '
                      name='password'
                      id='password'
                      value={signupFields.password}
                      onChange={e => {
                        handleSignupFormChange(e);
                      }}
                    />
                    {validationErrors.passwordError && (
                      <span className='text-xs text-primary-light tracking-tighter'>
                        {validationErrors.passwordError}
                      </span>
                    )}
                    <label
                      className='w-full  self-start pl-2'
                      htmlFor='confirmPassword'
                    >
                      confirm password
                    </label>
                    <input
                      type='text'
                      className='w-full text-xs dark:focus:ring-transparent dark:bg-dark-backgroundDark h-7 rounded-2xl dark:focus:ring-offset-transparent-dark border-transparent dark:focus:border-opacity-25 dark:focus:border-secondary-dark placeholder-whites-dark placeholder-opacity-20 '
                      name='confirmPassword'
                      id='confirmPassword'
                      value={signupFields.confirmPassword}
                      onChange={e => {
                        handleSignupFormChange(e);
                      }}
                    />
                    {validationErrors.confirmPasswordError && (
                      <span className='text-xs w-full text-primary-light  tracking-tighter'>
                        {validationErrors.confirmPasswordError}
                      </span>
                    )}
                    <div className='relative self-end pt-3 pr-4 dark:text-primary-light'>
                      {loading ? (
                        <div className='flex justify-center py-0.5 items-center w-16'>
                          <CircularProgress
                            color='inherit'
                            size={25}
                            variant='indeterminate'
                          />
                        </div>
                      ) : (
                        <FloatingIconOutlinedBtn size='small'>
                          sign-up
                        </FloatingIconOutlinedBtn>
                      )}

                      <button
                        type='submit'
                        className='absolute transform -left-1 top-3 w-28 h-8'
                        id='signup'
                      ></button>
                    </div>
                  </form>

                  <footer className='text-xs tracking-tight h-full flex flex-col justify-end dark:text-whites-dark'>
                    <div>
                      already have an account?{' '}
                      <span
                        id='signin'
                        onClick={e => {
                          handleAuthMenuSwitch(e);
                        }}
                        className='underline dark:text-whites-light cursor-pointer'
                      >
                        signin
                      </span>{' '}
                      here.
                    </div>
                  </footer>
                </div>
              </RoundedCard>
            ) : (
              <RoundedCard className='absolute transform origin-center w-9/12 h-auto top-12 -translate-y-1/4 dark:bg-dark-background'>
                <div className='flex flex-col h-full px-6 items-center space-y-4 pt-4 pb-8'>
                  <div className='text-xl tracking-widest font-light flex flex-col items-center dark:text-whites-dark'>
                    <h1>sign-in</h1>
                    <Hr className='dark:border-secondary-dark opacity-20 w-4 self-end' />
                  </div>
                  <form
                    onSubmit={e => {
                      handleFormSubmit(e);
                    }}
                    className='text-whites-dark text-sm font-light w-full flex flex-col space-y-2 items-center'
                    autoComplete='off'
                  >
                    <label
                      className='w-full  self-start pl-2'
                      htmlFor='username'
                    >
                      username
                    </label>
                    <input
                      type='text'
                      className='w-full text-xs dark:focus:ring-transparent dark:bg-dark-backgroundDark h-7 rounded-2xl dark:focus:ring-offset-transparent-dark border-transparent dark:focus:border-opacity-25 dark:focus:border-secondary-dark placeholder-whites-dark placeholder-opacity-20 '
                      name='username'
                      id='username'
                      value={signinFields.username}
                      onChange={e => {
                        handleSigninFormChange(e);
                      }}
                    />
                    {validationErrors.usernameError && (
                      <span className='text-xs text-primary-light tracking-tighter'>
                        {validationErrors.usernameError}
                      </span>
                    )}
                    <label
                      className='w-full  self-start pl-2'
                      htmlFor='password'
                    >
                      password
                    </label>
                    <input
                      type='text'
                      className='w-full text-xs dark:focus:ring-transparent dark:bg-dark-backgroundDark h-7 rounded-2xl dark:focus:ring-offset-transparent-dark border-transparent dark:focus:border-opacity-25 dark:focus:border-secondary-dark placeholder-whites-dark placeholder-opacity-20 '
                      name='password'
                      id='password'
                      value={signinFields.password}
                      onChange={e => {
                        handleSigninFormChange(e);
                      }}
                    />
                    {validationErrors.passwordError && (
                      <span className='text-xs text-primary-light tracking-tighter'>
                        {validationErrors.passwordError}
                      </span>
                    )}
                    <div className='relative self-end pt-3 pr-4'>
                      {loading ? (
                        <div className='flex justify-center py-1 items-center w-16'>
                          <CircularProgress
                            color='inherit'
                            size={24}
                            variant='indeterminate'
                          />
                        </div>
                      ) : (
                        <>
                          <FloatingIconOutlinedBtn size='small'>
                            sign-in
                          </FloatingIconOutlinedBtn>
                          <button
                            type='submit'
                            className='absolute transform  top-3 w-24 h-8'
                            id='signin'
                          ></button>
                        </>
                      )}
                    </div>
                  </form>
                  <footer className='text-xs tracking-tight h-full flex flex-col justify-end dark:text-whites-dark'>
                    <div>
                      don't have an account?{' '}
                      <span
                        id='signup'
                        onClick={e => {
                          handleAuthMenuSwitch(e);
                        }}
                        className='underline dark:text-whites-light cursor-pointer'
                      >
                        signup
                      </span>{' '}
                      here.
                    </div>
                  </footer>
                </div>
              </RoundedCard>
            )}
            <div className='absolute bottom-5 right-5'>
              <Footer />
            </div>
          </EdgedCard>
        </div>
      </div>
    </MobileBaseLayout>
  );
};

const JoinPageHeader = () => {
  return (
    <div className='w-full px-8 flex flex-row justify-between'>
      <Link to='/'>
        <FloatingIconBtnBack>
          <button>Back</button>
        </FloatingIconBtnBack>
      </Link>
    </div>
  );
};

export default Join;
