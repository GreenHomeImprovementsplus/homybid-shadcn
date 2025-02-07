import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import googleIcon from '@/assets/google-icon.png';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const signupSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: 'You must accept the terms and conditions',
  }),
});

export default function SignupForm() {
  const [isTyping, setIsTyping] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      acceptTerms: false,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50'>
      <div
        className={`transition-all duration-300 ease-in-out flex ${
          isTyping ? 'w-[400px]' : 'w-[800px]'
        }`}
      >
        <Card className='w-full rounded-2xl overflow-hidden flex'>
          <div
            className={`bg-gray-200 transition-all duration-300 ease-in-out ${
              isTyping ? 'w-0 opacity-0' : 'w-1/2 opacity-100'
            }`}
          />
          <div className='w-[400px] px-4 py-8 flex-shrink-0'>
            <div className='space-y-4'>
              <div className='flex flex-col items-center space-y-3'>
                <div className='w-12 h-12 bg-gray-100 rounded-xl' />
                <h1 className='text-xl font-semibold'>Create your account</h1>
                <p className='text-sm text-gray-500'>
                  Welcome! Please fill in the details to get started.
                </p>
              </div>

              <Button
                variant={'outline'}
                className='h-9 rounded-lg shadow-sm border w-full flex items-center justify-center gap-3 text-base font-normal'
              >
                <img src={googleIcon} alt='Google' className='size-4' />
                <span className={'text-sm font-medium text-sl'}>Google</span>
              </Button>

              <div className='relative flex items-center justify-center'>
                <div className='absolute w-full border-t border-gray-200' />
                <span className='relative bg-white px-4 text-sm text-gray-500'>
                  or
                </span>
              </div>

              <Form {...form}>
                <form
                  noValidate
                  onSubmit={form.handleSubmit(onSubmit)}
                  className='space-y-4'
                >
                  <div className='flex gap-4'>
                    <FormField
                      control={form.control}
                      name='firstName'
                      render={({ field }) => (
                        <FormItem className='flex-1 space-y-1.5'>
                          <FormLabel>First name</FormLabel>
                          <FormControl>
                            <Input {...field} className='h-9 rounded-lg' />
                          </FormControl>
                          <FormMessage className='text-xs' />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='lastName'
                      render={({ field }) => (
                        <FormItem className='flex-1 space-y-1.5'>
                          <FormLabel>Last name</FormLabel>
                          <FormControl>
                            <Input {...field} className='h-9 rounded-lg' />
                          </FormControl>
                          <FormMessage className='text-xs' />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                      <FormItem className='space-y-1.5'>
                        <FormLabel>Email address</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type='email'
                            className='h-9 rounded-lg'
                          />
                        </FormControl>
                        <FormMessage className='text-xs' />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name='password'
                    render={({ field }) => (
                      <FormItem className='space-y-1.5'>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <div className='relative'>
                            <Input
                              {...field}
                              type={showPassword ? 'text' : 'password'}
                              className='h-9 rounded-lg pr-10'
                            />
                            <button
                              type='button'
                              onClick={() => setShowPassword(!showPassword)}
                              className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700'
                            >
                              {showPassword ? (
                                <EyeOff className='h-4 w-4' />
                              ) : (
                                <Eye className='h-4 w-4' />
                              )}
                            </button>
                          </div>
                        </FormControl>
                        <FormMessage className='text-xs' />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name='acceptTerms'
                    render={({ field }) => (
                      <FormItem className='flex flex-col'>
                        <div className='flex space-x-2 items-center'>
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <label
                            htmlFor='terms'
                            className='text-sm text-gray-500'
                          >
                            Accept terms and condition
                          </label>
                        </div>
                        <FormMessage className='text-xs' />
                      </FormItem>
                    )}
                  />

                  <Button
                    type='submit'
                    className='h-9 w-full rounded-lg text-sm bg-gradient-to-r from-[#020817] to-[#334155]'
                  >
                    Continue
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
