'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export async function signup(formData: FormData) {
  const supabase = createClient()

  const email = String(formData.get('email'));
  const password = String(formData.get('password'));
  const firstName = String(formData.get('first_name'));
  const lastName = String(formData.get('last_name'));

  const data = {
    email,
    password,
    options: {
      data: {
        first_name: firstName,
        last_name: lastName,
      },
  }
}

  const { error } = await supabase.auth.signUp(data)
  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}
