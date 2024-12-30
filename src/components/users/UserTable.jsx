import React, { useState } from 'react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const UserTable = () => {
    const userData = [
        { id: 1, name: "John Doe", email: "john.doe@example.com", role: "Admin", status: "Active" },
        { id: 2, name: "Jane Smith", email: "jane.smith@example.com", role: "Customer", status: "Inactive" },
        { id: 3, name: "Samuel Green", email: "samuel.green@example.com", role: "Moderator", status: "Active" },
        { id: 4, name: "Emily Brown", email: "emily.brown@example.com", role: "Customer", status: "Active" },
        { id: 5, name: "Michael Johnson", email: "michael.johnson@example.com", role: "Customer", status: "Inactive" },
        { id: 6, name: "Sarah Wilson", email: "sarah.wilson@example.com", role: "Moderator", status: "Active" },
        { id: 7, name: "David Lee", email: "david.lee@example.com", role: "Customer", status: "Inactive" },
        { id: 8, name: "Sophia Davis", email: "sophia.davis@example.com", role: "Customer", status: "Active" },
        { id: 9, name: "Chris White", email: "chris.white@example.com", role: "Customer", status: "Active" },
        { id: 10, name: "Olivia Martinez", email: "olivia.martinez@example.com", role: "Moderator", status: "Inactive" },
    ];

    const [searchTerm, setSearchTerm] = useState("");

    const filteredUsers = userData.filter(
        (user) =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.role.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="border rounded-lg my-10 pt-1 shadow-md">
            <div className="flex items-center justify-between p-4">
                <h1 className="text-xl font-semibold">User List</h1>
                <input
                    type="text"
                    placeholder="Search by name or role"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-1/2 p-2 border rounded-lg"
                />
            </div>
            <Table>
                <TableCaption className="pb-2">A list of your users</TableCaption>
                <TableHeader>
                    <TableRow className="text-lg">
                        <TableHead className="font-semibold">Name</TableHead>
                        <TableHead className="font-semibold">Email</TableHead>
                        <TableHead className="font-semibold">Role</TableHead>
                        <TableHead className="font-semibold">Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filteredUsers.map((user) => (
                        <TableRow key={user.id}>
                            <TableCell className="flex items-center space-x-2">
                                <Avatar>
                                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <span>{user.name}</span>
                            </TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell><Badge variant="secondary">{user.role}</Badge></TableCell>
                            <TableCell>
                                <Badge variant={user.status === "Inactive" ? "destructive" : "default"}>
                                    {user.status}
                                </Badge>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default UserTable;