import React from 'react'
import SettingSection from './SettingSection'
import { Trash } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const DangerZone = () => {
    return (
        <SettingSection icon={Trash} title={"Danger Zone"}>
            <div className="flex flex-col sm:flex-row items-center justify-between">
                <p>Permantly delete your account and all your content</p>
                <Button variant="destructive" className="mt-4 sm:mt-0">Delete</Button>
            </div>
            <Alert className="text-center mt-4" variant="destructive">
                <AlertTitle>You will lose access to this account after clicking delete</AlertTitle>
            </Alert>
        </SettingSection>
    )
}

export default DangerZone