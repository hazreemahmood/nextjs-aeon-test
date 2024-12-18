import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
    const data = [
        {
            "date": "1 Jan 2024",
            "referenceid": "REF283910",
            "company_name": "Global Innovations Systems",
            "transaction_type": "Duitnow Payment",
            "amount_in_rm": 750.35
        },
        {
            "date": "25 Jul 2024",
            "referenceid": "REF129843",
            "company_name": "Prime Enterprises",
            "transaction_type": "Debit",
            "amount_in_rm": 1500.75
        },
        {
            "date": "10 Jun 2024",
            "referenceid": "REF940582",
            "company_name": "Future Technologies Group",
            "transaction_type": "Duitnow Payment",
            "amount_in_rm": 2200.20
        },
        {
            "date": "17 Aug 2024",
            "referenceid": "REF573491",
            "company_name": "Smart Solutions Corporation",
            "transaction_type": "Debit",
            "amount_in_rm": 1850.00
        },
        {
            "date": "30 Apr 2024",
            "referenceid": "REF381274",
            "company_name": "Innovative Systems Group",
            "transaction_type": "Credit",
            "amount_in_rm": 980.60
        },
        {
            "date": "22 May 2024",
            "referenceid": "REF240945",
            "company_name": "Tech Enterprises Corporation",
            "transaction_type": "Debit",
            "amount_in_rm": 1200.80
        },
        {
            "date": "15 Jan 2024",
            "referenceid": "REF556238",
            "company_name": "Global Solutions Group",
            "transaction_type": "Credit",
            "amount_in_rm": 3050.50
        }
    ];
    return NextResponse.json(data);
}