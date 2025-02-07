'use client';

import { useState } from 'react';
import ChooseRole from './components/ChooseRole';
import SignupForm from './components/SignupForm';

export default function SignupPage() {
  const [step, setStep] = useState('choose-role');
  const [selectedRole, setSelectedRole] = useState('');

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    setStep('signup-form');
  };

  return (
    <div className='container mx-auto'>
      {step === 'choose-role' && <ChooseRole onRoleSelect={handleRoleSelect} />}
      {step === 'signup-form' && <SignupForm selectedRole={selectedRole} />}
    </div>
  );
}
