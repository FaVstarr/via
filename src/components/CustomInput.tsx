import React from 'react'
import { FormControl, FormField, FormLabel, FormMessage } from './form'
import { Input } from './input'
import { Control, FieldPath} from 'react-hook-form'
import { z } from 'zod';
import { authformSchema } from '@/lib/utils';

const formSchema = authformSchema('sign-up')

interface CustomInputProps {
    
    name: FieldPath<z.infer<typeof formSchema>>
    label: string;
    placeholder: string;
    control: Control<z.infer<typeof formSchema>>
    type: 'text' | 'password' ;
  
}


const CustomInput = ({control ,name, label , placeholder, type} : CustomInputProps) => {
  return (
    <FormField
                control={control}
                name={name}
                render={({ field }) => (
                  <div className="form-item">
                    <FormLabel className="form-label">{label}</FormLabel>

                    <div className="flex w-full flex-col">
                      <FormControl>
                        <Input
                          placeholder={placeholder}
                          type={type}
                          className="input-class"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="form-message mt-2"></FormMessage>
                    </div>
                  </div>
                )}
              />
  )
}

export default CustomInput