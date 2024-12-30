import React from 'react'
import SettingSection from './SettingSection'
import { Lock } from 'lucide-react'
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"

const Security = () => {
    return (
        <SettingSection icon={Lock} title={"Security"}>
            <div className="flex items-center justify-between mb-4">
                <p>Two Factor Authentication</p>
                <Switch />
            </div>
            <Button variant="default" className="mt-4">Change Password</Button>
        </SettingSection>
    )
}

export default Security