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
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const OrdersTable = () => {
    const orderData = [
        { id: "ORD001", customer: "Emily Davis", total: 320.5, status: "Shipped", date: "2023-08-01" },
        { id: "ORD002", customer: "Michael Carter", total: 450.3, status: "Pending", date: "2023-08-02" },
        { id: "ORD003", customer: "Sophia Walker", total: 210.7, status: "Delivered", date: "2023-08-03" },
        { id: "ORD004", customer: "Liam Harris", total: 680.4, status: "Processing", date: "2023-08-04" },
        { id: "ORD005", customer: "Olivia Clark", total: 120.9, status: "Shipped", date: "2023-08-05" },
        { id: "ORD006", customer: "Noah Robinson", total: 305.8, status: "Delivered", date: "2023-08-06" },
        { id: "ORD007", customer: "Ava Lewis", total: 490.6, status: "Pending", date: "2023-08-07" },
        { id: "ORD008", customer: "Ethan Moore", total: 220.4, status: "Processing", date: "2023-08-08" },
    ];

    const [searchTerm, setSearchTerm] = useState("");

    const filteredOrders = orderData.filter((order) =>
        order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.status.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="border rounded-lg my-10 pt-1 shadow-md">
            <div className="flex items-center justify-between p-4">
                <h1 className="text-xl font-semibold">Order List</h1>
                <input
                    type="text"
                    placeholder="Search by customer or status"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-1/2 p-2 border rounded-lg"
                />
            </div>
            <Table>
                <TableCaption className="pb-2">A list of your orders</TableCaption>
                <TableHeader>
                    <TableRow className="text-lg">
                        <TableHead className="font-semibold">Order ID</TableHead>
                        <TableHead className="font-semibold">Customer</TableHead>
                        <TableHead className="font-semibold">Total</TableHead>
                        <TableHead className="font-semibold">Status</TableHead>
                        <TableHead className="font-semibold">Date</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filteredOrders.map((order) => (
                        <TableRow key={order.id}>
                            <TableCell>{order.id}</TableCell>
                            <TableCell className="flex items-center space-x-2">
                                <Avatar>
                                    <AvatarFallback>{order.customer.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <span>{order.customer}</span>
                            </TableCell>
                            <TableCell>${order.total.toFixed(2)}</TableCell>
                            <TableCell>
                                <Badge variant={
                                    order.status === "Delivered"
                                        ? "secondary"
                                        : order.status === "Pending"
                                            ? "destructive"
                                            : "default"}>
                                    {order.status}
                                </Badge>
                            </TableCell>
                            <TableCell>{order.date}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default OrdersTable;