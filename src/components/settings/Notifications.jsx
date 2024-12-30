import React from 'react'
import { Switch } from "@/components/ui/switch"
import SettingSection from './SettingSection'
import { Bell } from 'lucide-react'

const Notifications = () => {
    return (
        <SettingSection icon={Bell} title={"Notifications"}>
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <p>Push Notification</p>
                    <Switch />
                </div>
                <hr />
                <div className="flex items-center justify-between">
                    <p>Email Notification</p>
                    <Switch />
                </div>
                <hr />
                <div className="flex items-center justify-between">
                    <p>SMS Notification</p>
                    <Switch />
                </div>
            </div>
        </SettingSection>
    )
}

export default Notifications