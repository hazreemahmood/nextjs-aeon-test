'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar.js';


export default function Home() {
    const router = useRouter();
    const [error, setError] = useState('');
    const [history, setHistory] = useState('');

    const TransactionHistory = ((e: any) => {
        return <table className="min-w-full">
            <thead className="bg-white border-b">
                <tr>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Date
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Reference ID
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        To
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Transaction Type
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Amount
                    </th>
                </tr>
            </thead>
            <tbody>
                {e.history && e.history.map(function (data: any) {
                    return (
                        <tr className="bg-gray-100 border-b">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {data.date}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {data.referenceid}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {data.company_name}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {data.transaction_type}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                RM {data.amount_in_rm}
                            </td>
                        </tr>
                    )
                })}

            </tbody>
        </table>;
    })

    useEffect(() => {
        const getTransactionHistory = async () => {
            const response = await fetch('/api/transaction-history', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();
            // Redirect or perform other actions
            if (response.ok) {
                setHistory(data);
                // data.forEach(element => {
                //     console.log(element.date);
                // });
            } else {
                setError(data.error);
            }
        };
        // call the function
        getTransactionHistory()
            // make sure to catch any error
            .catch(console.error);
    }, [])

    return (
        <>
            <Navbar noNav={true} />
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <TransactionHistory history={history} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
