import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


const StatCard = ({ name, icon: Icon, value }) => {
    return (
        <div>
            <Card className="flex flex-col shadow-md text-zinc-700">
                <CardHeader>
                    <CardTitle className="text-lg flex items-center space-x-2">
                        <Icon className="h-5 w-5" />
                        <span>{name}</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-3xl">{value}</p>
                </CardContent>
            </Card>
        </div>
    )
}

export default StatCard