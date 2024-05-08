import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export default async function Page() {
  const supabase = createClient()

  try {
    const { data: userData, error: userError } = await supabase.auth.getUser()
    
    if (userError || !userData || !userData.user) {
      console.error("Error fetching user data:", userError)
      redirect('/login')
      return null 
    }

    const { data: userProfileData, error: profileError } = await supabase
      .from('user_profiles')
      .select('first_name, last_name')
      .eq('id', userData.user.id)
      .single()
    
    if (profileError) {
      console.error("Error fetching user profile data:", profileError)
    }

    return (
      <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center">
        <h1 className='text-2xl'>Your email: {userData.user.email}</h1>
        {userProfileData && (
          <>
            <h1 className='text-2xl'>Your first name: {userProfileData.first_name}</h1>
            <h1 className='text-2xl'>Your last name: {userProfileData.last_name}</h1>
          </>
        )}
      </div>
    )
  } catch (error) {
    console.error("Error:", error)
    return null
  }
}