import React from 'react'
import SettingSection from './SettingSection'
import { User } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const Profile = () => {
    return (
        <SettingSection icon={User} title={"Profile"}>
            <div className='flex flex-col sm:flex-row items-center justify-between mb-6'>
                <div className='flex items-center'>
                    <Avatar className='object-cover mr-4'>
                        <AvatarFallback>SS</AvatarFallback>
                    </Avatar>
                    <div>
                        <h3 className='text-lg font-semibold'>Sanskar Sonwal</h3>
                        <p>sanskar666sonwal@fake.com</p>
                    </div>
                </div>
                <Button variant="default">Edit Profile</Button>
            </div>
        </SettingSection>
    )
}

export default Profile