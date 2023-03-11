'use client';

import { useRef, useState } from 'react';
import supabase from '@/utils/supabase';
import { ListField, TextField } from '@/components/Fields';
import { Button } from './Button';
import clsx from 'clsx';
import { useReCaptcha } from 'next-recaptcha-v3';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

const userTypeOptions = [
  { name: 'Game player' },
  { name: 'Game designer' },
]

export function WaitlistForm({label, darkMode}) {
  const { executeRecaptcha, reCaptchaKey, grecaptcha, loaded, error } = useReCaptcha();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState(null);
  const [validationError, setValidationError] = useState(null);
  // const [selected, setSelected] = useState(userTypeOptions[0])

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  async function signUpToWaitlist(e) {
    e.preventDefault();
    setValidationError(null);
    setLoading(true);

    try {
      const token = await executeRecaptcha("submitForm");
      console.log(token);

      if (email === null || email == "") {
        setValidationError('Please enter your email address');
        return;
      }
      if (!validateEmail(email)) {
        setValidationError('Please enter a valid email address');
        return;
      }

      setLoading(true)

      const updates = {
        email,
        added_at: new Date().toISOString(),
      };

      let { error } = await supabase.from('waitlist').upsert(updates);
      if (error) throw error;
      
      setSuccess(true)
    } catch (error) {
      if (error && error.code == "23505") {
        setValidationError('Email address already on the waiting list');
      } else {
        console.error(error);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      {success &&
        <div 
          className={clsx(
            'm-2 flex align-middle justify-center	',
            darkMode ? 'text-white' : 'text-gg-blue',
          )}>
          <EnvelopeIcon className='h-6 w-6 mr-2'/>
          <p>You’re now on the Goodgame waiting list!</p>
      </div>}

      {!success && <form noValidate={true}>
        <div className="grid sm:grid-cols-6 grid-cols-1 gap-4 items-end text-left">
          {/* <ListField
            className="col-span-6"
            id="waitlist-usertype"
            label="You are..."
            selected={selected}
            setSelected={setSelected}
            options={userTypeOptions}
          /> */}
          <div className='sm:col-span-4'>
            <TextField
              className={clsx(
                '',
                darkMode ? 'text-white' : 'text-gray-900',
              )}
              id="waitlist-email"
              label={label}
              name="waitlist-email-address"
              placeholder="Email"
              type="email"
              value={email || ''}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className={clsx(
                'xl:h-6 pl-3  text-sm font-semibold',
                darkMode ? 'text-white' : 'text-gg-red'
              )}>
                {validationError}
              </p>
          </div>
          <div className='sm:col-span-2'>
            <Button
              type="submit"
              onClick={signUpToWaitlist}
              color={darkMode ? 'white' : 'gg'}
              className={clsx(
                'disabled:bg-gray-400 hover:disabled:text-white disabled:text-white w-full',
                darkMode ? 'text-gg-blue md:hover:text-gg-red active:text-gg-red' : 'bg-gg-blue md:hover:bg-gg-red active:bg-gg-red'
              )}
              disabled={loading}
            >
              { loading ? 'Joining...' : 'Join the waitlist' }
            </Button>
            <div className='xl:h-6'></div>
          </div>
        </div>
      </form>}
    </div>
  )
}
